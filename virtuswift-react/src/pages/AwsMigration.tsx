import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';

const AwsMigration: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      title: 'Accelerate Your Cloud Journey with VirtuSwift AWS Migration',
      subtitle: 'Seamlessly transition to AWS with expert guidance and scalable solutions.'
    },
    {
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
      title: 'Unlock Innovation with AWS',
      subtitle: 'Leverage the full potential of Amazon Web Services for your business.'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Streamlined AWS Migration: Expertise, Efficiency, Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we simplify your transition to AWS, delivering tailored migration strategies
                that ensure minimal disruption, optimized performance, and long-term success in the cloud.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#00AEEF] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="AWS Migration Technology"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 'Capabilities':
        return (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#00AEEF] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Transform Your Cloud Strategy with VirtuSwift</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Migration Accelerator</h4>
                  <p className="text-gray-600">Fast-track your migration with automated tools and real-time progress tracking.</p>
                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Cloud Insights Dashboard</h4>
                  <p className="text-gray-600">Monitor performance, costs, and security across your AWS environment.</p>
                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Managed Migration Services</h4>
                  <p className="text-gray-600">End-to-end support to ensure a smooth and secure cloud transition.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Benefits':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">A Seamless AWS Migration Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[ 
                { icon: faCogs, title: "Certified Experts", text: "AWS-certified professionals ensuring flawless migrations." },
                { icon: faSyncAlt, title: "Proven Expertise", text: "Successful migrations across industries and workloads." },
                { icon: faGraduationCap, title: "Continuous Learning", text: "Stay updated with AWS's latest tools and services." },
                { icon: faCloud, title: "Optimized Performance", text: "Enhance scalability and reliability with AWS." },
                { icon: faShieldAlt, title: "Cost Efficiency", text: "Reduce operational costs with optimized cloud resources." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with AWS for innovative cloud solutions." },
              ].map(benefit => (
                <div key={benefit.title} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-[#00AEEF] mb-4" />
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
                  ${activeTab === tab ? 'border-[#00AEEF] text-[#00AEEF]' : 'border-transparent text-gray-400 hover:text-white'}`}
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
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive AWS Migration Support</h3>
            <p className="text-gray-600 mb-4">
              Our comprehensive knowledge base resolves 95% of migration challenges swiftly, with ongoing
              training to address evolving AWS technologies.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#00AEEF] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-colors"
            >
              Explore Support
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg"
              alt="Proactive Support"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Strengthened by AWS Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Since 2010, VirtuSwift has partnered with AWS to deliver robust migration solutions,
              optimizing workloads across hybrid and multi-cloud environments.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#00AEEF] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-colors"
            >
              Partner with Us
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Strategic Partnerships"
              className="w-full h-auto object-cover rounded-lg shadow-md"
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
              { img: 'https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg', title: 'Cloud Migration Guide', text: 'Learn how VirtuSwift streamlines AWS migrations for businesses.' },
              { img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', title: 'Webinar Replay', text: 'Discover strategies for cost-effective AWS migrations.' },
              { img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg', title: 'Industry Insights', text: 'Why cloud migration is critical for modern enterprises.' }
            ].map(resource => (
              <div key={resource.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={resource.img} alt={resource.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-[#00AEEF] mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm">{resource.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AwsMigration; 