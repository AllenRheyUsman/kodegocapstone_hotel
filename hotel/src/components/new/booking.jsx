import React from 'react';

import Header from './header';
import MainCar from '../MainCar';
import Search1 from '../searchcomponent';
import Body2 from '../Body2';

export default function Booking() {
  return (
    <div className='container-fluid mt-3'>
      
        <Header />
       <Search1/>
     
     
        
        <MainCar/>
     
        <Body2/>
  
   
    </div>
  );
}
