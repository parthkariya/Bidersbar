import moment from "moment";
import React from "react";
import { PageHero } from "../../common";
import images from "../../constants/images";
import { useOrderContext } from "../../context/order_context";
import "./Orders.css";

const Orders = () => {
  const { order_list_responce } = useOrderContext();

  return (
    <div>
      <PageHero title={"Your Orders"} />
      <div className="active_bid_main_wrapp">
        {/* active bid card */}
        {order_list_responce && order_list_responce.length > 0
          ? order_list_responce.map((item, index) => {
              console.log(item);
              return (
                <div className="active_bid_card">
                  <h2 className="h2">Order No. #{item.id}</h2>
                  <p className="active_bid_des">Seating: 4 seater</p>
                  <div className="dot_border"></div>
                  <p className="active_bid_des">
                    Order Total: ₹{item.total_qty * item.total_amt}
                  </p>
                  <p className="active_bid_des2">
                    {moment(item.created_at).format("LT Do MMM ,YYYY")}
                  </p>
                  <div className="active_bid_serve">
                    <img src={images.Vector} />
                    <p className="active_bid_des2">Served</p>
                  </div>
                </div>
              );
            })
          : null}

        {/* active bid card */}
      </div>
    </div>
  );
};

export default Orders;
