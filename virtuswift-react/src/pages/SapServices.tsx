import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faDatabase, faServer, faGlobe } from '@fortawesome/free-solid-svg-icons';

const sliderImages = [
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: 'SAP Services',
    desc: 'Empower your enterprise with tailored SAP solutions—future-ready integration, intelligent workflows, and scalable performance built for growth.'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: '',
    desc: ''
  }
];

const tabs = [
  'Overview',
  'Capabilities',
  'Benefits'
];

const SapServices: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Slider Section */}
      <div className={`relative w-full h-[400px] bg-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div
          className="slider flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages.map((slide, idx) => (
            <div
              key={idx}
              className="slide min-w-full h-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url('${slide.url}')` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
                <div className="text-white">
                  {slide.title && <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>}
                  {slide.desc && <p className="text-lg">{slide.desc}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
        >❮</button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
        >❯</button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-[#121927] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-start space-x-8 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-link px-4 py-2 text-sm font-medium border-b-2 transition-all duration-300 hover:scale-105 ${activeTab === tab ? 'text-[#3a3dc4] border-[#3a3dc4]' : 'border-transparent text-white hover:text-[#3a3dc4] hover:border-[#3a3dc4]'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Overview Tab */}
        {activeTab === 'Overview' && (
          <>
            <div className={`flex flex-col md:flex-row gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OVERVIEW</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why SAP Services?</h2>
                <p className="text-gray-600 mb-6">
                  SAP isn't just technology—it's the operational heartbeat of modern enterprises.
                </p>
                <p className="text-gray-600 mb-6">
                  At VirtuSwift, we unlock the full potential of SAP to transform how your business operates. From greenfield S/4HANA rollouts to real-time automation, we help you digitize, optimize, and future-proof every process.
                </p>
                <p className="text-gray-600 mb-6">
                  Our goal isn't just SAP deployment—it's intelligent enterprise transformation, driven by strategy and sustained by precision.
                </p>
                <Link to="/contact?service=sap" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg">Consult Our SAP Experts</Link>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="SAP IT Technology" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
              </div>
            </div>

            {/* How SAP Services Fuel Business Growth */}
            <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">BUSINESS GROWTH</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How SAP Services Fuel Business Growth</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 text-center">SAP brings clarity, control, and agility to complex operations. VirtuSwift delivers the expertise to make that transformation seamless.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Business Process Automation</h4>
                  <p className="text-gray-600">Accelerate workflows across functions with intelligent SAP automation.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Real-Time Data Visibility</h4>
                  <p className="text-gray-600">Empower every decision with real-time dashboards and reporting from SAP S/4HANA and BW.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Unified System Architecture</h4>
                  <p className="text-gray-600">Break down data silos with unified, end-to-end SAP architecture.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Reduced Operational Costs</h4>
                  <p className="text-gray-600">Consolidate legacy platforms and reduce costs with streamlined SAP infrastructure.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Security & Compliance</h4>
                  <p className="text-gray-600">Ensure GRC compliance with built-in governance, auditing, and access control.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Enterprise-Grade Scalability</h4>
                  <p className="text-gray-600">Operate confidently across geographies, languages, and business models.</p>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Capabilities Tab */}
        {activeTab === 'Capabilities' && (
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">CAPABILITIES</h3>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Intelligent transformation. Scalable innovation. Powered by VirtuSwift.</h2>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'SAP Migrations & Managed Services (Infra + AMS)',
                    description: 'Migrate with confidence—zero disruption, total visibility. VirtuSwift delivers cloud-ready SAP environments with full lifecycle AMS and infrastructure support.',
                    link: '/services/sap-migrations-managed-services'
                  },
                  {
                    title: 'Cloud Infrastructure Setup & Management',
                    description: 'Deploy SAP on optimized, secure cloud infrastructure—engineered by VirtuSwift for speed, uptime, and cost-efficiency.',
                    link: '/services/cloud-infrastructure'
                  },
                  {
                    title: 'SAP Cloud Migration & Integration',
                    description: 'Move SAP to the cloud the right way. We handle every phase—from pre-assessment to post-go-live—while integrating your broader IT landscape.',
                    link: '/services/cloud-migration-and-integration'
                  },
                  {
                    title: 'Server & Storage Management',
                    description: 'Maximize SAP performance and availability with smart provisioning, dynamic scaling, and real-time storage optimization.',
                    link: '/services/server-and-storage-management'
                  },
                  {
                    title: 'SAP-Driven Insights for Confident Decisions',
                    description: 'Unlock SAP data intelligence with real-time analytics, embedded dashboards, and intelligent forecasting for precision decision-making.',
                    link: '/services/sap-driven-insights'
                  },
                  {
                    title: 'IoT Solutions for SAP',
                    description: 'Bridge physical assets with SAP data. We enable predictive maintenance and smart logistics with real-time device-to-SAP integration.',
                    link: '/services/iot-solutions'
                  },
                  {
                    title: 'Cloud Monitoring & Performance Optimization',
                    description: 'VirtuSwift continuously monitors, diagnoses, and optimizes your SAP performance using intelligent analytics and alert systems.',
                    link: '/services/cloud-monitoring'
                  },
                  {
                    title: 'SAP Cloud Platform Development (BTP)',
                    description: 'Unlock agility with SAP BTP. We develop Fiori apps, extensions, and data-driven dashboards for digitized workflows.',
                    link: '/services/sap-cloud-platform-development'
                  },
                  {
                    title: 'SAP Integration with Third-Party Platforms',
                    description: 'We connect SAP with CRMs, eCommerce, HRMS, and custom apps—securely and in real time—for a connected digital enterprise.',
                    link: '/services/sap-integration-third-party'
                  },
                  {
                    title: 'Advanced SAP Technical Operations & Security',
                    description: '24/7 SAP technical operations, intelligent GRC-integrated security, and multi-cloud resilience—keeping your SAP environment stable, secure, and future-ready.',
                    link: '/services/sap-technical-operations-security'
                  },
                  {
                    title: 'SAP Modernization & Strategic Transformation',
                    description: 'From roadmap to realization, VirtuSwift helps you modernize and maximize SAP value: S/4HANA Accelerators, RISE with SAP Enablement, Strategic Value Realization, Digital Transformation Blueprinting, Continuous Value Optimization.',
                    link: '/services/sap-modernization-strategic-transformation'
                  },
                  {
                    title: 'Intelligent Technologies & AI for SAP',
                    description: 'AI + ML for SAP, Conversational AI & NLP, Computer Vision, Cross-Platform AI Integration—automate workflows, detect anomalies, and enable real-time forecasting.',
                    link: '/services/sap-intelligent-technologies-ai'
                  }
                ].map((capability, index) => (
                  <div
                    key={capability.title}
                    className={`bg-white p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationDuration: '0.6s',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">{capability.title}</h4>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    {capability.link && (
                      <Link to={capability.link} className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Benefits Tab */}
        {activeTab === 'Benefits' && (
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">BENEFITS</h3>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why Choose VirtuSwift as Your SAP Partner?</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 text-center">We combine strategy, certification, and execution to deliver SAP systems that fuel growth.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: faCogs, title: "SAP-Certified Talent", text: "Our experts are certified across SAP Basis, BTP, GRC, and cloud platforms." },
                { icon: faSyncAlt, title: "Zero-Downtime Migrations", text: "We plan, simulate, and execute your SAP migrations for continuity and control." },
                { icon: faGraduationCap, title: "Full Lifecycle Ownership", text: "Strategy, design, go-live, and AMS—we manage the full SAP journey." },
                { icon: faCloud, title: "Secure & Compliant by Design", text: "Meet global compliance and governance standards out of the box." },
                { icon: faShieldAlt, title: "Fiori & API Expertise", text: "Build beautiful frontends and flexible APIs tailored to your workflows." },
                { icon: faHandshake, title: "Global 24/7 SAP Desk", text: "Our experts respond in real time with local language, industry, and system knowledge." }
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '0.6s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-[#3a3dc4] mb-4 transition-transform duration-300 hover:scale-110" />
                  <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-center">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* Our Seamless SAP Delivery Process */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR PROCESS</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Our Seamless SAP Delivery Process</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                {[
                  { step: 1, title: 'Assess & Strategize', desc: 'Full landscape analysis + goal alignment = transformation roadmap.' },
                  { step: 2, title: 'Design & Architect', desc: 'Cloud-first, scalable, and secure SAP system designs customized to your use case.' },
                  { step: 3, title: 'Migrate & Integrate', desc: 'We move your SAP stack (greenfield, brownfield, or hybrid) with no friction.' },
                  { step: 4, title: 'Optimize & Evolve', desc: 'Post-deployment tuning, performance scaling, and SLA-driven AMS support.' }
                ].map((process, index) => (
                  <div key={process.title} className="flex-1 flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow border-b-4 border-[#3a3dc4] mx-2 mb-4 md:mb-0 group transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a3dc4] text-white text-2xl font-bold mb-2 group-hover:scale-110 transition">{process.step}</div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-800">{process.title}</h4>
                    <p className="text-gray-600 text-sm">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Call to Action */}
            <div className="text-center mt-16 mb-12">
              <div className="mb-4">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest text-center">GET STARTED</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight text-center">Ready to evolve your SAP ecosystem?</h2>
              </div>
              <Link to="/contact?service=sap" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Let's Build Smarter SAP Together</Link>
            </div>

            {/* Related Services */}
            <div className="bg-gray-50 py-12 mt-12">
              <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">RELATED SERVICES</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Related Services from VirtuSwift</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Digital Transformation", desc: "Automate, integrate, and modernize across your enterprise.", link: "/services/digital-transformation" },
                    { title: "AI & Machine Learning", desc: "Smarter processes and predictions from your SAP data.", link: "/services/ai-machine-learning" },
                    { title: "Software Development", desc: "Enterprise-grade SaaS, mobile, and web solutions.", link: "/services/application-web-development" },
                    { title: "IT Staffing Solutions", desc: "Get on-demand SAP and tech talent.", link: "/services/it-staffing-talent-solutions" },
                    { title: "Project Management Services", desc: "Certified PMs to lead SAP rollouts, upgrades, and integrations.", link: "/services/project-management-services" },
                    { title: "DevOps for SAP", desc: "CI/CD pipelines, IAC, and continuous deployment for your SAP projects.", link: "/services/devops" },
                    { title: "Metaverse & XR Integration", desc: "Visualize SAP insights and workflows in immersive digital spaces.", link: "/services/metaverse-xr" },
                    { title: "Data Analytics & Monetization", desc: "Turn SAP data into dashboards, insights, and revenue.", link: "/data-analytics-monetization" }
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

          </div>
        )}
      </div>
    </div>
  );
};

export default SapServices; 