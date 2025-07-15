import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faShieldAlt, faChartLine, faLock, faTools, faSyncAlt, faDatabase, faProjectDiagram, faBuilding, faHardHat, faUsers, faCheckCircle, faSitemap, faClipboardCheck, faCubes, faExclamationTriangle, faMobileAlt, faFileAlt, faBoxOpen, faShoppingCart, faBrain, faRocket, faLeaf, faBarcode, faChartPie, faBolt, faStore, faGlobe, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: '/assets/construction2.png',
    title: 'Consumer Products',
    desc: 'Delivering Innovation at the Speed of the Consumer',
  },
];

export default function ConsumerProducts() {
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
            <h2 className="text-3xl font-bold mb-4">In a world where preferences shift overnight and digital shelves are always open, consumer product companies must move fast, think smarter, and operate lean. VirtuSwift helps brands across FMCG, personal care, home appliances, electronics, and more become agile, data-powered, and experience-driven enterprises.</h2>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img src="/assets/construction2.png" alt="Consumer Products" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
          </div>
        </div>

        {/* Why VirtuSwift */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🌟 Why VirtuSwift for Consumer Products?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: faBoxOpen, title: 'Agile Supply Chain & Distribution', desc: 'From demand forecasting to last-mile tracking, we digitize and optimize your supply chain for real-time responsiveness.' },
              { icon: faMobileAlt, title: 'Omnichannel Experience Enablement', desc: 'Deliver consistent, personalized experiences across e-commerce, retail, mobile apps, and direct-to-consumer platforms.' },
              { icon: faBrain, title: 'Data-Driven Consumer Intelligence', desc: 'Understand buying behavior, optimize pricing, and tailor promotions with advanced analytics and AI.' },
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
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🔧 Our Core Offerings for Consumer Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: faCogs, title: 'Digital Supply Chain Transformation', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>Inventory optimization & replenishment automation</li><li>Smart warehousing and logistics orchestration</li><li>Demand sensing and predictive forecasting</li></ul>) },
              { icon: faShoppingCart, title: 'E-Commerce & D2C Enablement', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>Scalable online store setup and integrations</li><li>Unified commerce platforms (POS, online, mobile)</li><li>Seamless order fulfillment and customer support flows</li></ul>) },
              { icon: faChartPie, title: 'Consumer Insights & Analytics', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>Social listening and sentiment tracking</li><li>Dynamic pricing engines and promo ROI tracking</li><li>AI-powered churn prediction and personalization</li></ul>) },
              { icon: faRocket, title: 'Product Lifecycle & Innovation Acceleration', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>PLM systems and digital product twins</li><li>Idea-to-launch tracking and cost modeling</li><li>Quality control and supplier collaboration portals</li></ul>) },
              { icon: faLeaf, title: 'Sustainable Product Traceability', desc: (<ul className="text-left list-disc ml-4 text-sm"><li>Carbon footprint tracking and compliance mapping</li><li>End-to-end material traceability using blockchain/IoT</li><li>ESG reporting and impact dashboards</li></ul>) },
            ].map((item, idx) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <div className="text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">💼 With VirtuSwift, You Get:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: faRocket, title: 'Faster Product Launches' },
              { icon: faBoxOpen, title: 'Higher Shelf Availability' },
              { icon: faUsers, title: 'Increased Brand Loyalty' },
              { icon: faStore, title: 'Streamlined Retail Operations' },
              { icon: faChartLine, title: 'Real-Time Market Adaptability' },
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
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🧭 Ready to Become a Digital-First Consumer Brand?</h3>
          <p className="text-lg text-gray-700 mb-6">Let VirtuSwift transform your product, customer, and operations ecosystem into a connected powerhouse of performance.</p>
          <Link to="/contact?industry=consumer-products" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request a Consumer Brand Innovation Session →</Link>
        </div>
      </div>
    </div>
  );
} 