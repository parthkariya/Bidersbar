import Item from "antd/es/list/Item";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import images from "../constants/images";
import { useCartContext } from "../context/cart_context";

const CartCard = ({ id, image, name, item, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div>
      <div className="myorder-card">
        <div className="myorder-img-box">
          <img src={image} alt="food image" className="myorder-img" />
        </div>
        <div className="myorder-food-info">
          <div className="myorder-namebox">
            <p className="h3">{name}</p>

            <img
              src={item.type === "true" ? images.veg : images.nonveg}
              alt="nonveg icon"
              className="myorder-nonvegicon"
            />
          </div>
          <div className="myorder-detailbox">
            <img
              src={images.fire}
              alt="smoke icon"
              className="myorder-smokeicon"
            />
            <p className="des_3">{item.kcal} Kcal</p>
          </div>
        </div>
        <div className="myorder-card-amuntpart">
          <div className="myorder-amount">
            <button className="myorder-minus" onClick={decrease}>
              <AiOutlineMinus className="myorder-minus-plus-icon" />
            </button>
            <div className="myorder-amount-line mr-left"></div>
            <span className="myorder-amount des_3">{amount}</span>
            <div className="myorder-amount-line"></div>
            <button className="myorder-plus mr-left" onClick={increase}>
              <AiOutlinePlus className="myorder-minus-plus-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
