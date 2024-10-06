"use client";
import React from "react";

const CheckPriceButton = ({ price }) => {
  return (
    <div>
      <button onClick={() => alert(price)}> Check price</button>
    </div>
  );
};

export default CheckPriceButton;
