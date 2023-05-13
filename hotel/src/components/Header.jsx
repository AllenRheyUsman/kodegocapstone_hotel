import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "./Dropdown";


class Header extends Component {
  render() {
    

    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col gx-5 mx-5">
            <div className="d-flex align-items-center">
              <div className="p-2 flex-fill  text-center">1</div>
              <div className="p-2 flex-fill  text-center">2</div>
              <div className="p-2 flex-fill  text-center">3</div>
            </div>
          </div>
          <div className="col gx-5 mx-5 ">
            <div className="d-flex align-items-center">
              <div className="p-2 flex-fill  text-center">1</div>
              <div className="p-2 flex-fill  text-center">2</div>
              <div className="p-2 flex-fill  text-center">3</div>
            </div>
          </div>
          <div className="col gx-5 mx-5" >
            <div className="d-flex align-items-center">
              <div className="p-2 flex-fill  text-center"> 
              <Dropdown 
              option1Url="page8.html"
              option2Url="page9.html" 
              option3Url="page10.html" 
              navname="Bookings" 
              optionname1="wala"
              optionname2="wala"
              optionname3="walasdsdsadasda"
              style={{position:'absolute'}}/>
              </div>
              <div className="p-2 flex-fill  text-center"> 
              <Dropdown 
              option1Url="page5.html"
              option2Url="page6.html" 
              option3Url="page7.html" 
              navname="Wallet" 
              style={{position:'absolute'}}/>
              </div>
              <div className="p-2 flex-fill  text-center dropdown">
               <Dropdown 
               style={{position:'absolute'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
