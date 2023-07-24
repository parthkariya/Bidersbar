import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Aboutinfosingpage,
  Eventinfo,
  Howitworksingpage,
  Termscondition,
  WhatYouGet,
} from "../../components";
import Countdownn from "../../components/countdown/Countdown";
import "./Singlepageeventdetails.css";
const Singlepageeventdetails = () => {
  const location = useLocation();

  useEffect(() => {
    // console.log("location", location.state.item);
  }, []);

  return (
    <>
      <Eventinfo item={location.state.item} />
      <Aboutinfosingpage description={location.state.item.description} />
      <Countdownn />
      <WhatYouGet />
      <Termscondition />
      <div className=" ph-1">
        <Link to={"/livebidding"} className="btn mt-3 mb-3">
          Place a Bid
        </Link>
      </div>
      {/* <Howitworksingpage /> */}
    </>
  );
};

export default Singlepageeventdetails;
