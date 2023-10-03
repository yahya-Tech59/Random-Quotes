import React from "react";

export const Button = ({ id, color, handleClick }) => {
  return (
    <div
      id={id}
      onClick={handleClick}
      style={{ backgroundColor: color }}
      className="buttons"
    >
      <button className="button">New Quote</button>
    </div>
  );
};
