import React from 'react'


export default function Body1({imageUrl,title2,description2,ratings,style1,price}) {
  return (
    <div className="card mb-3 maincard2" style={style1}>
    <div className="row ">
      <div className="col-md-4 ">
      <img src={imageUrl} alt="this is a mountain" />
      </div>
      <div className="col-md-8 text-start px-3">
        <div className="card-body">
          <h5 className="card-title">{title2}</h5>
          <p className="card-text">{description2}</p>
          <p className="card-text"><small className="text-body-secondary">{ratings}</small></p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
Body1.defaultProps = {
    imageUrl: 'https://cdn.discordapp.com/attachments/1084710350806585405/1103304949405864036/Soggywaffles_jenny_of_blackpink_all_in_a_Bboy_stance_background_dc42dda6-f395-4be2-b0df-ab52fa85e7dc.png',
    title2: 'Default Title',
    description2: 'Default Desasdcription',
    ratings: "⭐⭐⭐⭐⭐",
    style1: { maxWidth: '540px' },
    price:"500$",
  };