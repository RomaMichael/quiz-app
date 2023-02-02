import React, { useState, useEffect, useMemo } from "react";
import { useTest } from "../../context/TestProvider";
import "./TheTest.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import TestResults from "../TestsPsge/TestResults/TestResults";

export default function TheTest() {
  const { currentTest, test } = useTest();

  const navigate = useNavigate();

  const [startTest, setStartTest] = useState(false);
  const [index, setIndex] = useState(0);

  const [score, setScore] = useState(0);

  const [theEnd, setTheEnd] = useState(false);
  const [messageEnd, setMessageEnd] = useState("");
  const [timer, setTimer] = useState(10);
  const [runTimer, setRunTimer] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [smiley, setSmiley] = useState();

  const smileArray = [
    {
      url: "https://purepng.com/public/uploads/large/purepng.com-golden-cupgolden-cupgoldtrophymedal-1421526534777l4uw5.png",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1200px-Mr._Smiley_Face.svg.png",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/029-sad-but-relieved-face.svg/2048px-029-sad-but-relieved-face.svg.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (timer >= 0 && runTimer) {
        setTimer((prev) => {
          return prev - 1;
        });
        if (timer === 0) {
          if (index <= currentTest.length - 2) {
            setIndex((prev) => prev + 1);
          } else {
            setTheEnd(true);
          }

          setRunTimer(false);
          setTimer(10);
          setRunTimer(true);
          setAnswers(
            [
              currentTest[index].rightAns,
              ...currentTest[index].wrongAnswers,
            ].sort(() => Math.random() - 0.5)
          );
        }
      }
    }, 1000);
  }, [timer, runTimer]);

  const back = () => {
    navigate("/testspage", { replace: true });
  };

  const start = () => {
    setRunTimer(true);
    setStartTest(true);
  };

  useMemo(() => {
    setAnswers(
      [currentTest[index].rightAns, ...currentTest[index].wrongAnswers].sort(
        () => Math.random() - 0.5
      )
    );
  }, [index]);

  const ans = (e) => {
    setRunTimer(false);

    setTimer(10);
    setTimeout(() => {
      setRunTimer(true);
    }, 700);

    if (index <= currentTest.length - 2) {
      if (test === "math") {
        if (Number(e) === Number(currentTest[index].rightAns)) {
          setScore((prev) => prev + 1);
        }
      } else {
        if (e === currentTest[index].rightAns) {
          setScore((prev) => prev + 1);
        }
      }
    } else {
      if (test === "math") {
        if (Number(e) === currentTest[index].rightAns) {
          setScore((prev) => prev + 1);
        }
      } else {
        if (e === currentTest[index].rightAns) {
          setScore((prev) => prev + 1);
        }
      }
      setTheEnd(true);

      if (score >= 9) {
        setMessageEnd("Perfect!");
        setSmiley(smileArray[0]);
      }
      if (score < 9 && score > 5) {
        setMessageEnd("Nice");
        setSmiley(smileArray[1]);
      }
      if (score < 5) {
        setMessageEnd("Try again");
        setSmiley(smileArray[2]);
      }

      return;
    }
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="the-test">
      <div className="header">
        <BsFillArrowLeftCircleFill
          style={{ fontSize: "30px", color: "white" }}
          onClick={back}
        />
      </div>
      <div className="test-container">
        {theEnd ? (
          <TestResults
            messageEnd={messageEnd}
            currentTest={currentTest}
            score={score}
            smiley={smiley}
          />
        ) : (
          <div>
            {" "}
            {startTest ? (
              <div className="test">
                <div className="question">
                  <h1>
                    {currentTest[index].question
                      ? currentTest[index].question
                      : null}
                  </h1>{" "}
                </div>
                {currentTest[index].questionUrl ? (
                  <img
                    src={currentTest[index].questionUrl}
                    alt="picture"
                    style={{ width: "200px", height: "200px" }}
                  />
                ) : null}

                <div
                  className="answers"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {answers.map((answer, i) => (
                    <div key={i}>
                      <label
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",

                          justifyContent: "space-between",
                        }}
                      >
                        <p style={{ fontWeight: "700", width: "100px" }}>
                          {answer}
                        </p>
                        <input
                          type="radio"
                          name="answers"
                          value={answer}
                          checked={false}
                          onChange={(e) => ans(e.target.value)}
                        />
                      </label>
                    </div>
                  ))}
                </div>

                <h2>Time left: {timer}</h2>
              </div>
            ) : (
              <div className="before-test">
                <h1 className="starter-question">Are you ready to start?</h1>
                <div className="button-starter">
                  <button className="starter" onClick={start}>
                    Yes
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
