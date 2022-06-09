import React from "react";
import "./style.scss";

const Message = ({ text }) => (
  <div className="no-results-message">
    <span>{text}</span>
  </div>
);

export default Message;
