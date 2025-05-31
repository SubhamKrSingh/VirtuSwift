import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faStore, faShoppingCart, faTags, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: 'https://media.licdn.com/dms/image/v2/D5612AQHuOR7hsNnU7w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1687089476754?e=2147483647&v=beta&t=C6ojpuKequkR-qY6X8He4k9pSfw4WqhvMpnA4EXgKAY',
    title: 'Transform Retail with VirtuSwift E-commerce Solutions',
    desc: 'Enhance customer experiences and optimize operations with innovative IT.'
  },
  {
    url: 'https://images.unsplash.com/photo-1506765515384-028b60a970df',
    title: '',
    desc: ''
  }
];

const tabs = [
  'Overview',
  'Capabilities',
  'Benefits'
];

const Retail: React.FC = () => {
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
                className={`tab-link px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'text-[#00AEEF] border-[#00AEEF]' : 'border-transparent text-white hover:text-[#00AEEF] hover:border-[#00AEEF]'}`}
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
              <h2 className="text-3xl font-bold mb-4">Empowering Retail with VirtuSwift IT Innovation</h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we deliver tailored IT solutions to elevate retail and e-commerce businesses. Our expertise in digital platforms and customer engagement ensures your brand thrives in a competitive market.
              </p>
              <Link to="/contact?industry=retail" className="inline-block bg-[#00AEEF] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Explore Now</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiuPTeAWRNYYrzopgXP5iLfY5oZ1invv-VqQ&s" alt="Retail Technology" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        )}
        {/* Capabilities Tab */}
        {activeTab === 'Capabilities' && (
          <div className="mb-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-[#00AEEF] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-4">Revolutionize Retail with VirtuSwift</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">CustomerSync Portal</h4>
                  <p className="text-gray-600">Real-time insights into customer behavior and preferences for personalized experiences.</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Inventory Insights Dashboard</h4>
                  <p className="text-gray-600">Monitor stock levels and supply chain performance with advanced analytics.</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">E-commerce Integration</h4>
                  <p className="text-gray-600">Seamlessly connect online stores with payment gateways and CRM systems.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Benefits Tab */}
        {activeTab === 'Benefits' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">A Seamless Retail Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faCogs} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Certified Experts</h4>
                <p className="text-gray-600">Our team is skilled in leading e-commerce platforms and technologies.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faSyncAlt} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Proven Results</h4>
                <p className="text-gray-600">We've empowered retail brands with successful digital transformations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Continuous Learning</h4>
                <p className="text-gray-600">Our experts stay ahead of retail tech trends and innovations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faCloud} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Scalable Platforms</h4>
                <p className="text-gray-600">Build e-commerce solutions that grow with your business.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Cost Optimization</h4>
                <p className="text-gray-600">Maximize ROI with efficient IT solutions.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faHandshake} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Trusted Partnerships</h4>
                <p className="text-gray-600">Collaborate with top tech providers for cutting-edge solutions.</p>
              </div>
            </div>
            {/* Additional Sections */}
            <div className="space-y-12 mt-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Proactive Support for Retail Success</h3>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive support system resolves 95% of e-commerce challenges swiftly, backed by continuous training to address emerging retail trends.
                  </p>
                  <Link to="/contact?industry=retail" className="inline-block bg-[#00AEEF] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Get Support</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df" alt="Retail Support" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Strengthened by Industry Partnerships</h3>
                  <p className="text-gray-600 mb-4">
                    Since 2010, VirtuSwift has partnered with leading tech providers to deliver innovative e-commerce and retail solutions, driving business growth.
                  </p>
                  <Link to="/contact?industry=retail" className="inline-block bg-[#00AEEF] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Collaborate with Us</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://sidgs.com/wp-content/uploads/2023/01/1500-x-914-Understanding-the-Impact-of-Digital-Transformation-in-Retail-and-Commerce.jpg" alt="Industry Partnerships" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>
            </div>
            {/* Related Resources */}
            <div className="bg-gray-50 py-12 mt-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38dIRAugXemCfkFq5aOQO_faZxKlWE_dXDA&s" alt="Resource 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#00AEEF] mb-2">Retail Insights</h4>
                    <p className="text-gray-600">Learn how VirtuSwift enhances e-commerce with innovative IT solutions.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df" alt="Resource 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#00AEEF] mb-2">Webinar Replay</h4>
                    <p className="text-gray-600">Discover strategies for boosting online sales and customer loyalty.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfF52MfmW1YZljilk5n6fj2mMYEpjh9f0Ibg&s" alt="Resource 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#00AEEF] mb-2">Whitepaper</h4>
                    <p className="text-gray-600">Why omnichannel retail is essential for modern businesses.</p>
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

export default Retail; 