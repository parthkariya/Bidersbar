import React, { useEffect, useState } from "react";
import "./MenuScreen.css";
import { AiOutlineSearch } from "react-icons/ai";
import { PageHero } from "../../common";
import { FrashMenuCard, ToggleBtn, ToggleBtn2 } from "../../components";
import { BsChevronDown } from "react-icons/bs";
import { BiChevronDown, BiChevronUp, BiRightArrowAlt } from "react-icons/bi";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { useOrderContext } from "../../context/order_context";
import { useCartContext } from "../../context/cart_context";
import Searchh, { Search } from "../../components/Search";

const Data = [
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

const MenuScreen = () => {
  const {
    order_cat_responce,
    getordercatagory,
    getorderitem,
    order_cat_loading,
    order_item_loading,
    order_item_responce,
  } = useOrderContext();
  const { addToCart, cart, total_items } = useCartContext();
  const [getdata, setData] = useState(Data);
  const [getmenutogg, setMenuTogg] = useState(false);
  const [getmenutogg2, setMenuTogg2] = useState(false);
  const [getmenuid, setMenuId] = useState();

  const [getcardtogg, setCardTogg] = useState(true);
  const [getcardtogg2, setCardTogg2] = useState(true);
  const [getcardtoggid, setCardToggId] = useState(0);
  const [gettogg, setTogg] = useState(false);
  const [gettogg2, setTogg2] = useState(false);
  const [amount, setAmount] = useState(1);

  const logState = (state) => {
    console.log("Toggled:", state);
    setTogg(state);
  };

  const logState2 = (state) => {
    console.log("Toggled2:", state);
    setTogg2(state);
  };

  useEffect(() => {
    getordercatagory();
    getorderitem();
    console.log("order_item_responce", order_item_responce);
    console.log("cart", cart);
  }, [cart]);

  return (
    <div>
      <PageHero title={"This Week’s Menu"} />

      <div>
        {/* <div className="search_wrapp">
          <AiOutlineSearch style={{ width: "24px", height: "24px" }} />
          <input type="text" placeholder="Search" className="search_input" />
        </div> */}
        <Searchh details={order_item_responce} />
        <div className="toggle_btn_wrapp">
          <div className="sigle_toggle">
            <p className="des_3">Veg</p>
            <ToggleBtn toggled={false} onClick={logState} />
          </div>
          <div className="sigle_toggle">
            <p className="des_3">Non-veg</p>
            <ToggleBtn2 toggled2={false} onClick2={logState2} />
          </div>
          <div className="">
            <p className="des_3">Time Left to Order:</p>
            <p className="des_3 clr-main-green">01:34 mins</p>
          </div>
        </div>

        {/* recommended dishes start */}

        <div className="recomm_wrapp">
          <div className="recomm_text">
            <h2 className="h2 clr-main-blue">Recommended Dishes</h2>
            {getcardtogg ? (
              <BiChevronDown
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                className="h2 clr-main-blue"
                onClick={() => setCardTogg(!getcardtogg)}
              />
            ) : (
              <BiChevronUp
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                className="h2 clr-main-blue"
                onClick={() => setCardTogg(!getcardtogg)}
              />
            )}
          </div>
          {getcardtogg ? (
            <div className="menu_cards_wrapp">
              {order_item_responce && order_item_responce.length > 0
                ? order_item_responce.map((item, index) => {
                    return (
                      <>
                        {item.category &&
                        item.category.recommended_dishes == 1 ? (
                          <>
                            {gettogg === true ? (
                              <>
                                {item.type === "true" ? (
                                  <div className="menu_single_card">
                                    <img
                                      src={item.attachment_full_path}
                                      className="menu_card_img"
                                    />
                                    <div className="menu_card_title_wrap">
                                      <h3 className="h3">{item.name}</h3>
                                      <img
                                        src={
                                          item.type === "true"
                                            ? images.veg
                                            : images.nonveg
                                        }
                                      />
                                    </div>
                                    <div className="menu_card_kcal_wrap">
                                      <img src={images.fire} />
                                      <p
                                        className="des_4"
                                        style={{ fontWeight: "500" }}
                                      >
                                        {item.kcal}&nbsp;kcal
                                      </p>
                                    </div>
                                    <p className="des_4 ">{item.discription}</p>
                                    <button
                                      className="mx-1 manu_card_add_btn"
                                      onClick={() =>
                                        addToCart(item.id, amount, item)
                                      }
                                    >
                                      Add
                                    </button>
                                  </div>
                                ) : null}
                              </>
                            ) : null}
                            {gettogg2 === true ? (
                              <>
                                {item.type !== "true" ? (
                                  <div className="menu_single_card">
                                    <img
                                      src={item.attachment_full_path}
                                      className="menu_card_img"
                                    />
                                    <div className="menu_card_title_wrap">
                                      <h3 className="h3">{item.name}</h3>
                                      <img
                                        src={
                                          item.type === "true"
                                            ? images.veg
                                            : images.nonveg
                                        }
                                      />
                                    </div>
                                    <div className="menu_card_kcal_wrap">
                                      <img src={images.fire} />
                                      <p
                                        className="des_4"
                                        style={{ fontWeight: "500" }}
                                      >
                                        {item.kcal}&nbsp;kcal
                                      </p>
                                    </div>
                                    <p className="des_4 ">{item.discription}</p>
                                    <button
                                      className="mx-1 manu_card_add_btn"
                                      onClick={() =>
                                        addToCart(item.id, amount, item)
                                      }
                                    >
                                      Add
                                    </button>
                                  </div>
                                ) : null}
                              </>
                            ) : null}
                            {gettogg2 === false && gettogg === false ? (
                              <>
                                <div className="menu_single_card">
                                  <img
                                    src={item.attachment_full_path}
                                    className="menu_card_img"
                                  />
                                  <div className="menu_card_title_wrap">
                                    <h3 className="h3">{item.name}</h3>
                                    <img
                                      src={
                                        item.type === "true"
                                          ? images.veg
                                          : images.nonveg
                                      }
                                    />
                                  </div>
                                  <div className="menu_card_kcal_wrap">
                                    <img src={images.fire} />
                                    <p
                                      className="des_4"
                                      style={{ fontWeight: "500" }}
                                    >
                                      {item.kcal}&nbsp;kcal
                                    </p>
                                  </div>
                                  <p className="des_4 ">{item.discription}</p>
                                  <button
                                    className="mx-1 manu_card_add_btn"
                                    onClick={() =>
                                      addToCart(item.id, amount, item)
                                    }
                                  >
                                    Add
                                  </button>
                                </div>
                              </>
                            ) : null}
                          </>
                        ) : null}
                      </>
                    );
                  })
                : null}
            </div>
          ) : null}
        </div>

        {/* recommended dishes end */}

        <div className="frash_card_wrapp">
          <FrashMenuCard />
        </div>
        {getmenutogg2 ? (
          <>
            {order_cat_responce && order_cat_responce.length > 0
              ? order_cat_responce.map((itm, ind) => {
                  return (
                    <>
                      {itm.id == getmenuid ? (
                        <div className="recomm_wrapp" key={ind}>
                          <div className="recomm_text">
                            <h2 className="h2 clr-main-blue">{itm.name}</h2>
                            {getcardtoggid == itm.id && getcardtogg2 ? (
                              <BiChevronUp
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  cursor: "pointer",
                                }}
                                className="h2 clr-main-blue"
                                onClick={() => {
                                  setCardTogg2(false);
                                  setCardToggId(itm.id);
                                }}
                              />
                            ) : (
                              <BiChevronDown
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  cursor: "pointer",
                                }}
                                className="h2 clr-main-blue"
                                onClick={() => {
                                  setCardTogg2(true);
                                  setCardToggId(itm.id);
                                }}
                              />
                            )}
                          </div>

                          <>
                            {getcardtoggid == itm.id && getcardtogg2 ? null : (
                              <div className="menu_cards_wrapp">
                                {order_item_responce &&
                                order_item_responce.length > 0
                                  ? order_item_responce.map((item, index) => {
                                      return (
                                        <>
                                          {itm.id == item.category_id ? (
                                            <>
                                              {gettogg === true ? (
                                                <>
                                                  {item.type === "true" ? (
                                                    <div className="menu_single_card">
                                                      <img
                                                        src={
                                                          item.attachment_full_path
                                                        }
                                                        className="menu_card_img"
                                                      />
                                                      <div className="menu_card_title_wrap">
                                                        <h3 className="h3">
                                                          {item.name}
                                                        </h3>
                                                        <img
                                                          src={
                                                            item.type === "true"
                                                              ? images.veg
                                                              : images.nonveg
                                                          }
                                                        />
                                                      </div>
                                                      <div className="menu_card_kcal_wrap">
                                                        <img
                                                          src={images.fire}
                                                        />
                                                        <p
                                                          className="des_4"
                                                          style={{
                                                            fontWeight: "500",
                                                          }}
                                                        >
                                                          {item.kcal}&nbsp;kcal
                                                        </p>
                                                      </div>
                                                      <p className="des_4 ">
                                                        {item.discription}
                                                      </p>
                                                      <button
                                                        className="mx-1 manu_card_add_btn"
                                                        onClick={() =>
                                                          addToCart(
                                                            item.id,
                                                            amount,
                                                            item
                                                          )
                                                        }
                                                      >
                                                        Add
                                                      </button>
                                                    </div>
                                                  ) : null}
                                                </>
                                              ) : null}
                                              {gettogg2 === true ? (
                                                <>
                                                  {item.type === "false" ? (
                                                    <div className="menu_single_card">
                                                      <img
                                                        src={
                                                          item.attachment_full_path
                                                        }
                                                        className="menu_card_img"
                                                      />
                                                      <div className="menu_card_title_wrap">
                                                        <h3 className="h3">
                                                          {item.name}
                                                        </h3>
                                                        <img
                                                          src={
                                                            item.type === "true"
                                                              ? images.veg
                                                              : images.nonveg
                                                          }
                                                        />
                                                      </div>
                                                      <div className="menu_card_kcal_wrap">
                                                        <img
                                                          src={images.fire}
                                                        />
                                                        <p
                                                          className="des_4"
                                                          style={{
                                                            fontWeight: "500",
                                                          }}
                                                        >
                                                          {item.kcal}&nbsp;kcal
                                                        </p>
                                                      </div>
                                                      <p className="des_4 ">
                                                        {item.discription}
                                                      </p>
                                                      <button
                                                        onClick={() =>
                                                          addToCart(
                                                            item.id,
                                                            amount,
                                                            item
                                                          )
                                                        }
                                                        className="mx-1 manu_card_add_btn"
                                                      >
                                                        Add
                                                      </button>
                                                    </div>
                                                  ) : null}
                                                </>
                                              ) : null}
                                              {gettogg2 === false &&
                                              gettogg === false ? (
                                                <>
                                                  <div className="menu_single_card">
                                                    <img
                                                      src={
                                                        item.attachment_full_path
                                                      }
                                                      className="menu_card_img"
                                                    />
                                                    <div className="menu_card_title_wrap">
                                                      <h3 className="h3">
                                                        {item.name}
                                                      </h3>
                                                      <img
                                                        src={
                                                          item.type === "true"
                                                            ? images.veg
                                                            : images.nonveg
                                                        }
                                                      />
                                                    </div>
                                                    <div className="menu_card_kcal_wrap">
                                                      <img src={images.fire} />
                                                      <p
                                                        className="des_4"
                                                        style={{
                                                          fontWeight: "500",
                                                        }}
                                                      >
                                                        {item.kcal}&nbsp;kcal
                                                      </p>
                                                    </div>
                                                    <p className="des_4 ">
                                                      {item.discription}
                                                    </p>

                                                    <button
                                                      onClick={() =>
                                                        addToCart(
                                                          item.id,
                                                          amount,
                                                          item
                                                        )
                                                      }
                                                      className="mx-1 manu_card_add_btn"
                                                    >
                                                      Add
                                                    </button>
                                                  </div>
                                                </>
                                              ) : null}
                                            </>
                                          ) : null}
                                        </>
                                      );
                                    })
                                  : null}
                              </div>
                            )}
                          </>
                        </div>
                      ) : null}
                    </>
                  );
                })
              : null}
          </>
        ) : (
          <>
            {order_cat_responce && order_cat_responce.length > 0
              ? order_cat_responce.map((itm, ind) => {
                  return (
                    <div className="recomm_wrapp" key={ind}>
                      <div className="recomm_text">
                        <h2 className="h2 clr-main-blue">{itm.name}</h2>
                        {getcardtoggid == itm.id && getcardtogg2 ? (
                          <BiChevronUp
                            style={{
                              width: "24px",
                              height: "24px",
                              cursor: "pointer",
                            }}
                            className="h2 clr-main-blue"
                            onClick={() => {
                              setCardTogg2(false);
                              setCardToggId(itm.id);
                            }}
                          />
                        ) : (
                          <BiChevronDown
                            style={{
                              width: "24px",
                              height: "24px",
                              cursor: "pointer",
                            }}
                            className="h2 clr-main-blue"
                            onClick={() => {
                              setCardTogg2(true);
                              setCardToggId(itm.id);
                            }}
                          />
                        )}
                      </div>

                      <>
                        {getcardtoggid == itm.id && getcardtogg2 ? null : (
                          <div className="menu_cards_wrapp">
                            {order_item_responce &&
                            order_item_responce.length > 0
                              ? order_item_responce.map((item, index) => {
                                  return (
                                    <>
                                      {itm.id == item.category_id ? (
                                        <>
                                          {gettogg === true ? (
                                            <>
                                              {item.type === "true" ? (
                                                <div className="menu_single_card">
                                                  <img
                                                    src={
                                                      item.attachment_full_path
                                                    }
                                                    className="menu_card_img"
                                                  />
                                                  <div className="menu_card_title_wrap">
                                                    <h3 className="h3">
                                                      {item.name}
                                                    </h3>
                                                    <img
                                                      src={
                                                        item.type === "true"
                                                          ? images.veg
                                                          : images.nonveg
                                                      }
                                                    />
                                                  </div>
                                                  <div className="menu_card_kcal_wrap">
                                                    <img src={images.fire} />
                                                    <p
                                                      className="des_4"
                                                      style={{
                                                        fontWeight: "500",
                                                      }}
                                                    >
                                                      {item.kcal}&nbsp;kcal
                                                    </p>
                                                  </div>
                                                  <p className="des_4 ">
                                                    {item.discription}
                                                  </p>
                                                  <button
                                                    className="mx-1 manu_card_add_btn"
                                                    onClick={() =>
                                                      addToCart(
                                                        item.id,
                                                        amount,
                                                        item
                                                      )
                                                    }
                                                  >
                                                    Add
                                                  </button>
                                                </div>
                                              ) : null}
                                            </>
                                          ) : null}
                                          {gettogg2 === true ? (
                                            <>
                                              {item.type === "false" ? (
                                                <div className="menu_single_card">
                                                  <img
                                                    src={
                                                      item.attachment_full_path
                                                    }
                                                    className="menu_card_img"
                                                  />
                                                  <div className="menu_card_title_wrap">
                                                    <h3 className="h3">
                                                      {item.name}
                                                    </h3>
                                                    <img
                                                      src={
                                                        item.type === "true"
                                                          ? images.veg
                                                          : images.nonveg
                                                      }
                                                    />
                                                  </div>
                                                  <div className="menu_card_kcal_wrap">
                                                    <img src={images.fire} />
                                                    <p
                                                      className="des_4"
                                                      style={{
                                                        fontWeight: "500",
                                                      }}
                                                    >
                                                      {item.kcal}&nbsp;kcal
                                                    </p>
                                                  </div>
                                                  <p className="des_4 ">
                                                    {item.discription}
                                                  </p>
                                                  <button
                                                    onClick={() =>
                                                      addToCart(
                                                        item.id,
                                                        amount,
                                                        item
                                                      )
                                                    }
                                                    className="mx-1 manu_card_add_btn"
                                                  >
                                                    Add
                                                  </button>
                                                </div>
                                              ) : null}
                                            </>
                                          ) : null}
                                          {gettogg2 === false &&
                                          gettogg === false ? (
                                            <>
                                              <div className="menu_single_card">
                                                <img
                                                  src={
                                                    item.attachment_full_path
                                                  }
                                                  className="menu_card_img"
                                                />
                                                <div className="menu_card_title_wrap">
                                                  <h3 className="h3">
                                                    {item.name}
                                                  </h3>
                                                  <img
                                                    src={
                                                      item.type === "true"
                                                        ? images.veg
                                                        : images.nonveg
                                                    }
                                                  />
                                                </div>
                                                <div className="menu_card_kcal_wrap">
                                                  <img src={images.fire} />
                                                  <p
                                                    className="des_4"
                                                    style={{
                                                      fontWeight: "500",
                                                    }}
                                                  >
                                                    {item.kcal}&nbsp;kcal
                                                  </p>
                                                </div>
                                                <p className="des_4 ">
                                                  {item.discription}
                                                </p>

                                                <button
                                                  onClick={() =>
                                                    addToCart(
                                                      item.id,
                                                      amount,
                                                      item
                                                    )
                                                  }
                                                  className="mx-1 manu_card_add_btn"
                                                >
                                                  Add
                                                </button>
                                              </div>
                                            </>
                                          ) : null}
                                        </>
                                      ) : null}
                                    </>
                                  );
                                })
                              : null}
                          </div>
                        )}
                      </>
                    </div>
                  );
                })
              : null}
          </>
        )}

        {/* View Cart Btn */}

        {cart && cart.length > 0 ? (
          <div className="place_order_btn btn-mw">
            <div className="cart_view_btn">
              <p style={{ margin: "0px" }}>{total_items} Items</p>
              <Link to={"/cart"} className="view_btn_wrapp">
                <button className="view_cart_btn">View Cart</button>
                <BiRightArrowAlt
                  style={{ color: "#fff", width: "25px", height: "25px" }}
                />
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      {/* Menu Toggle Btn */}

      <button
        className="menu_float"
        onClick={() => {
          setMenuTogg(!getmenutogg);
          // setMenuTogg2(false);
        }}
      >
        <img src={images.menu_logo} />
        <p style={{ fontSize: "10px", fontWeight: "400", color: "#fff" }}>
          Menu
        </p>
      </button>

      {getmenutogg ? (
        <div className="menu_model_float">
          {order_cat_responce && order_cat_responce.length > 0 ? (
            order_cat_responce.map((itm, ind) => {
              return (
                <button
                  className="menu_model_text_wrapp"
                  onClick={() => {
                    setMenuTogg2(true);
                    setMenuId(itm.id);
                  }}
                >
                  <p className="des_4 clr-white">{itm.name}</p>
                  <p className="des_4 clr-white">{itm.category_item_count}</p>
                </button>
              );
            })
          ) : (
            <p className="des_4 clr-white"> No Item</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default MenuScreen;
