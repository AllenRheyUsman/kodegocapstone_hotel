import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Search() {
  const [showInput, setShowInput] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);

  const handleClick = () => {
    setShowInput(true);
    setShowButton(false);
    setCheckInOpen(false);
    setCheckOutOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-4"></div>
        <div className="col-4 text-end">
          <div className={`input-form ${showInput ? 'show-input' : ''}`}>
            <div className="row calendar-input ">
              <div className="col text-center">
                check-in
                <img className="kalendars"
                  src={process.env.PUBLIC_URL + '/images/calendar.png'}
                  alt=""
                  onClick={() => setCheckInOpen(!checkInOpen)}
                />
                <DatePicker
                  selected={checkInDate}
                  onChange={date => setCheckInDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className={`datepicker-input kalendar ${checkInOpen ? 'show-calendar' : ''}`}
                  open={checkInOpen}
                  onClickOutside={() => setCheckInOpen(false)}
                />
              </div>
              <div className="col mx-3 text-center">
                check-out
                <img className="kalendars"
                  src={process.env.PUBLIC_URL + '/images/calendar.png'}
                  alt=""
                  onClick={() => setCheckOutOpen(!checkOutOpen)}
                />
                <DatePicker
                  selected={checkOutDate}
                  onChange={date => setCheckOutDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className={`datepicker-input kalendar ${checkOutOpen ? 'show-calendar' : ''}`}
                  open={checkOutOpen}
                  onClickOutside={() => setCheckOutOpen(false)}
                />
              </div>
            </div>

            <input
              type="text"
              className="form-control text-center"
              placeholder="Where do you want to stay?"
              aria-label="Where do you want to stay?"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2" onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
        <div className="col-4 text-start">
          {showButton && (
            <button
              className="btn btn-outline-secondary show-button"
              type="button"
              id="marimar"
              onClick={handleClick}
            >
              Let's Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
