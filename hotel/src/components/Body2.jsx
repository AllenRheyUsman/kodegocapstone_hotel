import React from 'react';
import Car2 from './Car2';

export default function Body2() {
  return (
    <div className="container-fluid mamacar2">
      <div className="row">
        <div className="col-3 "></div>
        <div className="col-9 text-end">
          <div className="row">Recommended</div>
          <div className="row">
            <div className="col-4">
              <Car2 />
        
            </div>
            <div className="col-4">
              <Car2 />
            </div>
            <div className="col-4">
              <Car2 />
            </div>
          </div>
       
          
        </div>
      </div>

     

      
    </div>
  );
}
