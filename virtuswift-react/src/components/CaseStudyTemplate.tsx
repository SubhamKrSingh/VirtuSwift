import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface Outcome {
  title: string;
  description: string;
}

interface CaseStudyProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  icon: IconDefinition;
  outcomes: Outcome[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  callToAction: {
    text: string;
    buttonText: string;
  };
  inlineIcons: {
    icon: IconDefinition;
    label: string;
  }[];
}

const CaseStudyTemplate: React.FC<CaseStudyProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  icon,
  outcomes,
  testimonial,
  callToAction,
  inlineIcons
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className={`relative h-[60vh] flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-8 text-white text-center">
          <FontAwesomeIcon icon={icon} className="text-6xl mb-6 transition-all duration-500 hover:scale-110" />
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-2xl max-w-3xl mx-auto">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Overview */}
          <div className={`bg-white rounded-xl p-8 shadow-lg -mt-32 relative z-10 mb-16 transition-all duration-1000 delay-200 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
            
            {/* Inline Icons */}
            <div className="flex flex-wrap gap-8 mt-8">
              {inlineIcons.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center text-[#3a3dc4] transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '0.6s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl mr-2 transition-transform duration-300 hover:scale-110" />
                  <span className="font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Outcomes */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">Key Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animationDuration: '0.6s',
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex items-start">
                    <div className="text-[#f05a28] mr-4">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-2xl transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{outcome.title}</h3>
                      <p className="text-gray-600">{outcome.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className={`bg-gradient-to-r from-[#3a3dc4] to-[#2f3099] rounded-xl p-12 text-white mb-16 transition-all duration-1000 delay-600 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl italic mb-6">"{testimonial.quote}"</p>
              <div className="font-semibold">
                <p className="text-xl">{testimonial.author}</p>
                <p className="text-[#f05a28]">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold mb-4">{callToAction.text}</h2>
            <Link 
              to="/contact" 
              className="inline-block bg-[#f05a28] hover:bg-[#e04d1d] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {callToAction.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTemplate; 