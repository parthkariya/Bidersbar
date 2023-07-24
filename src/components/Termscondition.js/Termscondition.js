import React from "react";
import "./Termscondition.css";

const Termscondition = () => {
  return (
    <div className="terms-sec mar-boto-main">
      <div className="terms-con">
        <h3 className="h2 mar-boto-heading">Terms & Condition</h3>
        <ul className="terms-lists">
          <li className="terms-list">
            Reservation will be valid for selected slots only
          </li>
          <li className="terms-list">Takeaway service is not available</li>
          <li className="terms-list">
            If they fail to make the payment within the given time frame, the
            2nd highest bidder will get the invite.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Termscondition;
