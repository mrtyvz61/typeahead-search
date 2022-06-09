import React from "react";
import { FaPhoneAlt, FaBook } from "react-icons/fa";
import "./style.scss";

const Item = ({ item }) => {
  const handleClick = () => {
    console.log(item.firstName + item.lastName);
  };

  return (
    <>
      <li className="results-item" onClick={handleClick}>
        <div className="results-item__main-row">{item.firstName}</div>
        <div className="results-item__info-row">
          <span className="results-item__phone">
            <FaPhoneAlt />
            {item.phone}
          </span>
          <span className="results-item__email">{item.mail}</span>
          <span className="results-item__policy-number">
            <FaBook />
            Policy No: {item.policyNumber}
          </span>
        </div>
      </li>
    </>
  );
};

export default Item;
