import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBiddingContext } from "../../context/bidding_context";
import { useUserContext } from "../../context/user_context";
import createNotification from "../../utils/Notification";

import "./ForgatePass.css";

const ForgatePass = () => {
  // const { contact_number, isLogin } = useUserContext();
  const { setOtp2 } = useBiddingContext();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  let navigate = useNavigate();

  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let number = e.target.value;
    console.log(number);
    setNumber(number);
  };

  const SendOtp = async () => {
    if (number === "") {
      createNotification("error", "Error", "Enter the Register Number...!");
      return;
    } else {
      var params = {
        contact_number: number,
      };

      console.log("-=-=-=->", params);
      // await setRegister(params);
      const data = await setOtp2(params);

      if (data) {
        if (data.success == 1) {
          navigate("/resetpassotp", {
            state: {
              number: number,
            },
          });
          setNumber("");
        } else if (data.success === 0) {
          createNotification("error", "Error!", data.message);
          console.log("errors", data.message);
        }
      }
    }
  };

  useEffect(() => {
    console.log("number", number);
  }, [number]);

  return (
    <div className="resate_main_wrapp">
      <div className="resate_base_wrapp">
        <h1 className="h1">Reset Password</h1>
        <div className="forgate_input_wrapp">
          <h2 className="h2">Forgot Password</h2>
          <p className="des_1">
            Enter the Registered Mobile Number and we’ll send you an OTP for
            verification.
          </p>
        </div>
        <div className="forgate_input_wrapp">
          <label className="des_1 clr-main-blue">Phone No.</label>
          <input
            type={"number"}
            value={number}
            onChange={(e) => handleChange(e)}
            maxLength={10}
            name="phone"
            className="text-input"
            placeholder="+91-9876543210"
          />
        </div>
        <div className="forgate_input_wrapp">
          <button onClick={SendOtp} className="btn">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgatePass;
