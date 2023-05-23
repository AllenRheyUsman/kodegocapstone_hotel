import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

import Hero from './hero';
import Footer from './footer';
import AboutUsCarousel from './aboutuscarousel';
import Banner from './banner';

import Header from './header'

export default function Landing() {
 

  return (
    <div className='container-fluid mt-3'>
   <Header/>

      <div className='row hero justify-center'>
        <Hero />
        <div className='col position-absolute cta text-center'>
          <Link to='/booking' className='btn btn-primary booknow btn-lg' role='button'>
            Book Now
          </Link>
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
