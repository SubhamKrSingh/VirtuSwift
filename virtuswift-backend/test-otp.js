const axios = require('axios');

const BASE_URL = 'http://localhost:5000';
const TEST_EMAIL = 'your-test-email@gmail.com'; // Change this to your email

async function testOTPSystem() {
  console.log('🧪 Starting OTP System Test...\n');

  try {
    // Step 1: Test email connection
    console.log('1️⃣ Testing email connection...');
    const connectionTest = await axios.get(`${BASE_URL}/api/verify/test-email`);
    console.log('✅ Email connection:', connectionTest.data.data.connected ? 'SUCCESS' : 'FAILED');
    console.log('');

    // Step 2: Submit contact form
    console.log('2️⃣ Submitting contact form...');
    const formData = {
      name: 'Test User',
      email: TEST_EMAIL,
      company: 'Test Company',
      phone: '+1234567890',
      message: 'This is a test message for OTP verification',
      industry: 'Technology'
    };

    const formResponse = await axios.post(`${BASE_URL}/api/forms/contact`, formData);
    console.log('✅ Form submitted successfully!');
    console.log('📧 OTP sent to:', TEST_EMAIL);
    console.log('⏰ Expires at:', new Date(formResponse.data.data.expiryTime).toLocaleString());
    console.log('');

    // Step 3: Check OTP status
    console.log('3️⃣ Checking OTP status...');
    const statusResponse = await axios.get(`${BASE_URL}/api/verify/status?email=${TEST_EMAIL}`);
    console.log('📊 OTP Status:', statusResponse.data.data);
    console.log('');

    // Step 4: Wait for user to enter OTP
    console.log('4️⃣ Please check your email and enter the OTP below:');
    console.log('📧 Check your email:', TEST_EMAIL);
    console.log('');
    console.log('To verify OTP manually, use:');
    console.log(`curl -X POST ${BASE_URL}/api/verify/otp \\`);
    console.log(`  -H "Content-Type: application/json" \\`);
    console.log(`  -d '{"email": "${TEST_EMAIL}", "otp": "YOUR_OTP_HERE"}'`);
    console.log('');

    // Step 5: Test resend functionality
    console.log('5️⃣ Testing OTP resend...');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    
    const resendResponse = await axios.post(`${BASE_URL}/api/verify/resend`, {
      email: TEST_EMAIL
    });
    console.log('✅ OTP resent successfully!');
    console.log('📧 New OTP sent to:', TEST_EMAIL);
    console.log('');

    console.log('🎉 All tests completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Check your email for the OTP');
    console.log('2. Use the curl command above to verify the OTP');
    console.log('3. Check server logs for detailed information');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    
    if (error.response?.status === 429) {
      console.log('⚠️  Rate limit exceeded. Wait a moment and try again.');
    } else if (error.response?.status === 500) {
      console.log('⚠️  Server error. Check your Gmail configuration in .env file.');
    }
  }
}

// Helper function to verify OTP (call this separately)
async function verifyOTP(email, otp) {
  try {
    console.log(`🔐 Verifying OTP ${otp} for ${email}...`);
    
    const response = await axios.post(`${BASE_URL}/api/verify/otp`, {
      email: email,
      otp: otp
    });
    
    console.log('✅ OTP verified successfully!');
    console.log('📧 Confirmation email sent');
    console.log('📊 Response:', response.data);
    
  } catch (error) {
    console.error('❌ OTP verification failed:', error.response?.data || error.message);
  }
}

// Run the test
if (require.main === module) {
  testOTPSystem();
}

module.exports = { testOTPSystem, verifyOTP };