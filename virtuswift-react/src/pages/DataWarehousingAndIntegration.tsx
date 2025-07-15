import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCheckCircle, faCloud, faLock, faChartBar, faRocket, faLightbulb, faCogs, faFolderOpen, faSync, faMoneyBillWave, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function DataWarehousingAndIntegration() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/datawarehousing.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Unify, Integrate & Accelerate with Cloud-Ready Data Architecture</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift delivers scalable data warehousing and lightning-fast integrations—so your teams can access the right data at the right time, across every system and department.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mb-4">Streamline Your Data Operations</Link>
        </div>
      </section>

      {/* Why Does Modern Data Warehousing Matter? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Does Modern Data Warehousing Matter?</h2>
            <p className="text-lg text-gray-700 mb-6">Because siloed data delays decisions. And delay kills momentum.<br/>VirtuSwift helps you build a single source of truth—clean, connected, and always ready for insight. From cloud lakes to real-time integration, we architect data pipelines that fuel growth.</p>
            <div className="bg-white rounded-xl shadow p-8 mb-6">
              <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">What We Deliver</h3>
              <p className="mb-4">Your data, always-on and insight-ready.<br/>Our Core Services Include:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Cloud & Hybrid Data Warehouse Solutions (BigQuery, Snowflake, Redshift)</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Automated ETL/ELT Pipeline Design</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Lakehouse Architecture & Schema Modeling</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Real-Time, Low-Latency Data Integration</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Monitoring & Optimization Workflows</li>
              </ul>
              <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">📞 Get Your Custom Data Blueprint</Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/datawarehousing1.png" alt="Data Warehousing Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">📈 The VirtuSwift Advantage</h2>
              <p className="text-lg text-gray-700 mb-6">We modernize your data core for a smarter, faster enterprise.<br/>With VirtuSwift, You Gain:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faSync} className="text-[#008BCF] text-xl" /> 🔁 Unified & Analytics-Ready Data</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#008BCF] text-xl" /> 🚀 Faster Time-to-Insight</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faFolderOpen} className="text-[#008BCF] text-xl" /> 📂 Centralized Access Across Teams</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#008BCF] text-xl" /> ⚙️ Lower Maintenance, Higher Reliability</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#008BCF] text-xl" /> 📉 Reduced Redundancy and Manual Errors</li>
              </ul>
              <div className="italic text-[#3a3dc4] mb-4">💬 “Your data should work for you, not the other way around.”</div>
              <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">🔘 Build a High-Performance Data Layer</Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics4.png" alt="VirtuSwift Data Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Scale Section */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900 flex flex-col items-center justify-center"><span className="text-4xl mb-2">🌐</span>Ready to Scale with Seamless Data Infrastructure?</h2>
        <p className="text-xl text-gray-600 mb-6">VirtuSwift is your partner in powering enterprise-wide analytics with precision.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/datawarehousing1.png" alt="Data Value Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '250px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">🚀 Request Your Data Integration Assessment</Link>
      </div>

      {/* Related Services in Data Analytics & Monetization */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🚀 Explore More from Our Data Analytics & Monetization Suite</h2>
        <p className="text-xl text-gray-600 mb-6">Harness the full power of your data across strategy, security, and monetization.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faChartBar} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">📈 Data Strategy and Planning</h4>
            <p className="text-gray-600 text-sm">Create a roadmap that aligns your business goals with data value. From governance models to monetization frameworks, we turn your data into a growth engine.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCogs} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">⚙️ Application and Database Management</h4>
            <p className="text-gray-600 text-sm">Keep your data systems optimized and secure. We manage app and database performance across your architecture—ensuring 24/7 reliability and uptime.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faLock} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🔐 Cloud Security and Compliance</h4>
            <p className="text-gray-600 text-sm">Protect your data across every layer. We implement encryption, IAM, access controls, and compliance models (GDPR, HIPAA, ISO) with precision.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">💰 Data Monetization Strategies</h4>
            <p className="text-gray-600 text-sm">Identify, package, and profit from your data. We help you build APIs, embed insights, and create partner-facing products that open new revenue streams.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCloud} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">☁️ Cloud Migration and Integration</h4>
            <p className="text-gray-600 text-sm">Move faster with cloud-native infrastructure. We migrate and integrate your data stacks to unlock scalability, performance, and real-time agility.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faSync} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🌐 Internet of Things (IoT) Solutions</h4>
            <p className="text-gray-600 text-sm">Extend your data reach. Our IoT integrations bring in real-time insights from connected devices—boosting automation and predictive capabilities.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faChartLine} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">📊 Data-Driven Decision Making</h4>
            <p className="text-gray-600 text-sm">Make intelligence your default mode. From BI dashboards to AI models, we ensure your teams have the insights they need—when and where they need them.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">💡 Let’s Build the Future of Your Data Ecosystem</h2>
        <p className="text-xl text-gray-600 mb-6">Your data is full of potential. Let’s unlock it—together.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/dataanalytics3.png" alt="VirtuSwift Data Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Book Your Data Integration Session →</Link>
      </div>
    </div>
  );
} 