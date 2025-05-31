import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faChartLine,
  faCog,
  faDatabase,
  faRobot,
  faUsers,
  faServer,
  faShieldAlt,
  faCode,
  faMobile,
  faGlobe,
  faNetworkWired,
  faLaptopCode,
  faBrain,
  faDesktop,
  faInfinity
} from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faCloud, label: 'Managed Services' },
  { icon: faChartLine, label: 'Cost Optimization' },
  { icon: faCog, label: 'DevOps Automation' },
  { icon: faDatabase, label: 'Data Analytics' },
  { icon: faRobot, label: 'AI Solutions' },
  { icon: faUsers, label: 'IT Staffing' },
  { icon: faServer, label: 'Cloud Migration' },
  { icon: faShieldAlt, label: 'Cloud Security' },
  { icon: faCode, label: 'Custom Development' },
  { icon: faMobile, label: 'Mobile Solutions' },
  { icon: faGlobe, label: 'Web Services' },
  { icon: faNetworkWired, label: 'Network Solutions' },
  { icon: faLaptopCode, label: 'Software Engineering' },
  { icon: faBrain, label: 'Machine Learning' },
  { icon: faDesktop, label: 'Digital Transformation' },
  { icon: faInfinity, label: 'Continuous Integration' }
];

const ORANGE = '#f05a28';
const BLUE = '#3a3dc4';

const ServiceIconCarousel: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  
  useEffect(() => {
    if (!scrollRef.current) return;
    
    const scrollContainer = scrollRef.current;
    let scrollInterval: NodeJS.Timeout;
    let scrollPosition = 0;
    const scrollSpeed = 1;
    
    const scroll = () => {
      if (!scrollContainer || !isScrolling) return;
      
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };
    
    const startScroll = () => {
      scrollInterval = setInterval(scroll, 30);
    };
    
    const handleMouseEnter = () => setIsScrolling(false);
    const handleMouseLeave = () => setIsScrolling(true);
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    if (isScrolling) {
      startScroll();
    }
    
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isScrolling]);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[2000px] mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8 transition-colors duration-300" 
            style={{ color: hoveredIdx !== null ? ORANGE : BLUE }}>
          {hoveredIdx !== null ? services[hoveredIdx].label : 'Our IT Solutions & Services'}
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden relative"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="flex items-center justify-between min-w-max px-4 py-8 gap-16">
            {[...services, ...services].map((service, idx) => (
              <div
                key={`${service.label}-${idx}`}
                className="mx-8"
                onMouseEnter={() => setHoveredIdx(idx % services.length)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <FontAwesomeIcon 
                  icon={service.icon}
                  className="transition-all duration-300 ease-out transform hover:scale-150"
                  style={{ 
                    fontSize: '3.5rem',
                    color: hoveredIdx === idx % services.length ? BLUE : ORANGE
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-subtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
  .animate-bounce-subtle {
    animation: bounce-subtle 2s infinite;
  }
`;
document.head.appendChild(style);

export default ServiceIconCarousel; 