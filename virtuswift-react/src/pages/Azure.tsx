import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Azure: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      title: 'Accelerate Your Cloud Journey with VirtuSwift Azure Solutions',
      subtitle: 'Seamlessly transition to Microsoft Azure with expert guidance and scalable solutions.'
    },
    {
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
      title: 'Unlock Innovation with Azure',
      subtitle: 'Leverage the full potential of Microsoft Azure for your business.'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    setIsVisible(true);
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className={`flex flex-col md:flex-row gap-8 mb-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Streamlined Azure Migration: Expertise, Efficiency, Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we simplify your transition to Microsoft Azure, delivering tailored migration strategies
                that ensure minimal disruption, optimized performance, and long-term success in the cloud.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Azure Migration Technology"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
              />
            </div>
          </div>
        );
      case 'Capabilities':
        return (
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Transform Your Cloud Strategy with VirtuSwift</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                {[
                  {
                    title: 'Migration Accelerator',
                    description: 'Fast-track your migration with automated tools and real-time progress tracking.'
                  },
                  {
                    title: 'Cloud Insights Dashboard',
                    description: 'Monitor performance, costs, and security across your Azure environment.'
                  },
                  {
                    title: 'Managed Migration Services',
                    description: 'End-to-end support to ensure a smooth and secure cloud transition.'
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
        );
      case 'Benefits':
        return (
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">A Seamless Azure Migration Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[ 
                { icon: faCogs, title: "Certified Experts", text: "Azure-certified professionals ensuring flawless migrations." },
                { icon: faSyncAlt, title: "Proven Expertise", text: "Successful migrations across industries and workloads." },
                { icon: faGraduationCap, title: "Continuous Learning", text: "Stay updated with Azure's latest tools and services." },
                { icon: faCloud, title: "Optimized Performance", text: "Enhance scalability and reliability with Azure." },
                { icon: faShieldAlt, title: "Cost Efficiency", text: "Reduce operational costs with optimized cloud resources." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with Microsoft for innovative cloud solutions." },
              ].map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className={`bg-gray-50 p-6 rounded-lg shadow-sm text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '0.6s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-[#3a3dc4] mb-4 transition-transform duration-300 hover:scale-110" />
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
      <section className={`relative w-full h-[400px] overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
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
                className={`py-3 px-4 text-sm font-medium border-b-2 transition-all duration-300 hover:scale-105
                  ${activeTab === tab ? 'border-[#3a3dc4] text-[#3a3dc4]' : 'border-transparent text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-8">
        {renderTabContent()}
      </div>

      {/* Additional Sections */}
      <div className="container mx-auto px-4 py-8 space-y-12">
        <div className={`flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-lg shadow-lg transition-all duration-1000 delay-600 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive Azure Migration Support</h3>
            <p className="text-gray-600 mb-4">
              Our comprehensive knowledge base resolves 95% of migration challenges swiftly, with ongoing
              training to address evolving Azure technologies.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Support
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg"
              alt="Proactive Support"
              className="w-full h-auto object-cover rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105"
            />
          </div>
        </div>

        <div className={`flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-lg shadow-lg transition-all duration-1000 delay-800 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Empowered by Microsoft Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Since 2010, VirtuSwift has partnered with Microsoft to deliver innovative cloud solutions, improving
              operational efficiency and driving digital transformation.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Partner with Us
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Microsoft Partnerships"
              className="w-full h-auto object-cover rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105"
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
              { img: 'https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/65cc5760a73d6666440d87e3_seminars-training-header.jpg', title: 'Thought Leadership', text: 'Discover how VirtuSwift transforms businesses with Azure solutions.' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK3yARCnDWMwzel5CanHdtCdCRMNhJ0eSOQ&s', title: 'Event Replay', text: 'Learn how to optimize cloud costs with Azure tools.' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqMiwG51MRc0ePydC9gM0LEom0Pdlbh3zUA&s', title: 'Thought Leadership', text: 'Why businesses need Azure for scalable cloud infrastructure.' }
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

    </div>
  );
};

export default Azure; 