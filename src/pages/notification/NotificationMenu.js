import React, { useEffect, useState } from "react";
import "./Notification.css";
import { PageHero } from "../../common";
import images from "../../constants/images";
import { useUserContext } from "../../context/user_context";
import { useBiddingContext } from "../../context/bidding_context";

const NotificationMenu = () => {
  const { total_notification, getnotification, clearNofication } =
    useBiddingContext();
  console.log("notification", total_notification);
  const [getallnotification, setallnotification] = useState("");

  useEffect(() => {
    getnotification();
  }, [getallnotification]);

  return (
    <div>
      <PageHero title={"Notification"} />
      <div className="notifi_main_wrapp">
        <div className="clear_btn">
          <button
            onClick={() => {
              clearNofication();
              setallnotification("1");
            }}
            className="btnn"
          >
            Clear All
          </button>
        </div>
        <div className="notification_cards">
          {/* single card */}
          {total_notification && total_notification.length > 0
            ? total_notification.map((item) => {
                return (
                  <>
                    <div className="notification_single_card">
                      {/* <div className="notification_card_sec01">
                        <div className="notification_card_iconbox">
                          <img src={item.image_full_path} alt="" />
                          <img src={images.notification_first} alt="" />
                        </div>
                      </div> */}
                      <div className="notification_card_sec01">
                        {item.image_full_path ? (
                          <img
                            src={item.image_full_path}
                            className="notification-img"
                            alt=""
                          />
                        ) : null}{" "}
                      </div>
                      <div className="notification_card_sec02">
                        <h3 className="h3">{item.name}</h3>
                        <p className="des_2">{item.description}</p>
                      </div>
                      <div className="notification_card_sec03">
                        <p className="notification_card_time">{item.time}</p>
                      </div>
                    </div>
                  </>
                );
              })
            : null}
          {/* <div className="notification_single_card">
            <div className="notification_card_sec01">
              <div className="notification_card_iconbox">
                <img src={images.notification_first_half} alt="" />
                <img src={images.notification_first} alt="" />
              </div>
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">Your Order was Served</h3>
              <p className="des_2">Your Order is served! Enjoy your Food ;) </p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_second_half} alt="" />
              <img src={images.notification_second} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">Your Order is Placed</h3>
              <p className="des_2">
                We’ve received your order & will serve it to you shortly
              </p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_third} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">You are here!</h3>
              <p className="des_2">
                You can now begin placing your order & enjoy unlimited services.
              </p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_fourth} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">Your Table is reserved!</h3>
              <p className="des_2">
                Thank you for confirming your bid. Your order is now on us ;)
              </p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_fifth} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">Claim your Bid</h3>
              <p className="des_2">
                You’ve limited time to pay for your Bid and claim the table
              </p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_sixth} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">You Won the Bid!</h3>
              <p className="des_2">
                Congratulations! Your were the highest bidder for the table
              </p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_seven} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">Bid Countered Successfully!</h3>
              <p className="des_2">You’ve Successfully Countered the Bid.</p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_eight} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">Someone placed a higher Bid!</h3>
              <p className="des_2">
                Counter the Bid with the multiples of Rs. 30 to be on top!
              </p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div>

          <div className="notification_single_card">
            <div className="notification_card_sec01">
              <img src={images.notification_nine} alt="" />
            </div>
            <div className="notification_card_sec02">
              <h3 className="h3">Bid Placed</h3>
              <p className="des_2">We’ve received your Bid for ₹12,750</p>
            </div>
            <div className="notification_card_sec03">
              <p className="notification_card_time">3:09 PM</p>
            </div>
          </div> */}
          {/* single card */}
        </div>
      </div>
    </div>
  );
};

export default NotificationMenu;
