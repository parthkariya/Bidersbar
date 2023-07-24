import React from "react";
import { Player } from "video-react";
import "./Howitworksingpage.css";
const Howitworksingpage = () => {
  return (
    <div className="howitworksingpage-sec">
      <div className="howitworksingpage-con">
        <h3 className="howitworksingpage-head">How it Work?</h3>
        <div className="howwork-flex-part">
          <Player
            className="howitwork-video"
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        <ul className="howitworksingpage-lists">
          <li className="howitworksingpage-list">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </li>
          <li className="howitworksingpage-list">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </li>
          <li className="howitworksingpage-list">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </li>
          <li className="howitworksingpage-list">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </li>
        </ul>
        <button className="btn-main margin-top">Place a Bid</button>
      </div>
    </div>
  );
};

export default Howitworksingpage;
