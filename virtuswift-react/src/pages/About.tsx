import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faUniversity, faShoppingBag, faIndustry, faGraduationCap, faTruck, faBullseye, faRocket, faHandshake } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className={`impressive-heading py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-[#3a3dc4] text-center">About Us</h1>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-12">
        <div className={`content-container transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2015, VirtuSwift began as a small startup with a big vision: to revolutionize the way
              businesses leverage technology. Over the past decade, we've grown into a global leader in IT
              solutions and staffing, helping companies across industries achieve their digital transformation
              goals. Our journey is built on a foundation of innovation, integrity, and a relentless
              commitment to our clients' success.
            </p>
          </div>
        </div>

        {/* Industries We Serve Section */}
        <section className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-8">
            Specialized solutions tailored for the unique requirements of various industries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: faHospital, name: 'Healthcare' },
              { icon: faUniversity, name: 'Finance' },
              { icon: faShoppingBag, name: 'Retail' },
              { icon: faIndustry, name: 'Manufacturing' },
              { icon: faGraduationCap, name: 'Education' },
              { icon: faTruck, name: 'Logistics' }
            ].map((industry, index) => (
              <div 
                key={industry.name}
                className={`industry-card bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationDuration: '0.6s',
                  animationFillMode: 'forwards'
                }}
              >
                <FontAwesomeIcon icon={industry.icon} className="text-4xl text-[#3a3dc4] mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-lg font-semibold text-gray-800">{industry.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Vision, Mission, Philosophy Section */}
        <section className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: faBullseye,
                title: 'Our Vision',
                description: 'To be the global leader in IT solutions and staffing services, empowering businesses to achieve unparalleled success through virtuous innovation and swift execution.'
              },
              {
                icon: faRocket,
                title: 'Our Mission',
                description: 'Deliver cutting-edge technology solutions that drive business transformation. Provide expertly screened talent across all tech stacks. Foster long-term partnerships through ethical practices and rapid service.'
              },
              {
                icon: faHandshake,
                title: 'Our Philosophy',
                description: 'VirtuSwift operates on the principles of virtue and speed, combining moral excellence with swift execution. We believe in upholding integrity, accelerating success, and innovating responsibly.'
              }
            ].map((card, index) => (
              <div 
                key={card.title}
                className={`vision-mission-card bg-white rounded-xl shadow p-8 flex flex-col items-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationDuration: '0.8s',
                  animationFillMode: 'forwards'
                }}
              >
                <FontAwesomeIcon icon={card.icon} className="text-4xl text-[#3a3dc4] mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-gray-600 text-center">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={`bg-[#3a3dc4] text-white py-16 rounded-lg transition-all duration-1000 delay-800 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-lg mb-6">
              Schedule a free consultation with our experts to discuss your project requirements.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#3a3dc4] px-6 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Request a Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#3a3dc4] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 