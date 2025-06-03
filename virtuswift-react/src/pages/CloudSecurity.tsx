import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faGraduationCap, faCloud, faCheckCircle, faHandshake } from '@fortawesome/free-solid-svg-icons';

const CloudSecurity: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');

  const slides = [
    {
      image: 'https://f.hubspotusercontent10.net/hubfs/6764014/Imported_Blog_Media/Cloud-security-as-a-service-header.jpg',
      title: 'Secure Your Multi-Cloud with VirtuSwift',
      subtitle: 'Leverage Google Cloud\'s advanced security alongside AWS and Azure for robust protection.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYxpbgGA282I2ys8_IQVOdbL5p6y71obqMW5TZtUhbBQlsKAzZB7WUg_VjU_Ssz_V8T0&usqp=CAU',
      title: 'Comprehensive Cloud Security Solutions',
      subtitle: 'Protect your assets across all cloud platforms with our expert services.'
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Unleashing Cloud Security Excellence with Google Cloud
              </h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we deliver multi-cloud security solutions with Google Cloud's advanced tools
                at the core, integrating AWS and Azure to ensure robust protection, compliance, and
                resilience for your business.
              </p>
              <Link
                to="/contact?service=cloud-security" // Example of passing context via query param
                className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbPR3dd_DXTIBpkejUuE6OE5XuZNrNmy0RiQ&s"
                alt="Cloud Security Technology"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 'Capabilities':
        return (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Secure Your Multi-Cloud Environment</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#3a3dc4]">Security Monitoring</h4>
                  <p className="text-gray-600">Real-time threat detection across Google Cloud, AWS, and Azure using Google Cloud Security Command Center.</p>
                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#3a3dc4]">Identity & Access Management</h4>
                  <p className="text-gray-600">Unified IAM with Google Cloud Identity and BeyondCorp for secure multi-cloud access control.</p>
                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#3a3dc4]">Compliance Management</h4>
                  <p className="text-gray-600">Ensure compliance with Google Cloud's Assured Workloads and multi-cloud auditing tools.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Benefits':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">A Secure Multi-Cloud Journey with Google Cloud</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[ 
                { icon: faShieldAlt, title: "Certified Security Experts", text: "Our Google Cloud-certified security team ensures multi-cloud protection." },
                { icon: faLock, title: "Proven Security Success", text: "Delivered secure multi-cloud solutions across diverse industries." },
                { icon: faGraduationCap, title: "Continuous Learning", text: "Our team stays updated with the latest cloud security innovations." },
                { icon: faCloud, title: "Unified Security Framework", text: "Integrate security across clouds with Google Cloud's robust tools." },
                { icon: faCheckCircle, title: "Compliance Assurance", text: "Meet regulatory requirements with multi-cloud compliance solutions." },
                { icon: faHandshake, title: "Strategic Security Partnerships", text: "Collaborate with Google and cloud leaders for cutting-edge security." },
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
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive Cloud Security Support</h3>
            <p className="text-gray-600 mb-4">
              Our comprehensive security knowledge base, powered by Google Cloud, covers 95% of
              multi-cloud security threats, with documented solutions for rapid mitigation across Google
              Cloud, AWS, and Azure.
            </p>
            <Link
              to="/contact?service=cloud-security-support"
              className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-colors"
            >
              Explore Support
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://ifacet-bucket-2.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/08/17124538/Cloud-Security.webp"
              alt="Proactive Security Support"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Strength Through Google Cloud Security Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Since 2010, VirtuSwift has excelled in multi-cloud security, leveraging Google Cloud
              partnerships to deliver robust protection alongside AWS and Azure integrations.
            </p>
            <Link
              to="/contact?service=cloud-partnerships"
              className="inline-block bg-[#3a3dc4] text-white px-6 py-3 rounded-lg hover:bg-[#008BCF] transition-colors"
            >
              Partner with Us
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN_N-W9JAt4uDwwTIKd8N5YQH66YQeXY0FA&s"
              alt="Security Partnerships"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Related Security Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { img: 'https://media.licdn.com/dms/image/v2/C4D12AQGtLEz86DxOPg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1576839377580?e=2147483647&v=beta&t=nuYQV595xrTohK7SnNSGkxWHmPY6lk7k5bDC4XvU7tE', title: 'Security Thought Leadership', text: 'Discover how VirtuSwift secures multi-cloud environments with Google Cloud.' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVb3hYivYCUEP9spV6XmLkaZ64qZ4xTi13eGo3vcKIj6euB3i7cHHwb3NSiLTORbgjds&usqp=CAU', title: 'Security Event Replay', text: 'Learn how to enhance multi-cloud security with Google Cloud tools.' },
              { img: 'https://books.forbes.com/wp-content/uploads/2023/08/thought-leader-speaker.png', title: 'Compliance Guide', text: 'Ensure compliance in multi-cloud setups with Google Cloud.' }
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

export default CloudSecurity; 