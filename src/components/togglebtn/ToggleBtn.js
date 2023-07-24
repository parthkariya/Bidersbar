import React, { useState } from "react";
import images from "../../constants/images";
import "./ToggleBtn.css";

const ToggleBtn = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className="veg_toggle_wrapp">
      <input
        type="checkbox"
        className="veg_toggle_input"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <span className="veg_toggle_span">{/* <img src={images.veg} /> */}</span>
    </label>
  );
};

export default ToggleBtn;
