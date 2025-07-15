import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faDatabase, faServer, faGlobe, faChartLine, faRocket, faNetworkWired, faBrain, faRobot, faEye, faChartBar, faLightbulb, faCog } from '@fortawesome/free-solid-svg-icons';

const SapIntelligentTechnologiesAI: React.FC = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent Technologies & AI for SAP</h1>
              <p className="text-xl mb-8">AI + ML for SAP, Conversational AI & NLP, Computer Vision, Cross-Platform AI Integration—automate workflows, detect anomalies, and enable real-time forecasting.</p>
              <Link to="/contact?service=sap-ai" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">Transform SAP with AI</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="SAP AI Technology" className="w-full h-64 object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Technologies Overview */}
      <div className={`py-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🤖 AI-Powered SAP Solutions</h2>
            <p className="text-xl text-gray-600">Transform your SAP ecosystem with cutting-edge artificial intelligence and machine learning capabilities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: faBrain, title: "AI + ML for SAP", desc: "Intelligent automation and predictive analytics for SAP workflows" },
              { icon: faRobot, title: "Conversational AI & NLP", desc: "Natural language processing for SAP user interactions" },
              { icon: faEye, title: "Computer Vision", desc: "Visual data processing and image recognition for SAP" },
              { icon: faNetworkWired, title: "Cross-Platform AI Integration", desc: "Seamless AI integration across your entire IT landscape" }
            ].map((tech, index) => (
              <div key={tech.title} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FontAwesomeIcon icon={tech.icon} className="text-4xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{tech.title}</h4>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Capabilities */}
      <div className={`bg-white py-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🚀 Key AI Capabilities for SAP</h2>
            <p className="text-xl text-gray-600">Empower your SAP system with intelligent automation and insights.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-[#3a3dc4]">Automate Workflows</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faCog} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Intelligent Process Automation</strong> - Automate complex SAP workflows with AI-driven decision making</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faSyncAlt} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Smart Data Processing</strong> - AI-powered data extraction, validation, and transformation</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Automated Reporting</strong> - Generate insights and reports automatically using AI</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-[#3a3dc4]">Detect Anomalies</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Fraud Detection</strong> - AI algorithms to identify suspicious transactions and activities</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Performance Monitoring</strong> - Real-time anomaly detection in system performance</span>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon icon={faEye} className="text-[#3a3dc4] mt-1 mr-3 flex-shrink-0" />
                  <span><strong>Data Quality Assurance</strong> - Automated detection of data inconsistencies and errors</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact?service=sap-ai" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#f05a28] transition-all duration-300 hover:scale-105">Explore AI Solutions</Link>
          </div>
        </div>
      </div>

      {/* Real-Time Forecasting */}
      <div className={`py-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#3a3dc4] to-[#008BCF] text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">📊 Real-Time Forecasting & Analytics</h2>
            <p className="text-xl mb-8">Enable predictive insights and real-time forecasting across your SAP landscape.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Predictive Analytics</h4>
                <p className="text-sm">Forecast trends and patterns using historical SAP data</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <FontAwesomeIcon icon={faLightbulb} className="text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Intelligent Insights</h4>
                <p className="text-sm">AI-generated recommendations for business optimization</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <FontAwesomeIcon icon={faBrain} className="text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Machine Learning Models</h4>
                <p className="text-sm">Custom ML models trained on your SAP data</p>
              </div>
            </div>
            <Link to="/contact?service=sap-ai" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105">Get Predictive Insights</Link>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className={`bg-gray-50 py-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔄 Our AI Implementation Process</h2>
            <p className="text-xl text-gray-600">Structured approach to integrating AI into your SAP environment.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {[
              { step: '1️⃣', title: 'Assessment & Strategy', desc: 'Evaluate current SAP landscape and define AI objectives' },
              { step: '2️⃣', title: 'Data Preparation', desc: 'Clean, structure, and prepare SAP data for AI models' },
              { step: '3️⃣', title: 'Model Development', desc: 'Build and train AI models specific to your use cases' },
              { step: '4️⃣', title: 'Integration & Deployment', desc: 'Seamlessly integrate AI solutions into your SAP environment' }
            ].map((process, index) => (
              <div key={process.title} className="flex-1 flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow border-b-4 border-[#008BCF] mx-2 mb-4 md:mb-0 group transition">
                <div className="text-3xl mb-2">{process.step}</div>
                <h4 className="font-semibold text-lg mb-1 text-gray-800">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className={`py-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">💡 Benefits of AI-Enhanced SAP</h2>
            <p className="text-xl text-gray-600">Transform your SAP operations with intelligent automation and insights.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: faRocket, title: "Increased Efficiency", desc: "Automate repetitive tasks and streamline workflows" },
              { icon: faChartLine, title: "Better Decision Making", desc: "Data-driven insights for strategic planning" },
              { icon: faShieldAlt, title: "Enhanced Security", desc: "AI-powered threat detection and fraud prevention" },
              { icon: faCogs, title: "Process Optimization", desc: "Continuous improvement through machine learning" },
              { icon: faEye, title: "Real-Time Monitoring", desc: "Instant alerts and proactive issue resolution" },
              { icon: faBrain, title: "Predictive Capabilities", desc: "Forecast trends and anticipate business needs" }
            ].map((benefit, index) => (
              <div key={benefit.title} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className={`bg-gray-50 py-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔗 Related SAP Services</h2>
            <p className="text-xl text-gray-600">Explore our comprehensive SAP service portfolio.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "🔄 SAP Migrations & Managed Services", desc: "Seamless SAP migrations with 24/7 support and monitoring.", link: "/services/sap-migrations-managed-services" },
              { title: "📊 SAP-Driven Insights", desc: "Real-time analytics and intelligent dashboards for SAP data.", link: "/services/sap-driven-insights" },
              { title: "☁️ SAP Cloud Platform Development", desc: "Custom BTP applications and cloud-native SAP solutions.", link: "/services/sap-cloud-platform-development" },
              { title: "🌐 SAP Integration Services", desc: "Connect SAP with third-party platforms and applications.", link: "/services/sap-integration-third-party" }
            ].map((service, index) => (
              <div key={service.title} className="bg-white p-4 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer">
                <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                <Link to={service.link} className="text-[#3a3dc4] text-sm font-semibold hover:text-[#f05a28] transition-colors">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={`py-16 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 Ready to Transform Your SAP with AI?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's build intelligent SAP solutions that drive innovation and growth.</p>
          <Link to="/contact?service=sap-ai" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition-all duration-300 text-lg">👉 Schedule Your AI Strategy Session →</Link>
        </div>
      </div>
    </div>
  );
};

export default SapIntelligentTechnologiesAI; 