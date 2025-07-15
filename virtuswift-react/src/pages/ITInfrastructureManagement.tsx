import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faLock, faChartLine, faCheckCircle, faRocket, faCloud, faMoneyBillWave, faProjectDiagram, faCogs, faSync, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function ITInfrastructureManagement() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/itinfra.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Run Seamlessly. Stay Secure. Scale Confidently.</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift ensures 24/7 stability, performance, and security across your OS, database, and security operations—so your IT never slows you down.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">🔧 Optimize Your Infrastructure Now</Link>
        </div>
      </section>

      {/* Why Trust VirtuSwift with Your Infrastructure? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Trust VirtuSwift with Your Infrastructure?</h2>
            <p className="text-lg text-gray-700 mb-6">In today’s always-on world, even a minute of downtime can cost you. That’s why VirtuSwift delivers proactive, round-the-clock infrastructure management to keep your enterprise running efficiently and securely.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Core Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faServer} className="text-[#008BCF] text-xl" /> OS Lifecycle Management – Linux, Windows, Unix: from setup to patching</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faDatabase} className="text-[#3a3dc4] text-xl" /> Database Support – Oracle, SQL, MySQL, PostgreSQL monitoring, tuning & backup</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLock} className="text-[#f05a28] text-xl" /> Security Operations – Access controls, patch management, threat scanning, audit readiness</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#008BCF] text-xl" /> Performance Optimization – Infra tuning for resource efficiency and speed</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">📋 Request Your Infra Health Audit</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/itinfra1.png" alt="IT Infrastructure Management" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">📈 The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">We don’t just maintain systems—we elevate them.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4] text-xl" /> ⏱️ Maximum Uptime – Built-in DR/HA readiness for uninterrupted operations</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLock} className="text-[#008BCF] text-xl" /> 🔐 Enterprise-Grade Security – Constant risk scanning and proactive threat response</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#f05a28] text-xl" /> 🚀 Optimized Performance – Infrastructure that fuels your apps, not limits them</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faProjectDiagram} className="text-[#008BCF] text-xl" /> 📁 Compliance Confidence – We help you stay audit-ready at all times</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Power Smarter Operations →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/itinfra2.png" alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Focus on Growth Instead of Maintenance? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Ready to Focus on Growth Instead of Maintenance?</h2>
        <p className="text-xl text-gray-600 mb-6">Let VirtuSwift take care of the foundation—so your teams can focus on building the future.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/itinfra3.png" alt="Growth Focus" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '250px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">🤝 Partner with VirtuSwift for Managed IT Excellence</Link>
      </div>

      {/* Other Offerings in Managed Services */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🚀 Other Offerings in Managed Services</h2>
        <p className="text-xl text-gray-600 mb-6">Maximize Uptime, Minimize Risk, and Empower Growth with Expert IT Management</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
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
          icon={faServer}
          title="🖧 Server and Storage Management"
          desc="Scale without limits. Our server and storage management services include provisioning, monitoring, and capacity planning to keep your infrastructure agile, cost-effective, and always available."
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