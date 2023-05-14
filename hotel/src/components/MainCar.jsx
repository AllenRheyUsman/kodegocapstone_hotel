import React, { useState } from "react";
import Card from "./Card";

export default function MainCar(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

                  // event handlers
                  // ? ternary operators shorthand of if/else

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? props.cards.length - 1 : currentIndex -1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === props.cards.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="d-flex mama">
         <button className="carousel-button prev-button kaliwa" onClick={handlePrevious}>
         <img src={process.env.PUBLIC_URL + '/images/vector.png'} alt="" />

      </button>
        <div className="dalawa ">
        <Card
          imageUrl={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].imageUrl}
          // title={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].title}
          // description={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].description}
        />
      </div>
      <div className="una">
        <Card
          imageUrl={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].imageUrl}
          // title={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].title}
          // description={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].description}
        />
      </div>
      <div className={`maincard card2${currentIndex === 0 ? 'main' : ''}`}>
        <Card className="maincard"
          imageUrl={props.cards[currentIndex].imageUrl}
          title={props.cards[currentIndex].title}
          description={props.cards[currentIndex].description}
        />
      </div>
      <div className="tatlo">
        <Card 
          imageUrl={props.cards[(currentIndex + 1) % props.cards.length].imageUrl}
          // title={props.cards[(currentIndex + 1) % props.cards.length].title}
          // description={props.cards[(currentIndex + 1) % props.cards.length].description}
        />
      </div>
      <div className="apat">
        <Card
          imageUrl={props.cards[(currentIndex + 2) % props.cards.length].imageUrl}
          // title={props.cards[(currentIndex + 2) % props.cards.length].title}
          // description={props.cards[(currentIndex + 2) % props.cards.length].description}
        />
      </div>
   
      <button className="carousel-button next-button kanan" onClick={handleNext}>
      <img src={process.env.PUBLIC_URL + '/images/Vector 3.png'} alt="" />

      </button>
    </div>
  );
}

MainCar.defaultProps = {
  cards: [
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465042519572571/Soggywaffles_jisoo_of_blackpink_in_a_Bboy_stance_background_for_bc959426-e6fe-40d8-9a8a-31e7f73338a7.png",
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465549854187621/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_f6b251d8-30a7-412e-b9e1-b4b0f2e2a42f.png",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1103306736506511390/Soggywaffles_Lisa_of_blackpink_in_a_Bboy_stance_background_fore_31917df4-a88f-488c-b6ab-fbc8ab70af76.png",
      title: "Card 1",
      description: "Description for Card 1",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465580116099082/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_77c18c0b-8d7e-4899-a833-23e443e2fb96.png",
      title: "Card 2",
      description: "Description for Card 2",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1103304949405864036/Soggywaffles_jenny_of_blackpink_all_in_a_Bboy_stance_background_dc42dda6-f395-4be2-b0df-ab52fa85e7dc.png",
      title: "Card 3",
      description: "Description for Card 3",
    },
  ],
};
