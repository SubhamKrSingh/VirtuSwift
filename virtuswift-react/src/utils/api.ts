// API Configuration utility
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};

export const apiEndpoints = {
  // Form endpoints
  contactForm: '/api/forms/contact',
  rfpForm: '/api/forms/rfp',
  assessmentForm: '/api/forms/assessment',
  
  // Verification endpoints
  verifyOTP: '/api/verify/otp',
  resendOTP: '/api/verify/resend',
  verificationStatus: '/api/verify/status',
  cancelVerification: '/api/verify/cancel',
  
  // Health endpoints
  health: '/health',
  formsHealth: '/api/forms/health',
  sheetsHealth: '/api/sheets/health'
};

export default {
  getApiUrl,
  apiEndpoints
};