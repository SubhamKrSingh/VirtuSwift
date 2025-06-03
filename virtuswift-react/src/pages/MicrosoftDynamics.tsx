import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faCommentDots, faPaperPlane, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MicrosoftDynamics: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([]);
  const [chatInput, setChatInput] = useState('');

  const slides = [
    {
      image: 'https://tectura.com/india/wp-content/uploads/2023/12/Microsoft_Dynamics365_blog-1170x617-1.jpg',
      title: 'Elevate Your Business with VirtuSwift Microsoft Dynamics Solutions',
      subtitle: 'Streamline operations and enhance customer engagement with integrated CRM and ERP solutions.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsKm1FK4PH2hE9G0pc0e4j2uNmPVJZZUzv3YHTnlVXZ8W6RKQ1Mz9VH0O2MgD--7Lhg&usqp=CAU',
      title: 'Seamless Dynamics 365 Integration',
      subtitle: 'Optimize your workflows with our expert Microsoft Dynamics services.'
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
        setChatMessages(prevMessages => [...prevMessages, { type: 'bot', text: 'Thank you for your message. Our Microsoft Dynamics team will get back to you shortly.' }]);
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
                Mastering Business Efficiency with Microsoft Dynamics
              </h2>
              <p className="text-gray-600 mb-6">
                VirtuSwift delivers tailored Microsoft Dynamics 365 solutions to optimize your business
                processes. By integrating CRM and ERP capabilities, we enable seamless customer engagement,
                streamlined operations, and data-driven decisions, ensuring your organization thrives in a
                competitive landscape.
              </p>
              <Link
                to="/contact?service=microsoft-dynamics"
                className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#2f3099] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pAy5hr4Ta8XgYHNJObqzarSBo5xdltzYPY_6JHTeQpb5Jy8uJdcF87DClEBHSPETvOE&usqp=CAU"
                alt="Microsoft Dynamics Technology"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 'Capabilities':
        return (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Transform Operations with Dynamics 365</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Customer Engagement</h4>
                <p className="text-gray-600">Enhance customer relationships with Dynamics 365 Customer Service, offering real-time insights and personalized interactions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Business Central</h4>
                <p className="text-gray-600">Unify financials, sales, and operations with a cloud-based ERP solution for small and medium businesses.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">Site Management</h4>
                <p className="text-gray-600">Organize resources by location and time zone for efficient scheduling and operations.</p>
              </div>
            </div>
          </div>
        );
      case 'Benefits':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">A Modern Dynamics Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: faCogs, title: "Expert Consultants", text: "Our certified Dynamics professionals deliver top-tier expertise for your business needs." },
                { icon: faSyncAlt, title: "Proven Success", text: "Successfully implemented Dynamics solutions across various industries." },
                { icon: faGraduationCap, title: "Continuous Learning", text: "Our team stays current with Dynamics 365 updates through ongoing training." },
                { icon: faCloud, title: "Scalable Operations", text: "Optimize your business processes for scalability and efficiency." },
                { icon: faShieldAlt, title: "Cost Efficiency", text: "Achieve cost savings without compromising performance." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with Microsoft for innovative Dynamics solutions." },
              ].map(benefit => (
                <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-[#3a3dc4] mb-4" />
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
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-opacity text-gray-700"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
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
                  ${activeTab === tab ? 'border-[#3a3dc4] text-[#3a3dc4]' : 'border-transparent text-gray-400 hover:text-white hover:border-[#3a3dc4]'}`}
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
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive Support for Today and Tomorrow</h3>
            <p className="text-gray-600 mb-4">
              Our Dynamics Support Center addresses 95% of potential issues with documented solutions,
              ensuring rapid resolution. Our team undergoes regular training to tackle emerging Dynamics
              challenges.
            </p>
            <Link
              to="/contact?service=dynamics-support"
              className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#2f3099] transition-colors"
            >
              Explore Support
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
              alt="Proactive Support"
              className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Strength Through Strategic Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Since 2010, VirtuSwift has excelled in deploying Microsoft Dynamics solutions, partnering
              with Microsoft to deliver innovative CRM and ERP solutions across industries.
            </p>
            <Link
              to="/contact?service=dynamics-partnerships"
              className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#2f3099] transition-colors"
            >
              Partner with Us
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg"
              alt="Strategic Partnerships"
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
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDIFDGVqBqRjhpSXxWap2VnOOvNuFTGz-Ss-sewQMtNLlRiT9hMQS_MRMc9SUxmNs4ek&usqp=CAU', title: 'Thought Leadership', text: 'How VirtuSwift enhances business efficiency with Dynamics 365.' },
              { img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg', title: 'Webinar Replay', text: 'Learn how Dynamics 365 optimizes customer service operations.' },
              { img: 'https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/woman%20in%20professional%20clothing%20and%20microphone%20presenting%20thought%20leadership%20ideas.jpg', title: 'Case Study', text: 'Streamlining operations with Dynamics 365 Business Central.' }
            ].map(resource => (
              <div key={resource.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={resource.img} alt={resource.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-[#3a3dc4] mb-2">{resource.title}</h4>
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
          className="bg-[#3a3dc4] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          aria-label="Toggle chat"
        >
          <FontAwesomeIcon icon={faCommentDots} size="2x" />
        </button>
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden animate-slidein">
            <div className="bg-[#3a3dc4] p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg">VirtuSwift Dynamics Support</h3>
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
               {chatMessages.length === 0 && <div className="text-center text-gray-500 pt-10">Questions about Microsoft Dynamics? Ask away!</div>}
            </div>
            <div className="p-3 border-t flex">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..." 
                className="flex-grow border rounded-full py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-[#3a3dc4]"
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

export default MicrosoftDynamics; 