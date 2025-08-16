const dotenv = require('dotenv');
const { JWT } = require('google-auth-library');
const { GoogleSpreadsheet } = require('google-spreadsheet');

// Load environment variables
dotenv.config();

async function testConnection() {
  console.log('🔍 Testing Google Sheets connection...\n');

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

    console.log('✅ JWT authentication successful');

    // Test with a specific spreadsheet ID
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    
    if (!spreadsheetId || spreadsheetId === 'YOUR_NEW_SPREADSHEET_ID_HERE') {
      console.log('❌ Please update GOOGLE_SHEETS_SPREADSHEET_ID in your .env file');
      console.log('');
      console.log('📋 Steps to fix:');
      console.log('1. Create a new Google Spreadsheet at https://sheets.google.com');
      console.log('2. Share it with: virtuswift-sheets-service@virtuswift-backend.iam.gserviceaccount.com');
      console.log('3. Copy the spreadsheet ID from the URL');
      console.log('4. Update GOOGLE_SHEETS_SPREADSHEET_ID in your .env file');
      return;
    }

    console.log('📊 Testing connection to spreadsheet:', spreadsheetId);
    
    const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
    await doc.loadInfo();
    
    console.log('✅ Successfully connected to Google Sheets!');
    console.log('📋 Spreadsheet details:');
    console.log('- Title:', doc.title);
    console.log('- Sheet count:', doc.sheetCount);
    console.log('- URL:', `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
    console.log('');
    
    console.log('📑 Available sheets:');
    doc.sheetsByIndex.forEach((sheet, index) => {
      console.log(`  ${index + 1}. ${sheet.title} (${sheet.rowCount} rows, ${sheet.columnCount} columns)`);
    });
    
    console.log('');
    console.log('🎉 Google Sheets integration is working correctly!');
    console.log('You can now start your backend server with: npm start');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    
    if (error.message.includes('404')) {
      console.log('\n💡 Spreadsheet not found. Please check:');
      console.log('1. The spreadsheet ID is correct');
      console.log('2. The spreadsheet exists');
      console.log('3. The service account has access to the spreadsheet');
    }
    
    if (error.message.includes('403')) {
      console.log('\n💡 Permission denied. Please check:');
      console.log('1. Share the spreadsheet with: virtuswift-sheets-service@virtuswift-backend.iam.gserviceaccount.com');
      console.log('2. Give the service account "Editor" permissions');
      console.log('3. Make sure Google Sheets API is enabled in your Google Cloud project');
    }
    
    process.exit(1);
  }
}

// Run the test
testConnection();