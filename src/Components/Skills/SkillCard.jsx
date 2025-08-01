import React, { useEffect, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

const SkillCard = ({ name, image, svg }) => {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    if (image) {
      const fac = new FastAverageColor();
      fac.getColorAsync(image)
        .then((color) => {
          const rgba = color.rgb.split(')');
          setBgColor(rgba[0] + ',0.07)');
        })
        .catch((e) => console.log(e));
    }
  }, [image]);

  return (
    <div className="skill-card">
      <div 
        title={name} 
        style={{ backgroundColor: bgColor }} 
        className="skill-icon"
      >
        {svg ? svg : <img src={image} alt={name} />}
      </div>
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default SkillCard;
