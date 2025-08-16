const Joi = require('joi');

// Common validation schemas
const emailSchema = Joi.string().email().required().messages({
  'string.email': 'Please provide a valid email address',
  'any.required': 'Email is required'
});

const nameSchema = Joi.string().min(2).max(100).required().messages({
  'string.min': 'Name must be at least 2 characters long',
  'string.max': 'Name cannot exceed 100 characters',
  'any.required': 'Name is required'
});

const phoneSchema = Joi.string().pattern(/^[\+]?[1-9][\d]{0,15}$/).messages({
  'string.pattern.base': 'Please provide a valid phone number'
});

const otpSchema = Joi.string().pattern(/^\d{6}$/).required().messages({
  'string.pattern.base': 'OTP must be a 6-digit number',
  'any.required': 'OTP is required'
});

// Form validation schemas
const contactFormSchema = Joi.object({
  name: nameSchema,
  email: emailSchema,
  company: Joi.string().max(200).allow(''),
  phone: phoneSchema.allow(''),
  message: Joi.string().max(2000).required().messages({
    'string.max': 'Message cannot exceed 2000 characters',
    'any.required': 'Message is required'
  }),
  industry: Joi.string().max(100).allow(''),
  formType: Joi.string().default('Contact Form')
});

const rfpFormSchema = Joi.object({
  name: nameSchema,
  email: emailSchema,
  company: Joi.string().max(200).required().messages({
    'any.required': 'Company name is required'
  }),
  phone: phoneSchema.allow(''),
  projectType: Joi.string().max(200).required().messages({
    'any.required': 'Project type is required'
  }),
  budget: Joi.string().max(100).allow(''),
  timeline: Joi.string().max(100).allow(''),
  requirements: Joi.string().max(5000).required().messages({
    'string.max': 'Requirements cannot exceed 5000 characters',
    'any.required': 'Project requirements are required'
  }),
  industry: Joi.string().max(100).allow(''),
  formType: Joi.string().default('RFP Submission')
});

const assessmentFormSchema = Joi.object({
  name: nameSchema,
  email: emailSchema,
  company: Joi.string().max(200).required().messages({
    'any.required': 'Company name is required'
  }),
  phone: phoneSchema.allow(''),
  assessmentType: Joi.string().valid(
    'Digital Transformation',
    'Cloud Readiness',
    'Cybersecurity',
    'Data Analytics',
    'IT Infrastructure'
  ).required().messages({
    'any.required': 'Assessment type is required',
    'any.only': 'Please select a valid assessment type'
  }),
  currentChallenges: Joi.string().max(2000).allow(''),
  goals: Joi.string().max(2000).allow(''),
  industry: Joi.string().max(100).allow(''),
  formType: Joi.string().default('Assessment Request')
});

const otpVerificationSchema = Joi.object({
  email: emailSchema,
  otp: otpSchema
});

const otpRequestSchema = Joi.object({
  email: emailSchema
});

// Validation middleware factory
const validateSchema = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }

    req.validatedData = value;
    next();
  };
};

// Email domain validation
const validateEmailDomain = (req, res, next) => {
  const email = req.validatedData?.email || req.body?.email;
  
  if (!email) {
    return next();
  }

  const domain = email.split('@')[1]?.toLowerCase();
  
  // List of disposable email domains to block
  const disposableDomains = [
    '10minutemail.com',
    'tempmail.org',
    'guerrillamail.com',
    'mailinator.com',
    'throwaway.email'
  ];

  if (disposableDomains.includes(domain)) {
    return res.status(400).json({
      success: false,
      message: 'Disposable email addresses are not allowed',
      code: 'DISPOSABLE_EMAIL'
    });
  }

  next();
};

// Rate limiting for specific actions
const createRateLimiter = (windowMs, max, message) => {
  const requests = new Map();

  return (req, res, next) => {
    const key = req.ip + (req.validatedData?.email || req.body?.email || '');
    const now = Date.now();
    const windowStart = now - windowMs;

    // Clean old entries
    for (const [reqKey, timestamps] of requests.entries()) {
      requests.set(reqKey, timestamps.filter(time => time > windowStart));
      if (requests.get(reqKey).length === 0) {
        requests.delete(reqKey);
      }
    }

    const userRequests = requests.get(key) || [];
    
    if (userRequests.length >= max) {
      return res.status(429).json({
        success: false,
        message: message,
        retryAfter: Math.ceil((userRequests[0] + windowMs - now) / 1000)
      });
    }

    userRequests.push(now);
    requests.set(key, userRequests);
    next();
  };
};

// Specific rate limiters
const otpRequestLimiter = createRateLimiter(
  60 * 60 * 1000, // 1 hour
  3, // 3 requests
  'Too many OTP requests. Please try again later.'
);

const formSubmissionLimiter = createRateLimiter(
  60 * 60 * 1000, // 1 hour
  5, // 5 submissions
  'Too many form submissions. Please try again later.'
);

module.exports = {
  // Validation schemas
  contactFormSchema,
  rfpFormSchema,
  assessmentFormSchema,
  otpVerificationSchema,
  otpRequestSchema,
  
  // Validation middleware
  validateContactForm: validateSchema(contactFormSchema),
  validateRFPForm: validateSchema(rfpFormSchema),
  validateAssessmentForm: validateSchema(assessmentFormSchema),
  validateOTPVerification: validateSchema(otpVerificationSchema),
  validateOTPRequest: validateSchema(otpRequestSchema),
  
  // Additional validation
  validateEmailDomain,
  
  // Rate limiting
  otpRequestLimiter,
  formSubmissionLimiter,
  
  // Generic validator
  validateSchema
};