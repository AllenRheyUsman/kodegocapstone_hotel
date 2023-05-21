import React from 'react'


export default function Body1({imageUrl,title2,description2,ratings,style1,price}) {
  return (
    <div className="card mb-3 maincard2 aribainner" style={style1}>
    <div className="row ">
      <div className="col-md-6 ">
      <img src={imageUrl} alt="this is a mountain" />
      </div>
      <div className="col-md-4 text-start descriptionscard2">
        <div className="card-body">
          <div class="d-flex"> 
          <h5 className="card-title">{title2}</h5></div>
         
          <p className="card-text">{description2}</p>
          <small className="text-body-secondary">{ratings}</small>
          <p>{price}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
