import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faShieldAlt, faChartLine, faCogs, faCloud, faRobot, faLink, faUsers, faCreditCard, faCheckCircle, faUserShield, faSyncAlt, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    title: 'Accelerate Innovation with VirtuSwift Financial Solutions',
    desc: 'Unlock enterprise-grade performance with reliability and compliance for financial institutions.'
  }
];

const tabs = [
  'Overview',
  'Capabilities',
  'Benefits'
];

const Financial: React.FC = () => {
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
          <div className={`flex flex-col md:flex-row gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Transforming Finance with VirtuSwift IT Expertise</h2>
              <p className="text-lg text-gray-700 mb-6">
                At VirtuSwift, we deliver tailored IT solutions to revolutionize financial operations. Our expertise in digital banking, regulatory compliance, and fintech innovation empowers financial institutions to enhance customer experiences and operational efficiency.
              </p>
              <Link to="/contact?industry=financial" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg">Explore Now</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Financial IT Technology" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
            </div>
          </div>
        )}

        {/* Capabilities Tab */}
        {activeTab === 'Capabilities' && (
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">CAPABILITIES</h3>
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Revolutionize Finance with VirtuSwift</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                {[
                  {
                    title: 'FinanceSync Portal',
                    description: 'Real-time insights into your financial projects with seamless collaboration tools and regulatory compliance.'
                  },
                  {
                    title: 'Cloud Banking Dashboard',
                    description: 'Full visibility into your financial cloud infrastructure performance, costs, and security metrics.'
                  },
                  {
                    title: 'Managed Financial Infrastructure',
                    description: 'Optimize your financial environment with our expert-managed services and 24/7 monitoring.'
                  }
                ].map((capability, index) => (
                  <div
                    key={capability.title}
                    className={`md:w-1/3 bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animationDuration: '0.6s',
                      animationFillMode: 'forwards'
                    }}
                  >
                    <h4 className="text-lg font-semibold text-[#3a3dc4]">{capability.title}</h4>
                    <p className="text-gray-600">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'Benefits' && (
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-8">A Future-Ready Financial Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: faCogs, title: "Certified Experts", text: "Our team is trained in advanced financial IT systems and regulatory compliance." },
                { icon: faSyncAlt, title: "Proven Results", text: "We've enhanced financial operations for global institutions and fintech companies." },
                { icon: faGraduationCap, title: "Continuous Innovation", text: "Our experts stay ahead of financial technology trends and regulatory changes." },
                { icon: faCloud, title: "Scalable Solutions", text: "Build financial IT systems that grow with your organization and customer base." },
                { icon: faShieldAlt, title: "Data Security", text: "Ensure compliant solutions for sensitive financial data protection and privacy." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with top fintech providers for innovative financial IT solutions." }
              ].map((benefit, index) => (
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
                  <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-center">{benefit.text}</p>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="space-y-12 mt-12">
              <div className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 delay-600 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Proactive Support for Financial Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Our robust support system resolves 95% of financial IT challenges swiftly, backed by continuous training to address evolving regulatory and compliance needs.
                  </p>
                  <Link to="/contact?industry=financial" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg">Get Support</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43" alt="Financial IT Support" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
                </div>
              </div>

              <div className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 delay-800 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Empowered by Industry Partnerships</h3>
                  <p className="text-gray-600 mb-4">
                    Since 2010, VirtuSwift has partnered with leading fintech providers to deliver innovative financial IT solutions, improving customer experiences and operational efficiency.
                  </p>
                  <Link to="/contact?industry=financial" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg">Collaborate with Us</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" alt="Industry Partnerships" className="w-full h-64 object-cover rounded-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className={`bg-gray-50 py-12 mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                      title: "Financial IT Insights",
                      description: "Learn how VirtuSwift enhances financial services with innovative IT solutions."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
                      title: "Digital Banking Trends",
                      description: "Stay updated with the latest financial technology and digital banking trends."
                    },
                    {
                      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
                      title: "Fintech Solutions",
                      description: "Discover how technology improves financial services and customer outcomes."
                    }
                  ].map((resource, index) => (
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
                      <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">{resource.title}</h4>
                      <p className="text-gray-600">{resource.description}</p>
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

export default Financial;