const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

class EmailService {
  constructor() {
    this.transporter = null;
    this.initializeTransporter();
  }

  initializeTransporter() {
    try {
      // Clean up the app password (remove spaces)
      const cleanPassword = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
      
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true', // false for 587, true for 465
        auth: {
          user: process.env.EMAIL_USER,
          pass: cleanPassword
        },
        tls: {
          rejectUnauthorized: false
        },
        debug: process.env.NODE_ENV === 'development', // Enable debug in development
        logger: process.env.NODE_ENV === 'development' // Enable logging in development
      });

      console.log('📧 Gmail SMTP transporter initialized successfully');
      console.log(`📧 Using email: ${process.env.EMAIL_USER}`);
      console.log(`📧 Using host: ${process.env.EMAIL_HOST || 'smtp.gmail.com'}:${process.env.EMAIL_PORT || 587}`);
    } catch (error) {
      console.error('❌ Failed to initialize email transporter:', error.message);
      throw new Error('Email service initialization failed');
    }
  }

  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log('✅ Gmail SMTP connection verified');
      return true;
    } catch (error) {
      console.error('❌ Gmail SMTP connection failed:', error.message);
      console.log('🔧 Running in development mode - email verification bypassed');
      return false;
    }
  }

  loadTemplate(templateName) {
    try {
      const templatePath = path.join(__dirname, '../templates', `${templateName}.html`);
      return fs.readFileSync(templatePath, 'utf8');
    } catch (error) {
      console.error(`❌ Failed to load template ${templateName}:`, error.message);
      return null;
    }
  }

  replaceTemplateVariables(template, variables) {
    let result = template;
    Object.keys(variables).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      result = result.replace(regex, variables[key]);
    });
    return result;
  }

  async sendOTPEmail(email, otp, userName = 'User') {
    try {
      // Always try to send real email first
      console.log(`📧 Attempting to send OTP email to ${email}`);
      
      // Test connection first
      const connectionWorking = await this.verifyConnection();
      if (!connectionWorking) {
        console.log(`⚠️ Gmail SMTP connection failed, but attempting to send anyway...`);
      }

      const template = this.loadTemplate('otp-verification');
      if (!template) {
        throw new Error('OTP email template not found');
      }

      const htmlContent = this.replaceTemplateVariables(template, {
        userName,
        otpCode: otp,
        expiryMinutes: process.env.OTP_EXPIRY_MINUTES || 15,
        currentYear: new Date().getFullYear(),
        supportEmail: process.env.EMAIL_USER
      });

      const mailOptions = {
        from: {
          name: 'VirtuSwift',
          address: process.env.EMAIL_USER
        },
        to: email,
        subject: 'Verify Your Email - VirtuSwift',
        html: htmlContent,
        text: `Your VirtuSwift verification code is: ${otp}. This code expires in ${process.env.OTP_EXPIRY_MINUTES || 15} minutes.`
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`✅ OTP email sent successfully to ${email}`);
      return {
        success: true,
        messageId: result.messageId,
        response: result.response
      };
    } catch (error) {
      console.error(`❌ Failed to send OTP email to ${email}:`, error.message);
      
      // Only use development fallback if explicitly in development mode AND email fails
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔧 DEVELOPMENT FALLBACK: Email failed, simulating OTP email to ${email}`);
        console.log(`📧 OTP Code for ${email}: ${otp}`);
        console.log(`⏰ This code expires in ${process.env.OTP_EXPIRY_MINUTES || 15} minutes`);
        console.log(`💡 Fix Gmail configuration to send real emails`);
        
        return {
          success: true,
          messageId: 'dev-fallback-' + Date.now(),
          response: 'Development mode fallback - email simulated'
        };
      }
      
      return {
        success: false,
        error: error.message
      };
    }
  }

  async sendConfirmationEmail(email, formData, userName = 'User') {
    try {
      // Development mode bypass
      if (process.env.NODE_ENV === 'development') {
        const connectionWorking = await this.verifyConnection();
        if (!connectionWorking) {
          console.log(`🔧 DEVELOPMENT MODE: Simulating confirmation email to ${email}`);
          console.log(`📧 Confirmation for ${formData.formType || 'Contact Form'} submission`);
          
          return {
            success: true,
            messageId: 'dev-confirmation-' + Date.now(),
            response: 'Development mode - confirmation email simulated'
          };
        }
      }

      const template = this.loadTemplate('confirmation');
      if (!template) {
        throw new Error('Confirmation email template not found');
      }

      const htmlContent = this.replaceTemplateVariables(template, {
        userName,
        formType: formData.formType || 'Contact Form',
        submissionDate: new Date().toLocaleDateString(),
        currentYear: new Date().getFullYear(),
        supportEmail: process.env.EMAIL_USER
      });

      const mailOptions = {
        from: {
          name: 'VirtuSwift',
          address: process.env.EMAIL_USER
        },
        to: email,
        subject: 'Form Submission Confirmed - VirtuSwift',
        html: htmlContent,
        text: `Thank you for your submission to VirtuSwift. We have received your ${formData.formType || 'form'} and will get back to you soon.`
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`✅ Confirmation email sent successfully to ${email}`);
      return {
        success: true,
        messageId: result.messageId,
        response: result.response
      };
    } catch (error) {
      console.error(`❌ Failed to send confirmation email to ${email}:`, error.message);
      
      // Development mode fallback
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔧 DEVELOPMENT FALLBACK: Simulating confirmation email to ${email}`);
        console.log(`📧 Confirmation for ${formData.formType || 'Contact Form'} submission`);
        
        return {
          success: true,
          messageId: 'dev-confirmation-fallback-' + Date.now(),
          response: 'Development mode fallback - confirmation email simulated'
        };
      }
      
      return {
        success: false,
        error: error.message
      };
    }
  }

  async sendNotificationEmail(formData) {
    try {
      const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
      
      const mailOptions = {
        from: {
          name: 'VirtuSwift System',
          address: process.env.EMAIL_USER
        },
        to: adminEmail,
        subject: `New ${formData.formType || 'Form'} Submission - VirtuSwift`,
        html: `
          <h2>New Form Submission</h2>
          <p><strong>Form Type:</strong> ${formData.formType || 'Unknown'}</p>
          <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Message:</strong> ${formData.message || 'Not provided'}</p>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        `,
        text: `New ${formData.formType || 'form'} submission from ${formData.name} (${formData.email})`
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`✅ Notification email sent to admin`);
      return {
        success: true,
        messageId: result.messageId
      };
    } catch (error) {
      console.error(`❌ Failed to send notification email:`, error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = new EmailService();