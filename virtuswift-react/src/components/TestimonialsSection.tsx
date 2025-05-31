import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "VirtuSwift's S/4HANA solution transformed our factory floor.",
    author: "VP",
    role: "Manufacturing Client"
  },
  {
    quote: "VirtuSwift's retail solutions redefined our customer experience.",
    author: "CEO",
    role: "Global Fashion Retail Chain"
  },
  {
    quote: "VirtuSwift's utilities solutions transformed our operations.",
    author: "CIO",
    role: "Utility Provider"
  },
  {
    quote: "VirtuSwift's solutions ensured our compliance.",
    author: "CIO",
    role: "Pharmaceutical Company"
  },
  {
    quote: "VirtuSwift's finance solutions transformed our reporting.",
    author: "CIO",
    role: "Banking Institution"
  },
  {
    quote: "VirtuSwift's solutions optimized our operations.",
    author: "VP",
    role: "Oil & Gas Company"
  },
  {
    quote: "VirtuSwift's solutions improved our citizen services.",
    author: "Director",
    role: "Public Sector Entity"
  },
  {
    quote: "VirtuSwift's solutions improved our patient care.",
    author: "CIO",
    role: "Healthcare Organization"
  },
  {
    quote: "VirtuSwift's solutions boosted our R&D.",
    author: "VP",
    role: "High-Tech Manufacturer"
  },
  {
    quote: "VirtuSwift's solutions transformed our supply chain.",
    author: "VP",
    role: "Logistics Provider"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#3a3dc4]">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 bg-[#f05a28] mx-auto mb-16"></div>
        
        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Testimonial Card */}
          <div 
            className={`bg-white rounded-2xl p-12 shadow-xl transform transition-all duration-500 relative overflow-hidden group ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3a3dc4]/5 to-[#f05a28]/5 opacity-50"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3a3dc4]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f05a28]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i}
                    icon={faStar} 
                    className="text-[#f05a28] text-xl"
                  />
                ))}
              </div>

              <FontAwesomeIcon 
                icon={faQuoteLeft} 
                className="text-[#3a3dc4] text-5xl mb-6 opacity-20 transform -translate-x-2"
              />
              
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                {testimonials[currentIndex].quote}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3a3dc4] to-[#f05a28] flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#3a3dc4]">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white rounded-full p-4 shadow-lg hover:bg-[#3a3dc4] hover:text-white transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon 
              icon={faChevronLeft} 
              className="text-[#3a3dc4] text-xl group-hover:text-white transition-colors duration-300" 
            />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white rounded-full p-4 shadow-lg hover:bg-[#3a3dc4] hover:text-white transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="text-[#3a3dc4] text-xl group-hover:text-white transition-colors duration-300" 
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#f05a28] scale-125' 
                    : 'bg-gray-300 hover:bg-[#3a3dc4]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 