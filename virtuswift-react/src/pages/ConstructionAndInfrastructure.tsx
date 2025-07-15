import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faShieldAlt, faChartLine, faLock, faTools, faSyncAlt, faDatabase, faProjectDiagram, faBuilding, faHardHat, faUsers, faCheckCircle, faSitemap, faClipboardCheck, faCubes, faExclamationTriangle, faMobileAlt, faFileAlt, faBoxOpen, faShoppingCart, faBrain, faRocket, faLeaf, faBarcode, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: '/assets/construction.png',
    title: 'Construction & Infrastructure',
    desc: 'Digitizing Projects, Powering Progress',
  },
];

export default function ConstructionAndInfrastructure() {
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
            <h2 className="text-3xl font-bold mb-4">The construction and infrastructure sector is undergoing a digital renaissance. From smart cities to mega infrastructure projects, businesses face rising complexity, tighter deadlines, and increasing pressure to cut costs without sacrificing quality. VirtuSwift empowers EPC firms, real estate developers, and infrastructure operators to harness data, automation, and cloud platforms to deliver projects on time, on budget, and beyond expectations.</h2>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img src="/assets/construction1.png" alt="Construction & Infrastructure" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
          </div>
        </div>

        {/* Why VirtuSwift */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🧱 Why VirtuSwift for Construction & Infrastructure?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: faChartLine, title: 'End-to-End Project Visibility', desc: 'Monitor every phase—from planning and procurement to delivery and maintenance—with integrated dashboards and alerts.' },
              { icon: faCogs, title: 'Smart Asset & Site Management', desc: 'Leverage IoT sensors, BIM, and predictive analytics to manage materials, labor, and heavy equipment more efficiently.' },
              { icon: faUsers, title: 'Connected Teams & Workflows', desc: 'Enable real-time collaboration across sites, offices, and stakeholders with mobile tools and cloud-native project environments.' },
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
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🚧 Our Core Offerings in Construction & Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: faProjectDiagram, title: 'Project Lifecycle Digitization', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>Construction ERP and workflow automation</li><li>Integrated planning, budgeting & forecasting</li><li>Real-time KPI dashboards for schedule and cost control</li></ul>) },
              { icon: faTools, title: 'Smart Asset & Equipment Management', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>IoT-based asset tracking and condition monitoring</li><li>Predictive maintenance of machinery and fleet</li><li>Rental optimization and usage analytics</li></ul>) },
              { icon: faSitemap, title: 'Site Intelligence & IoT Integration', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>Remote monitoring of site conditions (temperature, vibration, energy usage)</li><li>Safety alerts and compliance reporting</li><li>Drone and imagery integration for progress tracking</li></ul>) },
              { icon: faCubes, title: 'Building Information Modeling (BIM) Enablement', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>3D/4D/5D model integration with ERP and field systems</li><li>Clash detection and schedule simulation</li><li>Lifecycle BIM for operations and maintenance</li></ul>) },
              { icon: faClipboardCheck, title: 'Compliance, Safety & Risk Management', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>Digital documentation and audit trails</li><li>Safety training portals and incident tracking</li><li>Regulatory compliance automation (OSHA, RERA, ISO)</li></ul>) },
            ].map((item, idx) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Foundations Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🏢 Building the Future with Digital Foundations</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">Whether you're constructing a smart city, a commercial high-rise, or national infrastructure, VirtuSwift delivers the digital muscle and strategic vision to make it successful—securely, sustainably, and scalably.</p>
        </div>

        {/* What You Get Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">📈 With VirtuSwift, You Get:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: faChartLine, title: 'Lower Project Delays and Rework' },
              { icon: faCogs, title: 'Optimized Site Resources and Inventory' },
              { icon: faChartPie, title: 'Real-Time Project Health Monitoring' },
              { icon: faShieldAlt, title: 'Safer, Smarter, More Compliant Operations' },
              { icon: faRocket, title: 'Faster ROI on Capital Projects' },
            ].map((item, idx) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🧭 Ready to Modernize Construction?</h3>
          <p className="text-lg text-gray-700 mb-6">Let VirtuSwift transform your project delivery model with intelligent tech stacks, predictive planning, and connected field operations.</p>
          <Link to="/contact?industry=construction" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Schedule Your Digital Construction Consultation →</Link>
        </div>
      </div>
    </div>
  );
} 