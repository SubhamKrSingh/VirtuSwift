import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSpinner, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { getApiUrl, apiEndpoints } from '../utils/api';

interface OTPVerificationProps {
  email: string;
  onVerificationSuccess: () => void;
  onCancel: () => void;
  formType: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  email,
  onVerificationSuccess,
  onCancel,
  formType
}) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [attemptsRemaining, setAttemptsRemaining] = useState(3);

  useEffect(() => {
    // Get initial status
    fetchVerificationStatus();
    
    // Set up timer
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchVerificationStatus = async () => {
    try {
      const response = await fetch(`${getApiUrl(apiEndpoints.verificationStatus)}?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      
      if (data.success && data.data.exists) {
        setTimeRemaining(data.data.timeRemaining);
        setAttemptsRemaining(data.data.attemptsRemaining);
        
        // Development mode: show OTP if available (only in development)
        if (data.data.developmentOTP && process.env.REACT_APP_ENV === 'development') {
          console.log('🔧 Development OTP:', data.data.developmentOTP);
          setMessage(`Development Mode: Your OTP is ${data.data.developmentOTP} (also check your email)`);
          setMessageType('info');
        }
      }
    } catch (error) {
      console.error('Failed to fetch verification status:', error);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp.trim()) {
      setMessage('Please enter the verification code');
      setMessageType('error');
      return;
    }

    setIsVerifying(true);
    setMessage('');

    try {
      const response = await fetch(getApiUrl(apiEndpoints.verifyOTP), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp: otp.trim()
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Email verified successfully! Your form has been submitted.');
        setMessageType('success');
        setTimeout(() => {
          onVerificationSuccess();
        }, 2000);
      } else {
        setMessage(data.message || 'Verification failed');
        setMessageType('error');
        setAttemptsRemaining(data.attemptsRemaining || 0);
        setOtp('');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setMessageType('error');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setMessage('');

    try {
      const response = await fetch(getApiUrl(apiEndpoints.resendOTP), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('New verification code sent to your email');
        setMessageType('success');
        setTimeRemaining(15 * 60); // 15 minutes
        setAttemptsRemaining(3);
        setOtp('');
      } else {
        setMessage(data.message || 'Failed to resend verification code');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setMessageType('error');
    } finally {
      setIsResending(false);
    }
  };

  const handleCancel = async () => {
    try {
      await fetch(getApiUrl(apiEndpoints.cancelVerification), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
    } catch (error) {
      console.error('Failed to cancel verification:', error);
    }
    
    onCancel();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center mb-6">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-[#3a3dc4] mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
          <p className="text-gray-600">
            We've sent a verification code to <strong>{email}</strong>
          </p>
        </div>

        <form onSubmit={handleVerifyOTP} className="space-y-4">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
              Enter 6-digit verification code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3a3dc4] focus:border-transparent text-center text-2xl font-mono tracking-widest"
              placeholder="000000"
              maxLength={6}
              autoComplete="one-time-code"
              disabled={isVerifying}
            />
          </div>

          {message && (
            <div className={`p-3 rounded-lg flex items-center gap-2 ${
              messageType === 'success' ? 'bg-green-50 text-green-700' :
              messageType === 'error' ? 'bg-red-50 text-red-700' :
              'bg-blue-50 text-blue-700'
            }`}>
              <FontAwesomeIcon 
                icon={messageType === 'success' ? faCheckCircle : faExclamationTriangle} 
                className="text-sm" 
              />
              <span className="text-sm">{message}</span>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isVerifying || otp.length !== 6}
              className="flex-1 bg-[#3a3dc4] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#2f3099] disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
            >
              {isVerifying ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                  Verifying...
                </>
              ) : (
                'Verify Email'
              )}
            </button>
            
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
            <span>Time remaining: {formatTime(timeRemaining)}</span>
            <span>Attempts left: {attemptsRemaining}</span>
          </div>
          
          <button
            onClick={handleResendOTP}
            disabled={isResending || timeRemaining > 0}
            className="w-full text-[#3a3dc4] hover:text-[#f05a28] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
          >
            {isResending ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                Sending...
              </>
            ) : (
              'Resend verification code'
            )}
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Check your spam folder if you don't see the email
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;