import React from 'react';
import Logo from './logo';
import Group1 from './group1';
import Group2 from './group2';
import Hero from './hero';
import Footer from './footer';
import AboutUsCarousel from './aboutuscarousel';
import Banner from './banner'


export default function Landing() {
  const logoProps = {
    imageUrl: `${process.env.PUBLIC_URL}/images/logo.png`,
    
  };

  const group1Props = {
    logos: [
      { imageUrl: `${process.env.PUBLIC_URL}/images/house.png`, text: 'Home' },
      { imageUrl: `${process.env.PUBLIC_URL}/images/door.png`, text: 'Rooms' },
      { imageUrl: `${process.env.PUBLIC_URL}/images/people.png`, text: 'Ammenities' },
    ],
  };

  return (
    <div className='container-fluid mt-3'>
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

      <div className='row hero justify-center'>
        <Hero />
        <div className='col position-absolute cta text-center'>
          <a className='btn btn-primary booknow btn-lg' href='#' role='button'>
            Book Now
          </a>
        </div>
      </div>

      <div className='row aboutus justify-center'>
        <Banner/>

  
       <div className='row mb-5'>
       <AboutUsCarousel/>
       </div>

       <div className='row mb-5'>
       <AboutUsCarousel/>
       </div>
   
   
     
       <div className='row mt-5 puters'>
       <Footer/>
       </div>


 
    </div>
    </div>
  );
}
