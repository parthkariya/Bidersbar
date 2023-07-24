import React from "react";
// import { SlCalender } from "react-icons/si";
import { RxCalendar } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiRoundTable } from "react-icons/gi";
import { FiMusic } from "react-icons/fi";

import "./Eventinfo.css";
import moment from "moment";
import { Link } from "react-router-dom";
const Eventinfo = ({ item }) => {
  return (
    <>
      <div className="eventinfo-sec mar-boto-main">
        <div className="eventinfo-con">
          <div className="eventinfo-img-box">
            {item.attachment_full_path === "" ? (
              <img
                src="https://c0.wallpaperflare.com/preview/452/100/984/restaurant-bar-coffee-shop.jpg"
                alt=""
                className="eventinfo-img"
              />
            ) : (
              <img
                src={item.attachment_full_path}
                alt=""
                className="eventinfo-img"
              />
            )}
            <div className="eventinfo-img-inner-txt">
              <p className="eventinfo-name">Event Name</p>
              <p className="eventinfo-desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              </p>
            </div>
          </div>
          <div className="date-time-info-main-part">
            {/* <div className="date-time-info-inner-part"> */}
            <div className="date-time-info">
              <div className="date-time-info-part">
                <RxCalendar className="date-time-info-icon" />
                <p className="date-time-date">
                  {moment(item.date).format("Do MMM YYYY")}
                </p>
              </div>
              <div className="date-time-info-part">
                <AiOutlineClockCircle className="date-time-info-icon" />
                <p className="date-time-date">07 PM - 12:00 AM</p>
              </div>
            </div>
            <div className="date-time-info">
              <div className="date-time-info-part">
                <GiRoundTable className="date-time-info-icon" />
                {/* <p className="date-time-date">2,4,6 Seater</p> */}
                <p className="date-time-date">
                  {item.child && item.child.length > 0
                    ? item.child.map((seat) => {
                        return seat.table.name;
                      })
                    : ""}
                </p>
              </div>
              <div className="date-time-info-part">
                <FiMusic className="date-time-info-icon" />
                <p className="date-time-date">By DJ Snake</p>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventinfo;
