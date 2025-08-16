const googleSheetsService = require('../services/googleSheetsService');

class SheetsController {

  async getConnectionStatus(req, res) {
    try {
      const status = await googleSheetsService.getConnectionStatus();
      
      res.status(200).json({
        success: true,
        message: 'Google Sheets connection status retrieved',
        data: status
      });

    } catch (error) {
      console.error('❌ Get connection status error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve connection status',
        error: error.message
      });
    }
  }

  async getSubmissionStats(req, res) {
    try {
      const stats = await googleSheetsService.getSubmissionStats();
      
      if (!stats.success) {
        return res.status(500).json({
          success: false,
          message: 'Failed to retrieve submission statistics',
          error: stats.error
        });
      }

      res.status(200).json({
        success: true,
        message: 'Submission statistics retrieved successfully',
        data: stats.data
      });

    } catch (error) {
      console.error('❌ Get submission stats error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve submission statistics',
        error: error.message
      });
    }
  }

  async searchSubmissions(req, res) {
    try {
      const { query, sheet } = req.query;

      if (!query) {
        return res.status(400).json({
          success: false,
          message: 'Search query is required'
        });
      }

      const results = await googleSheetsService.searchSubmissions(query, sheet);
      
      if (!results.success) {
        return res.status(500).json({
          success: false,
          message: 'Search failed',
          error: results.error
        });
      }

      res.status(200).json({
        success: true,
        message: `Search completed for: "${query}"`,
        data: results.data
      });

    } catch (error) {
      console.error('❌ Search submissions error:', error);
      res.status(500).json({
        success: false,
        message: 'Search operation failed',
        error: error.message
      });
    }
  }

  async testConnection(req, res) {
    try {
      // Test by attempting to get connection status
      const status = await googleSheetsService.getConnectionStatus();
      
      if (status.initialized) {
        res.status(200).json({
          success: true,
          message: 'Google Sheets connection test successful',
          data: {
            connected: true,
            spreadsheet: status.spreadsheetTitle,
            sheets: status.availableSheets,
            timestamp: new Date().toISOString()
          }
        });
      } else {
        res.status(503).json({
          success: false,
          message: 'Google Sheets service not initialized',
          data: {
            connected: false,
            error: 'Service initialization failed'
          }
        });
      }

    } catch (error) {
      console.error('❌ Test connection error:', error);
      res.status(500).json({
        success: false,
        message: 'Connection test failed',
        error: error.message
      });
    }
  }

  async getSheetData(req, res) {
    try {
      const { sheetName, limit = 50 } = req.query;

      if (!sheetName) {
        return res.status(400).json({
          success: false,
          message: 'Sheet name is required'
        });
      }

      // This is a basic implementation - you might want to add more sophisticated data retrieval
      const status = await googleSheetsService.getConnectionStatus();
      
      if (!status.initialized) {
        return res.status(503).json({
          success: false,
          message: 'Google Sheets service not available'
        });
      }

      if (!status.availableSheets.includes(sheetName)) {
        return res.status(404).json({
          success: false,
          message: `Sheet "${sheetName}" not found`,
          availableSheets: status.availableSheets
        });
      }

      res.status(200).json({
        success: true,
        message: `Sheet "${sheetName}" is available`,
        data: {
          sheetName,
          status: 'available',
          note: 'Direct data retrieval not implemented for security. Use Google Sheets interface to view data.'
        }
      });

    } catch (error) {
      console.error('❌ Get sheet data error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve sheet data',
        error: error.message
      });
    }
  }

  async reinitializeService(req, res) {
    try {
      console.log('🔄 Reinitializing Google Sheets service...');
      
      // Reinitialize the service
      await googleSheetsService.initializeService();
      
      const status = await googleSheetsService.getConnectionStatus();
      
      if (status.initialized) {
        res.status(200).json({
          success: true,
          message: 'Google Sheets service reinitialized successfully',
          data: status
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Failed to reinitialize Google Sheets service'
        });
      }

    } catch (error) {
      console.error('❌ Reinitialize service error:', error);
      res.status(500).json({
        success: false,
        message: 'Reinitialization failed',
        error: error.message
      });
    }
  }

  async getHealthStatus(req, res) {
    try {
      const status = await googleSheetsService.getConnectionStatus();
      const stats = await googleSheetsService.getSubmissionStats();
      
      res.status(200).json({
        success: true,
        message: 'Google Sheets service health check',
        data: {
          service: 'Google Sheets Integration',
          status: status.initialized ? 'healthy' : 'unhealthy',
          connection: status,
          statistics: stats.success ? stats.data : null,
          timestamp: new Date().toISOString()
        }
      });

    } catch (error) {
      console.error('❌ Health status error:', error);
      res.status(500).json({
        success: false,
        message: 'Health check failed',
        error: error.message
      });
    }
  }

  async pushTestData(req, res) {
    try {
      const { sheetType = 'Contact Forms', data } = req.body;
      
      // Default test data if none provided
      const testData = data || {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '+1-555-0123',
        message: 'This is a test submission to verify Google Sheets integration',
        timestamp: new Date().toISOString(),
        source: 'API Test'
      };

      console.log(`📝 Pushing test data to ${sheetType}:`, testData);

      // Use the Google Sheets service to add the data
      const result = await googleSheetsService.addSubmission(sheetType, testData);
      
      if (result.success) {
        res.status(200).json({
          success: true,
          message: `Test data successfully pushed to ${sheetType}`,
          data: {
            sheetType,
            submittedData: testData,
            result: result.data,
            timestamp: new Date().toISOString()
          }
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Failed to push test data to Google Sheets',
          error: result.error
        });
      }

    } catch (error) {
      console.error('❌ Push test data error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to push test data',
        error: error.message
      });
    }
  }
}

module.exports = new SheetsController();