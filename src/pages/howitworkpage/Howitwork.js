import React from "react";
import { Player } from "video-react";
import { Howitworksstep } from "../../components";

import "./Howitwork.css";

const Howitwork = () => {
  return (
    <>
      <div className="howwork-sec">
        <div className="howwork-con">
          <h3 className="howwork-head">How it Works</h3>
          <div className="howwork-flex-part">
            <Player
              className="howitwork-video"
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>
        </div>
      </div>

      <Howitworksstep />
    </>
  );
};

export default Howitwork;
