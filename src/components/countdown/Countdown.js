import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./Countdown.css";
import Countdown from "react-countdown";

const Countdownn = () => {
  const [counter, setCounter] = useState();
  const [getdate, setdate] = useState(Date.now());
  useEffect(() => {
    // console.log("counter", getdate);
  }, [counter]);
  const Completionist = () => (
    <>
      <p className="des_1" style={{ color: "green" }}>
        Limited Tables Left!{" "}
      </p>
    </>
  );
  const Completionist2 = () => (
    <>
      <p className="des_1" style={{ color: "red" }}>
        Limited Tables Left!{" "}
      </p>
    </>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // setCounter(completed);
    return (
      <div className="count_card">
        <div className="count_time_wrapp">
          <h1 className="count_time">{days}</h1>
          <p className="clr-white des_3">Days</p>
        </div>
        {/* <h1 className="count_dobbledote">:</h1> */}
        <div>
          <img src={images.dobbledot} />
        </div>
        <div className="count_time_wrapp">
          <h1 className="count_time">{hours}</h1>
          <p className="clr-white des_3">Hours</p>
        </div>
        <div>
          <img src={images.dobbledot} />
        </div>
        <div className="count_time_wrapp">
          <h1 className="count_time">{minutes}</h1>
          <p className="clr-white des_3">Minutes</p>
        </div>
        <div>
          <img src={images.dobbledot} />
        </div>
        <div className="count_time_wrapp">
          <h1 className="count_time">{seconds}</h1>
          <p className="clr-white des_3">Seconds</p>
        </div>
      </div>
    );
  };

  return (
    <div className="countdown_main_wrapp mar-boto-main">
      <h2 className="h2">Hurry up! Countdown has begun</h2>
      <Countdown date={Date.now() + 11115000} renderer={renderer} />
      <p className="des_1 clr-main-green ">Limited Tables Left!</p>
    </div>
  );
};

export default Countdownn;
