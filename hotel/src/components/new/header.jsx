import React from 'react';

import Logo from './logo';
import Group1 from './group1';
import Group2 from './group2';


export default function Header() {
  const logoProps = {
    imageUrl: `${process.env.PUBLIC_URL}/images/logo.png`,
  };

  const group1Props = {
    logos: [
      { imageUrl: `${process.env.PUBLIC_URL}/images/house.png`, text: 'Home' },
      { imageUrl: `${process.env.PUBLIC_URL}/images/door.png`, text: 'Rooms' },
      { imageUrl: `${process.env.PUBLIC_URL}/images/people.png`, text: 'Amenities' },
    ],
  };

  return (
   
      <div className='row heading'>
        <div className='col-4'>
          <Logo imageUrl={logoProps.imageUrl} text={logoProps.text} />
        </div>
        <div className='col-4 text-start'>
          <Group1 logos={group1Props.logos} />
        </div>
        <div className='col-4 text-end'>
          <Group2 />
        </div>
      </div>
       );
    }
    