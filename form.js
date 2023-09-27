import React, { useState } from "react";
// import { useNavigate } from "react-router";

const Form = () => {
  //   const navi = useNavigate();
  const [inp, setInp] = useState("");
  const [err, setErr] = useState({
    name: "",
    mail: "",
    pass: "",
  });

  const validation = () => {
    let isValid = true;
    let newErr = {};

    if (!inp.nm) {
      isValid = false;
      newErr.name = "inc name";
    }
    if (!inp.eml) {
      isValid = false;
      newErr.mail = "inc email";
    }
    if (!inp.pass) {
      isValid = false;
      newErr.pass = "inc pass";
    }
    setErr(newErr);
    return isValid;
  };

  const handelCh = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInp((val) => ({ ...val, [name]: value }));
  };

  const subHandl = (e) => {
    if (!validation()) {
      e.preventDefault();
    } else {
      console.log(inp);

      //   navi("/about");
    }
  };
  return (
    <>
      <p>form</p>
      <form onSubmit={subHandl}>
        <input type="text" name="nm" value={inp.nm || ""} onChange={handelCh} />
        <input
          type="text"
          name="eml"
          value={inp.eml || ""}
          onChange={handelCh}
        />
        {err.mail && <div>{err.mail}</div>}
        <input
          type="text"
          name="pass"
          value={inp.pass || ""}
          onChange={handelCh}
        />
        <button>Login</button>
      </form>
    </>
  );
};
export default Form;
