import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faShieldAlt, faRocket, faChartLine, faLock, faTools, faSyncAlt, faDatabase, faProjectDiagram, faCar, faBolt, faBatteryFull, faWifi, faUsers, faCheckCircle, faUserShield, faRobot, faLink, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: '/assets/aero3.png',
    title: 'Accelerate Innovation with VirtuSwift Aerospace & Defense Solutions',
    desc: 'Unlock enterprise-grade performance with security and reliability for mission-critical operations.'
  }
];

const mainTabs = [
  'Aerospace & Defense',
  'Automotive & Mobility',
];

const subTabs = [
  'Overview',
  'Capabilities',
  'Benefits'
];

const AerospaceAndDefense: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMainTab, setActiveMainTab] = useState('Aerospace & Defense');
  const [activeSubTab, setActiveSubTab] = useState('Overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentIndustry = () => activeMainTab === 'Aerospace & Defense' ? 'aerospace-defense' : 'automotive';

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

      {/* Main Tab Navigation */}
      <div className="bg-[#121927] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {mainTabs.map(tab => (
              <button
                key={tab}
                className={`tab-link px-6 py-3 text-lg font-medium border-b-2 transition-all duration-300 hover:scale-105 ${activeMainTab === tab ? 'text-[#3a3dc4] border-[#3a3dc4]' : 'border-transparent text-white hover:text-[#f05a28] hover:border-[#f05a28]'}`}
                onClick={() => setActiveMainTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sub Tab Navigation */}
      <div className="bg-gray-200 text-gray-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-start space-x-6 overflow-x-auto">
            {subTabs.map(tab => (
              <button
                key={tab}
                className={`tab-link px-4 py-2 text-sm font-medium border-b-2 transition-all duration-300 hover:scale-105 ${activeSubTab === tab ? 'text-[#3a3dc4] border-[#3a3dc4]' : 'border-transparent text-gray-600 hover:text-[#3a3dc4] hover:border-[#3a3dc4]'}`}
                onClick={() => setActiveSubTab(tab)}
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
        {activeSubTab === 'Overview' && (
          <div className={`flex flex-col md:flex-row gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                Transforming {activeMainTab} with VirtuSwift IT Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {activeMainTab === 'Aerospace & Defense'
                  ? "At VirtuSwift, we deliver tailored IT solutions to revolutionize aerospace and defense operations. Our expertise in mission-critical systems, cybersecurity, and compliance empowers organizations to enhance operational security and mission readiness."
                  : "At VirtuSwift, we deliver tailored IT solutions to revolutionize automotive operations. Our expertise in connected vehicles, smart manufacturing, and mobility services empowers companies to enhance innovation and customer experiences."
                }
              </p>
              <Link to={`/contact?industry=${getCurrentIndustry()}`} className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg">Explore Now</Link>
            </div>
            <div className="md:w-1/2">
              <img
                src={activeMainTab === 'Aerospace & Defense' ? '/assets/aero2.png' : '/assets/auto.png'}
                alt={`${activeMainTab} IT Technology`}
                className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              />
            </div>
          </div>
        )}

        {/* Capabilities Tab */}
        {activeSubTab === 'Capabilities' && (
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">CAPABILITIES</h3>
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Revolutionize {activeMainTab} with VirtuSwift</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                {(activeMainTab === 'Aerospace & Defense' ? [
                  {
                    title: 'DefenseSync Portal',
                    description: 'Real-time insights into your defense projects with secure collaboration tools and mission management.'
                  },
                  {
                    title: 'Cloud Defense Dashboard',
                    description: 'Full visibility into your defense cloud infrastructure with military-grade security and compliance.'
                  },
                  {
                    title: 'Managed Defense Infrastructure',
                    description: 'Optimize your defense environment with our expert-managed services and 24/7 secure monitoring.'
                  }
                ] : [
                  {
                    title: 'AutoSync Portal',
                    description: 'Real-time insights into your automotive projects with connected vehicle management and analytics.'
                  },
                  {
                    title: 'Cloud Mobility Dashboard',
                    description: 'Full visibility into your automotive cloud infrastructure with IoT integration and performance metrics.'
                  },
                  {
                    title: 'Managed Automotive Infrastructure',
                    description: 'Optimize your automotive environment with our expert-managed services and smart manufacturing support.'
                  }
                ]).map((capability, index) => (
                  <div
                    key={capability.title}
                    className={`md:w-1/3 bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animationDuration: '0.6s',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <h4 className="text-xl font-bold text-[#3a3dc4] mb-2">{capability.title}</h4>
                    <p className="text-base text-gray-700">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeSubTab === 'Benefits' && (
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900">A Future-Ready {activeMainTab} Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(activeMainTab === 'Aerospace & Defense' ? [
                { icon: faCogs, title: "Certified Experts", text: "Our team is trained in advanced defense IT systems and security compliance standards." },
                { icon: faSyncAlt, title: "Proven Results", text: "We've enhanced defense operations for global military and aerospace organizations." },
                { icon: faGraduationCap, title: "Continuous Innovation", text: "Our experts stay ahead of defense technology trends and security requirements." },
                { icon: faCloud, title: "Scalable Solutions", text: "Build defense IT systems that grow with your mission requirements and security needs." },
                { icon: faShieldAlt, title: "Military-Grade Security", text: "Ensure compliant solutions for classified and sensitive defense operations." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with top defense tech providers for innovative security solutions." }
              ] : [
                { icon: faCogs, title: "Certified Experts", text: "Our team is trained in advanced automotive IT systems and manufacturing standards." },
                { icon: faSyncAlt, title: "Proven Results", text: "We've enhanced automotive operations for global manufacturers and mobility companies." },
                { icon: faGraduationCap, title: "Continuous Innovation", text: "Our experts stay ahead of automotive technology trends and industry standards." },
                { icon: faCloud, title: "Scalable Solutions", text: "Build automotive IT systems that grow with your production and customer base." },
                { icon: faShieldAlt, title: "Connected Security", text: "Ensure secure solutions for connected vehicles and smart manufacturing systems." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with top automotive tech providers for innovative mobility solutions." }
              ]).map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '0.6s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-[#3a3dc4] mb-4 transition-transform duration-300 hover:scale-110" />
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h4>
                  <p className="text-base text-gray-700 text-center">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="space-y-12 mt-12">
              <div className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 delay-800 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Empowered by Industry Partnerships</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    {activeMainTab === 'Aerospace & Defense'
                      ? "Since 2010, VirtuSwift has partnered with leading defense tech providers to deliver innovative IT solutions, improving mission effectiveness and operational security."
                      : "Since 2010, VirtuSwift has partnered with leading automotive tech providers to deliver innovative IT solutions, improving manufacturing efficiency and customer experiences."
                    }
                  </p>
                  <Link to={`/contact?industry=${getCurrentIndustry()}`} className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg">Collaborate with Us</Link>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={activeMainTab === 'Aerospace & Defense' ? '/assets/aero1.png' : '/assets/auto1.png'}
                    alt="Industry Partnerships"
                    className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className={`bg-gray-50 py-12 mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(activeMainTab === 'Aerospace & Defense' ? [
                    {
                      image: "/assets/aerospaceanddefense.png",
                      title: "Defense IT Insights",
                      description: "Learn how VirtuSwift enhances defense operations with innovative IT solutions."
                    },
                    {
                      image: "/assets/aerospaceanddefense1.png",
                      title: "Aerospace Technology Trends",
                      description: "Stay updated with the latest aerospace technology and security trends."
                    },
                    {
                      image: "/assets/aerospaceanddefense2.png",
                      title: "Mission-Critical Solutions",
                      description: "Discover how technology improves defense operations and mission outcomes."
                    }
                  ] : [
                    {
                      image: "/assets/auto2.png",
                      title: "Automotive IT Insights",
                      description: "Learn how VirtuSwift enhances automotive operations with innovative IT solutions."
                    },
                    {
                      image: "/assets/auto3.png",
                      title: "Connected Vehicle Trends",
                      description: "Stay updated with the latest automotive technology and mobility trends."
                    },
                    {
                      image: "/assets/auto4.png",
                      title: "Smart Manufacturing Solutions",
                      description: "Discover how technology improves automotive manufacturing and customer outcomes."
                    }
                  ]).map((resource, index) => (
                    <div
                      key={resource.title}
                      className={`bg-white p-4 rounded-lg shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animationDuration: '0.6s',
                        animationFillMode: 'forwards'
                      }}
                    >
                      <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-105" />
                      <h4 className="text-xl font-bold text-[#3a3dc4] mb-2">{resource.title}</h4>
                      <p className="text-base text-gray-700">{resource.description}</p>
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

export default AerospaceAndDefense;