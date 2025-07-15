import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faShieldAlt, faRocket, faChartLine, faLock, faTools, faSyncAlt, faDatabase, faProjectDiagram, faPlaneDeparture, faPlane, faMobile, faUserFriends, faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: '/assets/aviation.png',
    title: 'Aviation Industry',
    desc: 'Empowering Aviation with Intelligent Technologies and Operational Precision',
  },
  {
    url: '/assets/aviation1.png',
    title: '',
    desc: '',
  },
];

export default function Aviation() {
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
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
        >❮</button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
        >❯</button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className={`flex flex-col md:flex-row gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">The aviation industry is navigating through rapid change—balancing safety, sustainability, and passenger expectations while modernizing legacy systems.</h2>
            <p className="text-gray-600 mb-6">
              VirtuSwift helps airlines, airport operators, and aerospace firms digitize operations, enhance fleet management, and deliver exceptional passenger experiences with data-driven, cloud-native solutions.
            </p>
            <Link to="/contact?industry=aviation" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg">Book Your Aviation Digital Strategy Call →</Link>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/aviation2.png" alt="Aviation" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
          </div>
        </div>

        {/* Why VirtuSwift for Aviation */}
        <div className="space-y-12 mt-12">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🛫 Why VirtuSwift for Aviation?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: faPlaneDeparture, title: 'Intelligent Flight and Ground Operations', desc: 'Leverage IoT, AI, and cloud to streamline maintenance, monitor performance, and reduce turnaround time.' },
                { icon: faMobile, title: 'Passenger-Centric Digital Experiences', desc: 'From mobile-first check-ins to real-time updates, we enable frictionless travel experiences that build loyalty.' },
                { icon: faChartLine, title: 'Data-Driven Cost & Safety Optimization', desc: 'Gain full visibility into fuel usage, predictive maintenance, and risk reduction through advanced analytics and automation.' },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                  <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Offerings */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🛠 Our Core Offerings in Aviation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: faTools, title: 'Aviation Maintenance, Repair & Overhaul (MRO)', desc: 'Predictive and condition-based maintenance systems. Digital twin and asset health monitoring. Parts inventory and lifecycle management.' },
                { icon: faCloud, title: 'Airport & Airline Operations Optimization', desc: 'Baggage tracking and terminal flow analytics. Integrated operations control centers (IOCC). Crew scheduling and resource planning systems.' },
                { icon: faMobile, title: 'Passenger Experience & Engagement', desc: 'Personalized travel apps and self-service kiosks. AI-powered chatbots for flight and service support. Real-time notifications, loyalty programs, and CRM.' },
                { icon: faRocket, title: 'Fleet & Flight Performance Analytics', desc: 'Engine health monitoring and fuel optimization. Flight data analysis and anomaly detection. Compliance tracking and environmental reporting.' },
                { icon: faLock, title: 'Aviation Cybersecurity & Compliance', desc: 'Secure cockpit and ground systems integration. Identity and access management (IAM). Compliance with FAA, EASA, and IATA regulations.' },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                  <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted by Aviation Leaders */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🌍 Transforming the Skies with Technology</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">Whether you're optimizing turnaround times, enhancing digital check-ins, or deploying IoT for aircraft diagnostics, VirtuSwift is your trusted co-pilot for aviation transformation. We combine cloud agility with aerospace-grade reliability to help you soar.</p>
          </div>

          {/* What You Gain */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🚀 What You Gain with VirtuSwift</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: faSyncAlt, title: 'Reduced Delays and Downtime' },
                { icon: faPlane, title: 'Safer and More Predictable Fleet Operations' },
                { icon: faUserFriends, title: 'Personalized and Streamlined Passenger Journeys' },
                { icon: faCheckCircle, title: 'Compliance-Ready Digital Infrastructure' },
                { icon: faRocket, title: 'Enhanced Operational Agility and Profitability' },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                  <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mb-12 text-center">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">💬 Ready for Takeoff?</h3>
            <p className="text-lg text-gray-700 mb-6">Let VirtuSwift future-proof your aviation operations with intelligent platforms, predictive systems, and digital excellence.</p>
            <Link to="/contact?industry=aviation" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Book Your Aviation Digital Strategy Call →</Link>
          </div>
        </div>
      </div>
    </div>
  );
} 