import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MainCar(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  const images = [props.img1, props.img2, props.img3, props.img4, props.img5];

  return (
    <div className="card-carousel">
      <div className="card-group d-flex flex-row overflow-auto">
        <button className="carousel-button prev-button" onClick={handlePrevious}>
          <FaChevronLeft />
        </button>
        <div className="card-carousel-container">
          <div
            className="card-group d-flex flex-row"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {images.map((imageUrl, index) => (
              <Card
                key={index}
                imageUrl={imageUrl}
                title={`Card ${index + 1}`}
                description={`This is a description for card ${index + 1}.`}
              />
            ))}
          </div>
        </div>
        <button className="carousel-button next-button" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}


MainCar.defaultProps = {
  img1: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465630519054366/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_86f3e494-dbe5-4d16-8c02-9a5081699e37.png",
  img2: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465630519054366/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_86f3e494-dbe5-4d16-8c02-9a5081699e37.png",
  img3: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465630519054366/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_86f3e494-dbe5-4d16-8c02-9a5081699e37.png",
  img4: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465630519054366/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_86f3e494-dbe5-4d16-8c02-9a5081699e37.png",
  img5: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465630519054366/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_86f3e494-dbe5-4d16-8c02-9a5081699e37.png",
};

