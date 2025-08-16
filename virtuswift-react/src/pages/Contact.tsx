import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import OTPVerification from '../components/OTPVerification';
import { getApiUrl, apiEndpoints } from '../utils/api';

interface FormData {
  contactType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  industry: string;
  revenue: string;
  country: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    contactType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    industry: '',
    revenue: '',
    country: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const submissionData = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
        formType: 'Contact Form'
      };

      const response = await fetch(getApiUrl(apiEndpoints.contactForm), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (data.success) {
        setShowOTPVerification(true);
      } else {
        setSubmitMessage(data.message || 'Failed to submit form. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerificationSuccess = () => {
    setShowOTPVerification(false);
    setSubmitMessage('Thank you! Your message has been submitted successfully. We\'ll get back to you soon.');
    setMessageType('success');
    
    // Reset form
    setFormData({
      contactType: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      company: '',
      industry: '',
      revenue: '',
      country: '',
      message: ''
    });
  };

  const handleVerificationCancel = () => {
    setShowOTPVerification(false);
    setSubmitMessage('Form submission cancelled.');
    setMessageType('error');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="bg-gradient-to-r from-[#3a3dc4] to-[#2f3099] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Need more information? Or just want to learn how VirtuSwift can help you fulfill your potential?
            Take a moment to complete and submit the following form. We can't wait to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Form Column */}
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#121927]">Send us a message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="contactType" className="block text-sm font-medium text-[#121927] mb-2">
                      Contact Me About*
                    </label>
                    <select
                      id="contactType"
                      name="contactType"
                      value={formData.contactType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3dc4] focus:border-transparent"
                      required
                    >
                      <option value="">Select a Contact Type</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">IT Support</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="security">Cybersecurity</option>
                      <option value="development">Software Development</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none resize-none"
                      required
                    />
                  </div>

                  {submitMessage && (
                    <div className={`mb-4 p-3 rounded-md ${
                      messageType === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#3a3dc4] text-white px-8 py-3 rounded-md font-medium shadow-md hover:bg-[#2f3099] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </form>
              </div>

              {/* Info Column */}
              <div className="md:w-1/3 bg-[#E8E9F5] p-8">
                <h3 className="text-xl font-bold mb-6 text-[#121927]">Contact Information</h3>

                <div className="mb-8">
                  <h4 className="font-semibold text-[#3a3dc4] mb-2">Headquarters</h4>
                  <p className="text-gray-600">
                    123 Tech Avenue<br />
                    Suite 500<br />
                    San Francisco, CA 94107<br />
                    United States
                  </p>
                  <p className="mt-3 text-gray-600">
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Email:</strong> info@virtuswift.com
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-[#3a3dc4] mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a href="#" className="text-[#3a3dc4] hover:text-[#2f3099]">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href="#" className="text-[#3a3dc4] hover:text-[#2f3099]">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href="#" className="text-[#3a3dc4] hover:text-[#2f3099]">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href="#" className="text-[#3a3dc4] hover:text-[#2f3099]">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      {/* This section has been removed as per user request. */}

      {/* OTP Verification Modal */}
      {showOTPVerification && (
        <OTPVerification
          email={formData.email}
          onVerificationSuccess={handleVerificationSuccess}
          onCancel={handleVerificationCancel}
          formType="Contact Form"
        />
      )}
    </div>
  );
};

export default Contact; 