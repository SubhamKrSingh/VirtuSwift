const emailService = require('../services/emailService');
const otpService = require('../services/otpService');
const googleSheetsService = require('../services/googleSheetsService');

class VerificationController {

  async verifyOTP(req, res) {
    try {
      const { email, otp } = req.validatedData;
      console.log(`🔐 OTP verification attempt for ${email}`);

      // Verify the OTP
      const verificationResult = await otpService.verifyOTP(email, otp);

      if (!verificationResult.success) {
        return res.status(400).json({
          success: false,
          message: verificationResult.message,
          code: verificationResult.code,
          attemptsRemaining: verificationResult.attemptsRemaining
        });
      }

      // OTP verified successfully - process the form data
      const formData = verificationResult.formData;
      
      // Store data in Google Sheets
      let storageResult = { success: false };
      
      switch (formData.formType) {
        case 'Contact Form':
          storageResult = await googleSheetsService.storeContactForm(formData);
          break;
        case 'RFP Submission':
          storageResult = await googleSheetsService.storeRFPForm(formData);
          break;
        case 'Assessment Request':
          storageResult = await googleSheetsService.storeAssessmentForm(formData);
          break;
        default:
          storageResult = await googleSheetsService.storeContactForm(formData);
      }
      
      if (!storageResult.success) {
        console.error('⚠️ Failed to store data in Google Sheets:', storageResult.error);
        // Continue with email sending even if storage fails
      }

      // Send confirmation email
      const confirmationResult = await emailService.sendConfirmationEmail(
        email, 
        formData, 
        formData.name
      );

      // Send notification email to admin (optional)
      const notificationResult = await emailService.sendNotificationEmail(formData);

      res.status(200).json({
        success: true,
        message: 'Email verified successfully! Your form has been submitted.',
        data: {
          formType: formData.formType,
          submissionTime: new Date().toISOString(),
          confirmationEmailSent: confirmationResult.success,
          notificationSent: notificationResult.success,
          dataStored: storageResult.success,
          storageMessage: storageResult.success ? 'Data saved to Google Sheets' : 'Data storage failed but form processed'
        }
      });

    } catch (error) {
      console.error('❌ OTP verification error:', error);
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred during verification.',
        code: 'VERIFICATION_ERROR'
      });
    }
  }

  async resendOTP(req, res) {
    try {
      const { email } = req.validatedData;
      console.log(`🔄 OTP resend request for ${email}`);

      // Check current OTP status
      const otpStatus = await otpService.getOTPStatus(email);

      if (!otpStatus.exists) {
        return res.status(404).json({
          success: false,
          message: 'No active verification session found. Please submit the form again.',
          code: 'NO_ACTIVE_SESSION'
        });
      }

      if (otpStatus.verified) {
        return res.status(400).json({
          success: false,
          message: 'Email already verified. No need to resend OTP.',
          code: 'ALREADY_VERIFIED'
        });
      }

      // Generate new OTP
      const newOTP = otpService.generateOTP();
      
      // Get the existing form data
      const existingData = otpService.otpStore.get(email.toLowerCase());
      
      if (!existingData) {
        return res.status(404).json({
          success: false,
          message: 'Session expired. Please submit the form again.',
          code: 'SESSION_EXPIRED'
        });
      }

      // Store new OTP with existing form data
      const storeResult = await otpService.storeOTP(email, newOTP, existingData.formData);

      if (!storeResult.success) {
        return res.status(500).json({
          success: false,
          message: 'Failed to generate new verification code.',
          code: 'OTP_GENERATION_FAILED'
        });
      }

      // Send new OTP email
      const emailResult = await emailService.sendOTPEmail(
        email, 
        newOTP, 
        existingData.formData.name
      );

      if (!emailResult.success) {
        return res.status(500).json({
          success: false,
          message: 'Failed to send verification email. Please try again.',
          code: 'EMAIL_SEND_FAILED'
        });
      }

      res.status(200).json({
        success: true,
        message: 'New verification code sent to your email address',
        data: {
          email: email,
          expiryTime: storeResult.expiryTime,
          attemptsRemaining: storeResult.attemptsRemaining
        }
      });

    } catch (error) {
      console.error('❌ OTP resend error:', error);
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred while resending OTP.',
        code: 'RESEND_ERROR'
      });
    }
  }

  async getVerificationStatus(req, res) {
    try {
      const { email } = req.query;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Email parameter is required'
        });
      }

      const otpStatus = await otpService.getOTPStatus(email);

      // In development mode, also return the OTP code for easier testing
      let responseData = otpStatus;
      if (process.env.NODE_ENV === 'development' && otpStatus.exists) {
        const otpData = otpService.otpStore.get(email.toLowerCase());
        if (otpData) {
          responseData = {
            ...otpStatus,
            developmentOTP: otpData.code // Only in development
          };
        }
      }

      res.status(200).json({
        success: true,
        data: responseData
      });

    } catch (error) {
      console.error('❌ Get verification status error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve verification status'
      });
    }
  }

  async cancelVerification(req, res) {
    try {
      const { email } = req.validatedData;
      console.log(`❌ Verification cancellation for ${email}`);

      const deleted = await otpService.deleteOTP(email);

      if (deleted) {
        res.status(200).json({
          success: true,
          message: 'Verification session cancelled successfully'
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'No active verification session found'
        });
      }

    } catch (error) {
      console.error('❌ Cancel verification error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to cancel verification session'
      });
    }
  }

  async testEmailConnection(req, res) {
    try {
      const connectionStatus = await emailService.verifyConnection();
      
      res.status(200).json({
        success: true,
        message: 'Email service connection test completed',
        data: {
          connected: connectionStatus,
          service: 'Gmail SMTP',
          timestamp: new Date().toISOString()
        }
      });

    } catch (error) {
      console.error('❌ Email connection test error:', error);
      res.status(500).json({
        success: false,
        message: 'Email connection test failed',
        error: error.message
      });
    }
  }
}

module.exports = new VerificationController();