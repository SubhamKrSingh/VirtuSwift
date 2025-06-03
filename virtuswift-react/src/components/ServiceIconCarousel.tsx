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
  { icon: faNetworkWired, label: 'Integration' },
  { icon: faCog, label: 'Automation' },
  { icon: faCloud, label: 'Cloud Services' },
  { icon: faCode, label: 'Development' },
  { icon: faDatabase, label: 'Data Solutions' },
  { icon: faUsers, label: 'IT Staffing' },
];

const BLUE = '#3a3dc4';
const ORANGE = '#f05a28';

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
        <h2 className="text-2xl font-semibold text-center mb-12 text-[#232584]">
          Our IT Solutions & Services
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
            {[...services, ...services].map((service, idx) => {
              const realIdx = idx % services.length;
              const isHovered = hoveredIdx === realIdx;
              return (
                <div
                  key={`${service.label}-${idx}`}
                  className="flex flex-col items-center mx-8"
                  onMouseEnter={() => setHoveredIdx(realIdx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className={`rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm bg-blue-50`}
                    style={{ width: 80, height: 80 }}
                  >
                    <FontAwesomeIcon
                      icon={service.icon}
                      style={{
                        fontSize: '2.2rem',
                        color: isHovered ? ORANGE : BLUE,
                        opacity: hoveredIdx === null || isHovered ? 1 : 0.3,
                        transition: 'color 0.3s, opacity 0.3s',
                      }}
                    />
                  </div>
                  <span
                    className={`font-semibold text-lg transition-all duration-300 ${
                      isHovered || hoveredIdx === null ? '' : 'text-gray-400'
                    }`}
                    style={{
                      color: isHovered ? ORANGE : BLUE,
                      opacity: hoveredIdx === null || isHovered ? 1 : 0.4
                    }}
                  >
                    {service.label}
                  </span>
                </div>
              );
            })}
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