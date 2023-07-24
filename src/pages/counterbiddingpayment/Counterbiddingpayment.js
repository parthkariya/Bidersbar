import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Termscondition } from "../../components";
import { useBiddingContext } from "../../context/bidding_context";
import "./Counterbiddingpayment.css";

const Counterbiddingpayment = () => {
  const { setUpdateOrder } = useBiddingContext();

  let location = useLocation();
  let navigate = useNavigate();
  const [getid, setId] = useState(location.state.id);
  const [getamount, setAmount] = useState("");

  let curentBid = location.state.couter_price;
  const [getcrntbid, setCrntBid] = useState(curentBid);
  const [getactiveInd, setActiveInd] = useState();

  useEffect(() => {
    console.log(getcrntbid);
  }, [getcrntbid]);

  const incrementCount = (value, index) => {
    setActiveInd(index);
    setCrntBid(Number(curentBid) + Number(value));
  };

  const UpdateOrder = async (e) => {
    e.preventDefault();
    if (curentBid == getcrntbid) {
      alert("Please Select Amount!");
    } else {
      var params = {
        id: getid,
        net_pay_amount: getcrntbid,
      };

      // console.log("-=-=-=->", params);
      const data = await setUpdateOrder(params);
      console.log(data);
      if (data) {
        if (data.success === 1) {
          navigate("/counterbiddingconformation");
        } else {
          console.log("data.message", data.message);
        }
      }
    }
  };

  return (
    <>
      <div className="biddingconformation-sec">
        <div className="biddingpayment-con">
          {/* <div className="biddingconformation-flex"> */}
          <p className="biddingconformation-head">Counter Bid</p>

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
              Max. increment allowed to counter bid is{" "}
              <span className="txt-amount-biddingpayment">₹30.</span>
            </span>
            {curentBid == getcrntbid ? (
              <div className="btn-disable margin-top">Submit</div>
            ) : (
              <button
                className="btn margin-top"
                onClick={(e) => UpdateOrder(e)}
              >
                Submit
              </button>
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

export default Counterbiddingpayment;
