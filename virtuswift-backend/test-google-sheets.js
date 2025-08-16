const dotenv = require('dotenv');
const { JWT } = require('google-auth-library');
const { GoogleSpreadsheet } = require('google-spreadsheet');

// Load environment variables
dotenv.config();

async function testGoogleSheetsConnection() {
  console.log('🔍 Testing Google Sheets connection...\n');

  try {
    // Check environment variables
    console.log('📋 Checking environment variables:');
    console.log('- GOOGLE_SHEETS_CLIENT_EMAIL:', process.env.GOOGLE_SHEETS_CLIENT_EMAIL ? '✅ Set' : '❌ Missing');
    console.log('- GOOGLE_SHEETS_PRIVATE_KEY:', process.env.GOOGLE_SHEETS_PRIVATE_KEY ? '✅ Set' : '❌ Missing');
    console.log('- GOOGLE_SHEETS_SPREADSHEET_ID:', process.env.GOOGLE_SHEETS_SPREADSHEET_ID ? '✅ Set' : '❌ Missing');
    console.log('');

    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
      throw new Error('Missing required environment variables');
    }

    // Try to load credentials from JSON file first
    let serviceAccountAuth;
    let credentialsSource;
    
    try {
      // Load credentials from JSON file
      const credentials = require('./google-credentials.json');
      
      console.log('🔑 Private key format check (from JSON):');
      console.log('- Starts with BEGIN marker:', credentials.private_key.includes('-----BEGIN PRIVATE KEY-----') ? '✅' : '❌');
      console.log('- Ends with END marker:', credentials.private_key.includes('-----END PRIVATE KEY-----') ? '✅' : '❌');
      console.log('- Key length:', credentials.private_key.length, 'characters');
      console.log('');

      serviceAccountAuth = new JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive.file',
        ],
      });
      credentialsSource = 'JSON file';
      
    } catch (jsonError) {
      console.log('⚠️ Could not load JSON credentials, trying environment variables...');
      
      // Clean and format the private key from env vars
      let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
      privateKey = privateKey.replace(/^["']|["']$/g, ''); // Remove surrounding quotes
      privateKey = privateKey.replace(/\\n/g, '\n'); // Convert literal \n to actual newlines
      
      console.log('🔑 Private key format check (from env):');
      console.log('- Starts with BEGIN marker:', privateKey.includes('-----BEGIN PRIVATE KEY-----') ? '✅' : '❌');
      console.log('- Ends with END marker:', privateKey.includes('-----END PRIVATE KEY-----') ? '✅' : '❌');
      console.log('- Key length:', privateKey.length, 'characters');
      console.log('');

      serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        key: privateKey,
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive.file',
        ],
      });
      credentialsSource = 'environment variables';
    }

    // Test JWT authentication
    console.log(`🔐 Testing JWT authentication using ${credentialsSource}...`);

    // Test authentication
    await serviceAccountAuth.authorize();
    console.log('✅ JWT authentication successful');
    console.log('');

    // Test Google Sheets connection
    console.log('📊 Testing Google Sheets connection...');
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID, serviceAccountAuth);
    
    await doc.loadInfo();
    console.log('✅ Successfully connected to Google Sheets');
    console.log('📋 Spreadsheet title:', doc.title);
    console.log('📄 Number of sheets:', doc.sheetCount);
    console.log('');

    // List existing sheets
    console.log('📑 Existing sheets:');
    doc.sheetsByIndex.forEach((sheet, index) => {
      console.log(`  ${index + 1}. ${sheet.title} (${sheet.rowCount} rows, ${sheet.columnCount} columns)`);
    });
    console.log('');

    console.log('🎉 All tests passed! Google Sheets integration is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.message.includes('DECODER routines')) {
      console.log('\n💡 Troubleshooting tips for DECODER error:');
      console.log('1. Check if the private key has proper line breaks');
      console.log('2. Ensure the private key is not corrupted');
      console.log('3. Verify the private key format matches the expected RSA format');
      console.log('4. Try regenerating the service account key from Google Cloud Console');
    }
    
    if (error.message.includes('403') || error.message.includes('permission')) {
      console.log('\n💡 Troubleshooting tips for permission error:');
      console.log('1. Ensure the service account has access to the spreadsheet');
      console.log('2. Share the spreadsheet with the service account email');
      console.log('3. Check if the Google Sheets API is enabled in your project');
    }
    
    process.exit(1);
  }
}

// Run the test
testGoogleSheetsConnection();