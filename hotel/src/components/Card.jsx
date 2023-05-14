import React from 'react';

export default function Card({ imageUrl, title, description }) {
  return (
    <div className="card naol bg-transparent">
      <img className="card-img-top" src={imageUrl} alt={title} />
     
      <div className="card-body mt-5">
        <h5 className="card-title mt-3 deskript">{title}</h5>
      
        <p className="card-text mt-5 deskript">{description}</p>
      </div>
    </div>
  );
}

