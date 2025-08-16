# 📊 Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for storing and organizing form submissions.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "New Project"
3. Name: "VirtuSwift Backend"
4. Click "Create"

### Step 2: Enable APIs
1. In your project, go to "APIs & Services" → "Library"
2. Search and enable:
   - **Google Sheets API**
   - **Google Drive API**

### Step 3: Create Service Account
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Name: `virtuswift-sheets-service`
4. Description: `Service account for VirtuSwift form data management`
5. Click "Create and Continue"
6. Skip role assignment (click "Continue")
7. Click "Done"

### Step 4: Generate Service Account Key
1. Click on the created service account
2. Go to "Keys" tab
3. Click "Add Key" → "Create New Key"
4. Choose "JSON" format
5. Click "Create"
6. **Save the downloaded JSON file securely**

### Step 5: Create Google Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet
3. Name it: **"VirtuSwift Form Submissions"**
4. Copy the Spreadsheet ID from URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```

### Step 6: Share Spreadsheet with Service Account
1. In your spreadsheet, click "Share"
2. Add the service account email (from JSON file):
   ```
   virtuswift-sheets-service@your-project.iam.gserviceaccount.com
   ```
3. Give "Editor" permissions
4. Click "Send"

### Step 7: Configure Environment Variables
1. Open the downloaded JSON credentials file
2. Extract these values:
   - `private_key`
   - `client_email`
3. Update your `.env` file:

```bash
# Google Sheets Configuration
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=virtuswift-sheets-service@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id-from-url
```

**Important Notes:**
- Keep the `\n` characters in the private key
- Wrap the private key in quotes
- Never commit the actual credentials to version control

## 🧪 Test the Integration

### 1. Install Dependencies
```bash
npm install google-spreadsheet google-auth-library
```

### 2. Start the Server
```bash
npm run dev
```

### 3. Test Google Sheets Connection
```bash
curl http://localhost:5000/api/sheets/test
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Google Sheets connection test successful",
  "data": {
    "connected": true,
    "spreadsheet": "VirtuSwift Form Submissions",
    "sheets": ["Contact Forms", "RFP Submissions", "Assessment Requests", "Analytics Dashboard"]
  }
}
```

### 4. Test Complete Flow
```bash
# Submit a form
curl -X POST http://localhost:5000/api/forms/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "Testing Google Sheets integration"
  }'

# Verify OTP (check your email first)
curl -X POST http://localhost:5000/api/verify/otp \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "otp": "123456"
  }'
```

### 5. Check Your Spreadsheet
- Go to your Google Spreadsheet
- You should see the data in the "Contact Forms" sheet
- Analytics will be updated in the "Analytics Dashboard" sheet

## 📊 Spreadsheet Structure

The system automatically creates 4 sheets:

### 1. Contact Forms
| Column | Description |
|--------|-------------|
| Timestamp | When form was submitted |
| Name | User's name |
| Email | User's email |
| Company | Company name |
| Phone | Phone number |
| Message | User's message |
| Industry | Selected industry |
| Verified Date | When email was verified |
| Status | New/In Progress/Completed |
| Follow-up Date | Scheduled follow-up |
| Notes | Internal notes |
| Source | Form source |

### 2. RFP Submissions
| Column | Description |
|--------|-------------|
| Timestamp | Submission time |
| Name | Contact person |
| Email | Contact email |
| Company | Company name |
| Phone | Phone number |
| Project Type | Type of project |
| Budget | Project budget |
| Timeline | Expected timeline |
| Requirements | Detailed requirements |
| Industry | Industry sector |
| Verified Date | Email verification time |
| Status | New/In Progress/Completed |
| Priority | High/Medium/Low |
| Assigned To | Team member assigned |
| Follow-up Date | Next contact date |
| Notes | Internal notes |

### 3. Assessment Requests
| Column | Description |
|--------|-------------|
| Timestamp | Request time |
| Name | Contact name |
| Email | Contact email |
| Company | Company name |
| Phone | Phone number |
| Assessment Type | Type of assessment |
| Current Challenges | Business challenges |
| Goals | Business goals |
| Industry | Industry sector |
| Verified Date | Email verification |
| Status | New/Scheduled/Completed |
| Scheduled Date | Assessment date |
| Assigned To | Consultant assigned |
| Notes | Assessment notes |

### 4. Analytics Dashboard
| Column | Description |
|--------|-------------|
| Date | Date of submissions |
| Total Submissions | Total forms submitted |
| Contact Forms | Number of contact forms |
| RFP Submissions | Number of RFP forms |
| Assessment Requests | Number of assessment requests |
| Verification Rate | Email verification success rate |
| Top Industries | Most common industries |
| Notes | Daily notes |

## 🔧 API Endpoints

### Google Sheets Management
```bash
# Test connection
GET /api/sheets/test

# Get connection status
GET /api/sheets/status

# Get submission statistics
GET /api/sheets/stats

# Search submissions
GET /api/sheets/search?query=company&sheet=Contact Forms

# Get available sheets
GET /api/sheets/list

# Health check
GET /api/sheets/health

# Reinitialize service
POST /api/sheets/reinitialize
```

## 🛡️ Security Best Practices

### 1. Protect Credentials
- Never commit `.env` file to version control
- Use environment variables in production
- Rotate service account keys regularly

### 2. Limit Access
- Use principle of least privilege
- Only share spreadsheet with necessary accounts
- Monitor access logs regularly

### 3. Data Privacy
- Implement data retention policies
- Regular backup of important data
- Consider data encryption for sensitive information

## 🚨 Troubleshooting

### Common Issues:

**1. "Service account not found"**
- Check if service account email is correct
- Verify the spreadsheet is shared with service account

**2. "Insufficient permissions"**
- Ensure service account has "Editor" access to spreadsheet
- Check if APIs are enabled in Google Cloud Console

**3. "Private key format error"**
- Ensure private key includes `\n` characters
- Wrap private key in quotes in .env file

**4. "Spreadsheet not found"**
- Verify spreadsheet ID is correct
- Check if spreadsheet exists and is accessible

### Debug Commands:
```bash
# Check service status
curl http://localhost:5000/api/sheets/health

# Test connection
curl http://localhost:5000/api/sheets/test

# Get current stats
curl http://localhost:5000/api/sheets/stats

# Reinitialize if needed
curl -X POST http://localhost:5000/api/sheets/reinitialize
```

## 📈 Data Organization Features

### Automatic Sorting
- Data is automatically sorted by timestamp (newest first)
- Priority levels assigned to RFP submissions
- Status tracking for all submissions

### Analytics
- Daily submission counts
- Form type distribution
- Industry analysis
- Verification success rates

### Search & Filter
- Search across all sheets
- Filter by date, status, industry
- Export capabilities through Google Sheets interface

## 🎯 Next Steps

1. **Set up the integration** following this guide
2. **Test with sample data** to ensure everything works
3. **Configure team access** to the spreadsheet
4. **Set up notifications** for new submissions
5. **Create dashboard views** for different team members
6. **Implement data backup** procedures

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Test the connection using the provided endpoints
4. Check server logs for detailed error messages

The Google Sheets integration provides a powerful, familiar interface for managing form submissions while maintaining the security and automation of the backend system.