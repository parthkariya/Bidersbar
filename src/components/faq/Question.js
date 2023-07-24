import React from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import images from "../../constants/images";

const Question = ({ question, answer, id }) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
  return (
    <div className="question-wrapper">
      <div className="question" id={id}>
        <p className="des_1 clr-main-blue">{question}</p>
        <button onClick={() => handleClick(id)} className="faq-icon-btn">
          {/* <svg
            className={isActive ? "active" : ""}
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg> */}
          {isActive ? (
            <img src={images.up} className="faq-icon" />
          ) : (
            <img src={images.down} className="faq-icon" />
          )}
        </button>
      </div>
      <div className={isActive ? "answer active" : "answer"}>{answer}</div>
    </div>
  );
};

export default Question;
