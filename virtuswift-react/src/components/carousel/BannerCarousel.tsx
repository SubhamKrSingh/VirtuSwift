import React, { useState, useEffect, useCallback, useRef } from 'react';
import Banner from '../Banner';

interface BannerData {
  id: string | number;
  type: 'standard' | 'html';
  title: string;
  description?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  tags?: string[];
  htmlFile?: string;
}

interface BannerCarouselProps {
  banners: BannerData[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [previousBannerIndex, setPreviousBannerIndex] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const transition = useCallback((type: 'next' | 'prev', targetIndex?: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setDirection(type);
    setPreviousBannerIndex(currentBannerIndex);
    
    if (typeof targetIndex === 'number') {
      setCurrentBannerIndex(targetIndex);
    } else {
      setCurrentBannerIndex(prev => {
        if (type === 'next') {
          return (prev + 1) % banners.length;
        } else {
          return (prev - 1 + banners.length) % banners.length;
        }
      });
    }

    setTimeout(() => {
      setIsTransitioning(false);
      setPreviousBannerIndex(-1);
    }, 750);
  }, [currentBannerIndex, isTransitioning, banners.length]);

  // Start auto-scroll
  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        transition('next');
      }
    }, 5000);
  }, [transition, isPaused]);

  // Initialize auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoScroll]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const renderBanner = (banner: BannerData) => {
    if (banner.type === 'html' && banner.htmlFile) {
      return (
        <iframe
          src={banner.htmlFile}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          title={banner.title}
        />
      );
    }
    return (
      <Banner
        title={banner.title}
        description={banner.subtitle || ''}
        primaryButtonText={banner.primaryButtonText || ''}
        primaryButtonLink={banner.primaryButtonLink || ''}
        secondaryButtonText={banner.secondaryButtonText || ''}
        secondaryButtonLink={banner.secondaryButtonLink || ''}
        tags={banner.tags || []}
      />
    );
  };

  return (
    <div 
      className="relative h-[600px] overflow-hidden bg-[#1c1c38]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Previous banner */}
      {previousBannerIndex !== -1 && (
        <div 
          className={`absolute inset-0 transform transition-all duration-700 ease-in-out ${
            direction === 'next' 
              ? 'translate-x-0 animate-slideOutLeft' 
              : 'translate-x-0 animate-slideOutRight'
          }`}
          style={{ 
            zIndex: 1,
            background: 'linear-gradient(45deg, rgba(58, 61, 196, 0.1), rgba(240, 90, 40, 0.1))'
          }}
        >
          {renderBanner(banners[previousBannerIndex])}
        </div>
      )}

      {/* Current banner */}
      <div
        className={`absolute inset-0 transform transition-all duration-700 ease-in-out ${
          isTransitioning
            ? direction === 'next'
              ? 'animate-slideInRight'
              : 'animate-slideInLeft'
            : ''
        }`}
        style={{ 
          zIndex: 2,
          background: 'linear-gradient(45deg, rgba(58, 61, 196, 0.1), rgba(240, 90, 40, 0.1))'
        }}
      >
        {renderBanner(banners[currentBannerIndex])}
      </div>

      {/* Navigation buttons with enhanced hover effects */}
      <button 
        onClick={() => {
          transition('prev');
          startAutoScroll();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 z-20 transition-all duration-300 hover:scale-110"
        disabled={isTransitioning}
        aria-label="Previous banner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button 
        onClick={() => {
          transition('next');
          startAutoScroll();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 z-20 transition-all duration-300 hover:scale-110"
        disabled={isTransitioning}
        aria-label="Next banner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning && index !== currentBannerIndex) {
                transition(index > currentBannerIndex ? 'next' : 'prev', index);
                startAutoScroll();
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBannerIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel; 