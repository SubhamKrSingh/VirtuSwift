import React from 'react';

const WorldMap: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img 
        src="./map.png" 
        alt="World Map" 
        className="object-contain"
        style={{ width: '95%', maxWidth: '1400px', height: '700px', filter: 'brightness(1) contrast(1)' }}
      />
    </div>
  );
};

export default WorldMap; 