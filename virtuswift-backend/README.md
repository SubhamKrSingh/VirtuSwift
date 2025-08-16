# VirtuSwift Backend - OTP Email Verification System

A robust Node.js backend service for handling form submissions with Gmail SMTP-based OTP email verification.

## Features

- 📧 Gmail SMTP integration for professional email delivery
- 🔐 Secure OTP generation and verification
- 📝 Multiple form types (Contact, RFP, Assessment)
- 🛡️ Rate limiting and spam protection
- ✅ Input validation and sanitization
- 📊 Logging and monitoring
- 🎨 Professional HTML email templates
- 🚀 Ready for Google Sheets integration

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Gmail SMTP

#### Option A: Using Gmail App Password (Recommended)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Update `.env` file with your credentials

#### Option B: Using OAuth2 (Advanced)
- Follow Google's OAuth2 setup guide for more secure authentication

### 3. Environment Setup
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your Gmail credentials
EMAIL_USER=your-business-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 4. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Form Submission
```http
POST /api/forms/contact
POST /api/forms/rfp
POST /api/forms/assessment
```

### OTP Verification
```http
POST /api/verify/otp
POST /api/verify/resend
GET /api/verify/status?email=user@example.com
DELETE /api/verify/cancel
```

### Health Checks
```http
GET /health
GET /api/forms/health
GET /api/verify/health
GET /api/verify/test-email
```

## Usage Examples

### 1. Submit Contact Form
```javascript
const response = await fetch('http://localhost:5000/api/forms/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Example Corp',
    phone: '+1234567890',
    message: 'Interested in your services',
    industry: 'Technology'
  })
});

const result = await response.json();
// Response: { success: true, message: "Verification code sent..." }
```

### 2. Verify OTP
```javascript
const response = await fetch('http://localhost:5000/api/verify/otp', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'john@example.com',
    otp: '123456'
  })
});

const result = await response.json();
// Response: { success: true, message: "Email verified successfully!" }
```

## Email Templates

The system includes professional HTML email templates:

- **OTP Verification Email**: Branded template with security warnings
- **Confirmation Email**: Thank you message with next steps
- **Admin Notification**: Internal notification for new submissions

## Security Features

- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Joi-based schema validation
- **Email Domain Validation**: Blocks disposable email addresses
- **OTP Security**: Cryptographically secure generation
- **Attempt Limiting**: Maximum 3 verification attempts
- **Auto Expiry**: OTPs expire after 15 minutes

## Configuration Options

### Environment Variables
```bash
# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Gmail SMTP
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# OTP Settings
OTP_EXPIRY_MINUTES=15
OTP_MAX_ATTEMPTS=3
OTP_LENGTH=6

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## Monitoring & Logging

The system provides comprehensive logging:

- **Application Logs**: General application events
- **Error Logs**: Error tracking and debugging
- **Form Logs**: Form submission tracking
- **OTP Logs**: OTP generation and verification events
- **Email Logs**: Email delivery status

### View Logs
```bash
# View real-time logs
tail -f logs/app.log

# View error logs
tail -f logs/error.log

# View form submissions
tail -f logs/forms.log
```

## Testing

### Test Email Connection
```bash
curl http://localhost:5000/api/verify/test-email
```

### Test Form Submission
```bash
curl -X POST http://localhost:5000/api/forms/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

## Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Configure environment variables in Vercel dashboard

### Railway
1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically

### Traditional Hosting
1. Upload files to server
2. Install dependencies: `npm install --production`
3. Configure environment variables
4. Start with PM2: `pm2 start server.js`

## Troubleshooting

### Common Issues

**Gmail Authentication Failed**
- Ensure 2FA is enabled
- Use App Password, not regular password
- Check EMAIL_USER and EMAIL_PASS in .env

**OTP Not Received**
- Check spam folder
- Verify email address format
- Test email connection endpoint

**Rate Limiting**
- Wait for rate limit window to reset
- Check IP-based restrictions
- Adjust rate limit settings if needed

### Debug Mode
```bash
NODE_ENV=development npm run dev
```

## Next Steps

1. **Google Sheets Integration**: Store verified form data
2. **Admin Dashboard**: Web interface for managing submissions
3. **CRM Integration**: Connect with HubSpot/Salesforce
4. **SMS Verification**: Backup verification method
5. **Analytics**: Track conversion rates and user behavior

## Support

For issues and questions:
- Check logs in `logs/` directory
- Test email connection: `GET /api/verify/test-email`
- Review environment configuration
- Check Gmail account settings

## License

MIT License - see LICENSE file for details.