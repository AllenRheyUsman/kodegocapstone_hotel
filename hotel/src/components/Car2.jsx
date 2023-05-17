import React from 'react'
import Body1 from './Body1'

function Car2() {
  return (
    <div>

<div id="anobato" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <Body1  className="d-block w-100" title2="sadsadsadsad"/>
    </div>
    <div className="carousel-item">
    <Body1 className="d-block w-100" title2="allen"/>
    </div>
    <div className="carousel-item">
    <Body1 className="d-block w-100" imageUrl="https://cdn.discordapp.com/attachments/1084710350806585405/1103306736506511390/Soggywaffles_Lisa_of_blackpink_in_a_Bboy_stance_background_fore_31917df4-a88f-488c-b6ab-fbc8ab70af76.png" title2="sadsadsdsd"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#anobato" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#anobato" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
// Body1.defaultProps = {
//   customImageUrl: 'https://cdn.discordapp.com/attachments/1084710350806585405/1103306736506511390/Soggywaffles_Lisa_of_blackpink_in_a_Bboy_stance_background_fore_31917df4-a88f-488c-b6ab-fbc8ab70af76.png',
//   title2: 'Default Title',
//   description2: 'Default Description',
//   ratings: "⭐⭐⭐⭐⭐",
//   style1: { maxWidth: '540px' },
//   price:"500$",
// };

export default Car2