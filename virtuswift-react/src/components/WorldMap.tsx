import React from 'react';

const WorldMap: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <img 
        src="./map.png" 
        alt="World Map" 
        className="w-full h-full object-contain"
        style={{ filter: 'brightness(1) contrast(1)' }}
      />
      
      {/* Markers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* US Marker */}
        <div className="absolute left-[18%] top-[24%]">
          <div className="w-2 h-2 bg-[#f05a28] rounded-full"></div>
        </div>

        {/* UK Marker */}
        <div className="absolute left-[46%] top-[20%]">
          <div className="w-2 h-2 bg-[#f05a28] rounded-full"></div>
        </div>

        {/* India Marker */}
        <div className="absolute left-[62%] top-[36%]">
          <div className="w-2 h-2 bg-[#f05a28] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap; 