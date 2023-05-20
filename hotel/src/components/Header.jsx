import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "./Dropdown";
import Navicons from './Navicons';

class Header extends Component {
  render() {

    return (
      <div className="container-fluid mt-3 ulo">
        <div className="row">
          <div className="col-sm text-end">
            <Navicons
              link1="page3.html"
              linkname="Hotels"
            />
          </div>
          <div className="col-sm text-center">
            <Navicons
              link1="page3.html"
              linkname="Cars"
            />
          </div>
          <div className="col-sm text-start">
            <Navicons
              link1="page3.html"
              linkname="Flights"
            />
          </div>
          <div className="col-sm text-end ">
            <Navicons
              link1="page4.html"
              linkname="Home"
            />
          </div>
          <div className="col-sm text-center">
            <Navicons
              link1="page3.html"
              linkname="About Us"
            />
          </div>
          <div className="col-sm text-start">
            <Navicons />
          </div>
          <div className="col-sm text-end ">
            <Dropdown 
              option1Url="page8.html"
              option2Url="page9.html" 
              option3Url="page10.html" 
              navname="Bookings" 
              optionname1="wala"
              optionname2="wala"
              optionname3="walasdsdsadasda"
              style={{position:'absolute'}}
            />
          </div>
          <div className="col-sm text-center">
            <Dropdown 
              optionname1="Balance"
              optionname2="Travel Points"
              optionname3="Cash-in"
              option1Url="page5.html"
              option2Url="page6.html" 
              option3Url="page7.html" 
              navname="Wallet" 
              style={{position:'absolute'}}
            />
          </div>
          <div className="col-sm text-start dropdown">
            <Dropdown 
              style={{position:'absolute'}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
