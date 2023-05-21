import React, { useState } from "react";
import Card from "./Card";

export default function PlacesCar(props) {
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
    

    <div className="row">
      
      <div className=" col imahe">

        <div className="row position-absolute kanangcol">
        <button className="carousel-button prev-button imahe-kaliwa bg-transparent" onClick={handlePrevious}>
         <span className="carousel-control-prev-icon nexticon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
      </button>
        </div>
        <div className="row">     <Card
          imageUrl={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].imageUrl}
          title={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].title}
          description={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].description}
          ratings={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].ratings}
        /></div>
   
      </div>
      <div className=" col imahe">
        <Card
          imageUrl={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].imageUrl}
          title={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].title}
          description={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].description}
          ratings={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].ratings}

        />
      </div>
      <div className={`imahe col card2${currentIndex === 0 ? 'main' : ''}`}>
        <Card className="maincard"
          imageUrl={props.cards[currentIndex].imageUrl}
          title={props.cards[currentIndex].title}
          description={props.cards[currentIndex].description}
          ratings={props.cards[currentIndex].ratings}
        />
        
       


      </div>
      <div className="imahe col">
        <Card 
          imageUrl={props.cards[(currentIndex + 1) % props.cards.length].imageUrl}
          title={props.cards[(currentIndex + 1) % props.cards.length].title}
          description={props.cards[(currentIndex + 1) % props.cards.length].description}
          ratings={props.cards[(currentIndex + props.cards.length + 1) % props.cards.length].ratings}

        />
      </div>
      <div className="col imahe">
     
        

        <div className="row position-absolute kaliwangcol ">
        <button className="carousel-button next-button imahe-kanan bg-transparent" onClick={handleNext}>
      <span className="carousel-control-next-icon nexticon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>

      </button>
        </div>
        <div className="row">
        <Card
          imageUrl={props.cards[(currentIndex + 2) % props.cards.length].imageUrl}
          title={props.cards[(currentIndex + 2) % props.cards.length].title}
          description={props.cards[(currentIndex + 2) % props.cards.length].description}
          ratings={props.cards[(currentIndex + props.cards.length + 1) % props.cards.length].ratings}

        /></div>
       
       
      </div>
   
   
    </div>

  );
}

PlacesCar.defaultProps = {
  cards: [
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465042519572571/Soggywaffles_jisoo_of_blackpink_in_a_Bboy_stance_background_for_bc959426-e6fe-40d8-9a8a-31e7f73338a7.png",
      title: "Jisoo",
      description: "Pink HAir Black Leather Jacket white under shirt",
      ratings:"⭐⭐⭐⭐",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465549854187621/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_f6b251d8-30a7-412e-b9e1-b4b0f2e2a42f.png",
      title: "Rose",
      description: "light pink hair with black undertone black leather jacket",
      ratings:"⭐⭐⭐",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1103306736506511390/Soggywaffles_Lisa_of_blackpink_in_a_Bboy_stance_background_fore_31917df4-a88f-488c-b6ab-fbc8ab70af76.png",
      title: "Lisa",
      description: "tattered jeans blonde hair in a hooded leather jacket",
      ratings:"⭐⭐⭐⭐⭐",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465580116099082/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_77c18c0b-8d7e-4899-a833-23e443e2fb96.png",
      title: "Jenny V2",
      description: "long purple hair in an off shoulder leather dress tattered jeans",
      ratings:"⭐⭐⭐",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1103304949405864036/Soggywaffles_jenny_of_blackpink_all_in_a_Bboy_stance_background_dc42dda6-f395-4be2-b0df-ab52fa85e7dc.png",
      title: "Jenny V3",
      description: "Time square background",
      ratings:"⭐⭐⭐⭐",
    },
  ],
};
