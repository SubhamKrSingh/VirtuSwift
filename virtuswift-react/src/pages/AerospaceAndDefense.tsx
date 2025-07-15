import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faShieldAlt, faRocket, faChartLine, faLock, faTools, faSyncAlt, faDatabase, faProjectDiagram, faCar, faBolt, faBatteryFull, faWifi, faUsers, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: '/assets/aerospaceanddefense.png',
    title: 'Aerospace & Defense Industry',
    desc: 'Accelerating Mission-Critical Innovation with Secure, Scalable Technology',
  },
  {
    url: '/assets/aerospaceanddefense1.png',
    title: '',
    desc: '',
  },
];

const tabs = [
  'Aerospace & Defense',
  'Automotive & Mobility',
];

export default function AerospaceAndDefense() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Aerospace & Defense');
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
        {/* Aerospace & Defense Tab */}
        {activeTab === 'Aerospace & Defense' && (
          <div className={`flex flex-col md:flex-row gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">In today’s high-stakes environment, the Aerospace and Defense (A&D) sector demands technology that’s not just advanced—but resilient, secure, and precision-engineered.</h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we empower A&D organizations with digital platforms that enhance situational awareness, streamline operations, and ensure compliance across the most sensitive and complex missions.
              </p>
              <Link to="/contact?industry=aerospace-defense" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg">Book a Strategic Defense Tech Session →</Link>
            </div>
            <div className="md:w-1/2">
              <img src="/assets/aerospaceanddefense2.png" alt="Aerospace & Defense" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
            </div>
          </div>
        )}
        {/* Automotive & Mobility Tab */}
        {activeTab === 'Automotive & Mobility' && (
          <div className={`flex flex-col md:flex-row gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Driving Smarter, Safer, and More Connected Mobility Futures</h2>
              <p className="text-gray-600 mb-6">
                The automotive world is undergoing a seismic shift—from traditional manufacturing to connected, autonomous, and electrified mobility. At VirtuSwift, we power the digital engine behind the transformation, helping OEMs, suppliers, and mobility innovators accelerate innovation, streamline operations, and enhance the user experience across every vehicle and journey.
              </p>
              <Link to="/contact?industry=automotive" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg">Request an Automotive Tech Strategy Session →</Link>
            </div>
            <div className="md:w-1/2">
              <img src="/assets/aerospaceanddefense3.png" alt="Automotive & Mobility" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
            </div>
          </div>
        )}

        {/* Aerospace & Defense Capabilities */}
        {activeTab === 'Aerospace & Defense' && (
          <div className="space-y-12 mt-12">
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">✈️ Why VirtuSwift for Aerospace & Defense?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: faShieldAlt, title: 'Defense-Grade Digital Transformation', desc: 'From battlefield logistics to aerospace manufacturing, we deliver secure, cloud-enabled ecosystems that drive innovation and performance.' },
                  { icon: faCogs, title: 'Operational Excellence at Scale', desc: 'Our solutions help reduce complexity, enhance engineering efficiency, and support lifecycle management for aircraft, weapons systems, and defense platforms.' },
                  { icon: faChartLine, title: 'Intelligence-Driven Command and Control', desc: 'We harness AI, data analytics, and real-time dashboards to support mission-critical decisions—both in combat and in command centers.' },
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🛠 Our Key Offerings in A&D</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: faCloud, title: 'Cloud and Infrastructure Modernization', desc: 'Secure, hybrid cloud environments for defense-grade performance. Infrastructure-as-code for faster provisioning and resiliency. Global data sovereignty and compliance support (ITAR, DFARS).' },
                  { icon: faProjectDiagram, title: 'Integrated Defense Systems Engineering', desc: 'Digital twin creation for aerospace design and testing. Smart supply chain platforms for parts tracking and MRO. Real-time collaboration tools for distributed R&D teams.' },
                  { icon: faLock, title: 'Cybersecurity & Compliance', desc: 'Role-based access control and zero-trust architecture. Threat detection, SIEM integration, and incident response. Compliance alignment with ISO/IEC 27001, NIST, and MIL standards.' },
                  { icon: faDatabase, title: 'Data Intelligence & Mission Analytics', desc: 'Predictive maintenance powered by IoT and ML. Real-time telemetry and data streaming for command centers. Secure data lakes for long-term defense analytics.' },
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🌐 Trusted by Innovators and Institutions</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">Whether you're a government defense agency, aerospace OEM, or private sector contractor, VirtuSwift ensures every digital layer you adopt is built to withstand high-demand, high-security environments—globally.</p>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">📈 What You Gain with VirtuSwift</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { icon: faShieldAlt, title: 'Military-Grade Security with Cloud Flexibility' },
                  { icon: faRocket, title: 'Faster Product Lifecycle and Go-To-Mission Readiness' },
                  { icon: faChartLine, title: 'Real-Time Intelligence and Field Connectivity' },
                  { icon: faCheckCircle, title: 'Full Compliance with Global Defense Standards' },
                  { icon: faLock, title: 'Reduced Operational Risk and Downtime' },
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12 text-center">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">💬 Ready to Reinforce Your Digital Advantage?</h3>
              <p className="text-lg text-gray-700 mb-6">Let’s discuss how VirtuSwift can help modernize your Aerospace & Defense ecosystem—securely, intelligently, and at scale.</p>
              <Link to="/contact?industry=aerospace-defense" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Book a Strategic Defense Tech Session →</Link>
            </div>
          </div>
        )}

        {/* Automotive & Mobility Capabilities */}
        {activeTab === 'Automotive & Mobility' && (
          <div className="space-y-12 mt-12">
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">⚙️ Why VirtuSwift for Automotive & Mobility?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: faBolt, title: 'Accelerate EV and Connected Vehicle Innovation', desc: 'From embedded software to cloud-enabled diagnostics, we help you design and deploy smarter, greener vehicles.' },
                  { icon: faChartLine, title: 'Predictive, Data-Driven Operations', desc: 'Leverage AI and analytics to optimize supply chains, manufacturing, and aftersales with precision and real-time insights.' },
                  { icon: faWifi, title: 'Connected Mobility Ecosystems', desc: 'Enable seamless digital experiences for drivers and passengers—whether it\'s infotainment, telematics, or shared mobility services.' },
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🛠 Our Core Offerings in Automotive & Mobility</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: faCogs, title: 'Smart Manufacturing & Factory Automation', desc: 'IoT-powered factory floor digitization. Real-time asset tracking and condition monitoring. MES, ERP, and PLM integration.' },
                  { icon: faTools, title: 'Product Engineering & Software-Defined Vehicles', desc: 'Agile development for in-vehicle software. Digital twin and simulation environments. Over-the-air (OTA) update enablement.' },
                  { icon: faCar, title: 'Connected Vehicle Infrastructure', desc: 'Cloud-based telematics and vehicle data management. Integration with infotainment and navigation systems. Cybersecurity for connected ECUs and endpoints.' },
                  { icon: faBatteryFull, title: 'EV Ecosystem & Battery Management', desc: 'Charging infrastructure analytics. Battery lifecycle tracking and performance optimization. EV fleet and charging network integration.' },
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">📈 Aftermarket & Customer Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: faProjectDiagram, title: 'Aftermarket & Customer Experience', desc: 'Predictive maintenance and service platforms. Personalized customer portals and mobile apps. Dealer network digitization and CRM integration.' },
                  { icon: faUsers, title: 'Transforming for a Mobility-First Future', desc: 'From autonomous tech startups to legacy OEMs, VirtuSwift partners with innovators to create sustainable, efficient, and user-centric automotive ecosystems.' },
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🚀 What You Gain with VirtuSwift</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { icon: faRocket, title: 'Shorter Product Development Cycles' },
                  { icon: faChartLine, title: 'Real-Time Manufacturing Visibility' },
                  { icon: faUsers, title: 'Enhanced Driver and Customer Experience' },
                  { icon: faCogs, title: 'Scalable Digital Architecture' },
                  { icon: faCheckCircle, title: 'Data-Driven Decision Making Across the Lifecycle' },
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12 text-center">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">💬 Ready to Shift into High Gear?</h3>
              <p className="text-lg text-gray-700 mb-6">Let VirtuSwift accelerate your journey toward intelligent, software-driven, and sustainable mobility.</p>
              <Link to="/contact?industry=automotive" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request an Automotive Tech Strategy Session →</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 