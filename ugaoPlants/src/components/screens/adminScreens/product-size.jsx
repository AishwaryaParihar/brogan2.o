import React from "react";

const productSize = ({ size, handleProductSize }) => {
  return (
    <div className="d-flex gap-2 border-2 border-red-800">
      <label htmlFor={size}>{size}</label>
      <input type="checkbox" name="" id={size} value={size} onChange={handleProductSize} />
    </div>
  );
};

export default productSize;
