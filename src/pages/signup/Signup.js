import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fa";
import "./Signup.css";
import { useUserContext } from "../../context/user_context";

const Signup = () => {
  let navigate = useNavigate();

  const { setRegister } = useUserContext();

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexpMobile = /^[0-9\b]+$/;

  const [getname, setName] = useState("");
  const [getemail, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [getpassword, setPassword] = useState("");
  const [getgender, setGender] = useState("");
  const [getdob, setDob] = useState("");
  const [getwish, setWish] = useState("");
  const [getrestrict, setRestrict] = useState(false);
  const [geterrorMsg, setErrorMsg] = useState(true);

  const onHandleTelephoneChange = (e) => {
    let telephone = e.target.value;
    console.log("telephone", telephone);
    if (telephone === "" || regexpMobile.test(telephone)) {
      setNumber(telephone);
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

  const onHandleEmailChange = (e) => {
    let email = e.target.value;
    console.log("email", email);

    if (email === "" || regEx.test(email)) {
      setEmail(email);
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log("getdob", getdob);
  }, [getdob]);

  const Signin = async (e) => {
    if (getname === "") {
      alert("Enter the name...!");
      return;
    } else if (getemail === "") {
      alert("Enter the Email......!");
      return;
    } else if (regEx.test(getemail) === false) {
      alert("Enter the valid Email....!");
      return;
    } else if (number === "") {
      alert("Enter the Mobile number....!");
      return;
    } else if (regexpMobile.test(number) === false) {
      alert("Enter the valid number....!");
      return;
    } else if (getpassword === "") {
      alert("Enter the password....!");
    } else if (getgender === "") {
      alert("Select gender....!");
    } else if (getdob === "") {
      alert("Enter the Date of birth....!");
    } else if (geterrorMsg === true) {
      setRestrict(true);
    } else {
      var params = {
        full_name: getname,
        email: getemail,
        contact_number: number,
        password: getpassword,
        dob: getdob,
        gender: getgender,
      };

      console.log("-=-=-=->", params);
      // await setRegister(params);
      const data = await setRegister(params);
      if (data) {
        if (data.success === 1) {
          navigate("/verification");
          setPassword("");
          setDob("");
          setName("");
          setEmail("");
          setNumber("");
          setWish("");
        }
      }
    }
  };

  return (
    <div className="signup-sec">
      <div className="signup-con">
        <h3 className="signup-head">Signup</h3>
        <form className="signup-form">
          <div className="signup-lbl-txt-flex">
            <label className="signup-lbl">Full Name</label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="signup-txt"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="signup-lbl-txt-flex">
            <label className="signup-lbl">Email ID</label>
            <input
              type="email"
              placeholder="Enter your Email ID "
              className="signup-txt"
              onChange={(e) => onHandleEmailChange(e)}
            />
          </div>
          <div className="signup-lbl-txt-flex">
            <label className="signup-lbl">Phone No.</label>
            <input
              type="number"
              maxLength={10}
              placeholder="+91-9876543210 "
              className="signup-txt"
              // value={number}
              onChange={(e) => onHandleTelephoneChange(e)}
            />
          </div>
          <div className="signup-lbl-txt-flex">
            <label className="signup-lbl">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="signup-txt"
              value={getpassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signup-lbl-txt-flex">
            <label className="signup-lbl">Gender</label>
            <div className="sign-up-radio-flex">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="signup-lbl margin-right" for="male">
                Male
              </label>
              {/* <input type="radio" id="female" name="gender" value="female" />
              <label className="signup-lbl" for="female">
                Female
              </label> */}
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="signup-lbl" for="specifyColor">
                Female
              </label>
            </div>
          </div>

          <div className="signup-lbl-txt-flex">
            <label className="signup-lbl">Date of Birth</label>
            <input
              type="date"
              placeholder="28/07/1997"
              className="signup-txt dt-font"
              value={getdob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="signup-forgotpass-sec">
            <span className="signup-forgotpass">Forgot Password</span>
            <Link to={"/forgatepass"} className="signup-sendotp">
              send OTP
            </Link>
          </div>
          <div className="check-flex">
            <input
              type="checkbox"
              className="signup-txt-check"
              value="1"
              onChange={(e) => setWish(e.target.value)}
            />
            <label className="check-lbl">
              I wish to receive future updates & event information
            </label>
          </div>
          <div className="margin-top-signup-age check-flex">
            <input
              onClick={() => {
                setErrorMsg(false);
                setRestrict(false);
              }}
              type="checkbox"
              className="signup-txt-check"
            />
            <span className="check-lbl">I confirm that I'm 21+ in Age</span>
          </div>

          {getrestrict === true ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              Looks like you are below the permissible age limit
            </p>
          ) : null}
          <Link className="btn" to="" onClick={Signin}>
            Sign Up
          </Link>
        </form>
        <div className="form-after-part">
          <div>
            <p className="form-after-txt">
              Already a member ?{" "}
              <Link to="/login" className="login-link">
                Log in here
              </Link>
            </p>
          </div>
          {/* <div>
            <p className="form-after-txt">Or Sign Up with</p>
            <div className="signup-with-social">
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

export default Signup;
