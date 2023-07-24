import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <>
        <nav className="nav-main">
          <div className="navbar-logobox">
            {/* <img
            src="https://www.designevo.com/res/templates/thumb_small/simple-red-circle.webp"
            alt=""
            className="navbar-logo"
          /> */}
            <Link to="/">
              <img
                src="https://www.shutterstock.com/image-vector/bidder-dark-icon-emblem-260nw-1226381239.jpg"
                alt=""
                className="navbar-logo"
              />
            </Link>
          </div>
          <div className="nav-links-part">
            <ul className="nav-links">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  Order & Payment
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link" to="/">
                  {" "}
                  Your Bid's
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link" to="/">
                  {" "}
                  Notification
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link" to="/">
                  {" "}
                  Help & Support
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  {" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-btn-icon-part">
            {toggleMenu === false ? (
              <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                <AiOutlineMenu className="nav-btn-icon" />
              </button>
            ) : (
              <button className="nav-btn" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose className="nav-btn-icon" />
              </button>
            )}
          </div>
        </nav>
        <>
          {toggleMenu && (
            <>
              <div className="mobile-nav-profile">
                <div className="mobile-nav-profile-img-box">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="mobile-nav-profile-img"
                  />
                </div>
                <div className="mobile-nav-profile-name">
                  <p className="mobile-nav-profile-head-detail">Test Testing</p>
                  <p className="mobile-nav-profile-head-detail">
                    test@gmail.com
                  </p>
                </div>
              </div>
              <div className="mobile-nav-main">
                <ul className="mobile-nav-links">
                  <li>
                    <Link
                      to={"/"}
                      onClick={() => setToggleMenu(false)}
                      className="mobile-nav-link"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={() => setToggleMenu(false)}
                      className="mobile-nav-link"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={() => setToggleMenu(false)}
                      className="mobile-nav-link"
                    >
                      Order & Payment
                    </Link>
                  </li>
                  <li>
                    <Link
                      toClick={() => setToggleMenu(false)}
                      cla={"/"}
                      className="mobile-nav-link"
                    >
                      Your Bid's
                    </Link>
                  </li>
                  <li>
                    <Link
                      toClick={() => setToggleMenu(false)}
                      cla={"/"}
                      className="mobile-nav-link"
                    >
                      Notification
                    </Link>
                  </li>
                  <li>
                    <Link
                      toClick={() => setToggleMenu(false)}
                      cla={"/"}
                      className="mobile-nav-link"
                    >
                      Help & Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      toClick={() => setToggleMenu(false)}
                      cla={"/"}
                      className="mobile-nav-link"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </>
      </>
    </>
  );
};

export default Navbar;
