import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Counter:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incree
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decree
      </button>
    </>
  );
};

export default Count;
