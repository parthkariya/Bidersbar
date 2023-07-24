import React from "react";
import { BiDoorOpen } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { GiConfirmed, GiRoundTable, GiTabletopPlayers } from "react-icons/gi";
import { ImEnter } from "react-icons/im";
import { RxCalendar } from "react-icons/rx";
import { Player } from "video-react";
import images from "../../constants/images";
import "./Howitworklanding.css";

const Howitworklanding = () => {
  return (
    <>
      <div className="howwork-sec">
        <div className="howwork-con">
          <h3 className="h2 mar-boto-heading">How it Works</h3>

          {/* <p className="howworklanding-txt">
            Watch this video to get a better understanding about the Process of
            Bidding for your table.
          </p>
          <div className="howwork-flex-part">
            <Player
              className="howitwork-video"
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div> */}
        </div>
      </div>
      <div className="howitworkstep-sec mar-boto-main">
        <div className="howitworkstep-con">
          <div className="howitworklanding-flex">
            <div className="howitworkstep-flex-part">
              <div className="howitworkstep-icon-sec mar-boto-inner1">
                {/* <RxCalendar className="howitworkstep-icon" /> */}
                <p className="howitworksteplanding-number">01</p>
              </div>
              <p className="des_1 clr-main-blue mar-boto-inner2">
                Pick a date, time, seating
              </p>
              <p className="des_2 clr-main-blue">
                Select a date, time & number of person based on the availability
              </p>
            </div>
            <div className="howitworklanding-flex-part-imgbox">
              <img
                src={images.timemanagement}
                alt=""
                className="howitworklanding-img"
              />
            </div>
          </div>
          <div className="howitworklanding-flex">
            <div className="howitworklanding-flex-part-imgbox">
              <img
                src={images.landingstepimg2}
                alt=""
                className="howitworklanding-img"
              />
            </div>
            <div className="howitworkstep-flex-part-second">
              <div className="howitworkstep-icon-sec mar-boto-inner1">
                {/* <ImEnter className="howitworkstep-icon" /> */}
                <p className="howitworksteplanding-number">02</p>
              </div>
              <p className="des_1 clr-main-blue mar-boto-inner2 txt-end  ">
                Pay Entey Fee
              </p>
              <p className="des_2 clr-main-blue txt-end">
                Pay a nominal fee of Rs. 10 to participate in the bidding
              </p>
            </div>
          </div>
          <div className="howitworklanding-flex">
            <div className="howitworkstep-flex-part">
              <div className="howitworkstep-icon-sec mar-boto-inner1">
                {/* <GiTabletopPlayers className="howitworkstep-icon" /> */}
                <p className="howitworksteplanding-number">03</p>
              </div>
              <p className="des_1 clr-main-blue mar-boto-inner2">
                Pick a Table
              </p>
              <p className="des_2 clr-main-blue">
                Select a table that you would like to bid for and check the
                active bidding status
              </p>
            </div>
            <div className="howitworklanding-flex-part-imgbox">
              <img
                src={images.landingstepimg3}
                alt=""
                className="howitworklanding-img"
              />
            </div>
          </div>
          <div className="howitworklanding-flex">
            <div className="howitworklanding-flex-part-imgbox">
              <img
                src={images.landingstepimg4}
                alt=""
                className="howitworklanding-img"
              />
            </div>
            <div className="howitworkstep-flex-part-second">
              <div className="howitworkstep-icon-sec mar-boto-inner1">
                {/* <GiRoundTable className="howitworkstep-icon" /> */}
                <p className="howitworksteplanding-number">04</p>
              </div>
              <p className="des_1 clr-main-blue mar-boto-inner2 txt-end ">
                Place your Bid
              </p>
              <p className="des_2 clr-main-blue txt-end ">
                Enter the amount you would like to bid for and submit
              </p>
            </div>
          </div>
          <div className="howitworklanding-flex">
            <div className="howitworkstep-flex-part">
              <div className="howitworkstep-icon-sec mar-boto-inner2">
                {/* <BiDoorOpen className="howitworkstep-icon" /> */}
                <p className="howitworksteplanding-number">05</p>
              </div>
              <p className="des_1 clr-main-blue mar-boto-inner2">
                Visit our Outlet
              </p>
              <p className="des_2 clr-main-blue">
                pon Payment, Highest bidder will receive a QR code for Entry
              </p>
            </div>
            <div className="howitworklanding-flex-part-imgbox">
              <img
                src={images.landingstepimg5}
                alt=""
                className="howitworklanding-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dis_card_main_wrapp mar-boto-main">
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
    </>
  );
};

export default Howitworklanding;
