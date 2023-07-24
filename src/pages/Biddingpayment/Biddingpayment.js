import React, { useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Termscondition } from "../../components";
import { useBiddingContext } from "../../context/bidding_context";
import Notification from "../../utils/Notification";
import "./Biddingpayment.css";

const Biddingpayment = () => {
  const location = useLocation();
  let history = useNavigate();
  const [getactiveInd, setActiveInd] = useState();
  const { setCreateOrder } = useBiddingContext();

  useEffect(() => {
    console.log("location =-=->", location.state.curent_bid);
  }, []);

  let curentBid = location.state.curent_bid;
  const [getcrntbid, setCrntBid] = useState(curentBid);

  const incrementCount = (value, index) => {
    console.log(index);
    setActiveInd(index);
    setCrntBid(Number(curentBid) + Number(value));
  };

  const PlaceOrder = async (e) => {
    e.preventDefault();
    if (curentBid == getcrntbid) {
      alert("Please Select Amount!");
    } else {
      var params = {
        restaurant_id: location.state.r_id,
        restaurant_child_id: location.state.rc_id,
        date: location.state.date,
        net_pay_amount: getcrntbid,
      };

      console.log("-=-=-=->", params);
      const data = await setCreateOrder(params, history);
      console.log(data);
      if (data) {
        if (data.success === 1) {
          history("/biddingconformation");
        } else {
          console.log("data.message", data.message);
          // Notification("error", "Error!", data.message);
        }
      }
    }
  };

  return (
    <>
      <div className="biddingconformation-sec">
        <div className="biddingpayment-con">
          {/* <div className="biddingconformation-flex"> */}
          <p className="biddingconformation-head">Enter Your Bid</p>
          {/* </div> */}
          <div className="biddingpayment-form">
            <label className="lbl-biddingpayment">Enter an Amount</label>
            <div className="inp-biddingpayment">{getcrntbid}</div>
            <div className="add_amount_wrapp">
              <button
                onClick={() => {
                  incrementCount(10, 1);
                }}
                className="add_amount_single_card"
                style={{
                  background: getactiveInd == 1 ? "#39e681" : "#ffffff",
                  color: getactiveInd == 1 ? "#ffffff" : "#6f6f6f",
                }}
              >
                Rs. 10
              </button>
              <button
                onClick={() => {
                  incrementCount(20, 2);
                }}
                className="add_amount_single_card"
                style={{
                  background: getactiveInd == 2 ? "#39e681" : "#ffffff",
                  color: getactiveInd == 2 ? "#ffffff" : "#6f6f6f",
                }}
              >
                Rs. 20
              </button>
              <button
                onClick={() => {
                  incrementCount(30, 3);
                }}
                className="add_amount_single_card"
                style={{
                  background: getactiveInd == 3 ? "#39e681" : "#ffffff",
                  color: getactiveInd == 3 ? "#ffffff" : "#6f6f6f",
                }}
              >
                Rs. 30
              </button>
            </div>
            <span className="txt-biddingpayment">
              Min. Bidding amount for 2 seater table is{" "}
              <span className="txt-amount-biddingpayment">₹2500.</span> The
              amount you bid for will be the final Bill amount
            </span>
            {curentBid == getcrntbid ? (
              <div className="btn-disable margin-top">Submit</div>
            ) : (
              <Link onClick={PlaceOrder} className="btn margin-top">
                Submit
              </Link>
            )}
          </div>
          <div className="termscond-main">
            <Termscondition />
          </div>
        </div>
      </div>
    </>
  );
};

export default Biddingpayment;
