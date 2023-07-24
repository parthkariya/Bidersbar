import React from "react";
import "./Aboutinfosingpage.css";
const Aboutinfosingpage = ({ description }) => {
  return (
    <>
      <div className="Aboutinfosingpage-sec mar-boto-main">
        <div className="Aboutinfosingpage-con">
          <h3 className="h2 mar-boto-heading">About the Event</h3>
          {/* <ul className="Aboutinfosingpage-lists">
            <li className="Aboutinfosingpage-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li className="Aboutinfosingpage-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li className="Aboutinfosingpage-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li className="Aboutinfosingpage-list">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
          </ul> */}
          <div className="mh-1">
            <div
              className="about-event-info"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutinfosingpage;
