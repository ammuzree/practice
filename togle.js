import React, { useState } from "react";

const Togle = () => {
  const [togle, setTogle] = useState(true);
  return (
    <>
      <p>Togle</p>
      <button
        onClick={() => {
          setTogle(!togle);
        }}
      >
        {togle ? "hide" : "show"}
      </button>

      {togle && <div>currenttext</div>}
    </>
  );
};
export default Togle;
