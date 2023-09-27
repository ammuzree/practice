// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// const Api = () => {
//   const [da, setDa] = useState();

//   useEffect(() => {
//     Axios.get(
//       "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
//     )
//       .then((res) => {
//         setDa(res.data.data);
//         console.log(res.data.data);
//       })
//       .catch((err) => console.log("error is".err));
//   }, []);

//   return (
//     <>
//       {da.map((index) => {
//         return <h1>{index}</h1>;
//       })}
//     </>
//   );
// };

// export default Api;
