import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Counterbiddingconformation.css";
const Counterbiddingconformation = () => {
  return (
    <div>
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
            <Link to={"/payment"} className="btn" style={{}}>
              Return to Home
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Counterbiddingconformation;
