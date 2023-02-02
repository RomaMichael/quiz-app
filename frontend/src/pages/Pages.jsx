// import React from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useLearning } from "../context/LearningProvider";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import "./Pages.css";

// export default function Pages() {
//   const params = useParams();
//   const { learningData } = useLearning();
//   const currentPage = learningData.find((data) => data.id === params.id);
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div className="pages">
//       <div className="backButton">
//         <button onClick={goBack}>
//           <AiOutlineArrowLeft />
//         </button>
//       </div>

//       <div className="pages-container">
//         <h1>{currentPage.title}</h1>
//         <img src={currentPage.img} alt="picture" />
//         <p>{currentPage.information}</p>
//       </div>
//     </div>
//   );
// }
