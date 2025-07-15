import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faDatabase, faServer, faGlobe, faChartLine, faRocket, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const SapIntegrationThirdParty: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className={`relative bg-gradient-to-r from-[#3a3dc4] to-[#008BCF] text-white py-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Enable End-to-End Digital Workflows</h1>
              <p className="text-xl mb-8">VirtuSwift delivers seamless integration between SAP and third-party platforms—ERP, CRM, cloud applications, and more.</p>
              <Link to="/contact?service=sap-integration" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">Integrate SAP Smarter</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="SAP Integration" className="w-full h-64 object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose VirtuSwift Section */}
      <div className={`py-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚀 Why Choose VirtuSwift for SAP Integrations?</h2>
            <p className="text-xl text-gray-600">We transform SAP into the digital core of your connected enterprise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#3a3dc4]">Our Services Include:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCogs} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Middleware & API-Based Integrations</strong> (PI/PO, SAP BTP, etc.)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Cloud App, ERP, and Legacy System Bridging</strong></span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faNetworkWired} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>B2B/B2C Integration Support</strong> (EDI, REST, SOAP)</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faSyncAlt} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Real-Time Data Sync and Event-Driven Architecture</strong></span>
                </li>
              </ul>
              <Link to="/contact?service=sap-integration" className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg font-semibold mt-6 hover:bg-[#f05a28] transition-all duration-300 hover:scale-105">Discuss Integration Blueprint</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="SAP Integration Services" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">Integration Excellence</h3>
              <p className="text-gray-600 mb-4">Connect your SAP ecosystem with confidence using our proven integration methodologies and certified expertise.</p>
              <div className="flex items-center text-[#3a3dc4] font-semibold">
                <span>Learn More</span>
                <FontAwesomeIcon icon={faRocket} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className={`bg-white py-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📈 The VirtuSwift Advantage</h2>
            <p className="text-xl text-gray-600">Make SAP a gateway, not a silo.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: faRocket, title: "Accelerated Business Operations", desc: "Streamline workflows across all connected platforms" },
              { icon: faSyncAlt, title: "Real-Time Interoperability", desc: "Instant data synchronization between systems" },
              { icon: faCogs, title: "Reduced Manual Data Handling", desc: "Automate data entry and reduce errors" },
              { icon: faChartLine, title: "Scalable, Cost-Efficient Connectivity", desc: "Grow your integrations as your business grows" }
            ].map((advantage, index) => (
              <div key={advantage.title} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                <FontAwesomeIcon icon={advantage.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">{advantage.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/contact?service=sap-integration" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a3dc4] transition-all duration-300 hover:scale-105">Unify Enterprise Platforms →</Link>
          </div>
        </div>
      </div>

      {/* Ready to Optimize Section */}
      <div className={`py-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#3a3dc4] to-[#008BCF] text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">🌐 Ready to Optimize Your SAP Projects?</h2>
            <p className="text-xl mb-8">VirtuSwift makes SAP integration, extension, and automation seamless across your IT ecosystem.</p>
            <Link to="/contact?service=sap-integration" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">Schedule Your SAP Consultation</Link>
          </div>
        </div>
      </div>

      {/* Other Offerings Section */}
      <div className={`bg-gray-50 py-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚀 Other Offerings in SAP Services</h2>
            <p className="text-xl text-gray-600 mb-8">Enabling Intelligent Enterprises with Scalable SAP Solutions</p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">Our SAP service suite is built to transform how your business operates — from migration and integration to smart automation and real-time insights. We deliver flexible, future-ready SAP solutions that empower you to innovate faster, reduce operational costs, and boost performance across the board.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "🔄 SAP Migrations & Managed Services", desc: "Simplify your transition to SAP or upgrade with confidence. From infrastructure setup to Application Management Services (AMS), we provide seamless SAP migrations, 24/7 support, and proactive monitoring to ensure business continuity and optimized performance.", link: "/services/sap-migrations-managed-services" },
              { title: "🗄️ Data Warehousing and Integration", desc: "Centralize your SAP and non-SAP data sources into a powerful warehouse. Our integration services ensure your enterprise data is always clean, accessible, and ready for deep analytics — enabling smarter, faster business decisions.", link: "/services/data-warehousing" },
              { title: "🛠️ SAP Customization and Configuration", desc: "No two businesses are the same — and neither should their SAP systems be. We customize and configure SAP modules to align with your exact workflows, industry standards, and business goals, ensuring maximum efficiency and user adoption.", link: "/services/sap-customization" },
              { title: "💰 Data Monetization Strategies", desc: "Make your SAP data work harder for your business. We identify opportunities to monetize transactional and behavioral data, helping you build new revenue streams and offer data-driven services with measurable value.", link: "/services/data-monetization" },
              { title: "☁️ Cloud Migration and Integration", desc: "Transform your SAP landscape with cloud agility. We manage cloud migrations for SAP systems, integrating your ERP with public, private, or hybrid clouds while enhancing scalability, resilience, and operational speed.", link: "/services/cloud-migration-and-integration" },
              { title: "🌐 Internet of Things (IoT) Solutions", desc: "Extend the power of SAP to your connected devices. From asset tracking to predictive maintenance, we develop IoT solutions integrated with SAP to deliver real-time operational insights and automation across the value chain.", link: "/services/iot-solutions" },
              { title: "📊 Data-Driven Decision Making", desc: "Empower leaders with actionable SAP analytics. Our services include real-time dashboards, business intelligence tools, and predictive analytics — turning raw data into powerful insights that fuel smart strategies.", link: "/services/data-analytics" },
              { title: "☁️ SAP Cloud Platform Development", desc: "Build custom apps, workflows, and extensions on SAP BTP (Business Technology Platform). We develop cloud-native solutions that integrate seamlessly with your SAP environment, unlocking innovation and rapid scalability.", link: "/services/sap-cloud-platform-development" }
            ].map((service, index) => (
              <div key={service.title} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-[#3a3dc4] mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                {service.link && (
                  <Link to={service.link} className="text-[#3a3dc4] text-sm font-semibold hover:text-[#f05a28] transition-colors">Learn More →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={`py-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">💡 Ready to Elevate Your SAP Ecosystem?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's build intelligent SAP-powered solutions that drive value, speed, and growth.</p>
          <Link to="/contact?service=sap-integration" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition-all duration-300 text-lg">👉 Schedule a Free SAP Strategy Call →</Link>
        </div>
      </div>
    </div>
  );
};

export default SapIntegrationThirdParty; 