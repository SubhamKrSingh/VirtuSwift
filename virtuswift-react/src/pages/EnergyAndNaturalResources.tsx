import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faBolt, faFlask, faSeedling, faIndustry, faTint, faLeaf, faChartLine, faCogs, faDatabase, faTools, faProjectDiagram, faUsers, faCheckCircle, faOilCan, faSolarPanel, faGlobe, faLightbulb, faWater, faTractor, faWarehouse, faChartPie, faClipboardCheck, faRecycle, faChartBar, faSatellite, faBarcode, faBoxOpen, faFileAlt, faMobileAlt, faBrain, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: '/assets/energy.png',
    title: 'Energy & Natural Resources',
    desc: 'Empowering the Future of Energy, Resources & Industrial Ecosystems',
  },
];

const subSectors = [
  {
    icon: faSeedling,
    title: 'Agribusiness',
    desc: 'Digitize Your Agricultural Ecosystem. Smarter farming through IoT-powered field monitoring, crop yield prediction, and supply chain traceability.',
    link: '/industries/energy/agribusiness',
    cta: 'Explore Smart Farming Solutions',
  },
  {
    icon: faFlask,
    title: 'Chemicals',
    desc: 'Automate and Optimize Chemical Operations. Digitize R&D, manufacturing, and compliance for real-time visibility and safe, scalable production.',
    link: '/industries/energy/chemicals',
    cta: 'Transform Chemical Operations',
  },
  {
    icon: faIndustry,
    title: 'Mining',
    desc: 'Mine Smarter with Real-Time Intelligence. Monitor equipment health, automate safety, and manage resources efficiently.',
    link: '/industries/energy/mining',
    cta: 'Enable Intelligent Mining',
  },
  {
    icon: faOilCan,
    title: 'Oil & Gas',
    desc: 'Drive Operational Agility in Oil & Gas. Leverage cloud, analytics, and automation to reduce downtime and optimize production.',
    link: '/industries/energy/oil-gas',
    cta: 'Digitize Your Oil & Gas Value Chain',
  },
  {
    icon: faSolarPanel,
    title: 'Utilities & Renewables',
    desc: 'Modernize the Grid and Power Sustainable Growth. Manage distributed assets, integrate smart meters, and deliver customer-centric services.',
    link: '/industries/energy/utilities-renewables',
    cta: 'Reimagine Utility Operations',
  },
];

export default function EnergyAndNaturalResources() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Intro Section */}
        <div className={`flex flex-col md:flex-row gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">At VirtuSwift, we help energy and resource-driven enterprises modernize their operations, improve sustainability, and accelerate digital outcomes. Whether you're in mining, agribusiness, or renewable energy, our tailored solutions unify data, automate operations, and enable intelligent decisions across the value chain.</h2>
            <Link to="/contact?industry=energy" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4">Drive Digital Transformation Across Your Resource Value Chain</Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img src="/assets/energy1.png" alt="Energy & Natural Resources" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
          </div>
        </div>

        {/* Why VirtuSwift */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🔍 Why VirtuSwift?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
              <FontAwesomeIcon icon={faGlobe} className="text-3xl text-[#3a3dc4] mb-4" />
              <h4 className="font-bold text-lg mb-2">Industry Knowledge + Advanced Tech</h4>
              <p className="text-gray-600 text-sm">We combine industry knowledge with advanced technologies—cloud, AI, IoT, and data—to solve complex challenges across upstream, midstream, and downstream operations. Our frameworks are built to scale innovation, optimize productivity, and deliver ESG-aligned growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
              <FontAwesomeIcon icon={faCogs} className="text-3xl text-[#3a3dc4] mb-4" />
              <h4 className="font-bold text-lg mb-2">Our Services Include</h4>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                <li>Cloud Modernization & Migration</li>
                <li>Intelligent Asset Monitoring & IoT Integration</li>
                <li>Predictive Maintenance & Field Operations Digitization</li>
                <li>Sustainability Data Management & ESG Reporting</li>
                <li>Data Warehousing, Analytics & Decision Intelligence</li>
                <li>SAP Enablement for Energy and Resources</li>
              </ul>
              <Link to="/contact?industry=energy" className="inline-block bg-[#f05a28] text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-sm mt-4">Schedule Your Digital Readiness Assessment</Link>
            </div>
          </div>
        </div>

        {/* Sub-Sectors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">⚡ Industry Sub-Sectors We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subSectors.map((sector) => (
              <div key={sector.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={sector.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{sector.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{sector.desc}</p>
                <Link to={sector.link} className="inline-block bg-[#3a3dc4] text-white px-4 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm">{sector.cta} →</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">💡 Ready to Transform Energy & Resource Operations?</h3>
          <p className="text-lg text-gray-700 mb-6">Whether you're extracting resources, refining fuel, or managing a farm, VirtuSwift helps you lead with innovation, efficiency, and resilience.</p>
          <Link to="/contact?industry=energy" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Talk to an Energy Transformation Expert Today</Link>
        </div>
      </div>
    </div>
  );
} 