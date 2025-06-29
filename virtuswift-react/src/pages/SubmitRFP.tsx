import React, { useState } from 'react';

const titles = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];
const locations = ['USA', 'UK', 'India', 'Germany', 'Other'];
const industries = ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Other'];
const revenues = ['< $1M', '$1M - $10M', '$10M - $100M', '$100M - $1B', '> $1B'];

const SubmitRFP: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    phone: '',
    location: '',
    industry: '',
    company: '',
    revenue: '',
    comments: '',
    terms: false,
    file: undefined as File | undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, file: e.target.files?.[0] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    alert('Submitted!');
  };

  return (
    <div style={{ background: '#fafbfc', minHeight: '100vh', padding: '0 0 48px 0' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', borderRadius: 8, padding: '40px 32px 32px 32px', marginTop: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Request for proposal for services</h1>
        <div style={{ fontSize: 18, color: '#3a3dc4', fontWeight: 500, marginBottom: 32 }}>How can we help your business?</div>
        <div style={{ fontSize: 16, marginBottom: 18 }}>
          <b>Select a location to submit an RFP.</b>
        </div>
        <div style={{ fontSize: 15, color: '#444', marginBottom: 18 }}>
          VirtuSwift operates worldwide, and to ensure you are able to find the support you require, please <b>select your location</b> and you will be redirected to an RFP form of a VirtuSwift firm near you. The form will open in a new window.<br /><br />
          All other inquiries should be directed to the <a href="/contact" style={{ color: '#3a3dc4', textDecoration: 'underline' }}>Contact Us</a> page.
        </div>
        <form onSubmit={handleSubmit}>
          <select name="title" value={form.title} onChange={handleChange} required style={inputStyle}>
            <option value="">Title*</option>
            {titles.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name*" required style={inputStyle} />
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name*" required style={inputStyle} />
          <input name="position" value={form.position} onChange={handleChange} placeholder="Position/job title" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email address*" type="email" required style={inputStyle} />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" type="tel" style={inputStyle} />
          <select name="location" value={form.location} onChange={handleChange} required style={inputStyle}>
            <option value="">*Company location</option>
            {locations.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <select name="industry" value={form.industry} onChange={handleChange} required style={inputStyle}>
            <option value="">Industry*</option>
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company/Organization name" style={inputStyle} />
          <select name="revenue" value={form.revenue} onChange={handleChange} style={inputStyle}>
            <option value="">Yearly revenue</option>
            {revenues.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <div style={{ margin: '18px 0 8px 0', fontSize: 14, color: '#222' }}>Attachment</div>
          <input type="file" onChange={handleFile} style={{ marginBottom: 18 }} />
          <textarea name="comments" value={form.comments} onChange={handleChange} placeholder="Comments and/or instructions*" required style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', margin: '18px 0' }}>
            <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} required style={{ marginRight: 8, marginTop: 2 }} />
            <span style={{ fontSize: 14 }}>
              I have read and accept the <a href="/terms" style={{ color: '#3a3dc4', textDecoration: 'underline' }}>Terms of Use</a>. Please read our <a href="/privacy" style={{ color: '#3a3dc4', textDecoration: 'underline' }}>privacy statement</a> to understand how we plan to use your personal information.
            </span>
          </div>
          <button type="submit" style={{ background: '#3a3dc4', color: '#fff', border: 'none', borderRadius: 24, padding: '12px 38px', fontSize: 16, fontWeight: 600, cursor: 'pointer', marginTop: 8, letterSpacing: 1 }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  marginBottom: 16,
  padding: '12px 10px',
  borderRadius: 4,
  border: '1.5px solid #bfc7d1',
  fontSize: 15,
  fontWeight: 500,
  background: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
};

export default SubmitRFP; 