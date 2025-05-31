import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SupplyChain: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([]);
  const [chatInput, setChatInput] = useState('');

  const slides = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJNGNbnbGXR0fWvf2sNb5YWVS5SyZia2D1w&s',
      title: 'Optimize Your Supply Chain with VirtuSwift IT Solutions',
      subtitle: 'Streamline logistics and enhance efficiency with advanced technology.'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/C4D1BAQEz_gbnP6DzvA/company-background_10000/company-background_10000/0/1598034956204/supply_chain_solutions_cover?e=2147483647&v=beta&t=zIBqwU-0QWclDp14fwVoZHqANbXpGrqWddeP2No6_5Y',
      title: 'Innovative Supply Chain Management',
      subtitle: 'Leverage our expertise for a future-ready supply chain.'
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { type: 'user', text: chatInput.trim() }]);
      setChatInput('');
      setTimeout(() => {
        setChatMessages(prevMessages => [...prevMessages, { type: 'bot', text: 'Thank you for your message. Our team will get back to you shortly.' }]);
      }, 1000);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Revolutionizing Supply Chains with VirtuSwift IT Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we provide tailored IT solutions to optimize supply chain operations.
                Our expertise in logistics, inventory management, and real-time analytics empowers
                businesses to stay agile and competitive.
              </p>
              <Link
                to="/contact?service=supply-chain"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmln3ACerE_26HUCfLXTq-50S0_i0Ol1vMg&s"
                alt="Supply Chain Technology"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 'Capabilities':
        return (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-primary mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Transform Supply Chains with VirtuSwift</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primary mb-2">LogiTrack Platform</h4>
                <p className="text-gray-600">Real-time tracking of shipments and logistics operations for enhanced visibility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primary mb-2">InventorySync Dashboard</h4>
                <p className="text-gray-600">Optimize stock levels with predictive analytics and demand forecasting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primary mb-2">Supply Chain Automation</h4>
                <p className="text-gray-600">Streamline processes with IoT integration and automated workflows.</p>
              </div>
            </div>
          </div>
        );
      case 'Benefits':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">A Future-Ready Supply Chain</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: faCogs, title: "Certified Experts", text: "Our team is trained in advanced supply chain technologies." },
                { icon: faSyncAlt, title: "Proven Results", text: "We've optimized supply chains for global businesses." },
                { icon: faGraduationCap, title: "Continuous Innovation", text: "Our experts stay ahead of supply chain tech trends." },
                { icon: faCloud, title: "Scalable Solutions", text: "Build supply chain systems that grow with your business." },
                { icon: faShieldAlt, title: "Cost Efficiency", text: "Reduce operational costs with streamlined processes." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with top tech providers for innovative solutions." },
              ].map(benefit => (
                <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2 text-gray-700">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Slider Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start px-10 md:px-20">
                <div className="text-white max-w-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-opacity text-gray-700"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-opacity text-gray-700"
          onClick={nextSlide}
        >
          ❯
        </button>
      </section>

      {/* Tab Navigation */}
      <div className="bg-[#121927] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start space-x-4 md:space-x-8 overflow-x-auto">
            {['Overview', 'Capabilities', 'Benefits'].map(tab => (
              <button
                key={tab}
                className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors duration-300 
                  ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-400 hover:text-white hover:border-primary'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-12">
        {renderTabContent()}
      </div>

      {/* Additional Sections */}
      <div className="container mx-auto px-4 py-8 space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive Support for Supply Chain Efficiency</h3>
            <p className="text-gray-600 mb-4">
              Our robust support system resolves 95% of supply chain IT challenges swiftly, backed by
              continuous training to address evolving logistics needs.
            </p>
            <Link
              to="/contact?service=supply-chain-support"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Support
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-P1YjrA3tjR6Iw6-4BkoUXpKvyYgbP0XhQ&s"
              alt="Supply Chain Support"
              className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Empowered by Industry Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Since 2010, VirtuSwift has collaborated with leading tech providers to deliver innovative
              supply chain solutions, enhancing operational efficiency.
            </p>
            <Link
              to="/contact?service=supply-chain-partners"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Collaborate with Us
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqO0womxv_-aFFcf_9oVmDh4h31sGFaA7ng&s"
              alt="Industry Partnerships"
              className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtPxOa018Yf5dNoVOrNxL-84_TIltcBH2mw&s', title: 'Supply Chain Insights', text: 'Learn how VirtuSwift optimizes logistics with innovative IT solutions.' },
              { img: 'https://hallmarkuae.com/wp-content/smush-webp/2024/09/Service-Supply-Chain-1024x483.jpg.webp', title: 'Webinar Replay', text: 'Discover strategies for enhancing supply chain efficiency.' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrigy6Zz4pEds_h3ZJDkqGd5M5GEUVEMleCmgnNTm7QZ3Q_TFriY77BdQ5BANm5q2k7c&usqp=CAU', title: 'Whitepaper', text: 'Why real-time analytics are critical for modern supply chains.' }
            ].map(resource => (
              <div key={resource.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={resource.img} alt={resource.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm">{resource.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          aria-label="Toggle chat"
        >
          <FontAwesomeIcon icon={faCommentDots} size="2x" />
        </button>
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden animate-slidein">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg">VirtuSwift Support</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200 text-2xl">&times;</button>
            </div>
            <div className="h-80 p-4 overflow-y-auto bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`mb-3 max-w-[80%] clear-both ${msg.type === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                  <div className={`p-3 rounded-xl ${msg.type === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
               {chatMessages.length === 0 && <div className="text-center text-gray-500 pt-10">How can we help you today?</div>}
            </div>
            <div className="p-3 border-t flex">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..." 
                className="flex-grow border rounded-full py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button onClick={handleSendMessage} className="bg-accent text-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-orange-700">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplyChain; 