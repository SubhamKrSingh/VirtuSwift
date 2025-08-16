const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

class GoogleSheetsService {
  constructor() {
    this.doc = null;
    this.sheets = {};
    this.isInitialized = false;
    this.initializeService();
  }

  async initializeService() {
    try {
      // Try to load credentials from JSON file first, then fall back to env vars
      let serviceAccountAuth;
      
      try {
        // Load credentials from JSON file
        const credentials = require('../../google-credentials.json');
        serviceAccountAuth = new JWT({
          email: credentials.client_email,
          key: credentials.private_key,
          scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive.file',
          ],
        });
        console.log('📄 Using credentials from google-credentials.json');
      } catch (jsonError) {
        console.log('⚠️ Could not load JSON credentials, trying environment variables...');
        
        // Fallback to environment variables
        let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
        if (!privateKey) {
          throw new Error('GOOGLE_SHEETS_PRIVATE_KEY environment variable is not set');
        }

        // Clean and format the private key
        privateKey = privateKey.replace(/^["']|["']$/g, ''); // Remove surrounding quotes
        privateKey = privateKey.replace(/\\n/g, '\n'); // Convert literal \n to actual newlines
        
        // Ensure proper formatting
        if (!privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
          throw new Error('Invalid private key format - missing BEGIN marker');
        }
        if (!privateKey.includes('-----END PRIVATE KEY-----')) {
          throw new Error('Invalid private key format - missing END marker');
        }

        serviceAccountAuth = new JWT({
          email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          key: privateKey,
          scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive.file',
          ],
        });
        console.log('🔧 Using credentials from environment variables');
      }

      // Initialize the sheet document
      this.doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID, serviceAccountAuth);
      
      await this.doc.loadInfo();
      console.log(`📊 Connected to Google Sheet: ${this.doc.title}`);
      
      // Initialize or create required sheets
      await this.setupSheets();
      
      this.isInitialized = true;
      console.log('✅ Google Sheets service initialized successfully');
      
    } catch (error) {
      console.error('❌ Failed to initialize Google Sheets service:', error.message);
      this.isInitialized = false;
    }
  }

  async setupSheets() {
    const sheetConfig = {
      title: 'All Submissions',
      headers: [
        'Timestamp', 'Sheet Type', 'Name', 'Email', 'Company', 'Phone', 
        'Message', 'Industry', 'Project Type', 'Budget', 'Timeline', 
        'Requirements', 'Assessment Type', 'Current Challenges', 'Goals',
        'Verified Date', 'Status', 'Priority', 'Assigned To', 'Follow-up Date', 
        'Notes', 'Source'
      ]
    };

    try {
      // Check if sheet exists
      let sheet = this.doc.sheetsByTitle[sheetConfig.title];
      
      if (!sheet) {
        // Create new sheet
        sheet = await this.doc.addSheet({
          title: sheetConfig.title,
          headerValues: sheetConfig.headers
        });
        console.log(`📋 Created sheet: ${sheetConfig.title}`);
      } else {
        // Update headers if needed
        await sheet.loadHeaderRow();
        if (sheet.headerValues.length === 0) {
          await sheet.setHeaderRow(sheetConfig.headers);
        }
      }
      
      this.sheets[sheetConfig.title] = sheet;
      this.mainSheet = sheet; // Store reference to main sheet
      
      // Apply formatting for better readability
      await this.formatSheet(sheet, sheetConfig.title);
      
    } catch (error) {
      console.error(`❌ Error setting up sheet ${sheetConfig.title}:`, error.message);
    }
  }

  async formatSheet(sheet, sheetTitle) {
    try {
      // Apply basic formatting
      await sheet.loadCells('A1:Z1'); // Load header row
      
      // Format header row
      for (let i = 0; i < sheet.columnCount; i++) {
        const cell = sheet.getCell(0, i);
        if (cell.value) {
          cell.textFormat = { bold: true };
          cell.backgroundColor = { red: 0.2, green: 0.2, blue: 0.8, alpha: 0.1 };
        }
      }
      
      await sheet.saveUpdatedCells();
      
      // Set column widths based on content
      const columnWidths = this.getColumnWidths(sheetTitle);
      if (columnWidths.length > 0) {
        try {
          // Update column widths using the correct API
          await sheet.resize({ columnCount: columnWidths.length });
          // Note: Individual column width setting requires more complex API calls
          // For now, we'll skip this to avoid API errors
        } catch (widthError) {
          console.log(`⚠️ Could not set column widths for ${sheetTitle}:`, widthError.message);
        }
      }
      
    } catch (error) {
      console.log(`⚠️ Could not format sheet ${sheetTitle}:`, error.message);
    }
  }

  getColumnWidths(sheetTitle) {
    if (sheetTitle === 'All Submissions') {
      return [150, 120, 120, 200, 150, 120, 300, 100, 150, 100, 100, 400, 150, 300, 300, 150, 100, 80, 120, 120, 200, 80];
    }
    return [];
  }

  async storeContactForm(formData) {
    return this.addSubmission('Contact Forms', formData);
  }

  async storeRFPForm(formData) {
    return this.addSubmission('RFP Submissions', formData);
  }

  async storeAssessmentForm(formData) {
    return this.addSubmission('Assessment Requests', formData);
  }

  calculatePriority(formData) {
    // Simple priority calculation based on budget and company size
    const budget = formData.budget?.toLowerCase() || '';
    const company = formData.company?.toLowerCase() || '';
    
    if (budget.includes('100k') || budget.includes('million') || 
        company.includes('enterprise') || company.includes('corporation')) {
      return 'High';
    } else if (budget.includes('50k') || budget.includes('medium') ||
               company.includes('inc') || company.includes('llc')) {
      return 'Medium';
    }
    return 'Low';
  }

  async updateAnalytics(formType) {
    // Analytics are now tracked within the main sheet by counting rows
    // This method is kept for compatibility but doesn't need to do anything
    console.log(`📊 Analytics updated for ${formType}`);
  }

  async getSubmissionStats() {
    try {
      if (!this.isInitialized) {
        return { success: false, error: 'Service not initialized' };
      }

      const sheet = this.mainSheet || this.sheets['All Submissions'];
      if (!sheet) {
        return { success: false, error: 'Main sheet not found' };
      }

      const rows = await sheet.getRows();
      const today = new Date().toDateString();
      
      const stats = {
        'All Submissions': {
          total: rows.length,
          today: rows.filter(row => {
            const timestamp = row.get('Timestamp');
            return timestamp && timestamp.includes(today);
          }).length
        }
      };

      // Count by sheet type
      const sheetTypes = ['Contact Forms', 'RFP Submissions', 'Assessment Requests'];
      sheetTypes.forEach(type => {
        const typeRows = rows.filter(row => row.get('Sheet Type') === type);
        stats[type] = {
          total: typeRows.length,
          today: typeRows.filter(row => {
            const timestamp = row.get('Timestamp');
            return timestamp && timestamp.includes(today);
          }).length
        };
      });
      
      return { success: true, data: stats };
      
    } catch (error) {
      console.error('❌ Error getting submission stats:', error.message);
      return { success: false, error: error.message };
    }
  }

  async searchSubmissions(query, sheetType = null) {
    try {
      const sheet = this.mainSheet || this.sheets['All Submissions'];
      if (!sheet) {
        return { success: false, error: 'Main sheet not found' };
      }

      const rows = await sheet.getRows();
      let filteredRows = rows;

      // Filter by sheet type if specified
      if (sheetType) {
        filteredRows = rows.filter(row => row.get('Sheet Type') === sheetType);
      }

      // Search within filtered rows
      const matchingRows = filteredRows.filter(row => {
        const rowData = JSON.stringify(row._rawData).toLowerCase();
        return rowData.includes(query.toLowerCase());
      });
      
      const results = [{
        sheet: 'All Submissions',
        sheetType: sheetType || 'All Types',
        matches: matchingRows.length,
        data: matchingRows.slice(0, 10).map(row => ({
          timestamp: row.get('Timestamp'),
          sheetType: row.get('Sheet Type'),
          name: row.get('Name'),
          email: row.get('Email'),
          company: row.get('Company')
        }))
      }];
      
      return { success: true, data: results };
      
    } catch (error) {
      console.error('❌ Error searching submissions:', error.message);
      return { success: false, error: error.message };
    }
  }

  async addSubmission(sheetType, data) {
    try {
      if (!this.isInitialized) {
        throw new Error('Google Sheets service not initialized');
      }

      const sheet = this.mainSheet || this.sheets['All Submissions'];
      if (!sheet) {
        throw new Error('Main sheet not found');
      }

      // Create a unified row object that includes all possible fields
      const row = {
        'Timestamp': data.timestamp || new Date().toLocaleString(),
        'Sheet Type': sheetType,
        'Name': data.name || data.contactName || '',
        'Email': data.email || '',
        'Company': data.company || '',
        'Phone': data.phone || '',
        'Message': data.message || '',
        'Industry': data.industry || '',
        'Project Type': data.projectType || '',
        'Budget': data.budget || '',
        'Timeline': data.timeline || '',
        'Requirements': data.requirements || '',
        'Assessment Type': data.assessmentType || '',
        'Current Challenges': data.currentChallenges || '',
        'Goals': data.goals || '',
        'Verified Date': new Date().toLocaleString(),
        'Status': 'New',
        'Priority': this.calculatePriority(data),
        'Assigned To': '',
        'Follow-up Date': '',
        'Notes': '',
        'Source': data.source || 'API Test'
      };

      await sheet.addRow(row);
      console.log(`✅ Data added to main sheet with type: ${sheetType}`);
      
      // Update analytics
      await this.updateAnalytics(sheetType);
      
      return { 
        success: true, 
        message: `Data successfully added to main sheet as ${sheetType}`,
        data: { rowData: row, sheetType }
      };
      
    } catch (error) {
      console.error(`❌ Error adding submission to main sheet:`, error.message);
      return { success: false, error: error.message };
    }
  }

  async getConnectionStatus() {
    return {
      initialized: this.isInitialized,
      spreadsheetTitle: this.doc?.title || 'Not connected',
      sheetsCount: Object.keys(this.sheets).length,
      availableSheets: Object.keys(this.sheets)
    };
  }
}

module.exports = new GoogleSheetsService();