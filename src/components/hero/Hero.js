import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-sec">
      <div className="hero-con mar-boto-main">
        <div className="hero-con-part">
          {/* <h2 className="h2">Welcome to Bider's Bar</h2> */}
          <h3 className="h2 mar-bot">About Bidder’s Bar</h3>
          <p className="  hero-txt">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        {/* <div className="hero-con-part"> */}
        <div className="hero-con-img-box">
          <img
            // src="https://ichef.bbci.co.uk/news/976/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg"
            src="https://im.whatshot.in/img/2019/Nov/agent-jack-1574417895.jpg?wm=1&w=1200&h=630&cc=1"
            alt="hero-image"
            className="hero-img"
          />
          <div className="hero-img-logo-box">
            <img
              src="https://www.shutterstock.com/image-vector/bidder-dark-icon-emblem-260nw-1226381239.jpg"
              alt=""
              className="hero-img-logo"
            />
          </div>
          <p className="hero-heading-img">Welcome to Bider's Bar</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
