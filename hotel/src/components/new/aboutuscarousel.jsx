import React, { useState, useEffect } from 'react';

export default function AboutUsCarousel() {
  const images = [
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-670020125180738188/original/4aa52a2a-5b6a-4526-aad4-1f92f83052be.jpeg?im_w=1200',
      title: 'TravelWise',
      description: 'Welcome to Tawi-Tawi Haven Hotel, your haven of tranquility nestled in the captivating province of Tawi-Tawi, Philippines. Situated in the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM), our hotel offers a serene retreat amidst the breathtaking landscapes of this southernmost province. With a commitment to exceptional service and a deep appreciation for the local culture, Tawi-Tawi Haven Hotel invites you to experience true Filipino hospitality at its finest.',
    },
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-48830826/original/419f4612-909b-48ca-9e12-e816c391220a.jpeg?im_w=720',
      title: 'Clean Rooms with a Modern Touch ',
      description: "Indulge in the comfort of our 500 meticulously designed rooms, each thoughtfully prepared to ensure a restful stay. Our rooms blend modern amenities with touches of local charm, providing a soothing ambiance for relaxation. Enjoy the convenience of complimentary Wi-Fi access, airport transfer services, and a host of other amenities that cater to your every need. Whether you're traveling for business or leisure, our hotel offers a seamless blend of comfort and functionality to enhance your stay.",
    },
    {
      imageUrl: 'https://a0.muscache.com/im/pictures/25f99caf-03f9-4365-8563-eee18820c878.jpg?im_w=1200',
      title: 'Relaxing Places to Visit',
      description: "Unwind and reconnect with nature at Bud Bongao, a sacred mountain offering panoramic views of the surrounding islands and sea. Immerse yourself in the rich history of Tawi-Tawi by visiting the Bongao Peak, a historical landmark that offers a glimpse into the province's past. From enchanting natural wonders to cultural treasures, Tawi-Tawi has something for every traveler seeking an authentic and unforgettable experience.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5 mamacaro">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transition: index === activeIndex ? 'none' : 'opacity 1s ease-in-out',
            }}
          >
            <img src={image.imageUrl} className="pics" alt={`Image ${index + 1}`} />
            <div className="carousel-caption kapsyon">
              <h5 className="card-title taytel">{image.title}</h5>
              <p className="card-text teks">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        onClick={goToPreviousSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        onClick={goToNextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
