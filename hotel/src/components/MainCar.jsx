import React, { useState } from "react";
import Card from "./Card";

export default function MainCar(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? props.cards.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === props.cards.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="row mama">
      <div className="col ">
        <div className="row position-absolute ">
          <button className="carousel-button prev-button kaliwa bg-transparent" onClick={handlePrevious}>
            <span className="carousel-control-prev-icon nexticon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        </div>
      </div>
      <div className="row darkblur thirdcards left1">
        <Card
          imageUrl={props.cards[(currentIndex + props.cards.length - 2) % props.cards.length].imageUrl}
        />
      </div>
      <div className="col darkblur secondcards left2">
        <Card
          imageUrl={props.cards[(currentIndex + props.cards.length - 1) % props.cards.length].imageUrl}
        />
      </div>
      <div className={`maincard col  card2${currentIndex === 0 ? 'main' : ''}`}>
        <Card className="maincard"
          imageUrl={props.cards[currentIndex].imageUrl}
          title={props.cards[currentIndex].title}
          description={props.cards[currentIndex].description}
          ratings={props.cards[currentIndex].ratings}
        />
        <button type="button" id="booknowmain" class="btn btn-outline-info text-end position-absolute">Book now</button>
      </div>
      <div className="col darkblur secondcards right2">
        <Card
          imageUrl={props.cards[(currentIndex + 1) % props.cards.length].imageUrl}
        />
      </div>
      <div className="col">
        <div className="row position-absolute">
          <button className="carousel-button next-button kanan bg-transparent" onClick={handleNext}>
            <span className="carousel-control-next-icon nexticon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="row darkblur thirdcards right1">
          <Card
            imageUrl={props.cards[(currentIndex + 2) % props.cards.length].imageUrl}
          />
        </div>
      </div>
    </div>
  );
}

MainCar.defaultProps = {
  cards: [
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465042519572571/Soggywaffles_jisoo_of_blackpink_in_a_Bboy_stance_background_for_bc959426-e6fe-40d8-9a8a-31e7f73338a7.png",
      title: "Jisoo",
      description: "Pink Hair Black Leather Jacket white undershirt",
      ratings: "⭐⭐⭐⭐",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465549854187621/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_f6b251d8-30a7-412e-b9e1-b4b0f2e2a42f.png",
      title: "Rose",
      description: "Light pink hair with black undertone black leather jacket",
      ratings: "⭐⭐⭐",
    },
    {


      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1103306736506511390/Soggywaffles_Lisa_of_blackpink_in_a_Bboy_stance_background_fore_31917df4-a88f-488c-b6ab-fbc8ab70af76.png",
      title: "Lisa",
      description: "Tattered jeans blonde hair in a hooded leather jacket",
      ratings: "⭐⭐⭐⭐⭐",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465580116099082/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_77c18c0b-8d7e-4899-a833-23e443e2fb96.png",
      title: "Jenny V2",
      description: "Long purple hair in an off-shoulder leather dress tattered jeans",
      ratings: "⭐⭐⭐",
    },
    {
      imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1103304949405864036/Soggywaffles_jenny_of_blackpink_all_in_a_Bboy_stance_background_dc42dda6-f395-4be2-b0df-ab52fa85e7dc.png",
      title: "Jenny V3",
      description: "Times Square background",
      ratings: "⭐⭐⭐⭐",
    },
  ],
};
