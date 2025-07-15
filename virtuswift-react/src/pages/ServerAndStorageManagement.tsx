import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faLock, faChartLine, faCheckCircle, faRocket, faCloud, faMoneyBillWave, faProjectDiagram, faCogs, faSync, faFolderOpen, faShieldAlt, faBalanceScale, faTools } from '@fortawesome/free-solid-svg-icons';

export default function ServerAndStorageManagement() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/itinfra.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Scale Smart. Store Secure.</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift delivers fully managed server and storage solutions that grow with your business—ensuring resilience, availability, and performance from core to edge.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">🗂 Assess Your Storage Strategy</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Server & Storage? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">🚀 Why Choose VirtuSwift for Server & Storage?</h2>
            <p className="text-lg text-gray-700 mb-6">We build robust, scalable infrastructure that just works—so you don’t have to worry about uptime or capacity limits.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faTools} className="text-[#008BCF] text-xl" /> Server Provisioning, Virtualization & Clustering</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faFolderOpen} className="text-[#3a3dc4] text-xl" /> SAN/NAS Management & Storage Tiering</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faShieldAlt} className="text-[#f05a28] text-xl" /> Backup Planning, Archival & Disaster Recovery</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faBalanceScale} className="text-[#008BCF] text-xl" /> Monitoring, Load Balancing & Failure Prevention</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">🛠 Get Infrastructure Management Support</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/itinfra1.png" alt="Server and Storage Management" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">📈 The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">Enterprise-grade architecture without the complexity.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faSync} className="text-[#3a3dc4] text-xl" /> 🔄 Seamless Scalability</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLock} className="text-[#008BCF] text-xl" /> 🔒 Secure, Fault-Tolerant Storage</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#f05a28] text-xl" /> 📈 Optimized Infrastructure Performance</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> 🧰 Disruption-Free Business Continuity</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Engineered for Uptime. Designed for Growth →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/itinfra3.png" alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Optimize Your IT Backbone? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🌐 Ready to Optimize Your IT Backbone?</h2>
        <p className="text-xl text-gray-600 mb-6">Let VirtuSwift manage your infrastructure with intelligent automation and high-touch support.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/datawarehousing.png" alt="Optimize IT Backbone" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '250px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">🚀 Secure Your IT Stack Now</Link>
      </div>

      {/* Other Offerings in Managed Services */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🚀 Other Offerings in Managed Services</h2>
        <p className="text-xl text-gray-600 mb-6">Maximize Uptime, Minimize Risk, and Empower Growth with Expert IT Management</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
        <OtherOffering
          icon={faServer}
          title="🖥️ IT Infrastructure Management (OS, DB, Security Operations)"
          desc="Ensure your core IT systems run at peak performance. We manage your operating systems, databases, and security operations end-to-end, offering 24/7 monitoring, vulnerability patching, and incident response to keep your infrastructure resilient and secure."
        />
        <OtherOffering
          icon={faDatabase}
          title="🗄️ Data Warehousing and Integration"
          desc="Centralize and streamline your enterprise data. Our managed data warehousing solutions ensure high availability, seamless integration, and readiness for analytics—giving your business the power to act faster and smarter."
        />
        <OtherOffering
          icon={faCogs}
          title="⚙️ Application and Database Management"
          desc="Eliminate downtime and performance bottlenecks. We manage, optimize, and support your business-critical applications and databases with proactive maintenance, tuning, and incident handling — ensuring stability and scalability."
        />
        <OtherOffering
          icon={faMoneyBillWave}
          title="💰 Data Monetization Strategies"
          desc="Turn your managed infrastructure into a value center. We help identify monetization opportunities, whether through optimized data products, cost-efficiency insights, or strategic usage of enterprise data assets."
        />
        <OtherOffering
          icon={faCloud}
          title="☁️ Cloud Migration and Integration"
          desc="Transition to cloud with confidence. We handle the full migration lifecycle — from planning and execution to integration and optimization — ensuring zero data loss and smooth operations in your new cloud environment."
        />
        <OtherOffering
          icon={faProjectDiagram}
          title="🌐 Internet of Things (IoT) Solutions"
          desc="Connect, monitor, and act with intelligence. Our IoT management services integrate devices and sensors with your IT infrastructure, enabling automated operations, real-time alerts, and continuous data collection from the edge."
        />
        <OtherOffering
          icon={faChartLine}
          title="📊 Data-Driven Decision Making"
          desc="Make every decision a strategic one. We provide fully managed analytics solutions — from data collection to dashboard creation — so your teams always have access to accurate, real-time insights for better planning and execution."
        />
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">💡 Ready to Reinvent Your IT Operations?</h2>
        <p className="text-xl text-gray-600 mb-6">Partner with us for scalable, secure, and always-on managed services that drive long-term value.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/itinfra.png" alt="VirtuSwift IT Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Book Your Free IT Assessment →</Link>
      </div>
    </div>
  );
}

function OtherOffering({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
      <FontAwesomeIcon icon={icon} className="text-2xl text-[#3a3dc4] mt-1" />
      <div>
        <h4 className="font-semibold text-lg mb-1 text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
} 