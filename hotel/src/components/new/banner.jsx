import React from 'react';

export default function Banner() {
  const data = [
    {
      imageUrl: `${process.env.PUBLIC_URL}/images/wifi.png`,
      text: 'High Speed Internet',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/images/loc.png`,
      text: '5 minutes away from the Shops',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/images/car.png`,
      text: 'Bus terminal is 200 meters away',
    },
    {
      imageUrl: `${process.env.PUBLIC_URL}/images/plane.png`,
      text: '5 minutes from the airport',
    },
  ];

  return (
    <div className="container-fluid  mt-5">
      <div className="row banners ">
        {data.map((item, index) => (
          <div className="col bannerbutts text-center mt-2" key={index}>
            <img src={item.imageUrl} alt={`Image ${index + 1}`} />
            <p className='my-4'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
