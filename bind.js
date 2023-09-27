import React, { useState } from "react";

export default function Bind() {
  const [bnd, setBind] = useState("");
  return (
    <>
      <p>bind</p>
      <input
        type="text"
        value={bnd}
        onChange={(e) => setBind(e.target.value)}
      />
      <p>{bnd}</p>
    </>
  );
}
