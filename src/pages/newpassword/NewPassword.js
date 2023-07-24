import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBiddingContext } from "../../context/bidding_context";
import { useUserContext } from "../../context/user_context";
import createNotification from "../../utils/Notification";

const NewPassword = () => {
  const { newPassword } = useBiddingContext();
  const { user_id } = useUserContext();
  let navigate = useNavigate();
  let location = useLocation();

  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  useEffect(() => {
    console.log("contact", location.state.contact);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let password = e.target.value;
    console.log("password", password);
    setPassword(password);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    let confirmPass = e.target.value;
    console.log("confirmPass", confirmPass);
    setconfirmPass(confirmPass);
  };

  const NewPass = async () => {
    if (password === "") {
      createNotification("error", "Error", "Enter the Password...!");
      return;
    }
    if (confirmPass === "") {
      createNotification("error", "Error", "Enter the Confirm Password...!");
      return;
    } else if (password !== confirmPass) {
      createNotification(
        "error",
        "Error",
        "New Password & Confirm Password not match...!"
      );
    } else {
      var params = {
        contact_number: location.state.contact,
        password: password,
        confirm_password: confirmPass,
      };

      console.log("-=-=-=->", params);
      // await setRegister(params);
      const data = await newPassword(params);

      if (data) {
        if (data.success == 1) {
          navigate("/login");
          setPassword("");
          setconfirmPass("");
        } else if (data.success === 0) {
          createNotification("error", "Error!", data.message);
          console.log("errors", data.message);
        }
      }
    }
  };

  return (
    <div className="resate_main_wrapp">
      <div className="resate_base_wrapp">
        <h1 className="h1">Create New Password</h1>
        <div className="forgate_input_wrapp">
          <h2 className="h2">Set New Password</h2>
          <p className="des_1">
            Your New Password must be different from your old password.
          </p>
        </div>
        <div className="forgate_input_wrapp">
          <label className="des_1 clr-main-blue">Password</label>
          <input
            type={"text"}
            value={password}
            onChange={(e) => handleChange(e)}
            maxLength={10}
            name="phone"
            className="text-input"
            placeholder="Enter new password"
          />
        </div>
        <div className="forgate_input_wrapp">
          <label className="des_1 clr-main-blue">Confirm Password</label>
          <input
            type={"text"}
            value={confirmPass}
            onChange={(e) => handleChange2(e)}
            maxLength={10}
            name="phone"
            className="text-input"
            placeholder="Enter confirm password"
          />
        </div>
        <div className="forgate_input_wrapp">
          <button onClick={NewPass} className="btn">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
