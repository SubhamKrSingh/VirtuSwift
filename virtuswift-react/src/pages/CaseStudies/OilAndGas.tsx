import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOilWell, faChartLine, faFileInvoiceDollar, faCogs, faSyncAlt, faGraduationCap, faCloud, faShieldAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
import manufacturingBg from '../../assets/images/manufacturing-bg.jpg';
import { Link } from 'react-router-dom';

const OilAndGas: React.FC = () => {
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
              <h1 className="text-4xl font-bold mb-4">Oil & Gas Industry Solutions</h1>
              <p className="text-lg">Revolutionizing energy operations with innovative IT solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-6">Transforming Oil & Gas Operations</h2>
          <p className="text-gray-600 mb-8">
            VirtuSwift delivers cutting-edge IT solutions to revolutionize oil and gas operations. Our expertise in digital transformation, automation, and data analytics empowers energy companies to enhance efficiency, reduce costs, and improve safety across their operations.
          </p>
        </div>

        {/* Key Solutions */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-6">Key Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Digital Twin Technology',
                description: 'Real-time monitoring and simulation of oil field operations for predictive maintenance and optimization.'
              },
              {
                title: 'IoT Integration',
                description: 'Connected sensors and devices for comprehensive monitoring of equipment and environmental conditions.'
              },
              {
                title: 'Data Analytics Platform',
                description: 'Advanced analytics for production optimization, predictive maintenance, and operational insights.'
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
              { icon: faCogs, title: "Operational Efficiency", text: "Streamlined processes and automated workflows reduce operational costs by up to 30%." },
              { icon: faSyncAlt, title: "Predictive Maintenance", text: "AI-powered predictive maintenance reduces downtime and extends equipment lifespan." },
              { icon: faGraduationCap, title: "Safety Enhancement", text: "Real-time monitoring and alert systems improve safety across all operations." },
              { icon: faCloud, title: "Data-Driven Decisions", text: "Advanced analytics provide insights for better decision-making and resource allocation." },
              { icon: faShieldAlt, title: "Compliance Management", text: "Automated compliance monitoring ensures adherence to industry regulations." },
              { icon: faHandshake, title: "Scalable Solutions", text: "Flexible solutions that grow with your business and operational needs." }
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
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-gray-600 mb-6">Contact us to learn how VirtuSwift can revolutionize your oil and gas operations.</p>
          <Link 
            to="/contact?industry=oilandgas" 
            className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OilAndGas;