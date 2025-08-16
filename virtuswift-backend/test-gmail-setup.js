require('dotenv').config();
const nodemailer = require('nodemailer');

async function testGmailSetup() {
  console.log('🧪 Testing Gmail SMTP Setup...\n');
  
  // Clean up the app password (remove spaces)
  const cleanPassword = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
  
  console.log('📧 Configuration:');
  console.log(`   Email: ${process.env.EMAIL_USER}`);
  console.log(`   Host: ${process.env.EMAIL_HOST}`);
  console.log(`   Port: ${process.env.EMAIL_PORT}`);
  console.log(`   Secure: ${process.env.EMAIL_SECURE}`);
  console.log(`   Password Length: ${cleanPassword.length} characters`);
  console.log('');

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: cleanPassword
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true
  });

  try {
    console.log('🔍 Step 1: Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!\n');

    console.log('📧 Step 2: Sending test email...');
    const testEmail = {
      from: {
        name: 'VirtuSwift Test',
        address: process.env.EMAIL_USER
      },
      to: process.env.EMAIL_USER, // Send to self for testing
      subject: 'Gmail SMTP Test - VirtuSwift',
      html: `
        <h2>Gmail SMTP Test Successful!</h2>
        <p>This email confirms that your Gmail SMTP configuration is working correctly.</p>
        <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Configuration:</strong></p>
        <ul>
          <li>Host: ${process.env.EMAIL_HOST}</li>
          <li>Port: ${process.env.EMAIL_PORT}</li>
          <li>Email: ${process.env.EMAIL_USER}</li>
        </ul>
        <p>You can now send OTP emails to users!</p>
      `,
      text: `Gmail SMTP Test Successful! Configuration is working correctly. Test time: ${new Date().toLocaleString()}`
    };

    const result = await transporter.sendMail(testEmail);
    console.log('✅ Test email sent successfully!');
    console.log(`   Message ID: ${result.messageId}`);
    console.log(`   Response: ${result.response}`);
    console.log('\n🎉 Gmail SMTP is configured correctly and ready to send OTP emails!');
    
  } catch (error) {
    console.error('❌ Gmail SMTP test failed:');
    console.error(`   Error: ${error.message}`);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Authentication Error - Possible Solutions:');
      console.log('   1. Make sure 2-Factor Authentication is enabled on your Gmail account');
      console.log('   2. Generate a new App Password in Gmail Security settings');
      console.log('   3. Use the App Password (not your regular Gmail password)');
      console.log('   4. Remove spaces from the App Password in .env file');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n🔧 Connection Error - Possible Solutions:');
      console.log('   1. Check your internet connection');
      console.log('   2. Verify Gmail SMTP settings (smtp.gmail.com:587)');
      console.log('   3. Check if your firewall is blocking the connection');
    } else {
      console.log('\n🔧 General Error - Check:');
      console.log('   1. Email address format');
      console.log('   2. App Password correctness');
      console.log('   3. Gmail account settings');
    }
    
    console.log('\n📖 Setup Instructions:');
    console.log('   1. Go to https://myaccount.google.com/security');
    console.log('   2. Enable 2-Factor Authentication');
    console.log('   3. Go to App Passwords section');
    console.log('   4. Generate a new App Password for "Mail"');
    console.log('   5. Copy the 16-character password to EMAIL_PASS in .env');
    console.log('   6. Remove all spaces from the password');
  }
}

testGmailSetup().catch(console.error);