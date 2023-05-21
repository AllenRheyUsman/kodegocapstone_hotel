import React from 'react'
import PlacesCar from './places'

export default function Body3() {
  return (
  <div className='container-fluid body3mama'>
    <div className='row'>

      



          <div className='col'>       
            <div className='row mb-4 mx-2'>
                Places to Visit
            </div>
              
              <PlacesCar/>
             
          </div>

          
    </div>        

    <div className='row'>

      



          <div className='col'>       
            <div className='row mb-4 mx-2'>
               Diners Near You
            </div>
              
              <PlacesCar/>
             
          </div>

          
    </div>        
      
  </div>
  )
}
