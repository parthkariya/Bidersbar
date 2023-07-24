import React from "react";
import "./PageHero.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PageHero = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="pagehero_wrapp">
      <IoArrowBackOutline
        className="pagehero_backbutton"
        onClick={() => navigate(-1)}
      />
      <h2 className="h2">{title}</h2>
      <div className="pagehero_backbutton"></div>
    </div>
  );
};

export default PageHero;
