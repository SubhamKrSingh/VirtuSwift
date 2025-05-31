import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake, faHospitalUser, faStethoscope, faLaptopMedical, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sliderImages = [
  {
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    title: 'Advance Healthcare with VirtuSwift IT Solutions',
    desc: 'Enhance patient care and streamline operations with innovative technology.'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzk5lw0TfGrPcG5I11cT-L10UHHjtF0stQvg&s',
    title: '',
    desc: ''
  }
];

const tabs = [
  'Overview',
  'Capabilities',
  'Benefits'
];

const Healthcare: React.FC = () => {
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
              <h2 className="text-3xl font-bold mb-4">Transforming Healthcare with VirtuSwift IT Expertise</h2>
              <p className="text-gray-600 mb-6">
                At VirtuSwift, we deliver tailored IT solutions to revolutionize healthcare delivery. Our expertise in EHR integration, telemedicine, and patient data analytics empowers providers to enhance care and efficiency.
              </p>
              <Link to="/contact?industry=healthcare" className="inline-block bg-[#00AEEF] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Explore Now</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2naf1q4Hv1QU_X41qt7CGj4ZnE8ULTqgug&s" alt="Health IT Technology" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        )}
        {/* Capabilities Tab */}
        {activeTab === 'Capabilities' && (
          <div className="mb-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-[#00AEEF] mb-2">CAPABILITIES</h3>
            <h2 className="text-3xl font-bold mb-4">Revolutionize Healthcare with VirtuSwift</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">EHRSync Platform</h4>
                  <p className="text-gray-600">Seamless integration of electronic health records for improved interoperability.</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">TeleHealth Dashboard</h4>
                  <p className="text-gray-600">Secure telemedicine solutions for remote patient consultations.</p>
                </div>
                <div className="md:w-1/3">
                  <h4 className="text-lg font-semibold text-[#00AEEF]">Patient Data Analytics</h4>
                  <p className="text-gray-600">Actionable insights from patient data to enhance care outcomes.</p>
                </div>
            </div>
            </div>
          </div>
        )}
        {/* Benefits Tab */}
        {activeTab === 'Benefits' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">A Future-Ready Healthcare Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faCogs} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Certified Experts</h4>
                <p className="text-gray-600">Our team is trained in advanced health IT systems and compliance.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faSyncAlt} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Proven Results</h4>
                <p className="text-gray-600">We've enhanced healthcare delivery for global providers.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Continuous Innovation</h4>
                <p className="text-gray-600">Our experts stay ahead of health IT trends and regulations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faCloud} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Scalable Solutions</h4>
                <p className="text-gray-600">Build health IT systems that grow with your organization.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Data Security</h4>
                <p className="text-gray-600">Ensure HIPAA-compliant solutions for patient data protection.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
                <FontAwesomeIcon icon={faHandshake} className="text-3xl text-[#00AEEF] mb-4" />
                <h4 className="font-bold text-lg mb-2">Strategic Partnerships</h4>
                <p className="text-gray-600">Collaborate with top tech providers for innovative health IT solutions.</p>
              </div>
            </div>
            {/* Additional Sections */}
            <div className="space-y-12 mt-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Proactive Support for Healthcare Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Our robust support system resolves 95% of health IT challenges swiftly, backed by continuous training to address evolving healthcare needs.
                  </p>
                  <Link to="/contact?industry=healthcare" className="inline-block bg-[#00AEEF] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Get Support</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/government-healthcare-it-solutions?wid=1100&hei=581&dpr=off" alt="Health IT Support" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Empowered by Industry Partnerships</h3>
                  <p className="text-gray-600 mb-4">
                    Since 2010, VirtuSwift has partnered with leading tech providers to deliver innovative health IT solutions, improving patient outcomes and operational efficiency.
                  </p>
                  <Link to="/contact?industry=healthcare" className="inline-block bg-[#00AEEF] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-colors">Collaborate with Us</Link>
                </div>
                <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" alt="Industry Partnerships" className="w-full h-64 object-cover rounded-lg" />
                </div>
              </div>
            </div>
            {/* Related Resources */}
            <div className="bg-gray-50 py-12 mt-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" alt="Resource 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#00AEEF] mb-2">Health IT Insights</h4>
                    <p className="text-gray-600">Learn how VirtuSwift enhances healthcare with innovative IT solutions.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUF-8devljF9bxN4bWEVx9WHUNQEDUJwscg&s" alt="Resource 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#00AEEF] mb-2">Webinar Replay</h4>
                    <p className="text-gray-600">Discover strategies for improving patient care through technology.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Resource 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h4 className="text-lg font-semibold text-[#00AEEF] mb-2">Whitepaper</h4>
                    <p className="text-gray-600">Why secure data analytics are critical for modern healthcare.</p>
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

export default Healthcare; 