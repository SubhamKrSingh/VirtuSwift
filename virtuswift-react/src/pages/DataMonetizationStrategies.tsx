import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMoneyBillWave, faCogs, faCloud, faRocket, faCheckCircle, faChartBar, faDatabase, faLock, faLightbulb, faSync, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default function DataMonetizationStrategies() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/datamonetisation].png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Turn Enterprise Data into Growth Engines</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift empowers you to unlock the hidden revenue potential of your enterprise data—securely, ethically, and at scale.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mb-4">Start Monetizing Your Data</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Data Monetization? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Choose VirtuSwift for Data Monetization?</h2>
            <p className="text-lg text-gray-700 mb-6">Data isn’t just an asset—it’s a business model.<br/>At VirtuSwift, we architect monetization strategies that turn raw data into high-value offerings—driving new services, products, and revenue streams while maintaining governance and trust.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#008BCF] text-xl" /> Data Asset Discovery & Valuation</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faFolderOpen} className="text-[#008BCF] text-xl" /> Internal and External Monetization Frameworks</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#3a3dc4] text-xl" /> Licensing, Subscription & Usage Models</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLock} className="text-[#f05a28] text-xl" /> Consent Management & Ethical Governance</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Industry-Aligned Compliance (GDPR, HIPAA, etc.)</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request a Monetization Workshop</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics3.png" alt="Data Monetization Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">The VirtuSwift Advantage</h2>
              <p className="text-lg text-gray-700 mb-6">Monetize with confidence—governed, secure, and scalable.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faMoneyBillWave} className="text-[#f05a28] text-xl" /> Revenue-Generating Data Products</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Risk-Controlled Data Sharing</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#3a3dc4] text-xl" /> Data Value Attribution Models</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> Ecosystem Partnerships & APIs</li>
              </ul>
              <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Build Smart, Profitable Data Ecosystems</Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics4.png" alt="VirtuSwift Monetization Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Other Offerings in Data Analytics & Monetization */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Other Offerings in Data Analytics & Monetization</h2>
        <p className="text-xl text-gray-600 mb-6">Unlock the power of data to drive intelligence, revenue, and innovation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faChartBar} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Data Strategy and Planning</h4>
            <p className="text-gray-600 text-sm">Lay the foundation for data growth. Define your vision, build a roadmap, and align governance with business outcomes.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faDatabase} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Data Warehousing and Integration</h4>
            <p className="text-gray-600 text-sm">Break down data silos with scalable warehouses and integration pipelines that power accurate, real-time analytics.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCogs} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Application and Database Management</h4>
            <p className="text-gray-600 text-sm">Ensure continuous performance of your data ecosystem. We monitor, optimize, and support every layer—apps to databases.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faLock} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Cloud Security and Compliance</h4>
            <p className="text-gray-600 text-sm">Protect your monetization efforts with robust encryption, role-based access, and audit-ready frameworks.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCloud} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Cloud Migration and Integration</h4>
            <p className="text-gray-600 text-sm">Move your analytics stack to the cloud securely and efficiently, enabling faster processing and flexible scaling.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faSync} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Internet of Things (IoT) Solutions</h4>
            <p className="text-gray-600 text-sm">Monetize real-world data. We design IoT systems that turn device data into operational intelligence and business value.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faChartLine} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Data-Driven Decision Making</h4>
            <p className="text-gray-600 text-sm">Empower every team with smart dashboards, analytics, and predictive models for data-backed decisions.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Ready to Profit from Your Data?</h2>
        <p className="text-xl text-gray-600 mb-6">Let VirtuSwift build your data monetization engine—strategic, secure, and scalable.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/dataanalytics3.png" alt="VirtuSwift Data Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Data Strategy Session</Link>
      </div>
    </div>
  );
} 