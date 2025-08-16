import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import OTPVerification from '../OTPVerification';
import { getApiUrl, apiEndpoints } from '../../utils/api';

const questions = [
  {
    title: 'Question 1 of 13',
    question: 'Are you effectively leveraging hyperscaler innovation solutions to drive revenue, improve productivity, enhance customer satisfaction, or increase margins?',
    type: 'single',
    options: [
      'We are not using hyperscaler innovation solutions and do not have plans to implement any.',
      'We are not using hyperscaler innovation solutions but have plans for one or more projects.',
      'We are piloting one or more hyperscaler innovations solutions, but do not have documented success.',
      'We have implemented several hyperscaler innovations, but with limited adoption or unclear business outcomes.',
      'We have succeeded in implementing 1-3 hyperscaler innovations with clear, positive business outcomes.',
      'We have successfully rolled out an innovation program across our organization, with 4 or more hyperscaler innovation solutions deployed across multiple lines of business.'
    ]
  },
  {
    title: 'Question 2 of 13',
    question: 'How far along is your organization in its cloud journey?',
    type: 'single',
    options: [
      'Our cloud migration is less than 50% complete.',
      'Our cloud migration is between 50% and 90% complete.',
      'Our cloud journey is more than 90% complete.'
    ]
  },
  {
    title: 'Question 3 of 13',
    question: 'How much application refactoring and cloud optimization have you performed?',
    type: 'single',
    options: [
      'We primarily rehosted our on-premises workloads during cloud migration.',
      'Our migration included some refactoring or replatforming, or these are planned for a later phase.',
      'Significant efforts went into autoscaling, consolidation, availability, and recoverability during our migration.'
    ]
  },
  {
    title: 'Question 4 of 13',
    question: 'Is your organization operating efficiently in the cloud?',
    type: 'single',
    options: [
      'We have minimal governance over cloud spending, limited visibility into security and compliance controls, and insufficiently trained staff.',
      'We have some governance over cloud spending, basic security and compliance controls, and adequate staffing.',
      'We maintain strong governance policies, comprehensive security controls, and employ certified staff.'
    ]
  },
  {
    title: 'Question 5 of 13',
    question: 'Which of the following best describes your organization\'s cloud deployment strategy?',
    type: 'single',
    options: [
      'We have a hybrid cloud solution with on-premises data centers or collocations facilities and a hyperscaler partner.',
      'We have a hybrid cloud solution with on-premises data centers or collocations facilities and multiple hyperscaler partners.',
      'We are almost entirely deployed in the public cloud on a single hyperscaler.',
      'We are almost entirely deployed in the public cloud on multiple hyperscalers.'
    ]
  },
  {
    title: 'Question 6 of 13',
    question: 'How does your organization think about, and use, a multicloud deployment?',
    type: 'single',
    options: [
      'My organization is committed to a single hyperscaler partner.',
      'My organization is currently using a single hyperscaler partner, but feel comfortable moving to a multicloud model.',
      'My organization is currently using multiple hyperscalers and we believe in using best-of-breed solutions from our cloud partners.'
    ]
  },
  {
    title: 'Question 7 of 13',
    question: 'Based on your current migration status, what is your spend level based on your original cloud migration business case?',
    type: 'single',
    options: [
      'My organization is spending up to 50% or more than we expected.',
      'My organization is spending between 20% and 50% more than we expected.',
      'My organization is spending between 5% and 20% more than we expected.',
      'My organization is spending within 5% of what we expected.',
      'My organization is spending less than what we expected.'
    ]
  },
  {
    title: 'Question 8 of 13',
    question: 'Which of the following benefits do you feel your cloud migration successfully achieved?',
    type: 'multi',
    options: [
      'Scalability',
      'Flexibility and Efficiency',
      'Deployment Speed',
      'Service Quality',
      'Self-Service',
      'Availability',
      'Recoverability',
      'Performance',
      'Innovation'
    ]
  },
  {
    title: 'Question 9 of 13',
    question: 'What governance practices are you currently employing to ensure optimal cloud spend?',
    type: 'multi',
    options: [
      'We regularly review and right-size resources.',
      'We leverage reserved instances and/or spending plans.',
      'We implement auto-scaling and/or scheduled downtime.',
      'We allocate costs to business units and provide regular reporting.',
      'We use a cloud FinOps tools and/or have one or more resources that manage this function.'
    ]
  },
  {
    title: 'Question 10 of 13',
    question: 'Which of the following security activities does your organization perform?',
    type: 'multi',
    options: [
      'We apply a centrally administered and controlled Identity & Access Management policy to our cloud(s) that is regularly audited.',
      'We use one or more security tools or technologies to ensure our cloud is secure and compliant using defense-in-depth principles.',
      'We leverage one or more of the following: multi-factor authentication, privileged access management, cloud-access security broker, zero trust network access solutions.',
      'We use a third-party service for vulnerability scanning and/or penetration testing of our cloud services and maintain a risk register to remediate findings.',
      'We leverage a 24 x 7 eyes-on-glass security operations center (SOC).'
    ]
  },
  {
    title: 'Question 11 of 13',
    question: 'What hyperscaler innovation solutions does your organization leverage?',
    type: 'multi',
    options: [
      'Database Platform-as-a-Service',
      'Data Lakes / Data Warehouses',
      'Integration and API',
      'Low-Code / No-Code',
      'Internet of Things',
      'Analytics and Machine Learning',
      'Artificial Intelligence',
      'Generative Artificial Intelligence (GenAI)'
    ]
  },
  {
    title: 'Question 12 of 13',
    question: 'Which statement most closely aligns with your organization\'s level of automation?',
    type: 'single',
    options: [
      'We have no formal automation program, but we have some simple automation in place through grass-roots efforts.',
      'We have a formal automation program, but it doesn\'t satisfy all of our use cases and/or we struggle to keep our automation current with the pace of hyperscaler innovation.',
      'We have a robust automation program that is regularly maintained.'
    ]
  },
  {
    title: 'Question 13 of 13',
    question: 'What is your perception of how well your organization\'s cloud infrastructure could recover from failure?',
    type: 'single',
    options: [
      'I\'m not sure how well my organization could recover from a partial failure of my hyperscaler partner; we don\'t test regularly and I\'m not aware of our failover and recovery plans.',
      'I feel reasonably confident that our organization\'s most critical infrastructure and applications would either fail over with minimal disruption or could be recovered within our stated recovery objectives.',
      'My organization tests our most critical infrastructure and applications regularly, so I am confident that we can run our business in the event of a partial outage of our hyperscaler partner.'
    ]
  }
];

const erpOptions = [
  'SAP',
  'Oracle',
  'Microsoft Dynamics',
  'Other',
];

const AssessmentForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [form, setForm] = useState({ name: '', email: '', erp: '', privacy: false });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleOptionChange = (value: string | string[]) => {
    const newAnswers = [...answers];
    newAnswers[step] = value;
    setAnswers(newAnswers);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const submissionData = {
        ...form,
        formType: 'Assessment Request',
        assessmentType: 'Cloud Journey Assessment',
        currentChallenges: 'Assessment responses collected',
        goals: 'Cloud optimization and strategy guidance',
        answers: answers,
        industry: 'Technology', // Default or could be collected
        phone: '', // Optional field
        company: '' // Optional field
      };

      const response = await fetch(getApiUrl(apiEndpoints.assessmentForm), {
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
        setSubmitMessage(data.message || 'Failed to submit assessment. Please try again.');
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
    setSubmitted(true);
  };

  const handleVerificationCancel = () => {
    setShowOTPVerification(false);
    setSubmitMessage('Assessment submission cancelled.');
    setMessageType('error');
  };

  if (submitted) {
    return (
      <div style={{ padding: 32, textAlign: 'center' }}>
        <h2 style={{ color: '#3a3dc4', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Thank you for completing the VirtuSwift Assessment!</h2>
        <p style={{ color: '#232342', fontSize: 16 }}>Our team will review your responses and reach out with tailored guidance for your cloud journey.</p>
      </div>
    );
  }

  if (step >= questions.length) {
    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: 340, width: '100%', margin: '0 auto', padding: 32, background: '#fff', borderRadius: 0, boxShadow: '0 8px 32px rgba(35,61,196,0.13)' }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          value={form.name}
          onChange={handleFormChange}
          required
          style={{ width: '100%', marginBottom: 16, padding: 14, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: 16 }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={form.email}
          onChange={handleFormChange}
          required
          style={{ width: '100%', marginBottom: 16, padding: 14, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: 16 }}
        />
        <select
          name="erp"
          value={form.erp}
          onChange={handleFormChange}
          required
          style={{ width: '100%', marginBottom: 16, padding: 14, borderRadius: 10, border: '1px solid #e0e0e0', fontSize: 16 }}
        >
          <option value="">What is your Core ERP?*</option>
          {erpOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div style={{ marginBottom: 16, fontSize: 13, color: '#232342', textAlign: 'left' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <input
              type="checkbox"
              name="privacy"
              checked={form.privacy}
              onChange={handleFormChange}
              required
              style={{ marginTop: 3 }}
            />
            VirtuSwift is committed to protecting and respecting your privacy. By completing this assessment you are consenting to VirtuSwift's collection, processing, and storing of the data included in your responses. We will only use your personal information and any other data you include in your assessment to administer your account as you've requested. Occasionally, we would like to contact you about our products and services. If you consent to us contacting you, please tick the checkbox to enable email communication from VirtuSwift. You can unsubscribe at any time. For more information, please review our Privacy Policy. By clicking submit, you consent to allow VirtuSwift to store and process the personal information submitted to provide you the content requested.
          </label>
        </div>
        {submitMessage && (
          <div style={{
            marginBottom: 16,
            padding: 12,
            borderRadius: 10,
            backgroundColor: messageType === 'success' ? '#f0f9ff' : '#fef2f2',
            color: messageType === 'success' ? '#065f46' : '#991b1b',
            fontSize: 14,
            textAlign: 'left'
          }}>
            {submitMessage}
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            width: '100%', 
            background: isSubmitting ? '#9ca3af' : '#3a3dc4', 
            color: '#fff', 
            border: 'none', 
            borderRadius: 24, 
            padding: '14px 0', 
            fontSize: 18, 
            fontWeight: 600, 
            letterSpacing: 2, 
            cursor: isSubmitting ? 'not-allowed' : 'pointer', 
            marginTop: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8
          }}
        >
          {isSubmitting && <FontAwesomeIcon icon={faSpinner} className="animate-spin" />}
          {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
        </button>

        {/* OTP Verification Modal */}
        {showOTPVerification && (
          <OTPVerification
            email={form.email}
            onVerificationSuccess={handleVerificationSuccess}
            onCancel={handleVerificationCancel}
            formType="Assessment Request"
          />
        )}
      </form>
    );
  }

  const q = questions[step];
  const value = answers[step] || (q.type === 'multi' ? [] : '');

  return (
    <div style={{
      maxWidth: 600,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      padding: 48,
      background: '#fff',
      borderRadius: 0,
      boxShadow: '0 8px 32px rgba(35,61,196,0.13)',
      justifyContent: 'flex-start',
    }}>
      {/* Title and Progress */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: '#3a3dc4', marginBottom: 4, letterSpacing: 1 }}>VirtuSwift Cloud Assessment</div>
        <div style={{ color: '#888', fontSize: 16, fontWeight: 500, marginBottom: 8 }}>Step {step + 1} of {questions.length}</div>
        <div style={{ height: 3, background: '#ececec', borderRadius: 2, marginBottom: 18, overflow: 'hidden' }}>
          <div style={{ width: `${((step + 1) / questions.length) * 100}%`, height: '100%', background: '#3a3dc4', transition: 'width 0.3s' }} />
        </div>
      </div>
      {/* Question Area */}
      <div style={{
        background: '#f7f8fa',
        borderRadius: 12,
        padding: '32px 28px',
        marginBottom: 28,
        boxShadow: '0 2px 8px rgba(35,61,196,0.06)',
        border: '1.5px solid #e0e0e0',
        flex: 1,
        overflowY: 'auto',
      }}>
        <div style={{ marginBottom: 18, color: '#3a3dc4', fontWeight: 700, fontSize: 20 }}>{q.title}</div>
        <div style={{ marginBottom: 18, color: '#232342', fontSize: 18, fontWeight: 600 }}>{q.question}</div>
        <div style={{ marginBottom: 0 }}>
          {q.type === 'single' && q.options.map(opt => (
            <label key={opt} style={{
              display: 'block',
              marginBottom: 14,
              fontSize: 16,
              color: '#232342',
              border: value === opt ? '2px solid #3a3dc4' : '1.5px solid #e0e0e0',
              borderRadius: 8,
              padding: '14px 18px',
              cursor: 'pointer',
              background: value === opt ? '#eaf0ff' : '#fff',
              fontWeight: value === opt ? 700 : 500,
              boxShadow: value === opt ? '0 2px 8px rgba(35,61,196,0.08)' : 'none',
              transition: 'all 0.18s',
            }}>
              <input
                type="radio"
                name={`q${step}`}
                value={opt}
                checked={value === opt}
                onChange={() => handleOptionChange(opt)}
                style={{ marginRight: 12 }}
              />
              {opt}
            </label>
          ))}
          {q.type === 'multi' && q.options.map(opt => (
            <label key={opt} style={{
              display: 'block',
              marginBottom: 14,
              fontSize: 16,
              color: '#232342',
              border: value.includes(opt) ? '2px solid #3a3dc4' : '1.5px solid #e0e0e0',
              borderRadius: 8,
              padding: '14px 18px',
              cursor: 'pointer',
              background: value.includes(opt) ? '#eaf0ff' : '#fff',
              fontWeight: value.includes(opt) ? 700 : 500,
              boxShadow: value.includes(opt) ? '0 2px 8px rgba(35,61,196,0.08)' : 'none',
              transition: 'all 0.18s',
            }}>
              <input
                type="checkbox"
                name={`q${step}`}
                value={opt}
                checked={value.includes(opt)}
                onChange={e => {
                  if (e.target.checked) {
                    handleOptionChange([...value, opt]);
                  } else {
                    handleOptionChange(value.filter((v: string) => v !== opt));
                  }
                }}
                style={{ marginRight: 12 }}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
          style={{
            background: '#fff',
            color: '#3a3dc4',
            border: '2px solid #3a3dc4',
            borderRadius: 24,
            padding: '12px 36px',
            fontSize: 17,
            fontWeight: 700,
            cursor: step === 0 ? 'not-allowed' : 'pointer',
            opacity: step === 0 ? 0.5 : 1,
            boxShadow: '0 1px 4px rgba(35,61,196,0.06)',
            transition: 'all 0.18s',
          }}
        >Back</button>
        <button
          onClick={() => setStep(s => s + 1)}
          disabled={q.type === 'single' ? !value : q.type === 'multi' ? value.length === 0 : false}
          style={{
            background: '#3a3dc4',
            color: '#fff',
            border: 'none',
            borderRadius: 24,
            padding: '12px 36px',
            fontSize: 17,
            fontWeight: 700,
            cursor: (q.type === 'single' ? !value : value.length === 0) ? 'not-allowed' : 'pointer',
            opacity: (q.type === 'single' ? !value : value.length === 0) ? 0.5 : 1,
            boxShadow: '0 1px 4px rgba(35,61,196,0.10)',
            transition: 'all 0.18s',
          }}
        >Continue</button>
      </div>
    </div>
  );
};

export default AssessmentForm; 