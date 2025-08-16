const fs = require('fs');
const path = require('path');

class Logger {
  constructor() {
    this.logDir = path.join(__dirname, '../../logs');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  formatMessage(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
      pid: process.pid
    };
    return JSON.stringify(logEntry) + '\n';
  }

  writeToFile(filename, content) {
    const filePath = path.join(this.logDir, filename);
    fs.appendFileSync(filePath, content);
  }

  info(message, data = null) {
    const logMessage = this.formatMessage('INFO', message, data);
    console.log(`ℹ️  ${message}`, data || '');
    this.writeToFile('app.log', logMessage);
  }

  error(message, error = null) {
    const errorData = error ? {
      message: error.message,
      stack: error.stack,
      name: error.name
    } : null;
    
    const logMessage = this.formatMessage('ERROR', message, errorData);
    console.error(`❌ ${message}`, error || '');
    this.writeToFile('error.log', logMessage);
  }

  warn(message, data = null) {
    const logMessage = this.formatMessage('WARN', message, data);
    console.warn(`⚠️  ${message}`, data || '');
    this.writeToFile('app.log', logMessage);
  }

  debug(message, data = null) {
    if (process.env.NODE_ENV === 'development') {
      const logMessage = this.formatMessage('DEBUG', message, data);
      console.log(`🐛 ${message}`, data || '');
      this.writeToFile('debug.log', logMessage);
    }
  }

  logFormSubmission(formType, email, success = true) {
    const logData = {
      formType,
      email,
      success,
      timestamp: new Date().toISOString(),
      ip: 'unknown' // Will be populated by middleware
    };

    this.writeToFile('forms.log', this.formatMessage('FORM_SUBMISSION', 'Form submitted', logData));
  }

  logOTPEvent(event, email, success = true, additionalData = {}) {
    const logData = {
      event, // 'GENERATED', 'VERIFIED', 'EXPIRED', 'FAILED'
      email,
      success,
      ...additionalData,
      timestamp: new Date().toISOString()
    };

    this.writeToFile('otp.log', this.formatMessage('OTP_EVENT', `OTP ${event}`, logData));
  }

  logEmailEvent(event, email, success = true, additionalData = {}) {
    const logData = {
      event, // 'SENT', 'FAILED', 'BOUNCED'
      email,
      success,
      ...additionalData,
      timestamp: new Date().toISOString()
    };

    this.writeToFile('email.log', this.formatMessage('EMAIL_EVENT', `Email ${event}`, logData));
  }

  getLogStats() {
    const logFiles = ['app.log', 'error.log', 'forms.log', 'otp.log', 'email.log'];
    const stats = {};

    logFiles.forEach(file => {
      const filePath = path.join(this.logDir, file);
      if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        stats[file] = {
          size: stat.size,
          modified: stat.mtime,
          exists: true
        };
      } else {
        stats[file] = { exists: false };
      }
    });

    return stats;
  }

  clearLogs() {
    const logFiles = fs.readdirSync(this.logDir);
    logFiles.forEach(file => {
      fs.unlinkSync(path.join(this.logDir, file));
    });
    this.info('All log files cleared');
  }
}

module.exports = new Logger();