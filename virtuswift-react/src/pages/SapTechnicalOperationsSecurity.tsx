import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faDatabase, faServer, faGlobe, faChartLine, faRocket, faNetworkWired, faBrain, faRobot, faEye, faChartBar, faLightbulb, faCog, faLock, faShield, faExclamationTriangle, faUserShield, faCloudSun, faTools } from '@fortawesome/free-solid-svg-icons';

const SapTechnicalOperationsSecurity: React.FC = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ensure Always-On SAP Performance with Enterprise-Grade Operations & Security</h1>
              <p className="text-xl mb-8">VirtuSwift delivers 24/7 SAP technical operations, intelligent GRC-integrated security, and multi-cloud resilience—keeping your SAP environment stable, secure, and future-ready.</p>
              <Link to="/contact?service=sap-operations-security" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">👉 Strengthen Your SAP Core Now →</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="SAP Technical Operations" className="w-full h-64 object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose VirtuSwift Section */}
      <div className={`py-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚀 Why Choose VirtuSwift for SAP Technical Operations & Security?</h2>
            <p className="text-xl text-gray-600">We help enterprises achieve operational excellence through always-on monitoring, intelligent automation, hardened cloud infrastructure, and proactive cybersecurity.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[#3a3dc4]">Our Services Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faServer} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">24/7 SAP Basis & Technical Operations</h4>
                    <p className="text-gray-600">Around-the-clock SAP Basis support for system health, performance tuning, patching, and landscape-wide availability monitoring—ensuring non-stop business continuity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCloudSun} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">SAP on Google Cloud (GCP) Center of Excellence</h4>
                    <p className="text-gray-600">Accelerate your SAP workloads on GCP with tailored planning, seamless migration, and performance-optimized cloud operations—backed by certified cloud expertise.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Enterprise-Grade SAP Security & GRC Automation</h4>
                    <p className="text-gray-600">Strengthen your SAP systems with intelligent access controls, automated GRC frameworks, audit trails, and end-to-end compliance.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">SAP Disaster Recovery & Resilience (DRaaS)</h4>
                    <p className="text-gray-600">Deploy robust DR strategies—from geo-redundant failovers to real-time backup and recovery architectures—engineered for zero disruption.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faLock} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Comprehensive Enterprise Cybersecurity Services</h4>
                    <p className="text-gray-600">Go beyond SAP. VirtuSwift protects your entire digital estate—SAP and non-SAP—with full-spectrum cybersecurity services that adapt to evolving threats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Cybersecurity Capabilities */}
      <div className={`bg-white py-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔐 Enterprise Cybersecurity Capabilities Include:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: faBrain, title: "AI-Driven Threat Detection & Vulnerability Management", desc: "Continuously identify and remediate vulnerabilities using advanced analytics and threat intelligence." },
              { icon: faShield, title: "Zero Trust Security Architecture", desc: "Design and enforce zero trust frameworks to secure access across users, devices, and networks." },
              { icon: faNetworkWired, title: "Endpoint & Network Protection", desc: "Shield all endpoints and networks with real-time monitoring, intrusion prevention, and threat mitigation systems." },
              { icon: faCloud, title: "Cloud Security & DevSecOps Enablement", desc: "Secure hybrid and cloud-native systems with automated DevSecOps, policy-driven governance, and encryption-at-rest/in-transit." },
              { icon: faExclamationTriangle, title: "Security Incident Response & Forensics", desc: "Respond swiftly to threats with real-time containment, deep forensic investigation, and recurrence prevention." },
              { icon: faUserShield, title: "Identity & Access Management (IAM)", desc: "Control and govern access through centralized identity platforms, role-based permissions, and secure authentication." }
            ].map((capability, index) => (
              <div key={capability.title} className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FontAwesomeIcon icon={capability.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{capability.title}</h4>
                <p className="text-gray-600 text-sm">{capability.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/contact?service=sap-operations-security" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#f05a28] transition-all duration-300 hover:scale-105">👉 Request a Security & Operations Audit →</Link>
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className={`bg-gray-50 py-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">📈 The VirtuSwift Advantage</h2>
            <p className="text-xl text-gray-600">Built for scale. Secured for compliance. Managed for resilience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: faEye, title: "24/7 SAP Monitoring & Automated Incident Response", desc: "Continuous monitoring with intelligent alerting and automated resolution" },
              { icon: faCloudSun, title: "Secure SAP Deployments on Google Cloud", desc: "Optimized and secure SAP workloads on GCP infrastructure" },
              { icon: faShieldAlt, title: "Integrated GRC & Access Control Across SAP", desc: "Comprehensive governance, risk, and compliance management" },
              { icon: faExclamationTriangle, title: "Enterprise-Ready Disaster Recovery & High Availability", desc: "Robust DR strategies with zero-downtime failover capabilities" },
              { icon: faChartLine, title: "Minimized Downtime and Regulatory Assurance", desc: "Proactive maintenance and compliance monitoring" }
            ].map((advantage, index) => (
              <div key={advantage.title} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FontAwesomeIcon icon={advantage.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">{advantage.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/contact?service=sap-operations-security" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a3dc4] transition-all duration-300 hover:scale-105">👉 Secure Your SAP Backbone →</Link>
          </div>
        </div>
      </div>

      {/* Ready to Secure Section */}
      <div className={`py-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#3a3dc4] to-[#008BCF] text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">🌐 Ready to Secure and Scale Your SAP Environment?</h2>
            <p className="text-xl mb-8">VirtuSwift ensures your SAP systems are optimized, protected, and ready to handle tomorrow's demands—across all platforms and industries.</p>
            <Link to="/contact?service=sap-operations-security" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">👉 Book a SAP Technical Health Check →</Link>
          </div>
        </div>
      </div>

      {/* Other Offerings Section */}
      <div className={`bg-gray-50 py-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚀 Other Offerings in SAP Services</h2>
            <p className="text-xl text-gray-600 mb-8">Empowering Intelligent Enterprises with End-to-End SAP Solutions</p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">Our SAP services span every layer of digital transformation — from infrastructure and automation to analytics and strategic modernization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "🔄 SAP Migrations & Managed Services (Including Infra, AMS)", desc: "Migrate and operate your SAP with full support, seamless AMS, and performance assurance.", link: "/services/sap-migrations-managed-services" },
              { title: "🗄️ Data Warehousing and Integration", desc: "Create a unified data landscape by consolidating SAP and third-party systems for analytics-readiness.", link: "/services/data-warehousing" },
              { title: "🛠️ SAP Customization and Configuration", desc: "Customize SAP workflows and modules tailored to your industry's needs and compliance standards.", link: "/services/sap-customization" },
              { title: "🔗 SAP Integration with Third-Party Systems", desc: "Connect SAP to eCommerce, CRM, HR, and analytics tools with real-time bi-directional integration.", link: "/services/sap-integration-third-party" },
              { title: "💰 Data Monetization Strategies", desc: "Unlock new value from SAP transactional and behavioral data with analytics-based services.", link: "/services/data-monetization" },
              { title: "☁️ Cloud Migration and Integration", desc: "Shift SAP to any cloud model (public/private/hybrid) while modernizing system architectures.", link: "/services/cloud-migration-and-integration" },
              { title: "🌐 Internet of Things (IoT) Solutions", desc: "Integrate SAP with IoT to enable automated insights, smart maintenance, and predictive workflows.", link: "/services/iot-solutions" },
              { title: "📊 Data-Driven Decision Making", desc: "Empower enterprise leaders with dashboards, SAC, and real-time reporting backed by AI.", link: "/services/data-analytics" },
              { title: "☁️ SAP Cloud Platform Development", desc: "Build scalable BTP apps using Fiori and UI5 that integrate seamlessly into your SAP core.", link: "/services/sap-cloud-platform-development" }
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
      <div className={`py-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">🛡️ Ready to Fortify Your SAP Infrastructure?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's build a secure, resilient, and high-performance SAP environment that drives your business forward.</p>
          <Link to="/contact?service=sap-operations-security" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition-all duration-300 text-lg">👉 Schedule Your SAP Security Assessment →</Link>
        </div>
      </div>
    </div>
  );
};

export default SapTechnicalOperationsSecurity; 