const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const {
  validateContactForm,
  validateRFPForm,
  validateAssessmentForm,
  validateEmailDomain,
  formSubmissionLimiter
} = require('../middleware/validation');

// Apply rate limiting to all form routes
router.use(formSubmissionLimiter);

// Contact form submission
router.post('/contact', 
  validateContactForm,
  validateEmailDomain,
  formController.submitContactForm
);

// RFP form submission
router.post('/rfp',
  validateRFPForm,
  validateEmailDomain,
  formController.submitRFPForm
);

// Assessment form submission
router.post('/assessment',
  validateAssessmentForm,
  validateEmailDomain,
  formController.submitAssessmentForm
);

// Get form statistics (for admin/monitoring)
router.get('/stats', formController.getFormStats);

// Health check for forms service
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Forms service is healthy',
    timestamp: new Date().toISOString(),
    services: {
      validation: 'active',
      rateLimiting: 'active'
    }
  });
});

module.exports = router;