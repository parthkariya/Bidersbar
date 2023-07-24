import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import createNotification from "../../utils/Notification";
import Notification from "../../utils/Notification";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const { setLogin } = useUserContext();
  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexpMobile = /^[0-9\b]+$/;

  const [getnumber, setNumber] = useState("");
  const [getpassword, setPassword] = useState("");
  const [geterror, setError] = useState(false);

  const onHandleNumberChange = (e) => {
    let number = e.target.value;
    const limit = 10;
    console.log("email", number);

    if (number === "" || regexpMobile.test(number)) {
      setNumber(number.slice(0, limit));
    } else {
      return;
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const Loginn = async () => {
    if (getnumber === "") {
      Notification("error", "Error!", "Please enter your verified mobile no.");
      return;
    } else if (regexpMobile.test(getnumber) == false) {
      Notification("error", "Error!", "Please enter valid mobile no.!");
      return;
    } else if (getpassword === "") {
      Notification("error", "Error!", "Enter the password....!");
    }
    var params = {
      contact_number: getnumber,
      password: getpassword,
    };

    console.log("-=-=-=->", params);
    // await setRegister(params);
    const data = await setLogin(params);
    if (data) {
      if (data.success === 1) {
        navigate("/payment");
      } else {
        setError(true);
        // createNotification("error", "Error!", data.message);
      }
    }
  };

  return (
    <div className="login-sec">
      <div className="login-con">
        <h1 className="login-head">Login</h1>
        <form className="login-form">
          <div className="login-lbl-txt-flex">
            <label className="login-lbl">Phone No.</label>
            <input
              onChange={(e) => onHandleNumberChange(e)}
              type="number"
              placeholder="Enter your Phone no"
              className="login-txt"
              id="num"
              name="num"
            />
          </div>
          <div className="login-lbl-txt-flex">
            <label className="login-lbl">Password</label>
            <input
              value={getpassword}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="login-txt"
              style={{
                border: geterror ? "1px solid #EF4444" : "1px solid #6f6f6f",
              }}
            />
            {geterror ? (
              <p className="des_2" style={{ color: "#EF4444" }}>
                Incorrect Password
              </p>
            ) : null}
          </div>
          <div className="login-forgotpass-sec">
            <span className="des_2">Forgot Password?</span>
            <Link to="/forgatepass" className="des_3 login-sendotp">
              send OTP
            </Link>
          </div>
          <Link to="" onClick={Loginn} className="login-btn">
            Login
          </Link>
        </form>
        <div className="form-after-part">
          <div>
            <p className="form-after-txt">
              Not a Member ?{" "}
              <Link to="/signup" className="login-link">
                Sign Up here
              </Link>
            </p>
          </div>
          {/* <div>
            <p className="form-after-txt">Or Sign In with</p>
            <div className="signin-with-social">
              <img
                src="https://img.icons8.com/color/48/null/google-logo.png"
                className="social-img"
              />
              <img
                src="https://img.icons8.com/fluency/48/null/facebook-new.png"
                className="social-img"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
