import React from "react";
import { Navbar, Footer } from "../../common";
import {
  Hero,
  Binders,
  Bidders,
  Howitworks,
  Termscondition,
  Faqs,
  Howitworklanding,
  Countdown,
  WhatYouGet,
} from "../../components";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Countdown />
      <Bidders />
      <WhatYouGet />
      {/* <Howitworks /> */}
      <Howitworklanding />
      <Termscondition />
      <Faqs />
      {/* <Footer /> */}
    </>
  );
};

export default Landingpage;
