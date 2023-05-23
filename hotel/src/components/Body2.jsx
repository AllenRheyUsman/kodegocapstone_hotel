import React from 'react';
// import Car2 from './Car2';
import Sideinput from './sideinput';
import Checkbox from './checkbox';

export default function Body2() {
  return (
    <div className="container-fluid mamacar2">
      <div className="row">
        <div className="col-3 sidebar">
            <Sideinput/>
            <Sideinput/>
            <Sideinput/>
            <Checkbox/>
            <Checkbox/>
            <Checkbox/>
            
          
         </div>




         
        <div className="col-9 text-end">
          <div className="row"></div>
          <div className="row">
            <div className="col-6">
              {/* <Car2 /> */}
        
            </div>
            <div className="col-6">
              {/* <Car2 /> */}
            </div>
           
          </div>

          <div className="row mt-5"></div>
          <div className="row">
            <div className="col-6">
              {/* <Car2 /> */}
        
            </div>
            <div className="col-6">
              {/* <Car2 /> */}
            </div>
           
          </div>

          <div className="row mt-5"></div>
          <div className="row">
            <div className="col-6">
              {/* <Car2 /> */}
        
            </div>
            <div className="col-6">
              {/* <Car2 /> */}
            </div>
           
          </div>
       
          
        </div>
      </div>
      

     

      
    </div>
  );
}
