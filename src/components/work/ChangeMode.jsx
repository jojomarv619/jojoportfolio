// import React, { useEffect, useState } from "react";
// import jojoicon from "../../assets/jojoicon.png";
// import waku from "../../assets/waku.png";

// const ChangeMode = (props) => {
//   const [gaming, setGaming] = useState(props.val);
//   const buttonClick = () => {
//     setGaming(!gaming);
//     props.gaming(!gaming);
//   };

//   useEffect(() => {
//     setGaming(props.val);
//   }, []);
//   return (
//     <div>
//       <div>
//         <button onClick={buttonClick}>
//           {gaming && (
//             <img
//               className="icon"
//               src={jojoicon}
//               alt="icon"
//               style={{ width: "85px" }}
//             />
//           )}
//           {!gaming && (
//             <img
//               className="icon"
//               src={waku}
//               alt="icon"
//               style={{ width: "80px" }}
//             />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ChangeMode;
