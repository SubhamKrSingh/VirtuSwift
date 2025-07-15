import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faCogs, faCloud, faRocket, faCheckCircle, faSync, faDatabase, faLock, faMoneyBillWave, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export default function DataDrivenDecisionMaking() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/dataanalytics3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Drive Strategy with Actionable Intelligence</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift empowers decision-makers through real-time analytics and insights tailored for business impact.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Enable Smarter Decisions</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Data-Driven Intelligence? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Choose VirtuSwift for Data-Driven Intelligence?</h2>
            <p className="text-lg text-gray-700 mb-6">We help businesses make faster, fact-based decisions.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#008BCF] text-xl" /> Real-Time BI Dashboards</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faSync} className="text-[#3a3dc4] text-xl" /> Embedded Analytics Across Workflows</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#f05a28] text-xl" /> Predictive & Prescriptive Modeling</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Decision Governance and KPI Alignment</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request a Data Intelligence Workshop</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics4.png" alt="Data-Driven Intelligence Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">When data leads, business follows.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#3a3dc4] text-xl" /> Unified Decision-Making Frameworks</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#008BCF] text-xl" /> Greater Forecasting Accuracy</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faDatabase} className="text-[#f05a28] text-xl" /> Democratized Access to Analytics</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#008BCF] text-xl" /> Scalable Intelligence Infrastructure</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Turn Data into Direction →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics3.png" alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Optimize Your DevOps Initiatives? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🌐 Ready to Optimize Your DevOps Initiatives?</h2>
        <p className="text-xl text-gray-600 mb-6">Let VirtuSwift help your organization unlock the full potential of its data.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/dataanalytics4.png" alt="DevOps Data Optimization" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '250px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule a Decision Intelligence Strategy Call</Link>
      </div>

      {/* Other Offerings in DevOps Services */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🚀 Other Offerings in DevOps Services</h2>
        <p className="text-xl text-gray-600 mb-6">Accelerate Development, Improve Reliability, and Streamline Delivery with DevOps</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faSync} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🔄 Continuous Integration and Continuous Deployment (CI/CD)</h4>
            <p className="text-gray-600 text-sm">Automate your entire software delivery pipeline. We implement robust CI/CD practices that enable rapid, reliable code changes, testing, and deployments — ensuring your applications evolve faster and reach users quicker.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faDatabase} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🗄️ Data Warehousing and Integration</h4>
            <p className="text-gray-600 text-sm">Integrate DevOps into your data pipelines. We manage data infrastructure as code and streamline integration between systems, enabling real-time data availability across environments and teams.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCogs} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">⚙️ Application and Database Management</h4>
            <p className="text-gray-600 text-sm">Maintain high availability and performance. We apply DevOps practices to application and DB management — including automated backups, performance monitoring, and failover setups — reducing manual effort and downtime.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faLock} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🔐 Cloud Security and Compliance</h4>
            <p className="text-gray-600 text-sm">Embed security in every stage of delivery. Our DevSecOps approach integrates security checks, access controls, and compliance automation into your CI/CD pipelines — helping you deploy with confidence and meet regulatory standards.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">💰 Data Monetization Strategies</h4>
            <p className="text-gray-600 text-sm">Enable faster iteration on monetization features. We help your teams deploy, test, and refine data products quickly — so you can capitalize on insights, behavior analytics, and revenue-driving innovations in real time.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCloud} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">☁️ Cloud Migration and Integration</h4>
            <p className="text-gray-600 text-sm">Automate and scale your cloud adoption. We manage containerization, orchestration, and continuous deployment to ensure seamless cloud transitions that reduce risk and speed up time to value.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🌐 Internet of Things (IoT) Solutions</h4>
            <p className="text-gray-600 text-sm">Bring DevOps to the edge. We help deploy and manage IoT applications with CI/CD-enabled firmware updates, remote device monitoring, and event-driven integration for smarter, scalable solutions.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">💡 Ready to Supercharge Your DevOps Pipeline?</h2>
        <p className="text-xl text-gray-600 mb-6">Let’s build faster, smarter, and more reliable systems that deliver true business agility.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/dataanalytics3.png" alt="VirtuSwift Data Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request Your DevOps Assessment →</Link>
      </div>
    </div>
  );
} 