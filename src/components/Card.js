import React from "react";
import images from "../constants/images";
import { useCartContext } from "../context/cart_context";

function Card({ person }) {
  const { addToCart, cart, total_items } = useCartContext();

  return (
    // <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    // 	<img className="br-100 h3 w3 dib" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
    // 	<div>
    // 		<h2>{person.name}</h2>
    // 		<p>{person.email}</p>
    // 	</div>
    // </div>
    <div className="menu_single_card">
      <img src={person.attachment_full_path} className="menu_card_img" />
      <div className="menu_card_title_wrap">
        <h3 className="h3">{person.name}</h3>
        <img src={person.type === "true" ? images.veg : images.nonveg} />
      </div>
      <div className="menu_card_kcal_wrap">
        <img src={images.fire} />
        <p
          className="des_4"
          style={{
            fontWeight: "500",
          }}
        >
          {person.kcal}&nbsp;kcal
        </p>
      </div>
      <p className="des_4 ">{person.discription}</p>
      <button
        className="mx-1 manu_card_add_btn"
        onClick={() => addToCart(person.id, 1, person)}
      >
        Add
      </button>
    </div>
  );
}

export default Card;
