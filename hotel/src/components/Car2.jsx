import React, { useState } from 'react';
import Body1 from './Body1';

function Car2({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <Body1 {...item} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

Car2.defaultProps = {
  items: [
    {title2: 'Lisa', 
    description2: 'Default Description 1',
    imageUrl: 'https://cdn.discordapp.com/attachments/1084710350806585405/1103306736506511390/Soggywaffles_Lisa_of_blackpink_in_a_Bboy_stance_background_fore_31917df4-a88f-488c-b6ab-fbc8ab70af76.png',
   },
   {title2: 'Rose', 
   description2: 'Default Description 1',
   imageUrl: 'https://cdn.discordapp.com/attachments/1084710350806585405/1106465549854187621/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_f6b251d8-30a7-412e-b9e1-b4b0f2e2a42f.png',
  },
  {title2: 'Jisoo', 
  description2: 'Default Description 1',
  imageUrl: 'https://cdn.discordapp.com/attachments/1084710350806585405/1106465042519572571/Soggywaffles_jisoo_of_blackpink_in_a_Bboy_stance_background_for_bc959426-e6fe-40d8-9a8a-31e7f73338a7.png',
 },
 
  ],
};

export default Car2;
