import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import { ACCEPT_HEADER, get_restaurant } from "../../utils/Constant";
import "./Allopenbidding.css";
const Allopenbiddings = () => {
  const [getbiddingdata, setBiddingdata] = useState([]);
  // const [getimage, setImage] = useState("");

  const { usertoken } = useUserContext();

  console.log(usertoken);

  const getBiddingDetails = async () => {
    await axios
      .get(get_restaurant, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      })
      .then((res) => {
        if (res.data.success === 1) {
          // setBiddingdata(res.data.data);
          console.log(res.data.data);
          setBiddingdata(res.data.data);
          console.log("set daata", getbiddingdata);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBiddingDetails();
  }, []);
  return (
    <div className="allopenbidding-sec">
      <div className="allopenbidding-con">
        <div className="allopenbidding-sec-heading-con">
          <h3 className="allopenbidding-head">Open Biddings</h3>
          <p className="allopenbidding-txt des_1 mar-boto-main">
            Select a date you want to Bid for
          </p>
        </div>
        <div className="bidders-cards all-card-page-bidders-cards">
          {getbiddingdata && getbiddingdata.length > 0
            ? getbiddingdata.map((item) => {
                console.log("item is", item);
                return (
                  // <Link to="/eventsdetails" className="btnn">
                  <Link
                    to="/eventsdetails"
                    state={{
                      item: item,
                      child: item.child,
                    }}
                    className="bidders-img-box"
                    style={{ margin: "0px" }}
                  >
                    {item.attachment ? (
                      <img
                        src={item.attachment_full_path}
                        alt="bidder event image"
                        className="bidders-img"
                      />
                    ) : (
                      <img
                        src="https://c0.wallpaperflare.com/preview/452/100/984/restaurant-bar-coffee-shop.jpg"
                        alt="bidder event image"
                        className="bidders-img"
                      />
                    )}

                    <div className="bidders-part">
                      <p className="bidders-event-date">{item.date}</p>
                      <p className="bidders-event-name">{item.name}</p>
                    </div>
                  </Link>
                  // </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Allopenbiddings;
