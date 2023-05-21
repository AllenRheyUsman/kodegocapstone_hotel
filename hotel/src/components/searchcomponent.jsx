import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SearchComponent() {
  const [showInput, setShowInput] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleSubmitClick = () => {
    // Handle submit logic here
  };

  return (
    <div className="search-container">
      <button
        className={`navbtn ${showInput ? 'hidden' : ''}`}
        onClick={handleSearchClick}
      >
        Search
      </button>
      <form className={`input-form ${showInput ? 'show-input' : ''}`}>
        <input type="text" placeholder="Where Do you want to Stay?" />
       
        <button id="button-addon2" onClick={handleSubmitClick}>
          Submit
        </button>
      </form>
      
    </div>
  );
}
