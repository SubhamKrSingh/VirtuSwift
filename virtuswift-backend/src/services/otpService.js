const crypto = require('crypto');

class OTPService {
  constructor() {
    // In-memory storage for OTPs (use Redis in production)
    this.otpStore = new Map();
    this.otpLength = parseInt(process.env.OTP_LENGTH) || 6;
    this.expiryMinutes = parseInt(process.env.OTP_EXPIRY_MINUTES) || 15;
    this.maxAttempts = parseInt(process.env.OTP_MAX_ATTEMPTS) || 3;
    
    // Clean up expired OTPs every 5 minutes
    setInterval(() => this.cleanupExpiredOTPs(), 5 * 60 * 1000);
  }

  generateOTP() {
    // Generate cryptographically secure random OTP
    const min = Math.pow(10, this.otpLength - 1);
    const max = Math.pow(10, this.otpLength) - 1;
    
    let otp;
    do {
      const randomBytes = crypto.randomBytes(4);
      const randomNumber = randomBytes.readUInt32BE(0);
      otp = min + (randomNumber % (max - min + 1));
    } while (otp.toString().length !== this.otpLength);
    
    return otp.toString();
  }

  async storeOTP(email, otp, formData = null) {
    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + this.expiryMinutes);

    const otpData = {
      code: otp,
      email: email.toLowerCase(),
      attempts: 0,
      maxAttempts: this.maxAttempts,
      expiryTime: expiryTime,
      createdAt: new Date(),
      formData: formData,
      verified: false
    };

    this.otpStore.set(email.toLowerCase(), otpData);
    
    console.log(`🔐 OTP stored for ${email} (expires at ${expiryTime.toLocaleString()})`);
    
    return {
      success: true,
      expiryTime: expiryTime,
      attemptsRemaining: this.maxAttempts
    };
  }

  async verifyOTP(email, inputOTP) {
    const emailKey = email.toLowerCase();
    const otpData = this.otpStore.get(emailKey);

    if (!otpData) {
      return {
        success: false,
        message: 'No OTP found for this email. Please request a new one.',
        code: 'OTP_NOT_FOUND'
      };
    }

    // Check if OTP has expired
    if (new Date() > otpData.expiryTime) {
      this.otpStore.delete(emailKey);
      return {
        success: false,
        message: 'OTP has expired. Please request a new one.',
        code: 'OTP_EXPIRED'
      };
    }

    // Check if maximum attempts exceeded
    if (otpData.attempts >= otpData.maxAttempts) {
      this.otpStore.delete(emailKey);
      return {
        success: false,
        message: 'Maximum verification attempts exceeded. Please request a new OTP.',
        code: 'MAX_ATTEMPTS_EXCEEDED'
      };
    }

    // Increment attempt counter
    otpData.attempts++;

    // Verify OTP
    if (otpData.code === inputOTP.toString()) {
      otpData.verified = true;
      const formData = otpData.formData;
      
      // Keep the verified OTP for a short time for confirmation
      setTimeout(() => {
        this.otpStore.delete(emailKey);
      }, 5 * 60 * 1000); // Delete after 5 minutes

      console.log(`✅ OTP verified successfully for ${email}`);
      
      return {
        success: true,
        message: 'OTP verified successfully',
        formData: formData,
        code: 'OTP_VERIFIED'
      };
    } else {
      const attemptsRemaining = otpData.maxAttempts - otpData.attempts;
      
      console.log(`❌ Invalid OTP for ${email}. Attempts remaining: ${attemptsRemaining}`);
      
      return {
        success: false,
        message: `Invalid OTP. ${attemptsRemaining} attempts remaining.`,
        attemptsRemaining: attemptsRemaining,
        code: 'INVALID_OTP'
      };
    }
  }

  async getOTPStatus(email) {
    const emailKey = email.toLowerCase();
    const otpData = this.otpStore.get(emailKey);

    if (!otpData) {
      return {
        exists: false,
        message: 'No active OTP found'
      };
    }

    const now = new Date();
    const timeRemaining = Math.max(0, Math.floor((otpData.expiryTime - now) / 1000));
    const attemptsRemaining = otpData.maxAttempts - otpData.attempts;

    return {
      exists: true,
      expired: now > otpData.expiryTime,
      verified: otpData.verified,
      attemptsRemaining: attemptsRemaining,
      timeRemaining: timeRemaining,
      expiryTime: otpData.expiryTime,
      createdAt: otpData.createdAt
    };
  }

  async deleteOTP(email) {
    const emailKey = email.toLowerCase();
    const deleted = this.otpStore.delete(emailKey);
    
    if (deleted) {
      console.log(`🗑️ OTP deleted for ${email}`);
    }
    
    return deleted;
  }

  cleanupExpiredOTPs() {
    const now = new Date();
    let cleanedCount = 0;

    for (const [email, otpData] of this.otpStore.entries()) {
      if (now > otpData.expiryTime) {
        this.otpStore.delete(email);
        cleanedCount++;
      }
    }

    if (cleanedCount > 0) {
      console.log(`🧹 Cleaned up ${cleanedCount} expired OTPs`);
    }
  }

  getStats() {
    const now = new Date();
    let active = 0;
    let expired = 0;
    let verified = 0;

    for (const [email, otpData] of this.otpStore.entries()) {
      if (otpData.verified) {
        verified++;
      } else if (now > otpData.expiryTime) {
        expired++;
      } else {
        active++;
      }
    }

    return {
      total: this.otpStore.size,
      active,
      expired,
      verified,
      timestamp: now
    };
  }
}

module.exports = new OTPService();