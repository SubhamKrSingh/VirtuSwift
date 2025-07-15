import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faTachometerAlt, faCheckCircle, faUsers, faCogs, faFolderOpen, faSync, faCloud, faLock, faMoneyBillWave, faChartLine, faDatabase, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function DataStrategyAndPlanning() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/datastatergy.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Transform Chaos into Clarity with Smart Data Strategy</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">At VirtuSwift, we turn scattered data into strategic intelligence. Our tailored data strategies empower your business to govern, monetize, and scale with confidence—across every platform, department, and decision point.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mb-4">Craft Your Winning Data Roadmap</Link>
        </div>
      </section>

      {/* Why Do You Need a Data Strategy? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Do You Need a Data Strategy?</h2>
            <p className="text-lg text-gray-700 mb-6">Because in today’s digital economy, data isn’t just a byproduct—it’s your most valuable asset. But without a plan, it’s just noise.<br/>At VirtuSwift, we bring structure, vision, and monetization to your data. Whether you're just starting your data journey or scaling enterprise-wide, our strategies deliver measurable business outcomes.</p>
            <div className="bg-white rounded-xl shadow p-8 mb-6">
              <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">What We Deliver in Our Data Strategy Services</h3>
              <p className="mb-4">We don't just build data plans. We build competitive advantage.<br/>Included in Every Engagement:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Data Maturity Audits & Roadmap Development</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Governance, Quality, and Metadata Frameworks</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Master Data & Cataloging Solutions</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Data Monetization Blueprints (internal & external)</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Alignment of Data with Business KPIs</li>
              </ul>
              <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">📞 Schedule a Strategy Discovery Call</Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics2.png" alt="Data Strategy Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Why VirtuSwift? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">📈 Why VirtuSwift?</h2>
              <p className="text-lg text-gray-700 mb-6">Because we build data ecosystems that fuel business growth.<br/>With VirtuSwift, your teams won’t just access data—they’ll use it strategically.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faFolderOpen} className="text-[#008BCF] text-xl" /> 📂 Clear Ownership & Governance Structures</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#008BCF] text-xl" /> 📊 Fast Time to Actionable Insights</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faSync} className="text-[#008BCF] text-xl" /> 🔁 Reusable, Scalable Data Products</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#008BCF] text-xl" /> 🔄 Cross-Function Consistency Across Departments</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLightbulb} className="text-[#008BCF] text-xl" /> 💡 Insights that Drive ROI, Not Just Reports</li>
              </ul>
              <div className="italic text-[#3a3dc4] mb-4">💬 “We don’t just clean data—we clarify direction.”</div>
              <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">🔘 Talk to a Data Strategist Today</Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics4.png" alt="VirtuSwift Data Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Unlock the True Value of Your Data? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🔎 Ready to Unlock the True Value of Your Data?</h2>
            <p className="text-xl text-gray-600 mb-6">Let VirtuSwift guide you from raw information to real innovation.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">🚀 Book a Custom Data Strategy Session</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics3.png" alt="Data Value Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '250px' }} />
          </div>
        </div>
      </div>

      {/* Related Services in Data Analytics & Monetization */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🌐 Related Services in Data Analytics & Monetization</h2>
        <p className="text-xl text-gray-600 mb-6">At VirtuSwift, we go beyond strategy to power a full-spectrum data transformation:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faDatabase} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🗄️ Data Warehousing and Integration</h4>
            <p className="text-gray-600 text-sm">Centralize your data for fast, accurate decision-making with modern cloud-based warehousing and seamless integrations.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCogs} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">⚙️ Application and Database Management</h4>
            <p className="text-gray-600 text-sm">Optimize every layer of your analytics stack—from storage to querying—with managed solutions for scale, security, and performance.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faLock} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🔐 Cloud Security and Compliance</h4>
            <p className="text-gray-600 text-sm">Protect your data at every stage. We enforce encryption, access control, and compliance (HIPAA, GDPR, ISO) with precision.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">💰 Data Monetization Strategies</h4>
            <p className="text-gray-600 text-sm">Turn insights into income. Build APIs, create partner-ready data products, and launch scalable monetization models.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCloud} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">☁️ Cloud Migration and Integration</h4>
            <p className="text-gray-600 text-sm">Future-proof your data stack with smooth, secure migrations to cloud-native architectures—ensuring real-time access and agility.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faSync} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🌐 Internet of Things (IoT) Solutions</h4>
            <p className="text-gray-600 text-sm">Leverage data from sensors and smart devices with VirtuSwift’s connected infrastructure—enabling predictive insights and automation.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faChartLine} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">📊 Data-Driven Decision Making</h4>
            <p className="text-gray-600 text-sm">Empower your teams with visual dashboards, embedded AI, and business intelligence tools that drive precision and performance.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">💡 Let’s Turn Your Data into Your Competitive Edge</h2>
        <p className="text-xl text-gray-600 mb-6">VirtuSwift helps you build a data ecosystem that drives action, unlocks insights, and fuels innovation.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/dataanalytics.png" alt="VirtuSwift Data Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Book Your Free Strategy Call →</Link>
      </div>
    </div>
  );
} 