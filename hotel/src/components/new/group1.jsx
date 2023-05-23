import React from 'react';
import Logo from './logo';

export default function Group1(props) {
  const { logos } = props;

  return (
    <div className='row'>
      {logos.map((logo, index) => (
        <div className='col-4' key={index}>
          <div>
            <Logo imageUrl={logo.imageUrl} text={logo.text} />
          </div>
        </div>
      ))}
    </div>
  );
}
