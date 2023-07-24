import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { useBiddingContext } from "../../context/bidding_context";
import { useUserContext } from "../../context/user_context";
import createNotification from "../../utils/Notification";

import "../verification/Verification.css";

const ResetOTP = () => {
  const { contact_number } = useUserContext();
  const { checkOtp } = useBiddingContext();
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [OTP, setOTP] = useState("");
  function handleChange(OTP) {
    setOTP(OTP);
  }

  const CheckOTP = async () => {
    if (OTP === "") {
      alert("Enter the OTP...!");
      return;
    }

    var params = {
      contact_number: location.state.number,
      otp: OTP,
    };

    console.log("-=-=-=->", params);
    // await setRegister(params);
    const data = await checkOtp(params);
    if (data) {
      if (data.success === 1) {
        navigate("/resetpassword", {
          state: { contact: location.state.number },
        });
        console.log("true");
      } else if (data.success === 0) {
        createNotification("error", "Error!", data.message);
        console.log("errors");
      }
    }
  };

  //   handleChange = (otp) => this.setState({ otp });
  return (
    <div className="verification-sec">
      <div className="verification-con">
        <div className="verification-head">
          <h1 className="h1">Vertification</h1>
        </div>
        <div className="verification-inner-flex">
          <p className="verification-sub-head">Enter OTP</p>
          <p className="verification-txt">
            We've sent the OTP to your Phone no.
          </p>
          <p className="verification-number">{location.state.number}</p>
          {/* <OtpInput
            className="verification-otp"
            inputStyle={{ width: "1.7rem", height: "1.7rem" }}
            isInputNum={true}
            focusStyle={{ borderBottom: "1px solid #39E681", color: "#000",  }}
            numInputs={4}
          /> */}
          <OtpInput
            onChange={handleChange}
            value={OTP}
            className="verification-otp"
            numInputs={4}
            separator={<span style={{ width: "8px" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              border: "1px solid #CFD3DB",
              borderRadius: "8px",
              width: "54px",
              height: "54px",
              fontSize: "12px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              border: "1px solid #CFD3DB",
              outline: "none",
            }}
          />

          <div className="verification-resend-code-sec">
            <span className="signup-forgotpass">Don't receive the code?</span>
            <span className="signup-sendotp">Resend</span>
          </div>
          <button className="btn" onClick={CheckOTP}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetOTP;
