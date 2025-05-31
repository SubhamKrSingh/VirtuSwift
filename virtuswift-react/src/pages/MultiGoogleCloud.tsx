import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faCommentDots, faPaperPlane, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MultiGoogleCloud: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([]);
  const [chatInput, setChatInput] = useState('');

  const slides = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvdF4apUOgQpzfapOMZI1CnEiZBBQMwXrWA&s',
      title: 'Empower Your Business with VirtuSwift Multi-Cloud Solutions',
      subtitle: 'Leverage Google Cloud alongside AWS and Azure for flexibility and innovation.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytDG-RYfG7bAsl7Hs_zD4F0b9uLTnRAViS1l5ty-_JJqP0O8KvfF_y7dQHpdKifbpS8c&usqp=CAU',
      title: 'Seamless Multi-Cloud Integration',
      subtitle: 'Optimize your workflows with our expert Google Cloud services.'
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
        setChatMessages(prevMessages => [...prevMessages, { type: 'bot', text: 'Thank you for your message. Our multi-cloud team, specializing in Google Cloud, will assist you shortly.' }]);
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
                Unleashing Multi-Cloud Excellence with Google Cloud
              </h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we design multi-cloud solutions with Google Cloud at the core, integrating
                AWS and Azure to deliver unmatched flexibility, scalability, and innovation for your
                business.
              </p>
              <Link
                to="/contact?service=multi-google-cloud"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMC7OuamXDdKf3GQJyX3hw81neGkOUtvdNDg&s"
                alt="Multi-Cloud Technology"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 'Capabilities':
        return (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-primary mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Transform Your Business with Multi-Cloud</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primary mb-2">Hybrid Monitoring</h4>
                <p className="text-gray-600">Unify monitoring across Google Cloud, AWS, and Azure with integrated analytics tools.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primary mb-2">Cost Orchestration</h4>
                <p className="text-gray-600">Optimize spending across multiple clouds with Google Cloud's cost management tools.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-primary mb-2">Multi-Cloud Management</h4>
                <p className="text-gray-600">Seamlessly manage workloads across Google Cloud, AWS, and Azure with our expertise.</p>
              </div>
            </div>
          </div>
        );
      case 'Benefits':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">A Modern Multi-Cloud Journey with Google Cloud</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: faCogs, title: "Certified Experts", text: "Our Google Cloud-certified team excels in multi-cloud integrations." },
                { icon: faSyncAlt, title: "Proven Success", text: "Delivered multi-cloud projects leveraging Google Cloud across industries." },
                { icon: faGraduationCap, title: "Continuous Learning", text: "Our team stays updated with Google Cloud and multi-cloud innovations." },
                { icon: faCloud, title: "Flexible Infrastructure", text: "Build a scalable multi-cloud environment with Google Cloud at its core." },
                { icon: faShieldAlt, title: "Unified Security", text: "Secure your multi-cloud setup with Google Cloud's advanced security features." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with Google and other cloud leaders for cutting-edge solutions." },
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
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive Multi-Cloud Support</h3>
            <p className="text-gray-600 mb-4">
              Our comprehensive multi-cloud knowledge base, powered by Google Cloud, covers 95% of
              potential issues, with documented solutions for rapid resolution across Google Cloud, AWS,
              and Azure.
            </p>
            <Link
              to="/contact?service=multi-cloud-support"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Support
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://www.cloudzero.com/wp-content/uploads/2023/12/google-cloud-alternatives.webp"
              alt="Proactive Support"
              className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Strength Through Google Cloud Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Since 2010, VirtuSwift has excelled in multi-cloud management, leveraging Google Cloud
              partnerships to deliver innovative solutions alongside AWS and Azure integrations.
            </p>
            <Link
              to="/contact?service=google-cloud-partnerships"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Partner with Us
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FYu5NVTNjfwaIHWFh9CTcqcrgObtiuwRc0U0atpuiVbuAtZZRgpfEcPfl8z3po3o8A&usqp=CAU"
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
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF_mZIK22UlN591XT7yiW7857kLpurQAKN_WYmbqvviVgTf8ebFDmJg0KIia4jLLcy10&usqp=CAU', title: 'Thought Leadership', text: 'Discover how VirtuSwift transforms businesses with multi-cloud solutions.' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFLodwx9qiwFcJxpf2bLRd7kiafuyLF3VCbQx0XCGwHAl5I7tBuSTHMXGxy6GuDVpiQ0&usqp=CAU', title: 'Event Replay', text: 'Learn how to optimize costs in a multi-cloud environment with Google Cloud.' },
              { img: 'https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/woman%20in%20professional%20clothing%20and%20microphone%20presenting%20thought%20leadership%20ideas.jpg', title: 'Thought Leadership', text: 'Why businesses need multi-cloud with Google Cloud for scalability.' }
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
          className="bg-gradient-to-r from-google-blue to-google-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          aria-label="Toggle chat"
        >
          <FontAwesomeIcon icon={faCommentDots} size="2x" />
        </button>
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden animate-slidein">
            <div className="bg-gradient-to-r from-google-blue to-google-green p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg">VirtuSwift GCP Support</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200 text-2xl">&times;</button>
            </div>
            <div className="h-80 p-4 overflow-y-auto bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`mb-3 max-w-[80%] clear-both ${msg.type === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                  <div className={`p-3 rounded-xl ${msg.type === 'user' ? 'bg-google-blue text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
               {chatMessages.length === 0 && <div className="text-center text-gray-500 pt-10">Need help with Google Cloud?</div>}
            </div>
            <div className="p-3 border-t flex">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..." 
                className="flex-grow border rounded-full py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-google-blue"
              />
              <button onClick={handleSendMessage} className="bg-google-green text-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:opacity-90">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiGoogleCloud; 