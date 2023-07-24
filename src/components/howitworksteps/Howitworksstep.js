import React from "react";
import { RxCalendar } from "react-icons/rx";
import { ImEnter } from "react-icons/im";
import { GiRoundTable, GiTabletopPlayers, GiConfirmed } from "react-icons/gi";
import { BiDoorOpen } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";

import "./Howitworksstep.css";
const Howitworksstep = () => {
  return (
    <>
      <div className="howitworkstep-sec">
        <div className="howitworkstep-con">
          <div className="howitworkstep-flex">
            <div className="howitworkstep-flex-part">
              <div className="howitworkstep-icon-sec">
                <RxCalendar className="howitworkstep-icon" />
              </div>
              <p className="howitworkstep-name">Pick a date</p>
              <p className="howitworkstep-txt">
                Select a date on which you would like to visit us
              </p>
            </div>
            <div className="howitworkstep-flex-part">
              <p className="howitworkstep-number">01</p>
            </div>
          </div>
          <div className="howitworkstep-flex">
            <div className="howitworkstep-flex-part">
              <p className="howitworkstep-number">02</p>
            </div>
            <div className="howitworkstep-flex-part-second">
              <div className="howitworkstep-icon-sec">
                <ImEnter className="howitworkstep-icon" />
              </div>
              <p className="howitworkstep-name txt-end  ">Pay Entey Fee</p>
              <p className="howitworkstep-txt txt-end">
                Pay a nominal fee of Rs. 10 to participate in the bidding
              </p>
            </div>
          </div>
          <div className="howitworkstep-flex">
            <div className="howitworkstep-flex-part">
              <div className="howitworkstep-icon-sec">
                <GiTabletopPlayers className="howitworkstep-icon" />
              </div>
              <p className="howitworkstep-name">Pick a Time & Seating</p>
              <p className="howitworkstep-txt">
                Pick your time of visit and the seating capacity you need
              </p>
            </div>
            <div className="howitworkstep-flex-part">
              <p className="howitworkstep-number">03</p>
            </div>
          </div>
          <div className="howitworkstep-flex">
            <div className="howitworkstep-flex-part">
              <p className="howitworkstep-number">04</p>
            </div>
            <div className="howitworkstep-flex-part-second">
              <div className="howitworkstep-icon-sec">
                <GiRoundTable className="howitworkstep-icon" />
              </div>
              <p className="howitworkstep-name txt-end ">Pick a Table</p>
              <p className="howitworkstep-txt txt-end ">
                Select a table that you would like to bid for and check the
                active bidding status
              </p>
            </div>
          </div>
          <div className="howitworkstep-flex">
            <div className="howitworkstep-flex-part">
              <div className="howitworkstep-icon-sec">
                <BiDoorOpen className="howitworkstep-icon" />
              </div>
              <p className="howitworkstep-name">Place your Bid</p>
              <p className="howitworkstep-txt">
                Enter the ammount would like to bid for and submit
              </p>
            </div>
            <div className="howitworkstep-flex-part">
              <p className="howitworkstep-number">05</p>
            </div>
          </div>
          <div className="howitworkstep-flex">
            <div className="howitworkstep-flex-part">
              <p className="howitworkstep-number">06</p>
            </div>
            <div className="howitworkstep-flex-part-second">
              <div className="howitworkstep-icon-sec">
                <GiConfirmed className="howitworkstep-icon" />
              </div>
              <p className="howitworkstep-name txt-end">
                Wait for Conformation
              </p>
              <p className="howitworkstep-txt txt-end">
                Highest Bidder will receive a link for payment and upon payment
                a QR code for entry
              </p>
            </div>
          </div>
          <div className="howitworkstep-flex">
            <div className="howitworkstep-flex-part">
              <div className="howitworkstep-icon-sec">
                <BsBuilding className="howitworkstep-icon" />
              </div>
              <p className="howitworkstep-name">Vsit our Outlet</p>
              <p className="howitworkstep-txt">
                Flaunt your QR codeto our hontess & receive unlimited food and
                drinks
              </p>
            </div>
            <div className="howitworkstep-flex-part">
              <p className="howitworkstep-number">07</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howitworksstep;
