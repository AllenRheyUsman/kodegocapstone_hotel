import { useState, useEffect, useRef } from 'react';

export default function Dropdown({ option1Url, option2Url, option3Url, navname, optionname1, optionname2, optionname3, }) {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const urlMap = {
      option1: option1Url,
      option2: option2Url,
      option3: option3Url,
    };
    window.location.href = urlMap[option];
    setIsMenuOpen(false);
  };
  

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let pageUrl;
  if (selectedOption === 'option1') {
    pageUrl = option1Url;
  } else if (selectedOption === 'option2') {
    pageUrl = option2Url;
  } else {
    pageUrl = option3Url;
  }

  return (
    <div ref={dropdownRef}>
      <button className='btn navbtn babapapa' type="button" onClick={handleButtonClick}> <span className="navtext">{navname}</span></button>
      {isMenuOpen && (
        <ul className="babamama" style={{ position: 'absolute' }}>
          <li className="baba" onClick={() => handleOptionClick('option1')}>{optionname1}</li>
          <li className="baba" onClick={() => handleOptionClick('option2')}>{optionname2}</li>
          <li className="baba" onClick={() => handleOptionClick('option3')}>{optionname3}</li>
        </ul>
      )}
    </div>
  );
}

Dropdown.defaultProps = {
  option1Url: "page2.html",
  option2Url: "page3.html",
  option3Url: "page4.html",
  navname: "Allen",
  optionname1:"1",
  optionname2:"2",
  optionname3:"3",
};
