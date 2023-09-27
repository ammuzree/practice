import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <>
      <p>Nav</p>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>about</li>
        </Link>
      </ul>
    </>
  );
};

export default nav;
