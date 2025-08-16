# VirtuSwift Deployment Guide

## 🚀 Production Deployment Steps

### 1. Environment Setup

#### Backend (.env)
```bash
# Copy the production template
cp virtuswift-backend/.env.production virtuswift-backend/.env

# Update the following values:
NODE_ENV=production
FRONTEND_URL=https://your-production-domain.com
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-gmail-app-password
GOOGLE_SHEETS_PRIVATE_KEY="your-production-private-key"
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=your-production-spreadsheet-id
JWT_SECRET=your-secure-jwt-secret
```

#### Frontend (.env.production)
```bash
REACT_APP_API_URL=https://your-backend-domain.com
REACT_APP_ENV=production
```

### 2. Build for Production

#### Frontend Build
```bash
cd virtuswift-react
npm run build:prod
```

#### Backend Preparation
```bash
cd virtuswift-backend
npm install --production
```

### 3. Gmail Setup for Production

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to https://myaccount.google.com/security
   - Click "App passwords"
   - Generate password for "Mail"
   - Copy the 16-character password (remove spaces)
3. **Update EMAIL_PASS** in .env with the app password

### 4. Google Sheets Setup for Production

1. **Create Production Spreadsheet**
2. **Generate Service Account**:
   - Go to Google Cloud Console
   - Create new service account
   - Download JSON credentials
   - Extract private_key and client_email
3. **Share Spreadsheet** with service account email
4. **Update .env** with production credentials

### 5. Deployment Options

#### Option A: Traditional Server (PM2)
```bash
# Install PM2 globally
npm install -g pm2

# Start backend
cd virtuswift-backend
pm2 start server.js --name "virtuswift-backend"

# Serve frontend
cd ../virtuswift-react
pm2 serve build 3000 --name "virtuswift-frontend"
```

#### Option B: Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d --build
```

#### Option C: Cloud Deployment (Vercel/Netlify + Heroku)
- **Frontend**: Deploy to Vercel/Netlify
- **Backend**: Deploy to Heroku/Railway/DigitalOcean

### 6. Environment Variables for Cloud Deployment

#### Heroku/Railway Backend
```bash
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://your-frontend-domain.com
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
# ... add all other environment variables
```

#### Vercel/Netlify Frontend
```bash
REACT_APP_API_URL=https://your-backend-domain.herokuapp.com
REACT_APP_ENV=production
```

### 7. Production Checklist

- [ ] Environment variables configured
- [ ] Gmail SMTP working (test with test-gmail-setup.js)
- [ ] Google Sheets integration working
- [ ] Frontend built for production
- [ ] CORS configured for production domain
- [ ] SSL certificates installed
- [ ] Domain DNS configured
- [ ] Rate limiting configured
- [ ] Error monitoring setup (optional)

### 8. Testing Production Build

#### Test Backend
```bash
cd virtuswift-backend
node test-gmail-setup.js
node test-otp.js
```

#### Test Frontend
```bash
cd virtuswift-react
npm run serve
# Visit http://localhost:3000
```

### 9. Monitoring & Maintenance

- Monitor email delivery rates
- Check Google Sheets API quotas
- Monitor server resources
- Regular security updates
- Backup Google Sheets data

## 🔧 Troubleshooting

### Common Issues

1. **Email not sending**: Check Gmail app password and 2FA
2. **CORS errors**: Update FRONTEND_URL in backend .env
3. **Google Sheets errors**: Verify service account permissions
4. **Build errors**: Check environment variables

### Support

For deployment support, check:
- Backend logs: `pm2 logs virtuswift-backend`
- Frontend logs: Browser developer console
- Email service: `node test-gmail-setup.js`
- Google Sheets: `node test-connection-simple.js`