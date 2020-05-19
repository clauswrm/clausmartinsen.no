import React from "react";
import "./Bits.scss";

function Bits() {
  return (
    <div className="bits">
      <svg
        width="200px"
        height="300px"
        viewBox="0 0 425 300"
        transform="rotate(90)"
        overflow="visible"
      >
        <path
          id="curve"
          d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
        />
        <text>
          <textPath href="#curve">10011</textPath>
          <textPath href="#curve" startOffset="49%">
            01101
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default Bits;
