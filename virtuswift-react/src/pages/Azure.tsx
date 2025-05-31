import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Azure: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');

  const slides = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRYeSIiXuxLcteoQz8uYRqestWZvepQROVc1JpR35--9gw52r5Evew8hUp19kjqm2O2I&usqp=CAU',
      title: 'Empower Your Business with VirtuSwift Azure Solutions',
      subtitle: 'Unlock scalability, security, and innovation with Azure Cloud Services.'
    },
    {
      image: 'https://adtimin.vn/wp-content/uploads/2024/12/Microsoft-Azure-la-gi.webp',
      title: 'Drive Transformation with Azure',
      subtitle: 'Harness the comprehensive suite of Microsoft Azure services.'
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
                Unleashing Azure Excellence: Scalability, Security, Innovation
              </h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we tailor Azure Cloud Services to your unique business needs. Our solutions are
                built on scalability, security, and innovation, ensuring your cloud journey drives business success.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBO3Slvb_SIxNdF1763zz3KTDKM63z8Lseg&s"
                alt="Azure Technology"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        );
      case 'Capabilities':
        return (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#00AEEF] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Transform Your Business with Azure</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Azure Monitor</h4>
                  <p className="text-gray-600">Real-time insights into your cloud infrastructure with advanced monitoring and analytics.</p>
                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Cost Management</h4>
                  <p className="text-gray-600">Optimize your Azure spending with detailed cost analysis and budgeting tools.</p>
                </div>
                <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Managed Services</h4>
                  <p className="text-gray-600">Ensure peak performance with our managed Azure solutions and support.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Benefits':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">A Modern Cloud Journey with Azure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[ 
                { icon: faCogs, title: "Certified Experts", text: "Our Azure-certified professionals deliver top-tier cloud expertise." },
                { icon: faSyncAlt, title: "Proven Success", text: "Successfully delivered Azure projects across diverse industries." },
                { icon: faGraduationCap, title: "Continuous Learning", text: "Our team stays updated with the latest Azure innovations." },
                { icon: faCloud, title: "Scalable Infrastructure", text: "Build a flexible and scalable cloud environment with Azure." },
                { icon: faShieldAlt, title: "Enhanced Security", text: "Protect your data with Azure's advanced security features." },
                { icon: faHandshake, title: "Strategic Partnerships", text: "Collaborate with Microsoft for cutting-edge cloud solutions." },
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
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive Azure Support</h3>
            <p className="text-gray-600 mb-4">
              Our comprehensive Azure knowledge base covers 95% of potential cloud issues, with documented
              solutions for rapid resolution. Our team is trained to handle emerging challenges.
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEjDwsaJwB8c4e6OSyPnXe8Cl6e6NJLDBTIH3MMflKjA6hvb8p9jdrgevMBMK4eqAKYcY&usqp=CAU"
              alt="Proactive Support"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Strength Through Microsoft Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Since 2010, VirtuSwift has excelled in managing Azure workloads, partnering with Microsoft
              to deliver innovative cloud solutions.
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTu8jlplpIVJqn1BZ3xUJ-kDEVg0jFZfcGQ&s"
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
              { img: 'https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/65cc5760a73d6666440d87e3_seminars-training-header.jpg', title: 'Thought Leadership', text: 'Discover how VirtuSwift transforms businesses with Azure solutions.' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK3yARCnDWMwzel5CanHdtCdCRMNhJ0eSOQ&s', title: 'Event Replay', text: 'Learn how to optimize cloud costs with Azure tools.' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqMiwG51MRc0ePydC9gM0LEom0Pdlbh3zUA&s', title: 'Thought Leadership', text: 'Why businesses need Azure for scalable cloud infrastructure.' }
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

export default Azure; 