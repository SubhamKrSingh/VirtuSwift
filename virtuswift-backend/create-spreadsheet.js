const dotenv = require('dotenv');
const { JWT } = require('google-auth-library');
const { google } = require('googleapis');

// Load environment variables
dotenv.config();

async function createSpreadsheet() {
  console.log('🔧 Creating new Google Spreadsheet for VirtuSwift...\n');

  try {
    // Load credentials from JSON file
    const credentials = require('./google-credentials.json');
    
    const serviceAccountAuth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file',
      ],
    });

    console.log('✅ Authentication successful');

    // Create Google Sheets API client
    const sheets = google.sheets({ version: 'v4', auth: serviceAccountAuth });
    
    // Create a new spreadsheet
    const response = await sheets.spreadsheets.create({
      resource: {
        properties: {
          title: 'VirtuSwift Contact Management System'
        }
      }
    });
    
    const spreadsheetId = response.data.spreadsheetId;

    console.log('📊 Created new spreadsheet:');
    console.log('- Title:', response.data.properties.title);
    console.log('- Spreadsheet ID:', spreadsheetId);
    console.log('- URL:', `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
    console.log('');

    // Update the .env file with the new spreadsheet ID
    const fs = require('fs');
    let envContent = fs.readFileSync('.env', 'utf8');
    
    // Replace the spreadsheet ID
    const newEnvContent = envContent.replace(
      /GOOGLE_SHEETS_SPREADSHEET_ID=.*/,
      `GOOGLE_SHEETS_SPREADSHEET_ID=${spreadsheetId}`
    );
    
    fs.writeFileSync('.env', newEnvContent);
    console.log('✅ Updated .env file with new spreadsheet ID');
    console.log('');

    // Set up the initial sheets
    console.log('🔧 Setting up initial sheets...');
    
    // Define the sheets we want to create
    const sheetsToCreate = [
      {
        title: 'Contact Forms',
        headers: ['Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Message', 'Industry', 'Verified Date', 'Status', 'Follow-up Date', 'Notes', 'Source']
      },
      {
        title: 'RFP Submissions', 
        headers: ['Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Project Type', 'Budget', 'Timeline', 'Requirements', 'Industry', 'Verified Date', 'Status', 'Priority', 'Assigned To', 'Follow-up Date', 'Notes']
      },
      {
        title: 'Assessment Requests',
        headers: ['Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Assessment Type', 'Current Challenges', 'Goals', 'Industry', 'Verified Date', 'Status', 'Scheduled Date', 'Assigned To', 'Notes']
      },
      {
        title: 'Analytics Dashboard',
        headers: ['Date', 'Total Submissions', 'Contact Forms', 'RFP Submissions', 'Assessment Requests', 'Verification Rate', 'Top Industries', 'Notes']
      }
    ];

    // Create sheets using batch update
    const requests = [];
    
    // First, rename the default sheet to our first sheet
    requests.push({
      updateSheetProperties: {
        properties: {
          sheetId: 0,
          title: sheetsToCreate[0].title
        },
        fields: 'title'
      }
    });
    
    // Add headers to the first sheet
    requests.push({
      updateCells: {
        range: {
          sheetId: 0,
          startRowIndex: 0,
          endRowIndex: 1,
          startColumnIndex: 0,
          endColumnIndex: sheetsToCreate[0].headers.length
        },
        rows: [{
          values: sheetsToCreate[0].headers.map(header => ({
            userEnteredValue: { stringValue: header },
            userEnteredFormat: { textFormat: { bold: true } }
          }))
        }],
        fields: 'userEnteredValue,userEnteredFormat.textFormat.bold'
      }
    });
    
    // Create additional sheets
    for (let i = 1; i < sheetsToCreate.length; i++) {
      const sheet = sheetsToCreate[i];
      requests.push({
        addSheet: {
          properties: {
            title: sheet.title
          }
        }
      });
    }
    
    // Execute batch update
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: {
        requests: requests
      }
    });
    
    // Add headers to the additional sheets
    for (let i = 1; i < sheetsToCreate.length; i++) {
      const sheet = sheetsToCreate[i];
      await sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: `${sheet.title}!A1:${String.fromCharCode(65 + sheet.headers.length - 1)}1`,
        valueInputOption: 'RAW',
        resource: {
          values: [sheet.headers]
        }
      });
    }
    
    console.log('✅ Created sheets:');
    sheetsToCreate.forEach(sheet => {
      console.log(`  - ${sheet.title}`);
    });
    console.log('');

    console.log('🎉 Spreadsheet setup complete!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('1. Open the spreadsheet URL above to verify it was created');
    console.log('2. Run "npm start" to test your backend with the new spreadsheet');
    console.log('3. The spreadsheet is automatically shared with your service account');
    
  } catch (error) {
    console.error('❌ Failed to create spreadsheet:', error.message);
    
    if (error.message.includes('403')) {
      console.log('\n💡 This might be a permissions issue. Make sure:');
      console.log('1. Google Sheets API is enabled in your Google Cloud project');
      console.log('2. Google Drive API is enabled in your Google Cloud project');
      console.log('3. Your service account has the necessary permissions');
    }
    
    process.exit(1);
  }
}

// Run the script
createSpreadsheet();