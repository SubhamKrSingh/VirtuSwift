const emailService = require('../services/emailService');
const otpService = require('../services/otpService');

class FormController {
  
  async submitContactForm(req, res) {
    try {
      const formData = req.validatedData;
      console.log(`📝 Contact form submission from ${formData.email}`);

      // Generate OTP
      const otp = otpService.generateOTP();
      
      // Store OTP with form data
      const storeResult = await otpService.storeOTP(formData.email, otp, formData);
      
      if (!storeResult.success) {
        return res.status(500).json({
          success: false,
          message: 'Failed to generate verification code. Please try again.',
          code: 'OTP_GENERATION_FAILED'
        });
      }

      // Send OTP email
      const emailResult = await emailService.sendOTPEmail(
        formData.email, 
        otp, 
        formData.name
      );

      if (!emailResult.success) {
        // Clean up stored OTP if email failed
        await otpService.deleteOTP(formData.email);
        
        return res.status(500).json({
          success: false,
          message: 'Failed to send verification email. Please try again.',
          code: 'EMAIL_SEND_FAILED'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Verification code sent to your email address',
        data: {
          email: formData.email,
          expiryTime: storeResult.expiryTime,
          attemptsRemaining: storeResult.attemptsRemaining
        }
      });

    } catch (error) {
      console.error('❌ Contact form submission error:', error);
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
        code: 'INTERNAL_ERROR'
      });
    }
  }

  async submitRFPForm(req, res) {
    try {
      const formData = req.validatedData;
      console.log(`📋 RFP form submission from ${formData.email}`);

      // Generate OTP
      const otp = otpService.generateOTP();
      
      // Store OTP with form data
      const storeResult = await otpService.storeOTP(formData.email, otp, formData);
      
      if (!storeResult.success) {
        return res.status(500).json({
          success: false,
          message: 'Failed to generate verification code. Please try again.',
          code: 'OTP_GENERATION_FAILED'
        });
      }

      // Send OTP email
      const emailResult = await emailService.sendOTPEmail(
        formData.email, 
        otp, 
        formData.name
      );

      if (!emailResult.success) {
        await otpService.deleteOTP(formData.email);
        
        return res.status(500).json({
          success: false,
          message: 'Failed to send verification email. Please try again.',
          code: 'EMAIL_SEND_FAILED'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Verification code sent to your email address',
        data: {
          email: formData.email,
          expiryTime: storeResult.expiryTime,
          attemptsRemaining: storeResult.attemptsRemaining
        }
      });

    } catch (error) {
      console.error('❌ RFP form submission error:', error);
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
        code: 'INTERNAL_ERROR'
      });
    }
  }

  async submitAssessmentForm(req, res) {
    try {
      const formData = req.validatedData;
      console.log(`🔍 Assessment form submission from ${formData.email}`);

      // Generate OTP
      const otp = otpService.generateOTP();
      
      // Store OTP with form data
      const storeResult = await otpService.storeOTP(formData.email, otp, formData);
      
      if (!storeResult.success) {
        return res.status(500).json({
          success: false,
          message: 'Failed to generate verification code. Please try again.',
          code: 'OTP_GENERATION_FAILED'
        });
      }

      // Send OTP email
      const emailResult = await emailService.sendOTPEmail(
        formData.email, 
        otp, 
        formData.name
      );

      if (!emailResult.success) {
        await otpService.deleteOTP(formData.email);
        
        return res.status(500).json({
          success: false,
          message: 'Failed to send verification email. Please try again.',
          code: 'EMAIL_SEND_FAILED'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Verification code sent to your email address',
        data: {
          email: formData.email,
          expiryTime: storeResult.expiryTime,
          attemptsRemaining: storeResult.attemptsRemaining
        }
      });

    } catch (error) {
      console.error('❌ Assessment form submission error:', error);
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
        code: 'INTERNAL_ERROR'
      });
    }
  }

  async getFormStats(req, res) {
    try {
      const otpStats = otpService.getStats();
      
      res.status(200).json({
        success: true,
        data: {
          otp: otpStats,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('❌ Get form stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve statistics'
      });
    }
  }
}

module.exports = new FormController();