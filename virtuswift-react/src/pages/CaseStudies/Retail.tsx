import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChartLine, faFileInvoiceDollar, faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import retailBg from '../../assets/images/retail-bg.jpg';
import { Link } from 'react-router-dom';

const Retail: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className={`relative w-full h-[400px] bg-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">Retail Industry Solutions</h1>
              <p className="text-lg">Revolutionizing retail operations with innovative IT solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-6">Transforming Retail Operations</h2>
          <p className="text-gray-600 mb-8">
            VirtuSwift delivers cutting-edge IT solutions to revolutionize retail operations and enhance customer experiences. Our expertise in e-commerce platforms, inventory management, and customer analytics empowers retailers to increase sales, improve efficiency, and stay competitive in the digital marketplace.
          </p>
        </div>

        {/* Key Solutions */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-6">Key Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'E-commerce Platforms',
                description: 'Modern, scalable e-commerce solutions with seamless payment processing and inventory integration.'
              },
              {
                title: 'Inventory Management',
                description: 'Real-time inventory tracking and automated replenishment systems for optimal stock levels.'
              },
              {
                title: 'Customer Analytics',
                description: 'Advanced analytics and CRM solutions for personalized customer experiences and targeted marketing.'
              }
            ].map((solution, index) => (
              <div 
                key={solution.title}
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationDuration: '0.6s',
                  animationFillMode: 'forwards'
                }}
              >
                <h4 className="text-lg font-semibold text-[#3a3dc4] mb-3">{solution.title}</h4>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-6">Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: faCogs, title: "Operational Efficiency", text: "Streamlined processes and automated workflows reduce operational costs by up to 35%." },
              { icon: faSyncAlt, title: "Inventory Optimization", text: "Real-time tracking and predictive analytics reduce stockouts and overstock situations." },
              { icon: faGraduationCap, title: "Enhanced Customer Experience", text: "Personalized shopping experiences and seamless omnichannel integration." },
              { icon: faCloud, title: "Data-Driven Insights", text: "Advanced analytics provide insights for better merchandising and marketing decisions." },
              { icon: faShieldAlt, title: "Secure Transactions", text: "Robust security measures protect customer data and payment information." },
              { icon: faHandshake, title: "Scalable Growth", text: "Flexible solutions that grow with your business and seasonal demands." }
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
                <h4 className="font-bold text-lg mb-2 text-center">{benefit.title}</h4>
                <p className="text-gray-600 text-center text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Retail Business?</h3>
          <p className="text-gray-600 mb-6">Contact us to learn how VirtuSwift can revolutionize your retail operations.</p>
          <Link 
            to="/contact?industry=retail" 
            className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Retail;