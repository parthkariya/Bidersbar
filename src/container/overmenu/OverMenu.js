import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { useOrderContext } from "../../context/order_context";
import "./OverMenu.css";

const OverMenu = () => {
  const { order_cat_responce, order_cat_loading } = useOrderContext();

  return (
    <div className="overmenu_main_wrapp">
      <div className="overmenu_head">
        <h2 className="h2">Our Menu</h2>
        <Link to={"/menu"} className="btnn">
          View
        </Link>
      </div>
      <div className="overmenu_cards">
        {order_cat_loading ? (
          <div className="loader"></div>
        ) : (
          <>
            {order_cat_responce && order_cat_responce.length > 0
              ? order_cat_responce.map((item, index) => {
                  return (
                    <Link to={"/menu"} className="overmenu_single_card">
                      <div className="overmenu_title">{item.name}</div>
                      <div className="overmenu_img">
                        <img src={images.menu_1} />
                      </div>
                    </Link>
                  );
                })
              : null}
          </>
        )}
      </div>
    </div>
  );
};

export default OverMenu;
