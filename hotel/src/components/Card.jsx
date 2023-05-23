import React from 'react';


export default function Card({ imageUrl, title, description, price, ratings }) {
  return (
    <div className="card naol bg-transparent">
      <img className="card-img-top" src={imageUrl} alt={title} />
     
      <div className=" row card-body mt-2 deskript">
       <div class="col">
        <div class="row">
         
          <h5 className="card-title">{title}</h5>
         
         
        
          
        </div>
       </div>
      
        <p className="card-text mt-2 ">{description}</p>
        <p className="card-text ">{ratings}</p>
      </div>
    </div>
  );
}

