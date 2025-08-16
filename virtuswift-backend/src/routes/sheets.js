const express = require('express');
const router = express.Router();
const sheetsController = require('../controllers/sheetsController');

// Get Google Sheets connection status
router.get('/status', sheetsController.getConnectionStatus);

// Get submission statistics
router.get('/stats', sheetsController.getSubmissionStats);

// Search submissions across sheets
router.get('/search', sheetsController.searchSubmissions);

// Test Google Sheets connection
router.get('/test', sheetsController.testConnection);

// Get specific sheet data (limited for security)
router.get('/data', sheetsController.getSheetData);

// Reinitialize Google Sheets service
router.post('/reinitialize', sheetsController.reinitializeService);

// Health check for Google Sheets service
router.get('/health', sheetsController.getHealthStatus);

// Push test data to Google Sheets
router.post('/push', sheetsController.pushTestData);

// Get available sheets list
router.get('/list', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Available Google Sheets',
    data: {
      sheets: [
        'Contact Forms',
        'RFP Submissions', 
        'Assessment Requests',
        'Analytics Dashboard'
      ],
      description: 'These sheets are automatically created and managed by the system'
    }
  });
});

module.exports = router;