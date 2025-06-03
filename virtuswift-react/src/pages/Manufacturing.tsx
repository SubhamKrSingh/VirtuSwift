import React, { useState, useEffect } from 'react';
import manufacturingBg from '../assets/images/manufacturing-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    title: 'Elevate Your Manufacturing with VirtuSwift IT Solutions',
    desc: 'Streamline operations and boost efficiency with cutting-edge technology.'
  },
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    title: '',
    desc: ''
  }
];

const tabs = [
  'Overview',
  'Capabilities',
  'Benefits'
];

const Manufacturing: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Slider Section */}
      <div className="relative w-full h-[400px] bg-gray-100 overflow-hidden">
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
        >❮</button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
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
                className={`tab-link px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'text-[#3a3dc4] border-[#3a3dc4]' : 'border-transparent text-white hover:text-[#3a3dc4] hover:border-[#3a3dc4]'}`}
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
          <div className="flex flex-col md:flex-row gap-8 mb-12 animate-fade-in">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Revolutionizing Manufacturing with VirtuSwift IT Expertise</h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we tailor IT solutions to meet the unique demands of the manufacturing sector. Our services combine innovation, efficiency, and collaboration to deliver transformative outcomes for your operations.
              </p>
              <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Discover More</Link>
            </div>
            <div className="md:w-1/2">
              <img src={manufacturingBg} alt="Manufacturing Technology" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        )}
        {/* Capabilities Tab */}
        {activeTab === 'Capabilities' && (
          <div className="mb-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-4">Enhance Manufacturing with VirtuSwift IT</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#3a3dc4]">SmartSync Platform</h4>
                  <p className="text-gray-600">Real-time monitoring of manufacturing processes with seamless data integration.</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#3a3dc4]">Cloud Analytics Dashboard</h4>
                  <p className="text-gray-600">Gain insights into production metrics and operational performance.</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#3a3dc4]">Automation Services</h4>
                  <p className="text-gray-600">Optimize workflows with advanced automation and IoT integration.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Benefits Tab */}
        {activeTab === 'Benefits' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">A Future-Ready Manufacturing Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faCogs} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">Expert Engineers</h4>
                <p className="text-gray-600">Our team holds certifications in cutting-edge manufacturing technologies.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faSyncAlt} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">Proven Success</h4>
                <p className="text-gray-600">We've optimized manufacturing processes for diverse industries.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">Continuous Innovation</h4>
                <p className="text-gray-600">Our experts stay updated with the latest manufacturing IT trends.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faCloud} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">Efficient Operations</h4>
                <p className="text-gray-600">Streamline production for enhanced reliability and output.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">Cost Savings</h4>
                <p className="text-gray-600">Maximize efficiency while minimizing operational costs.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faHandshake} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">Industry Alliances</h4>
                <p className="text-gray-600">Partner with leading tech providers for innovative solutions.</p>
              </div>
            </div>
            {/* Additional Sections */}
            <div className="space-y-12 mt-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Proactive IT Support for Manufacturing</h3>
                  <p className="text-gray-600 mb-4">
                    Our extensive knowledge base addresses 95% of manufacturing IT challenges, offering swift solutions. Our team is trained to tackle evolving industry demands.
                  </p>
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Explore Support</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Proactive Support" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Empowered by Strategic Partnerships</h3>
                  <p className="text-gray-600 mb-4">
                    Since 2010, VirtuSwift has led in delivering IT solutions for manufacturing, collaborating with top tech firms to provide innovative tools and services.
                  </p>
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Partner with Us</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Strategic Partnerships" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>
            </div>
            {/* Related Resources */}
            <div className="bg-gray-50 py-12 mt-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://static.theceomagazine.net/wp-content/uploads/2023/02/22152955/camilo-jimenez-qZenO_gQ7QA-unsplash-scaled.jpg" alt="Resource 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Industry Insights</h4>
                    <p className="text-gray-600">Discover how VirtuSwift drives innovation in manufacturing IT.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Resource 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Webinar Replay</h4>
                    <p className="text-gray-600">Learn strategies for optimizing manufacturing efficiency.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Resource 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Whitepaper</h4>
                    <p className="text-gray-600">Why smart manufacturing is key to staying competitive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manufacturing; 