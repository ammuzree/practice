import { BrowserRouter, Routes, Route } from "react-router-dom";

import Togle from "./togle";
import Bind from "./bind";
import Sum from "./sum";
import Count from "./counter";
// import Api from "./Appi";
import Nav from "./nav";
import Form from "./form";

let arr = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
];

let arrMeth = arr.map((items) => <li key={items.id}>{items.name}</li>);

const App = () => {
  return (
    <>
      <p>Hello</p>

      {/* {arr.map((item) => (
        <ul>
          <li key={item.id}>{item.name}</li>
        </ul>
      ))} */}

      <ul>{arrMeth}</ul>
      <Togle />
      <Bind />
      <Sum />
      <Count />
      {/* <Api /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<Sum />} />
        </Routes>
      </BrowserRouter>
      <Form />
    </>
  );
};

export default App;
