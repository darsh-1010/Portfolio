import React from 'react';

const TechIcon = ({ name, iconClass, size = "48px", customIcon, websiteUrl }) => {
  const handleClick = () => {
    if (websiteUrl) {
      window.open(websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center text-center ${websiteUrl ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
      onClick={handleClick}
      title={websiteUrl ? `Click to visit ${name} website` : ''}
    >
      {customIcon ? (
        <img 
          src={customIcon} 
          alt={`${name} Logo`} 
          style={{ width: size, height: size }}
          className="object-contain"
        />
      ) : (
        <i 
          className={iconClass} 
          style={{ fontSize: size }}
        ></i>
      )}
      <p className="text-white text-sm mt-2 font-medium">{name}</p>
    </div>
  );
};

export default TechIcon;
