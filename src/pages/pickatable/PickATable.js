import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { useBiddingContext } from "../../context/bidding_context";
import Notification from "../../utils/Notification";
import "./PickATable.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Data = [
  { id: 1, name: "twotable", position: "booked", table: "2" },
  { id: 2, name: "threetable", position: "empty", table: "6" },
  { id: 3, name: "fourtable", position: "empty", table: "6" },
  { id: 4, name: "fivetable", position: "empty", table: "2" },
  { id: 5, name: "sixtable", position: "empty", table: "6" },
  { id: 6, name: "seventable", position: "booked", table: "4" },
];

const PickATable = () => {
  const { totaltable_loading, total_table_data } = useBiddingContext();
  const [select, setselect] = useState();
  const [get_rid, set_rid] = useState();
  const [getdate, setDate] = useState("");
  const [totalbid, setTotalBid] = useState("");
  const [data, setData] = useState(Data);
  const [getmodel, setModel] = useState(false);

  useEffect(() => {
    console.log("select", select);
    console.log("get_rid", get_rid);
    console.log("getdate", getdate);
    console.log("getmodel", getmodel);
    console.log("total_table_data =-=>", total_table_data);
  }, []);

  return (
    <div className="picktable_main_wrapp">
      <h1 className="h1">Pick a Table</h1>
      <div className="tables_main_wrapp">
        {total_table_data && total_table_data.length > 0
          ? total_table_data.map((item, index) => {
              return (
                <>
                  {item.table.name === "2 - Seater" ? (
                    <>
                      <button
                        onClick={() => {
                          setselect(item.id);
                          set_rid(item.restaurant_id);
                          setDate(item.main.date);
                          setTotalBid(item.total_sum);
                          setModel(true);
                        }}
                        className="table_img_btn"
                      >
                        {select === item.id ? (
                          <>
                            <img
                              src={images.two_table_green}
                              className="table_img"
                            />
                          </>
                        ) : (
                          <img src={images.two_table} className="table_img" />
                        )}
                      </button>
                      {getmodel ? (
                        <div className="table_img_model">
                          <p className="table_img_model_name">
                            {item.table.name}
                          </p>
                          <div className="d-flex justify-content-between">
                            <p
                              className="des_2 mr-05"
                              style={{ color: "#1a2a34" }}
                            >
                              Current Bid
                            </p>
                            <p className="des_3" style={{ color: "#1a2a34" }}>
                              ₹ {item.total_sum}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p
                              className="des_2 mr-05"
                              style={{ color: "#1a2a34" }}
                            >
                              No. of Bidders
                            </p>
                            <p className="des_3" style={{ color: "#1a2a34" }}>
                              {item.total_count}
                            </p>
                          </div>
                          <button
                            className="table_img_model_close"
                            onClick={() => setModel(false)}
                          >
                            <AiFillCloseCircle
                              style={{
                                width: "1rem",
                                height: " 1rem",
                                color: "#39e681",
                              }}
                              onClick={() => setModel(false)}
                            />
                          </button>
                        </div>
                      ) : null}
                    </>
                  ) : item.table.name === "4 - Seater" ? (
                    <>
                      <button
                        onClick={() => {
                          setselect(item.id);
                          set_rid(item.restaurant_id);
                          setDate(item.main.date);
                          setTotalBid(item.total_sum);

                          setModel(true);
                        }}
                        className="table_img_btn"
                      >
                        {select === item.id ? (
                          <>
                            <img
                              src={images.four_table_green}
                              className="table_img"
                            />
                          </>
                        ) : (
                          <img src={images.four_table} className="table_img" />
                        )}
                      </button>
                      {getmodel ? (
                        <div className="table_img_model">
                          <p className="table_img_model_name">
                            {item.table.name}
                          </p>
                          <div className="d-flex justify-content-between">
                            <p
                              className="des_2 mr-05"
                              style={{ color: "#1a2a34" }}
                            >
                              Current Bid
                            </p>
                            <p className="des_3" style={{ color: "#1a2a34" }}>
                              ₹ {item.total_sum}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p
                              className="des_2 mr-05"
                              style={{ color: "#1a2a34" }}
                            >
                              No. of Bidders
                            </p>
                            <p className="des_3" style={{ color: "#1a2a34" }}>
                              {item.total_count}
                            </p>
                          </div>
                          <button
                            className="table_img_model_close"
                            onClick={() => setModel(false)}
                          >
                            <AiFillCloseCircle
                              style={{
                                width: "1rem",
                                height: " 1rem",
                                color: "#39e681",
                              }}
                              onClick={() => setModel(false)}
                            />
                          </button>
                        </div>
                      ) : null}
                    </>
                  ) : item.table.name === "6 - Seater" ? (
                    <>
                      <button
                        className="table_img_btn"
                        onClick={() => {
                          setselect(item.id);
                          set_rid(item.restaurant_id);
                          setDate(item.main.date);
                          setTotalBid(item.total_sum);

                          setModel(true);
                        }}
                        // style={{ position: "relative" }}
                      >
                        {select === item.id ? (
                          <>
                            <img
                              src={images.six_table_green}
                              className="table_img"
                            />
                          </>
                        ) : (
                          <img src={images.six_table} className="table_img" />
                        )}
                      </button>
                      {getmodel ? (
                        <div className="table_img_model">
                          <p className="table_img_model_name">
                            {item.table.name}
                          </p>
                          <div className="d-flex justify-content-between">
                            <p
                              className="des_2 mr-05"
                              style={{ color: "#1a2a34" }}
                            >
                              Current Bid
                            </p>
                            <p className="des_3" style={{ color: "#1a2a34" }}>
                              ₹ {item.total_sum}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p
                              className="des_2 mr-05"
                              style={{ color: "#1a2a34" }}
                            >
                              No. of Bidders
                            </p>
                            <p className="des_3" style={{ color: "#1a2a34" }}>
                              {item.total_count}
                            </p>
                          </div>
                          <button
                            className="table_img_model_close"
                            onClick={() => setModel(false)}
                          >
                            <AiFillCloseCircle
                              style={{
                                width: "1rem",
                                height: " 1rem",
                                color: "#39e681",
                              }}
                              onClick={() => setModel(false)}
                            />
                          </button>
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              );
            })
          : null}
      </div>
      <div className="table_btn_wrapp">
        {get_rid === undefined && select === undefined && getdate === "" ? (
          <Link
            onClick={() =>
              Notification("error", "Error!", "Please select table!")
            }
            className="btn-disable"
          >
            Proceed
          </Link>
        ) : (
          <Link
            to="/biddingpayment"
            state={{
              r_id: get_rid,
              rc_id: select,
              date: getdate,
              curent_bid: totalbid,
            }}
            className="btn"
          >
            Proceed
          </Link>
        )}
      </div>
    </div>
  );
};

export default PickATable;
