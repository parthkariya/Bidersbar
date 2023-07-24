import React, { useEffect, useState } from "react";
import Question from "./Question";
import "./Faq.css";
import { Link } from "react-router-dom";

const FAQ = ({ questions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // useEffect(() => {
  //   const results = questions.data.filter((item) =>
  //     item.question.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  return (
    <div className="faq-container mar-boto-heading">
      <h3 className="h2 mar-boto-heading clr-main-blue">
        Frequently Asked Quesions
      </h3>
      <section className="faq">
        {questions.map((item) => (
          <Question
            question={item.question}
            id={item.id}
            answer={item.answer}
          />
        ))}
      </section>
      <Link to="/login" className="btn margin-top">
        Begin Bidding
      </Link>
    </div>
  );
};

export default FAQ;
