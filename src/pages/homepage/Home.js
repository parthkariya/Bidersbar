import React, { useEffect, useState } from "react";
import { Bidders, FrashMenuCard, Navbar } from "../../components";
import images from "../../constants/images";
import { OverMenu } from "../../container";
import "./Home.css";
import "../../components/navbar/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscBellDot } from "react-icons/vsc";
import { PageHero } from "../../common";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";
import { useUserContext } from "../../context/user_context";
import { Link, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import Countdownn from "../../components/countdown/Countdown";
import { useBiddingContext } from "../../context/bidding_context";
import { useCartContext } from "../../context/cart_context";

const Home = () => {
  let history = useNavigate();
  const { logoutUser, usertoken } = useUserContext();
  const { profile_data, getProfile } = useBiddingContext();
  const { clearCart } = useCartContext();

  const [sidebar, setSidebar] = useState(false);

  const LogOut = async (e, history) => {
    clearCart();
    await logoutUser(history);
  };

  useEffect(() => {
    getProfile();
    console.log("profile_data", profile_data);
  }, []);

  useEffect(() => {
    getProfile();
    // console.log("profile_data", profile_data);
  }, [usertoken]);

  return (
    <div>
      {/* <Navbar sidebar={sidebar} /> */}
      <div className="nav_main_wrapp">
        <GiHamburgerMenu
          className="menu_side"
          onClick={() => setSidebar(true)}
        />
        <h2 className="h2">Bidder’s Bar</h2>
        <Link to="/notification">
          <VscBellDot className="menu_side" />
        </Link>
      </div>
      <div className="home_main_wrapp">
        <div className="home_hello_part">
          <img src={images.hand} />
          <h2 className="h2">
            Hello {profile_data ? profile_data.full_name : null},
          </h2>
        </div>
        <div className="home_hello_des">
          <p className="des_1">
            Welcome to Bidder’s bar, bid on a table to avail Unlimited Food &
            Drinks
          </p>
        </div>
      </div>
      <Countdownn />
      <Bidders />

      {/* fresh menu card */}
      <FrashMenuCard />
      {/* fresh menu card */}
      <OverMenu />

      {/* sidebar menu */}
      {sidebar ? (
        <div className="sidebar_main_wrapp">
          {/* page hero */}
          <div className="pagehero_wrapp">
            <IoArrowBackOutline
              className="pagehero_backbutton"
              onClick={() => setSidebar(false)}
            />
            <h2 className="h2">Menu</h2>
            <div className="pagehero_backbutton"></div>
          </div>
          {/* page hero */}

          <div className="sidemenu_profile_wrapp">
            <div className="menu_profile_img">
              <img
                src={
                  profile_data && profile_data.profile_picture_full_path !== ""
                    ? profile_data.profile_picture_full_path
                    : images.profile
                }
              />
            </div>
            <div className="menu_profile_name">
              <h3 className="h3">{profile_data.full_name}</h3>
              <p className="des_1">{profile_data.email}</p>
            </div>
          </div>

          <div className="menu_btn_wrapp">
            <Link to="/editprofile" className="menu_btn">
              <div className="h3 color_gray">My Profile</div>
              <FiChevronRight className="menu_right_arrow" />
            </Link>

            <Link to="/orders" className="menu_btn">
              <h3 className="h3 color_gray">Orders & Payments</h3>
              <FiChevronRight className="menu_right_arrow" />
            </Link>

            <Link to="/yourbid" className="menu_btn">
              <div className="h3 color_gray">Your Bid’s</div>
              <FiChevronRight className="menu_right_arrow" />
            </Link>

            <Link to="/notification" className="menu_btn">
              <div className="h3 color_gray">Notifications</div>
              <FiChevronRight className="menu_right_arrow" />
            </Link>

            <Link to="" className="menu_btn">
              <h3 className="h3 color_gray">Help & Support</h3>
              <FiChevronRight className="menu_right_arrow" />
            </Link>

            <Link to={"/login"} onClick={(e) => LogOut(e)} className="menu_btn">
              <h3 className="h3 color_gray">Logout</h3>
              <FiChevronRight className="menu_right_arrow" />
            </Link>
          </div>
        </div>
      ) : null}
      {/* sidebar menu */}
    </div>
  );
};

export default Home;
