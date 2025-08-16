const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');
const {
  validateOTPVerification,
  validateOTPRequest,
  validateEmailDomain,
  otpRequestLimiter
} = require('../middleware/validation');

// Verify OTP
router.post('/otp',
  validateOTPVerification,
  validateEmailDomain,
  verificationController.verifyOTP
);

// Resend OTP
router.post('/resend',
  validateOTPRequest,
  validateEmailDomain,
  otpRequestLimiter,
  verificationController.resendOTP
);

// Get verification status
router.get('/status', verificationController.getVerificationStatus);

// Cancel verification session
router.delete('/cancel',
  validateOTPRequest,
  verificationController.cancelVerification
);

// Test email connection (for debugging)
router.get('/test-email', verificationController.testEmailConnection);

// Health check for verification service
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Verification service is healthy',
    timestamp: new Date().toISOString(),
    services: {
      otp: 'active',
      email: 'active',
      rateLimiting: 'active'
    }
  });
});

module.exports = router;