import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import Notification from "../notification/NotificationMenu";

import "./Verification.css";

const Verification = () => {
  const { contact_number, setOtp, isLogin, login_error } = useUserContext();
  let navigate = useNavigate();

  const [OTP, setOTP] = useState("");
  function handleChange(OTP) {
    setOTP(OTP);
  }

  const SentOTP = async () => {
    if (OTP === "") {
      alert("Enter the OTP...!");
      return;
    }

    var params = {
      contact_number: contact_number,
      otp: OTP,
    };

    console.log("-=-=-=->", params);
    // await setRegister(params);
    const data = await setOtp(params);
    if (data) {
      if (data.success === 1) {
        navigate("/payment");
        console.log("true");
      } else if (data.success === 0) {
        Notification("error", "Error!", data.message);
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
          <p className="verification-number">{contact_number}</p>
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

          {/* {login_error == true ? (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "-14px",
                marginBottom: "12px",
              }}
            >
              Verification Failed! The OTP you entered is incorrect
            </p>
          ) : null} */}
          <button className="btn" onClick={SentOTP}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
