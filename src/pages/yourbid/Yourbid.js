import React, { useEffect, useState } from "react";
import "./Yourbid.css";
import { PageHero } from "../../common";
import images from "../../constants/images";
import { useBiddingContext } from "../../context/bidding_context";
import moment from "moment";
import { Link } from "react-router-dom";

const Yourbid = () => {
  const { counter_list, getCounterList, counter_loading } = useBiddingContext();
  const [getcounterPrice, setCountrPrice] = useState("");

  useEffect(() => {
    // getCounterList();
    console.log(counter_list);
  }, []);

  return (
    <div>
      <PageHero title={"Your Bid’s"} />
      <div className="yourbid_main_wrapp">
        {/* active bid */}
        {counter_loading ? (
          <div className="loader mt-3"></div>
        ) : (
          <div className="yourbid_wrapp">
            <h3 className="h3">Active Bids</h3>
            {/* bid card */}
            {counter_list && counter_list.length > 0
              ? counter_list.map((item, index) => {
                  return (
                    <>
                      {item.bidding_status !== "Expire" ? (
                        <div className="counter_bid_card_wrapp">
                          <div className="bid_card_wrapp2">
                            <div className="bid_card_sec_01">
                              <img src={images.bid_ham} />
                            </div>
                            <div className="bid_card_sec_02">
                              <h3 className="h3">
                                {moment(item.date).format("Do YY")}
                              </h3>
                              <p className="des_2">
                                Event: {item.restaurant.name}
                              </p>
                              <p className="des_2">
                                Seating:
                                {item.restaurant &&
                                item.restaurant.child !== undefined
                                  ? item.restaurant.child.map((itm, ind) => {
                                      return itm.table.name;
                                    })
                                  : "0"}
                              </p>
                            </div>
                            <div className="bid_card_sec_03">
                              <div className="bid_active_wrapp">
                                <div className="bid_card_active_dot"></div>
                                <p className="bid_card_active_text">Active</p>
                              </div>
                              <p className="des_2">Amount: ₹{item.price}</p>
                              <p className="des_2">
                                Bid Date:{" "}
                                {moment(item.created_at).format("Do YY")}
                              </p>
                            </div>
                          </div>
                          <div className="dot_border"></div>
                          <div className="counter_bid_amount_wrapp">
                            <p className="des_3">
                              Bidding Amount: ₹{item.net_pay_amount}
                            </p>
                            <p className="des_4">
                              {moment(item.created_at).format(
                                "LT Do MMM ,YYYY"
                              )}
                            </p>
                          </div>
                          <Link
                            to="/counterbid"
                            state={{
                              id: item.id,
                              couter_price: item.net_pay_amount,
                            }}
                            className="btn-outline mrg-1-v"
                          >
                            Counter Bid
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })
              : null}
            {/* bid card */}
          </div>
        )}
        {/* active bid */}

        {/* Post bid */}
        <div className="yourbid_wrapp">
          <h3 className="h3">Past Bids</h3>

          {counter_list && counter_list.length > 0
            ? counter_list.map((item, index) => {
                return (
                  <>
                    {item.bidding_status === "Expire" ? (
                      <div className="bid_card_wrapp">
                        <div className="bid_card_sec_01">
                          <img src={images.bid_ham} />
                        </div>
                        <div className="bid_card_sec_02">
                          <h3 className="h3">
                            {moment(item.date).format("Do YY")}
                          </h3>
                          <p className="des_2">Event:{item.restaurant.name}</p>
                          <p className="des_2">
                            Seating:{" "}
                            {item.restaurant &&
                            item.restaurant.child !== undefined
                              ? item.restaurant.child.map((itm, ind) => {
                                  return itm.table.name;
                                })
                              : "0"}
                          </p>
                        </div>
                        <div className="bid_card_sec_03">
                          <div className="bid_active_wrapp">
                            {item.main_status === "Lost" ? (
                              <div className="bid_card_active_dot_red"></div>
                            ) : (
                              <div className="bid_card_active_dot_green"></div>
                            )}
                            <p className="bid_card_active_text">
                              {item.main_status}
                            </p>
                          </div>
                          <p className="des_2">
                            Amount:{" "}
                            {item.restaurant &&
                            item.restaurant.child !== undefined
                              ? item.restaurant.child.map((itm, ind) => {
                                  return itm.price;
                                })
                              : "0"}
                          </p>
                          <p className="des_2">
                            Bid Date:{moment(item.created_at).format("Do YY")}
                          </p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })
            : null}
        </div>
        {/* Post bid */}
      </div>
    </div>
  );
};

export default Yourbid;
