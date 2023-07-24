import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Biddingconformation.css";

const Biddingconformation = () => {
  return (
    <>
      <div className="biddingconformation-sec">
        <div className="biddingconformation-con">
          {/* <div className="biddingconformation-flex"> */}
          <p className="biddingconformation-head">Congratulations</p>
          {/* <GiConfirmed className="biddingconformation-icon" /> */}
          <div className="biddingconformation-imgbox">
            <img src={images.confirm} alt="conform order" />
          </div>
          {/* </div> */}
          <p className="des_1 txt-align">
            Your Bid is submitted. We will notify you shortly of the status!
          </p>
          <Link to={"/livebidding"} className="btn margin-top">
            Place another Bid
          </Link>
          <Link
            to={"/payment"}
            className="btn-outline"
            style={{ color: "#39e681" }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Biddingconformation;
