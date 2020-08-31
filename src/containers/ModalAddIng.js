import React from "react";

function Dialog({ onClose }) {
  return (
    <div>
      <p>Ingredient "..." added </p>
      <div>
        <button onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
}

export default Dialog;
