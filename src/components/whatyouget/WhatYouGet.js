import React from "react";
import images from "../../constants/images";
import "./WhatYouGet.css";

const WhatYouGet = () => {
  return (
    <div className="wyg_main_wrapp mar-boto-main">
      <h2 className="h2">What you’ll get?</h2>
      <div className="wyg_cards_wrapp">
        <div className="wyg_single_card">
          <div className="wyg_green_box">
            <div>
              <img src={images.wyg1} />
            </div>
          </div>
          <p className="wyg_box_text">Priority Service</p>
        </div>
        <div className="wyg_single_card">
          <div className="wyg_green_box">
            <div>
              <img src={images.wyg2} />
            </div>
          </div>
          <p className="wyg_box_text">Unlimited Food</p>
        </div>
        <div className="wyg_single_card">
          <div className="wyg_green_box">
            <div>
              <img src={images.wyg3} />
            </div>
          </div>
          <p className="wyg_box_text">Free Drinks</p>
        </div>
        <div className="wyg_single_card">
          <div className="wyg_green_box">
            <div>
              <img src={images.wyg4} />
            </div>
          </div>
          <p className="wyg_box_text">Complimentary Items</p>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
