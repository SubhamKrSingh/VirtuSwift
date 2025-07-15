import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheckCircle, faCloud, faChartBar, faRocket, faLightbulb, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const securityServices = [
  'Full Cloud Security Audits & Vulnerability Hardening',
  'Identity & Access Management (IAM), Encryption, MFA',
  'Compliance Implementation: ISO 27001, SOC 2, HIPAA, GDPR',
  'Key Management Systems (KMS) and Secure Data Storage',
  'Real-Time Threat Detection and Intrusion Response',
  'Continuous Compliance Monitoring & Reporting',
];

const advantageList = [
  'Lower Risk of Breaches or Ransomware Attacks',
  'Regulatory Compliance Built into Every Layer',
  'Scalable, Role-Based Cloud Access Control',
  'Encrypted Communication, APIs, and Data Pipelines',
  'Real-Time Monitoring and Automated Threat Response',
];

const suite = [
  {
    icon: faLightbulb,
    title: 'Cloud Strategy and Consulting',
    desc: 'Develop a cloud roadmap that’s resilient, cost-efficient, and built for growth. From platform selection to governance frameworks, we align cloud to business goals.'
  },
  {
    icon: faDatabase,
    title: 'Data Warehousing and Integration',
    desc: 'Centralize and streamline your data operations. We integrate, govern, and activate data pipelines that scale securely across your enterprise.'
  },
  {
    icon: faCloud,
    title: 'Cloud Migration and Integration',
    desc: 'Move confidently to the cloud with secure replatforming, phased rollouts, and continuous post-migration hardening.'
  },
  {
    icon: faChartBar,
    title: 'Data Monetization Strategies',
    desc: 'Turn data into a revenue generator. We help you create secure, compliant data products with embedded analytics.'
  },
  {
    icon: faCloud,
    title: 'Internet of Things (IoT) Solutions',
    desc: 'Extend security to the edge. Our IoT solutions integrate endpoint security and real-time monitoring to keep devices and data safe.'
  },
  {
    icon: faChartBar,
    title: 'Data-Driven Decision Making',
    desc: 'Unlock secure analytics with governed access, encrypted pipelines, and audit trails—so insights remain protected while scaling.'
  },
];

export default function CloudSecurityCompliance() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center mb-16" style={{ backgroundImage: 'url(/assets/cloudsecurity1.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Stay Compliant. Stay Protected.</h1>
            <p className="text-lg md:text-xl mb-6">VirtuSwift secures your cloud environments with enterprise-grade policies, identity controls, encryption, and automated compliance monitoring—so your business stays resilient, audit-ready, and breach-proof.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">Harden Your Cloud Infrastructure</Link>
          </div>
        </div>
      </section>

      {/* Is Your Cloud Secure Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faLock} className="text-[#3a3dc4]" /> Is Your Cloud Truly Secure?</h2>
                <p className="text-gray-700 mb-6">Cyber threats evolve daily—your defense strategy must evolve faster.<br/>At VirtuSwift, we go beyond patchwork fixes. We architect zero-trust cloud environments and embed compliance from the core. Whether you're aiming for ISO, SOC 2, HIPAA, or GDPR compliance, our team ensures you're always ahead of risks and regulations.</p>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudsecurity2.png" alt="VirtuSwift Cloud Security" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Does VirtuSwift Secure Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4]" /> What Does VirtuSwift Secure?</h2>
                <h3 className="text-xl font-semibold text-[#3a3dc4] mb-4">Our Services Include:</h3>
                <ul className="space-y-4 mb-8 list-disc pl-6">
                  {securityServices.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request a Cloud Security Review</Link>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudsecurity3.png" alt="VirtuSwift Secure Services" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Security-First Cloud Architecture Matters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4]" /> Why Security-First Cloud Architecture Matters</h2>
                <p className="text-gray-700 mb-6">Security isn't an afterthought—it's your foundation for trust and scalability.</p>
                <ul className="space-y-4 mb-8 list-disc pl-6">
                  {advantageList.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <span className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">Secure, Compliant, Scalable—from Day One →</span>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudsecurity4.png" alt="Security-First Cloud Architecture" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Secure Section */}
      <section className="py-12 bg-gradient-to-r from-[#232584] to-[#1c1c38] text-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Secure Your Cloud Workloads?</h2>
            <p className="text-lg text-gray-200 mb-6">We protect what matters most—your infrastructure, your data, and your reputation.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a Cloud Security Consultation</Link>
          </div>
        </div>
      </section>

      {/* Digital Transformation Suite */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Explore More of VirtuSwift’s Digital Transformation Services</h2>
            <p className="text-lg text-gray-600 mb-6">We don’t just modernize—we fortify your cloud foundation for long-term growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {suite.map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
                <FontAwesomeIcon icon={s.icon} className="text-2xl text-[#3a3dc4] mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#232584] to-[#1c1c38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Still Relying on Basic Cloud Security?</h2>
          <p className="text-lg text-gray-200 mb-6">Let’s future-proof your cloud with advanced security frameworks and compliance automation.</p>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Free Security & Compliance Assessment →</Link>
        </div>
      </section>
    </div>
  );
} 