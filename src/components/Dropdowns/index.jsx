import React, { useState } from 'react';
import './Dropdown.scss'

const Dropdown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='toggle-container'>
      <button className='toggleDropdown' onClick={toggleDropdown}>
        {props.title}
        {isDropdownOpen ? 
        <i className="fa-solid fa-angle-down fa-rotate-180"></i>
        :
        <i className="fa-solid fa-angle-down"></i>
        }
      </button>
      {isDropdownOpen && (
        <div className='drop-info'>
          <p>{props.description}</p>
        </div>
      )}
    </div>
  );
};


export default Dropdown;