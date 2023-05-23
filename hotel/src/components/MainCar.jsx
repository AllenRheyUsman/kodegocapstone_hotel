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
    <div className="d-flex mama">
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
        imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-736194760184993424/original/aa7f0291-6369-491d-ba4c-eb561f163a9f.jpeg?im_w=1200",
        title: "Deluxe Kings Room Solo",
        description: "Experience luxury and comfort in our spacious Deluxe King Room. This room is perfect for couples or solo travelers looking for a relaxing stay.",
        amenities: [
            "King-size bed",
            "En-suite bathroom",
            "Mini refrigerator",
            "Work desk"
        ],
        ratings: "PHP 7,500.00",
    },
    {
        imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-736194760184993424/original/d6927e80-c5ce-4140-ac80-139f47f85f1d.jpeg?im_w=1200",
        title: "Executive Double Room",
        description: "Indulge in the elegance of our Executive Double Room. This room offers a comfortable and stylish space for two guests.",
        amenities: [
            "Two double beds",
            "Private balcony",
            "Flat-screen TV",
            "Coffee maker"
        ],
        ratings: "PHP 9,500.00",
    },
    {
        imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-736194760184993424/original/a759c102-5746-4b86-b481-3325ba9c48b7.jpeg?im_w=1200",
        title: "Standard Single Room",
        description: "Enjoy a cozy and convenient stay in our Standard Single Room. This room provides all the essentials for a solo traveler.",
        amenities: [
            "Single bed",
            "Shared bathroom",
            "Closet space",
            "Complimentary Wi-Fi"
        ],
        ratings: "PHP 10,299.00",
    },
    {
        imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-736194760184993424/original/45dc1534-3d2b-4241-ba65-308ff0413734.jpeg?im_w=1200",
        title: "Superior Double Room",
        description: "Retreat to our Superior Double Room and experience a blend of comfort and sophistication. Perfect for couples or friends traveling together.",
        amenities: [
            "Queen-size bed",
            "Private bathroom",
            "Air conditioning",
            "In-room safe"
        ],
        ratings: "PHP 12,200.00",
    },
    {
        imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-820953992263581569/original/a4f905fa-5b3f-41fd-90c5-af3b76fba3ae.jpeg?im_w=960",
        title: "Twin Single Room",
        description: "Share a comfortable stay with a friend or family member in our Twin Single Room. This room offers two separate beds and a welcoming atmosphere.",
        amenities: [
            "Two single beds",
            "En-suite bathroom",
            "Satellite TV",
            "Mini bar"
        ],
        ratings: "PHP 9,500.00",
    },
]

};
