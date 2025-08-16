# VirtuSwift - Complete IT Solutions Platform

![VirtuSwift Logo](https://img.shields.io/badge/VirtuSwift-IT%20Solutions-blue?style=for-the-badge)

VirtuSwift is a comprehensive IT solutions platform featuring a modern React frontend and robust Node.js backend with integrated OTP verification, Gmail SMTP, and Google Sheets data management.

## 🚀 Features

### 🔐 Security & Verification
- **OTP Email Verification** - Secure form submissions with 6-digit OTP codes
- **Gmail SMTP Integration** - Real email delivery for OTPs and confirmations
- **Rate Limiting** - Protection against spam and abuse
- **Input Validation** - Comprehensive form validation and sanitization

### 📊 Data Management
- **Google Sheets Integration** - Automatic data storage in Google Sheets
- **Real-time Submission Tracking** - Monitor form submissions and statistics
- **Multiple Form Types** - Contact forms, RFP submissions, and assessments

### 🎨 Frontend Features
- **Modern React UI** - Responsive design with TypeScript
- **Interactive Components** - Dynamic forms, carousels, and animations
- **Industry Pages** - Dedicated pages for different industry solutions
- **Service Showcases** - Comprehensive service and solution displays

### 🛠️ Backend Features
- **RESTful API** - Clean, documented API endpoints
- **Email Templates** - Professional HTML email templates
- **Error Handling** - Comprehensive error management and logging
- **Health Monitoring** - Built-in health check endpoints

## 🏗️ Architecture

```
VirtuSwift/
├── virtuswift-react/          # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── utils/            # Utility functions
│   │   └── styles/           # CSS and styling
│   └── public/               # Static assets
├── virtuswift-backend/        # Node.js Backend
│   ├── src/
│   │   ├── controllers/      # Request handlers
│   │   ├── services/         # Business logic
│   │   ├── middleware/       # Custom middleware
│   │   ├── routes/           # API routes
│   │   └── templates/        # Email templates
│   └── tests/                # Test files
└── docs/                     # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gmail account with App Password
- Google Cloud Project with Sheets API enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SubhamKrSingh/VirtuSwift.git
   cd VirtuSwift
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd virtuswift-backend
   npm install

   # Install frontend dependencies
   cd ../virtuswift-react
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Backend environment
   cd virtuswift-backend
   cp .env.production .env
   # Edit .env with your configuration

   # Frontend environment
   cd ../virtuswift-react
   cp .env.production .env
   # Edit .env with your API URL
   ```

4. **Start Development Servers**
   ```bash
   # Start backend (Terminal 1)
   cd virtuswift-backend
   npm start

   # Start frontend (Terminal 2)
   cd virtuswift-react
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🔧 Configuration

### Gmail SMTP Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings → Security → App Passwords
   - Generate password for "Mail"
   - Copy the 16-character password
3. Update `EMAIL_USER` and `EMAIL_PASS` in `.env`

### Google Sheets Setup
1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create a Service Account
4. Download credentials JSON
5. Share your spreadsheet with the service account email
6. Update Google Sheets configuration in `.env`

## 📚 API Documentation

### Form Endpoints
- `POST /api/forms/contact` - Submit contact form
- `POST /api/forms/rfp` - Submit RFP form  
- `POST /api/forms/assessment` - Submit assessment form

### Verification Endpoints
- `POST /api/verify/otp` - Verify OTP code
- `POST /api/verify/resend` - Resend OTP
- `GET /api/verify/status` - Get verification status
- `POST /api/verify/cancel` - Cancel verification

### Health Endpoints
- `GET /health` - Server health check
- `GET /api/forms/health` - Forms service health
- `GET /api/sheets/health` - Google Sheets health

## 🐳 Docker Deployment

### Using Docker Compose
```bash
# Build and start all services
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Individual Docker Builds
```bash
# Build backend
cd virtuswift-backend
docker build -t virtuswift-backend .

# Build frontend
cd virtuswift-react
docker build -t virtuswift-frontend .
```

## 🌐 Production Deployment

### Environment Variables
Ensure these are set in production:
- `NODE_ENV=production`
- `FRONTEND_URL=https://your-domain.com`
- `EMAIL_USER=your-email@gmail.com`
- `EMAIL_PASS=your-app-password`
- `GOOGLE_SHEETS_*` variables

### Build for Production
```bash
# Frontend production build
cd virtuswift-react
npm run build:prod

# Backend production setup
cd virtuswift-backend
npm install --production
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 🧪 Testing

### Backend Tests
```bash
cd virtuswift-backend

# Test Gmail SMTP
node test-gmail-setup.js

# Test OTP system
node test-otp.js

# Test Google Sheets
node test-connection-simple.js
```

### Frontend Tests
```bash
cd virtuswift-react
npm test
```

## 📊 Monitoring

### Health Checks
- Backend: `GET /health`
- Forms Service: `GET /api/forms/health`
- Google Sheets: `GET /api/sheets/health`

### Logs
- Backend logs: Console output with structured logging
- Email delivery: SMTP transaction logs
- Google Sheets: API operation logs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Common Issues
- **Email not sending**: Check Gmail app password and 2FA
- **CORS errors**: Verify FRONTEND_URL in backend .env
- **Google Sheets errors**: Check service account permissions
- **Build errors**: Verify all environment variables

### Getting Help
- Check the [DEPLOYMENT.md](DEPLOYMENT.md) guide
- Review the troubleshooting section
- Open an issue on GitHub

## 🏢 About VirtuSwift

VirtuSwift is a comprehensive IT solutions platform offering:
- Cloud Strategy & Consulting
- Custom Software Development  
- IT Staffing & Talent Solutions
- Digital Transformation Services
- Industry-Specific Solutions

---

**Built with ❤️ by the VirtuSwift Team**

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Gmail](https://img.shields.io/badge/Gmail-SMTP-red?logo=gmail)
![Google Sheets](https://img.shields.io/badge/Google-Sheets-green?logo=google-sheets)