import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageHero } from "../../common";
import images from "../../constants/images";
import { useOrderContext } from "../../context/order_context";
import "./CartConfirmation.css";

const CartConfirmation = () => {
  const location = useLocation();
  const [getcartData, setIsCartData] = useState(location.state.cart);
  const { place_order_responce } = useOrderContext();

  useEffect(() => {
    console.log("place_order_responce ", place_order_responce);
  }, []);

  return (
    <div>
      <PageHero title={"My Cart"} />

      <div className="cart_confirm_main_wrapp">
        {/* <div className="biddingconformation-flex"> */}
        {/* <GiConfirmed className="biddingconformation-icon" /> */}
        <div className="biddingconformation-imgbox">
          <img src={images.confirm} alt="conform order" />
        </div>
        {/* </div> */}
        <p className="des_1 txt-align">
          We’ve received your order, it will be served shortly
        </p>
        {place_order_responce && place_order_responce.length > 0
          ? place_order_responce.map((item, index) => {
              return (
                <div className="active_bid_card">
                  <h2 className="h2">Order No. #{item.id}</h2>
                  <p className="active_bid_des">Seating: 4 seater</p>
                  <div className="dot_border"></div>
                  <p className="active_bid_des">Table Number: 12</p>
                  <p className="active_bid_des2">
                    {moment(item.created_at).format("LT Do MMM ,YYYY")}
                  </p>
                  <div className="active_bid_serve">
                    <img src={images.Vector} />
                    <p className="active_bid_des2">Placed</p>
                  </div>
                </div>
              );
            })
          : null}

        <Link to={"/payment"} className="btn margin-top">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default CartConfirmation;
