import Item from "antd/es/list/Item";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBiddingContext } from "../../context/bidding_context";
import { useUserContext } from "../../context/user_context";
import { ACCEPT_HEADER, get_restaurant } from "../../utils/Constant";
import "./Bidders.css";
const Binders = () => {
  const [getbiddingdata, setBiddingdata] = useState([]);
  // const [getimage, setImage] = useState("");

  const { usertoken } = useUserContext();

  // console.log(usertoken);

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
          // console.log(res.data.data);
          setBiddingdata(res.data.data);
          // console.log("set daata", getbiddingdata);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBiddingDetails();
  }, [usertoken]);

  return (
    <div className="bidders-sec mar-boto-main">
      <div className="bidders-con">
        <div className="overmenu_head">
          <h2 className="h2">Open Biddings</h2>
          <Link to="/events" className="btnn">
            View
          </Link>
        </div>
        <div className="bidders-cards">
          {getbiddingdata && getbiddingdata.length > 0
            ? getbiddingdata.map((item) => {
                // console.log("item is", item);
                return (
                  // <Link to="/eventsdetails" className="btnn">
                  <Link
                    to="/eventsdetails"
                    state={{
                      item: item,
                      child: item.child,
                    }}
                    className="bidders-img-box"
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

          {/* <div className="bidders-img-box">
            <img
              src="https://images.unsplash.com/photo-1570872626485-d8ffea69f463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlnaHQlMjBjbHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="bidder event image"
              className="bidders-img"
            />
            <div className="bidders-part">
              <p className="bidders-event-date">Wed 20 Dec</p>
              <p className="bidders-event-name">Event Name</p>
            </div>
          </div> */}
          {/* <div className="bidders-img-box">
            <img
              src="https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5pZ2h0JTIwY2x1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="bidder event image"
              className="bidders-img"
            />
            <div className="bidders-part">
              <p className="bidders-event-date">Wed 20 Dec</p>
              <p className="bidders-event-name">Event Name</p>
            </div>
          </div> */}
          {/* <div className="bidders-img-box">
            <img
              src="https://c8.alamy.com/comp/2BGHTD8/bidders-human-arms-holding-bid-paddle-and-auctioneer-hand-with-gavel-auction-bidding-and-justice-vector-concept-illustration-of-bidder-on-auction-hand-hold-plate-with-bid-2BGHTD8.jpg"
              alt="bidder event image"
              className="bidders-img"
            />
            <div className="bidders-part">
              <p className="bidders-event-date">Wed 20 Dec</p>
              <p className="bidders-event-name">Event Name</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Binders;
