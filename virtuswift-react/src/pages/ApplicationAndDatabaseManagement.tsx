import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDatabase, faCheckCircle, faCloud, faRocket, faChartBar, faBalanceScale, faRedo, faShieldAlt, faBrain, faChartLine, faLock, faSync, faFolderOpen, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

export default function ApplicationAndDatabaseManagement() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/applicationanddatabase.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Keep Your Mission-Critical Apps and Databases Running at Peak Performance</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift delivers proactive, SLA-backed management of your application and database infrastructure—ensuring nonstop performance, availability, and peace of mind.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mb-4">Maximize Your Platform Uptime</Link>
        </div>
      </section>

      {/* Why Does Application & DB Management Matter? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Does Application & DB Management Matter?</h2>
            <p className="text-lg text-gray-700 mb-6">Because a single outage can cost more than money—it erodes trust.<br/>At VirtuSwift, we take the stress out of managing critical infrastructure. From real-time monitoring to failover protection, we keep your systems healthy, secure, and ready to scale.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">What We Offer</h3>
            <p className="mb-2 font-semibold text-[#f05a28]">Full-stack reliability. Zero excuses.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#008BCF] text-xl" /> Application Health Monitoring & Auto-Scaling</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faBrain} className="text-[#3a3dc4] text-xl" /> RDBMS and NoSQL Performance Optimization</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faShieldAlt} className="text-[#f05a28] text-xl" /> Backup, Restore, and Disaster Recovery Planning</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faBalanceScale} className="text-[#008BCF] text-xl" /> Load Balancing and High-Availability Architecture</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRedo} className="text-[#3a3dc4] text-xl" /> Versioning, Patch Management, and SLA Support</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request a Performance Optimization Plan</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/appliactionanddastabase1.png" alt="App & DB Management Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">The VirtuSwift Advantage</h2>
              <p className="text-lg text-gray-700 mb-6">Your infrastructure, always-on and always-optimized.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Seamless Database Administration</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> High-Availability Architecture That Just Works</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Reduced Downtime, Faster Troubleshooting</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Bulletproof Backup & Recovery Systems</li>
                <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Complete Visibility & Control with Reporting</li>
              </ul>
              <div className="italic text-[#3a3dc4] mb-4">“Great systems don’t just run. They run smart.”</div>
              <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Ensure Application Continuity</Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics4.png" alt="VirtuSwift Management Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Optimize Section */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Ready to Optimize Your Enterprise Systems?</h2>
        <p className="text-xl text-gray-600 mb-6">Let VirtuSwift fine-tune your apps and databases for next-level performance and resilience.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/applicationanddatabase3.png" alt="App & DB Optimization Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Infrastructure Review</Link>
      </div>

      {/* Related Services in Data Analytics & Monetization */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Explore More from Our Data Analytics & Monetization Services</h2>
        <p className="text-xl text-gray-600 mb-6">Unleash the full potential of your data with VirtuSwift.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faChartBar} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Data Strategy and Planning</h4>
            <p className="text-gray-600 text-sm">Define a smarter future. We craft enterprise-wide strategies that align governance, monetization, and analytics with your business roadmap.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faDatabase} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Data Warehousing and Integration</h4>
            <p className="text-gray-600 text-sm">Get unified, structured, and real-time data across your cloud ecosystem. We build lakehouses and design high-speed integration pipelines to fuel BI and ML initiatives.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faLock} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Cloud Security and Compliance</h4>
            <p className="text-gray-600 text-sm">Secure every layer of your data environment with robust access controls, encryption, and compliance frameworks for HIPAA, GDPR, ISO, and more.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Data Monetization Strategies</h4>
            <p className="text-gray-600 text-sm">Convert your internal data into external value. From subscription APIs to partner-facing platforms, we help you unlock new revenue streams.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCloud} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Cloud Migration and Integration</h4>
            <p className="text-gray-600 text-sm">Move workloads, apps, and databases to the cloud without friction. We modernize infrastructure while protecting uptime and performance.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faSync} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Internet of Things (IoT) Solutions</h4>
            <p className="text-gray-600 text-sm">Extend your analytics into the physical world. We collect, connect, and compute IoT data to drive smarter automation and predictive decision-making.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faChartLine} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">Data-Driven Decision Making</h4>
            <p className="text-gray-600 text-sm">Empower every team with real-time dashboards, AI models, and visualization tools. We make insight delivery scalable and strategic.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Let’s Make Your Infrastructure Future-Ready</h2>
        <p className="text-xl text-gray-600 mb-6">From backend performance to business insight, your systems deserve expert care. We’re here to deliver it.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/dataanalytics3.png" alt="VirtuSwift Data Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Optimization Session</Link>
      </div>
    </div>
  );
} 