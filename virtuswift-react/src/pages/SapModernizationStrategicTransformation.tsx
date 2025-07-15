import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faDatabase, faServer, faGlobe, faChartLine, faRocket, faNetworkWired, faBrain, faRobot, faEye, faChartBar, faLightbulb, faCog, faLock, faShield, faExclamationTriangle, faUserShield, faCloudSun, faTools, faRoute, faBullseye, faCrown, faGears } from '@fortawesome/free-solid-svg-icons';

const SapModernizationStrategicTransformation: React.FC = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Future-Proof Your Business with SAP Modernization & Strategic Transformation</h1>
              <p className="text-xl mb-8">VirtuSwift delivers comprehensive SAP transformation—from S/4HANA migration to strategic value realization—aligned with your enterprise goals and digital maturity.</p>
              <Link to="/contact?service=sap-modernization" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">👉 Start Your SAP Modernization Journey →</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="SAP Modernization" className="w-full h-64 object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose VirtuSwift Section */}
      <div className={`py-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚀 Why Choose VirtuSwift for SAP Transformation Services?</h2>
            <p className="text-xl text-gray-600">We help enterprises rethink and modernize their SAP environments by unifying advisory, migration, and innovation into one intelligent transformation framework.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[#3a3dc4]">Our Services Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">S/4HANA Transformation & Intelligent Enterprise Enablement</h4>
                    <p className="text-gray-600">Accelerate your shift to SAP S/4HANA with proven methodologies and intelligent enterprise blueprints designed to future-proof your operations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">RISE with SAP Acceleration & Execution</h4>
                    <p className="text-gray-600">Maximize the value of RISE with SAP—from strategic business case validation and onboarding to secure deployment and long-term impact realization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faBullseye} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">SAP Strategic Advisory & Value Realization</h4>
                    <p className="text-gray-600">Leverage expert guidance and value-mapping to make business-aligned decisions, backed by structured governance and ROI-focused strategies.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faRoute} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">SAP Cloud & Digital Transformation Roadmap Design</h4>
                    <p className="text-gray-600">Build a tailored SAP roadmap that aligns with your current maturity and digital ambition—ensuring clarity and alignment across every milestone.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faGears} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Continuous SAP Optimization & Governance</h4>
                    <p className="text-gray-600">Drive lasting value through continuous optimization, performance monitoring, and SAP governance frameworks that scale with your enterprise.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact?service=sap-modernization" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#f05a28] transition-all duration-300 hover:scale-105">👉 Request a Strategic SAP Modernization Workshop →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className={`bg-white py-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📈 The VirtuSwift Advantage</h2>
            <p className="text-xl text-gray-600">Modernize confidently. Transform strategically. Scale intelligently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: faRocket, title: "Accelerated S/4HANA Adoption with Blueprinted Journeys", desc: "Proven methodologies and intelligent enterprise blueprints for faster transformation" },
              { icon: faCrown, title: "Full Value from RISE with SAP Programs", desc: "Maximize ROI through strategic business case validation and long-term impact realization" },
              { icon: faBullseye, title: "Expert Advisory Across the SAP Lifecycle", desc: "Strategic guidance and value-mapping for business-aligned decisions" },
              { icon: faRoute, title: "Clear, ROI-Driven Roadmap for Modernization", desc: "Tailored transformation roadmaps aligned with digital maturity and ambition" },
              { icon: faGears, title: "Governance-Backed Continuous Optimization", desc: "Ongoing optimization and governance frameworks that scale with your enterprise" }
            ].map((advantage, index) => (
              <div key={advantage.title} className="bg-gray-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FontAwesomeIcon icon={advantage.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">{advantage.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/contact?service=sap-modernization" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a3dc4] transition-all duration-300 hover:scale-105">👉 Modernize Smarter with SAP →</Link>
          </div>
        </div>
      </div>

      {/* Ready to Transform Section */}
      <div className={`py-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#3a3dc4] to-[#008BCF] text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">🌐 Ready to Transform with SAP?</h2>
            <p className="text-xl mb-8">VirtuSwift guides your journey from legacy SAP to an intelligent, cloud-first enterprise—built for resilience, agility, and growth.</p>
            <Link to="/contact?service=sap-modernization" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">👉 Book Your SAP Transformation Consultation →</Link>
          </div>
        </div>
      </div>

      {/* Other Offerings Section */}
      <div className={`bg-gray-50 py-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚀 Other Offerings in SAP Services</h2>
            <p className="text-xl text-gray-600 mb-8">Enabling Intelligent Enterprises with Scalable SAP Solutions</p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">Our SAP service suite transforms how your enterprise operates — from cloud readiness and integrations to full-stack innovation and business performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "🔄 SAP Migrations & Managed Services (Including Infra, AMS)", desc: "Simplify your SAP transition and operate with confidence — 24/7 support, system tuning, and AMS that scales.", link: "/services/sap-migrations-managed-services" },
              { title: "🗄️ Data Warehousing and Integration", desc: "Consolidate SAP and external data into centralized warehouses with clean, ready-to-analyze datasets.", link: "/services/data-warehousing" },
              { title: "🛠️ SAP Customization and Configuration", desc: "Tailor your SAP modules to your unique business needs — without compromising stability or compliance.", link: "/services/sap-customization" },
              { title: "🔗 SAP Integration with Third-Party Systems", desc: "Bridge SAP with CRMs, logistics, HR, and analytics platforms to build a connected enterprise.", link: "/services/sap-integration-third-party" },
              { title: "💰 Data Monetization Strategies", desc: "Unlock new revenue from SAP data via insights-based offerings, subscriptions, and analytics services.", link: "/services/data-monetization" },
              { title: "☁️ Cloud Migration and Integration", desc: "Move your SAP stack to cloud — public, private, or hybrid — while modernizing data, apps, and infrastructure.", link: "/services/cloud-migration-and-integration" },
              { title: "🌐 Internet of Things (IoT) Solutions", desc: "Link SAP to IoT devices for real-time tracking, automated operations, and predictive analytics.", link: "/services/iot-solutions" },
              { title: "📊 Data-Driven Decision Making", desc: "Enable leaders to act on intelligent dashboards and forecasts powered by SAC, Datasphere, and AI.", link: "/services/data-analytics" },
              { title: "☁️ SAP Cloud Platform Development", desc: "Build agile cloud-native apps using BTP and Fiori — fully integrated with your SAP ecosystem.", link: "/services/sap-cloud-platform-development" },
              { title: "🛡️ Advanced SAP Technical Operations & Security", desc: "Ensure always-on SAP performance with enterprise-grade operations and security.", link: "/services/sap-technical-operations-security" }
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
          <h2 className="text-3xl font-bold mb-4">🚀 Ready to Future-Proof Your SAP Landscape?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's build a modern, intelligent SAP environment that drives transformation and accelerates your business growth.</p>
          <Link to="/contact?service=sap-modernization" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition-all duration-300 text-lg">👉 Schedule Your SAP Modernization Strategy Session →</Link>
        </div>
      </div>
    </div>
  );
};

export default SapModernizationStrategicTransformation; 