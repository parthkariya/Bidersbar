import React from "react";
import "./Howitworks.css";
// import VideoPlayer from "react-video-js-player";
import { Player } from "video-react";

import Adventure from "../../assest/Adventure.mp4.mp4";

const Howitworks = () => {
  const videoSrc = Adventure;
  const poster = "";

  // const testiSettings = {
  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 4000,
  //   autoplay: true,
  //   autostart: true,
  //   appendDots: (dots) => {
  //     return <ul style={{ margin: "0px" }}>{dots}</ul>;
  //   },
  // };
  return (
    <div className="howwork-sec">
      <div className="howwork-con">
        <h3 className="howwork-head mar-boto-heading">How it Works</h3>
        <div className="howwork-flex-part">
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WkmzcZeROSw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          {/* <Player
            className="howitwork-video"
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /> */}
          <ul className="howwork-lists">
            <li className="howwork-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li className="howwork-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li className="howwork-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li className="howwork-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li className="howwork-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
