import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCheckCircle, faRocket, faLightbulb, faDatabase, faLock, faChartBar, faServer, faCogs, faShieldAlt, faChartLine, faBrain, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const btpServices = [
  'Custom Development on SAP BTP',
  'SAP Integration Suite & Workflow Services',
  'Fiori App Extensions & UI Enhancements',
  'DevOps and CI/CD Enablement for SAP Cloud',
  'SAP Analytics Cloud & Datasphere Integration',
  'Multi-Cloud BTP Deployment & Management',
];

const advantageList = [
  'Cloud-Native SAP Architecture',
  'Faster Deployment Cycles',
  'Developer-Friendly Environments',
  'Reduced Maintenance Overhead',
  'Scalable & Future-Ready Solutions',
];

const suite = [
  {
    icon: faServer,
    title: 'SAP Migrations & Managed Services (Including Infra, AMS)',
    desc: 'Simplify your transition to SAP or upgrade with confidence. From infrastructure setup to Application Management Services (AMS), we provide seamless SAP migrations, 24/7 support, and proactive monitoring to ensure business continuity and optimized performance.'
  },
  {
    icon: faDatabase,
    title: 'Data Warehousing and Integration',
    desc: 'Centralize your SAP and non-SAP data sources into a powerful warehouse. Our integration services ensure your enterprise data is always clean, accessible, and ready for deep analytics — enabling smarter, faster business decisions.'
  },
  {
    icon: faCogs,
    title: 'SAP Customization and Configuration',
    desc: 'No two businesses are the same — and neither should their SAP systems be. We customize and configure SAP modules to align with your exact workflows, industry standards, and business goals, ensuring maximum efficiency and user adoption.'
  },
  {
    icon: faLock,
    title: 'SAP Integration with Third-Party Systems',
    desc: 'Connect SAP seamlessly with your broader IT ecosystem. Whether it\'s CRM, eCommerce, logistics, or analytics platforms, we enable smooth two-way integration to streamline processes and eliminate data silos.'
  },
  {
    icon: faChartBar,
    title: 'Data Monetization Strategies',
    desc: 'Make your SAP data work harder for your business. We identify opportunities to monetize transactional and behavioral data, helping you build new revenue streams and offer data-driven services with measurable value.'
  },
  {
    icon: faCloud,
    title: 'Cloud Migration and Integration',
    desc: 'Transform your SAP landscape with cloud agility. We manage cloud migrations for SAP systems, integrating your ERP with public, private, or hybrid clouds while enhancing scalability, resilience, and operational speed.'
  },
  {
    icon: faRocket,
    title: 'Internet of Things (IoT) Solutions',
    desc: 'Extend the power of SAP to your connected devices. From asset tracking to predictive maintenance, we develop IoT solutions integrated with SAP to deliver real-time operational insights and automation across the value chain.'
  },
  {
    icon: faBrain,
    title: 'Data-Driven Decision Making',
    desc: 'Empower leaders with actionable SAP analytics. Our services include real-time dashboards, business intelligence tools, and predictive analytics — turning raw data into powerful insights that fuel smart strategies.'
  },
  {
    icon: faCode,
    title: 'SAP Cloud Platform Development',
    desc: 'Build custom apps, workflows, and extensions on SAP BTP (Business Technology Platform). We develop cloud-native solutions that integrate seamlessly with your SAP environment, unlocking innovation and rapid scalability.'
  },
];

export default function SapCloudPlatformDevelopment() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/cloudmigration2.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Build the Future of SAP on the Cloud</h1>
            <p className="text-lg md:text-xl mb-6">VirtuSwift leverages SAP Business Technology Platform (BTP) to build agile, intelligent, and scalable cloud-native SAP applications.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">Start Cloud-Native SAP Dev</Link>
          </div>
        </div>
      </section>

      {/* Why Choose VirtuSwift for SAP Platform Development? */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4]" /> 🚀 Why Choose VirtuSwift for SAP Platform Development?</h2>
                <p className="text-gray-700 mb-6">We deliver tailored solutions on SAP BTP to accelerate innovation and transformation.</p>
                <h3 className="text-xl font-semibold text-[#3a3dc4] mb-4">Our Services Include:</h3>
                <ul className="space-y-4 mb-8">
                  {btpServices.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request Development Roadmap</Link>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudmigration4.png" alt="SAP BTP Development" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The VirtuSwift Advantage */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4]" /> 📈 The VirtuSwift Advantage</h2>
                <p className="text-gray-700 mb-6">Future-ready SAP apps built for performance and agility.</p>
                <h3 className="text-xl font-semibold text-[#3a3dc4] mb-4">You Benefit From:</h3>
                <ul className="space-y-4 mb-8">
                  {advantageList.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <span className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">Build Smart with SAP Cloud →</span>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudmigration5.png" alt="VirtuSwift SAP BTP Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Optimize Your SAP Projects? */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">🌐 Ready to Optimize Your SAP Projects?</h2>
          <p className="text-lg text-gray-600 mb-6">VirtuSwift transforms your SAP landscape with cloud-first innovation.</p>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a SAP Discovery Session</Link>
        </div>
      </div>

      {/* Other Offerings in SAP Services */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">🚀 Other Offerings in SAP Services</h2>
        <p className="text-lg text-gray-600 mb-6">Enabling Intelligent Enterprises with Scalable SAP Solutions</p>
        <p className="text-gray-700 mb-8">Our SAP service suite is built to transform how your business operates — from migration and integration to smart automation and real-time insights. We deliver flexible, future-ready SAP solutions that empower you to innovate faster, reduce operational costs, and boost performance across the board.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {suite.map((s, i) => (
          <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={s.icon} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center mt-12 pb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">💡 Ready to Elevate Your SAP Ecosystem?</h2>
        <p className="text-lg text-gray-600 mb-6">Let's build intelligent SAP-powered solutions that drive value, speed, and growth.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/cloudmigration6.png" alt="SAP Ecosystem Elevation" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Schedule a Free SAP Strategy Call →</Link>
      </div>
    </div>
  );
} 