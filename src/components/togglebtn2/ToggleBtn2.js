import React, { useState } from "react";
import images from "../../constants/images";
import "./ToggleBtn2.css";

const ToggleBtn2 = ({ label, toggled2, onClick2 }) => {
  const [isToggled2, toggle2] = useState(toggled2);

  const callback = () => {
    toggle2(!isToggled2);
    onClick2(!isToggled2);
  };

  return (
    <label className="nonveg_toggle_wrapp">
      <input
        type="checkbox"
        className="nonveg_toggle_input"
        defaultChecked={isToggled2}
        onClick={callback}
      />
      <span className="nonveg_toggle_span"></span>
    </label>
  );
};

export default ToggleBtn2;
