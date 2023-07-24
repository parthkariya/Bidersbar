import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { PageHero } from "../../common";
import CartCard from "../../components/CartCard";
import images from "../../constants/images";
import { useCartContext } from "../../context/cart_context";
import { useOrderContext } from "../../context/order_context";
import createNotification from "../../utils/Notification";
import "./Mycart.css";

const CartData = [
  {
    id: 1,
    image: images.food_image,
    title: "Cream Chicken",
    kcal: "356 Kcal",
    des: "Amet minim mollit non deserunt ullamco est sit aliqua dolo sit aliqua dolo sit aliqua dolo",
    veg: false,
  },
  {
    id: 2,
    image: images.food_image2,
    title: "Spaghetti Pasta",
    kcal: "356 Kcal",
    des: "Amet minim mollit non deserunt ullamco est sit aliqua dolo sit aliqua dolo sit aliqua dolo",
    veg: true,
  },
  {
    id: 3,
    image: images.food_image3,
    title: "Fried Fish",
    kcal: "356 Kcal",
    des: "Amet minim mollit non deserunt ullamco est sit aliqua dolo sit aliqua dolo sit aliqua dolo",
    type: false,
  },
  {
    id: 4,
    image: images.food_image,
    title: "Cream Chicken",
    kcal: "356 Kcal",
    des: "Amet minim mollit non deserunt ullamco est sit aliqua dolo sit aliqua dolo sit aliqua dolo",
    veg: false,
  },
];

const Mycart = () => {
  const [getcartmodel, setCartmodel] = useState(false);
  const { cart, clearCart } = useCartContext();
  const { setplaceorder } = useOrderContext();
  let navigate = useNavigate();

  const PlaceOrder = async () => {
    // var params = {

    //   contact_number: getnumber,
    //   password: getpassword,
    // };

    const formData = new FormData();
    for (var i = 0; i < cart.length; i++) {
      formData.append("category_id[" + i + "]", cart[i].item.category_id);
      formData.append("item_order_id[" + i + "]", cart[i].id);
      formData.append("qty[" + i + "]", cart[i].amount);
      formData.append("amt[" + i + "]", cart[i].price);
    }

    console.log("-=-=-=->", formData);
    // await setRegister(params);
    const data = await setplaceorder(formData);
    if (data) {
      if (data.success === 1) {
        navigate("/cartsuccess", { state: { cart: cart } });
        clearCart();
        createNotification("success", "Success!", data.message);
      } else {
        // setError(true);
        createNotification("error", "Error!", data.message);
      }
    }
  };

  return (
    <>
      <PageHero title={"My Cart"} />
      <div className="clear-cart-btn">
        <button className="btnn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <div className="myorder-con">
        {cart && cart.length > 0
          ? cart.map((item, index) => {
              return <CartCard key={item.id} {...item} />;
            })
          : null}
      </div>
      <div className="place_order_btn btn-mw">
        <button className="btn" onClick={() => setCartmodel(true)}>
          Place Order
        </button>
      </div>
      {getcartmodel ? (
        <button
          onClick={() => setCartmodel(false)}
          className="place_order_model_wrapp"
        >
          <div className="place_order_single_model">
            <h2 className="h2 clr-main-blue">Proceed with this Order?</h2>
            <p className="des_3">
              Review your order before confirming to avoid wrong order & food
              wastage.
            </p>
            <div className="place_order_btn_wrapp">
              <Link
                to={"/menu"}
                className="btn-outline clr-main-green place-order-btn"
              >
                Review
              </Link>
              <button onClick={PlaceOrder} className="btn place-order-btn">
                Proceed
              </button>
            </div>
          </div>
        </button>
      ) : null}
    </>
  );
};

export default Mycart;
