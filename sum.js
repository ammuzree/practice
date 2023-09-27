import React, { useState } from "react";

const Sum = () => {
  const [fn, setFn] = useState();
  const [ln, setLn] = useState();
  const [tot, setTot] = useState(0);

  const handleAdd = () => {
    setTot(fn + ln);
  };

  return (
    <>
      <p>Sum</p>

      <input
        type="text"
        placeholder="fn"
        value={fn}
        onChange={(e) => {
          setFn(Number(e.target.value));
        }}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="ln"
        value={ln}
        onChange={(e) => {
          setLn(Number(e.target.value));
        }}
      />
      <br />
      <br />

      <button onClick={handleAdd}>Add</button>
      <br />

      <p>Total: {tot || ""}</p>
    </>
  );
};

export default Sum;
