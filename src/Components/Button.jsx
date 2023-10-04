import React from "react";

export const Button = ({ id, handleClick, color }) => {
  return (
    <div className="buttons">
      <button
        id={id}
        onClick={handleClick}
        style={{ color: "white", backgroundColor: color }}
        className="button"
      >
        New Quote
      </button>
    </div>
  );
};
