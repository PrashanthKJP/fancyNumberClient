import React from "react";
import "./style.css";

const GradiantButton = ({ text, type }) => {
  return (
    <button style={{ border: "none" }} type={type}>
      <div className="a">
        <span className="span" style={{ fontWeight: "700" }}>
          {text}
        </span>
        <span className="span" style={{ fontWeight: "700" }}>
          {text}
        </span>
      </div>
    </button>
  );
};

export default GradiantButton;
