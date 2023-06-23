import React, { useState } from "react";
import "./styles.scss";

const Dropdown = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const items = props.equipments

  return (
    <div className="toggle-container">
      <button className="toggleDropdown" onClick={toggleDropdown}>
        {props.title}
        {isDropdownOpen ? (
          <i className="fa-solid fa-angle-down fa-rotate-180"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </button>
      {isDropdownOpen && (
        <div className="drop-info">
          {props.description ? (
            <p>{props.description}</p>
          ) : (
            <div className="options-container">
              <ul className="list-container">
              {items.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
