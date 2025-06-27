import React, { useState, useEffect } from 'react';
import './Chatbot.css';
const logo = '/Png-02.png';

interface Option {
  label: string;
  next: string;
}

interface SelectOption {
  label: string;
  value: string;
}

interface ChatNode {
  message: string;
  options: Option[];
}

interface Message {
  from: 'bot' | 'user';
  text: string;
  options?: Option[];
  selectOptions?: SelectOption[];
  onSelectNext?: string;
}

const serviceSelectOptions: SelectOption[] = [
  { label: 'Cloud Migration (AWS, Azure, Google)', value: 'cloud-migration' },
  { label: 'Web & App Development', value: 'web-app-dev' },
  { label: 'IT Managed Services', value: 'it-managed' },
  { label: 'Cybersecurity Solutions', value: 'cybersecurity' },
  { label: 'ERP Implementation (SAP, Oracle, Dynamics)', value: 'erp' },
  { label: 'Data Analytics & AI', value: 'data-ai' },
  { label: 'Custom Software Solutions', value: 'custom-software' },
  { label: 'Other', value: 'other' },
];

const projectSelectOptions: SelectOption[] = [
  { label: 'New Cloud Implementation', value: 'cloud' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'IT Support/Helpdesk', value: 'it-support' },
  { label: 'Security Assessment', value: 'security' },
  { label: 'Business Process Automation', value: 'automation' },
  { label: 'Other', value: 'other' },
];

const chatFlow: Record<string, ChatNode & { selectOptions?: SelectOption[], onSelectNext?: string }> = {
  start: {
    message: 'Hi, and welcome to VirtuSwift! How can I help you? Choose an option below.',
    options: [
      { label: 'I need support on a new, upcoming project.', next: 'project_support_select' },
      { label: "I'd like to learn more about VirtuSwift's services.", next: 'services_select' },
      { label: "I'm interested in career opportunities at VirtuSwift.", next: 'careers' },
      { label: 'Other', next: 'other' },
    ],
  },
  project_support_select: {
    message: 'Great! Can you tell us what type of project support you need?',
    options: [],
    selectOptions: projectSelectOptions,
    onSelectNext: 'project_support_detail',
  },
  project_support_detail: {
    message: 'Thank you! Please briefly describe your project or requirements, and our team will get back to you at support@virtuswift.com or via our contact form.',
    options: [],
  },
  services_select: {
    message: 'VirtuSwift offers a range of services. What are you most interested in?',
    options: [],
    selectOptions: serviceSelectOptions,
    onSelectNext: 'services_detail',
  },
  services_detail: {
    message: 'Would you like to be contacted by our team for more information, or would you like to read more on our Services page?',
    options: [
      { label: 'Contact me', next: 'contact_request' },
      { label: 'Show me the Services page', next: 'show_services_page' },
    ],
  },
  contact_request: {
    message: 'Please provide your preferred contact details or email us at info@virtuswift.com. Our team will reach out to you soon!',
    options: [],
  },
  show_services_page: {
    message: 'You can find detailed information about our services on the Services page.',
    options: [],
  },
  careers: {
    message: "We're always looking for talented people! Visit our Careers page to see open positions or send your resume to careers@virtuswift.com.",
    options: [],
  },
  other: {
    message: 'Please describe your request using our contact form or email info@virtuswift.com.',
    options: [],
  },
  end: {
    message: 'Thank you for chatting with VirtuSwift! If you have more questions, just open the chat again.',
    options: [],
  },
};

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [history, setHistory] = useState<Message[]>([
    { from: 'bot', text: chatFlow.start.message, options: chatFlow.start.options },
  ]);
  const [selectValue, setSelectValue] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Show popup only on home page and only if chatbot is not open
  useEffect(() => {
    // Check if on home page (window.location.pathname === '/')
    if (window.location.pathname === '/') {
      const timer = setTimeout(() => {
        if (!open) setShowPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleOptionClick = (option: Option) => {
    const nextNode = chatFlow[option.next];
    setHistory((prev) => [
      ...prev,
      { from: 'user', text: option.label },
      { from: 'bot', text: nextNode.message, options: nextNode.options, selectOptions: nextNode.selectOptions, onSelectNext: nextNode.onSelectNext },
    ]);
    setSelectValue('');
  };

  const handleSelect = (value: string, selectOptions: SelectOption[], onSelectNext?: string) => {
    const selected = selectOptions.find(opt => opt.value === value);
    if (!selected || !onSelectNext) return;
    setHistory((prev) => [
      ...prev,
      { from: 'user', text: selected.label },
      { from: 'bot', text: chatFlow[onSelectNext].message, options: chatFlow[onSelectNext].options, selectOptions: chatFlow[onSelectNext].selectOptions, onSelectNext: chatFlow[onSelectNext].onSelectNext },
    ]);
    setSelectValue('');
  };

  return (
    <div className={`chatbot-container${open ? ' open' : ''}`}>  
      {/* Popup Welcome Message */}
      {showPopup && !open && (
        <div style={{
          position: 'absolute',
          bottom: 80,
          right: 0,
          zIndex: 1100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}>
          <div style={{
            position: 'relative',
            marginBottom: 8,
          }}>
            {/* Triangle pointer */}
            <div style={{
              position: 'absolute',
              right: 16,
              bottom: -18,
              width: 0,
              height: 0,
              borderLeft: '14px solid transparent',
              borderRight: '14px solid transparent',
              borderTop: '18px solid #fff',
              filter: 'drop-shadow(0 2px 4px rgba(35,61,196,0.10))',
              zIndex: 2,
            }} />
            <div style={{
              background: '#fff',
              color: '#232342',
              border: '2.5px solid #3a3dc4',
              borderRadius: '24px',
              padding: '10px 22px 10px 54px',
              fontSize: '15px',
              boxShadow: '0 8px 32px rgba(35,61,196,0.13)',
              maxWidth: 270,
              minWidth: 200,
              position: 'relative',
              fontWeight: 500,
              lineHeight: 1.5,
              display: 'flex',
              alignItems: 'center',
            }}>
              <img src={logo} alt="VirtuSwift Logo" style={{ width: 28, height: 28, borderRadius: '50%', position: 'absolute', left: 10, top: 8, border: '2px solid #fff', background: '#fff', boxShadow: '0 2px 8px rgba(35,61,196,0.10)' }} />
              <span style={{ display: 'block', marginLeft: 8 }}>
                Hi, and welcome to VirtuSwift!<br />How can I help you?
              </span>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 12,
                  background: 'transparent',
                  border: 'none',
                  color: '#3a3dc4',
                  fontSize: 22,
                  cursor: 'pointer',
                  padding: 0,
                  lineHeight: 1,
                }}
                aria-label="Close popup"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => { setOpen(!open); setShowPopup(false); }} aria-label={open ? 'Close Chat' : 'Open Chat'}>
        {/* Only show the message icon if the chatbot is closed */}
        {!open && (
          <img src={require('../assets/images/message.png')} alt="Open chat" style={{ width: 32, height: 32, display: 'block', margin: '0 auto' }} />
        )}
      </button>
      {open && (
        <div className="chatbot-window">
          {/* Header: logo and title left, close button right */}
          <div className="chatbot-header" style={{ display: 'flex', alignItems: 'center', height: 60, padding: '0 16px 0 20px', position: 'relative', background: '#3a3dc4', borderBottom: '1px solid #ececec', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
            <img src={logo} alt="VirtuSwift Logo" style={{ width: 36, height: 36, borderRadius: '50%', marginRight: 12, objectFit: 'cover', background: '#fff', padding: 4, boxShadow: '0 1px 4px rgba(35,35,66,0.10)' }} />
            <span className="chatbot-title" style={{ color: '#fff', fontWeight: 600, fontSize: 20, letterSpacing: 0.5, marginRight: 'auto' }}>VirtuSwift</span>
            <button
              onClick={() => { setOpen(false); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: 26,
                cursor: 'pointer',
                padding: 0,
                lineHeight: 1,
                zIndex: 3,
              }}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {history.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.from}`}>{msg.text}</div>
            ))}
            {/* Render select dropdown if present */}
            {history[history.length - 1].selectOptions && (
              <div className="chatbot-options">
                <select
                  className="chatbot-option-btn"
                  value={selectValue}
                  onChange={e => {
                    setSelectValue(e.target.value);
                    handleSelect(e.target.value, history[history.length - 1].selectOptions!, history[history.length - 1].onSelectNext);
                  }}
                >
                  <option value="">Select one</option>
                  {history[history.length - 1].selectOptions!.map((option, i) => (
                    <option key={i} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            )}
            {/* Render button options if present */}
            {history[history.length - 1].options && (
              <div className="chatbot-options">
                {history[history.length - 1].options!.map((option, i) => (
                  <button key={i} className="chatbot-option-btn" onClick={() => handleOptionClick(option)}>
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 