import React from 'react';

const WorldMap: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img 
        src="./map.png" 
        alt="World Map" 
        className="object-contain"
        style={{ width: '98%', maxWidth: '1450px', height: '700px', filter: 'brightness(1) contrast(1)' }}
      />
    </div>
  );
};

export default WorldMap; 