import React from "react";
import images from "../../constants/images";
import "./FrashMenuCard.css";

const FrashMenuCard = () => {
  return (
    <div>
      <div className="dis_card_main_wrapp">
        <div className="des_card">
          <div className="des_card_text_wrapp">
            <div className="des_head">Fresh Menu for Every Week</div>
            <div className="des_des">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
            </div>
          </div>
          <div>
            <img src={images.menu_card} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrashMenuCard;
