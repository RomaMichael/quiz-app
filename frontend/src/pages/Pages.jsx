import React from "react";
import { Link, useParams } from "react-router-dom";
import { useLearning } from "../context/LearningProvider";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Pages.css";

export default function Pages() {
  const params = useParams();
  const { learningData, setLearningData } = useLearning();
  const currentPage = learningData.find((data) => data.id === params.id);
  console.log(currentPage);
  return (
    <div className="pages">
      <div className="backButton">
        <Link to={"/learning"}>
          <button>
            <AiOutlineArrowLeft />
          </button>
        </Link>
      </div>

      <div className="pages-container">
        <h1>{currentPage.title}</h1>
        <img src={currentPage.img} alt="picture" />
        <p>{currentPage.information}</p>
      </div>
    </div>
  );
}
