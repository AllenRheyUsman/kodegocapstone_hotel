import React from 'react';

export default function Card({ imageUrl, title, description }) {
  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt={title} />
     
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

// Card.defaultProps = {
//   imageUrl: "https://cdn.discordapp.com/attachments/1084710350806585405/1106465630519054366/Soggywaffles_Rose_of_blackpink_in_a_Bboy_stance_background_fore_86f3e494-dbe5-4d16-8c02-9a5081699e37.png",
//   title: "PropTypes.string.isRequired",
//   description: "PropTypes.string.isRequired",
// };
