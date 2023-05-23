import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchComponent() {
  const [showInput, setShowInput] = useState(false);

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleSubmitClick = () => {
    // Handle submit logic here
  };

  return (
    <div className="searchtab">
      <button
        className={`navbtn searchbutts ${showInput ? 'hidden' : ''}`}
        onClick={handleSearchClick}
      >
        Search
      </button>
      <form className={`input-form opensesame ${showInput ? 'show-input' : ''}`}>
        <div className="col-2 text-center">
          <label htmlFor="checkInDate">Check-In</label>
          <DatePicker
            id="checkInDate"
            className="form-control"
            portalId="calendar-portal"
          />
          <label htmlFor="checkOutDate">Check-Out</label>
          <DatePicker
            id="checkOutDate"
            className="form-control"
            portalId="calendar-portal"
          />
        </div>
        <div className='col-2 text-center'>
          <input
            type="text"
            placeholder="Where Do you want to Stay?"
            className="form-control"
          />
          <button
            id="button-addon2"
            onClick={handleSubmitClick}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
        <div className="col-2 text-center">
          <label htmlFor="guests">Guests</label>
          <select id="guests" className="form-control">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      </form>
      {showInput && (
        <div id="calendar-portal" className="calendar-portal">
          <DatePicker
            className="portal-datepicker"
            inline
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </div>
      )}
    </div>
  );
}
