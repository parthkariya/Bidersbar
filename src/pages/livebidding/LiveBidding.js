import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBiddingContext } from "../../context/bidding_context";
import { useUserContext } from "../../context/user_context";
import { ACCEPT_HEADER, get_restaurant } from "../../utils/Constant";
import NotificationMenu from "../notification/NotificationMenu";
import "./LiveBidding.css";

const LiveBidding = () => {
  const { usertoken } = useUserContext();
  const { availableTable, avilavble_data, totalTable, totaltable_loading } =
    useBiddingContext();
  let navigate = useNavigate();

  const [getdata, setData] = useState([]);
  const [getavailableTime, setAvailableTime] = useState([]);
  const [getselectId, setSelectId] = useState("");
  const [getselectId2, setSelectId2] = useState("");
  const [getdate, setDate] = useState("");
  const [getfromtime, setFromTime] = useState("");
  const [gettotime, setToTime] = useState("");
  const [gettableId, setTableId] = useState("");
  const [getAvilableId, setAvilableId] = useState("");

  useEffect(() => {
    // console.log("avilavble_data =--=>", avilavble_data);
    // avilavble_data;
  }, [getselectId2]);

  const getBiddingDates = async () => {
    await axios
      .get(get_restaurant, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      })
      .then((res) => {
        if (res.data.success === 1) {
          setData(res.data.data);
          // console.log(getdata);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetAvailableTime = async (from_time, to_time) => {
    // console.log("111-=>", moment(from_time).format("h:mm:ss a"));
    // console.log("111-=>", moment(23).format("h a"));
    setFromTime(from_time);
    setToTime(to_time);
    var params = {
      id: getselectId,
      date: getdate,
      from_time: from_time,
      to_time: to_time,
    };

    await availableTable(params);
  };

  const GetTotalTable = async () => {
    var params = {
      id: getselectId,
      date: getdate,
      from_time: getfromtime,
      to_time: gettotime,
      table_id: gettableId,
    };

    const data = await totalTable(params);
    if (data) {
      if (data.success === 1) {
        navigate("/picktable");
      } else if (data.success === 0) {
        NotificationMenu("error", "Error!", data.message);
        console.log("errors");
      }
    }
  };

  useEffect(() => {
    getBiddingDates();
  }, []);

  return (
    <div className="livebid_main_wrapp">
      <h1 className="h1">Let’s Begin</h1>
      <div className="livebid_head_text_wrapp">
        <h2 className="h2">Live Bidding</h2>
        <p className=".des_1">
          Select your desired Dates, Timings & Seating capacity based on the
          availability
        </p>
      </div>
      <div className="bidding_date_wrapp">
        <h3 className="h3">Bidding Dates</h3>
        {/* date cubes */}
        <div className="bidding_dates_cubes">
          {getdata && getdata.length > 0
            ? getdata.map((item, index) => {
                return (
                  <button
                    className="bidding_dates_single_cube"
                    style={{
                      border: "1px solid #39E681",
                      background: getselectId === item.id ? "#39E681" : "#fff",
                    }}
                    key={index}
                    onClick={() => {
                      setSelectId(item.id);
                      setSelectId2("");
                      setAvailableTime(item.child);
                      setDate(item.date);
                    }}
                  >
                    <p
                      className="date_cube_name"
                      style={{
                        color: getselectId === item.id ? "#fff" : "#39E681",
                      }}
                    >
                      {moment(item.date).format("ddd")}
                    </p>
                    <p
                      className="date_cube_no"
                      style={{
                        color: getselectId === item.id ? "#fff" : "#39E681",
                      }}
                    >
                      {moment(item.date).format("D")}
                    </p>
                    <p></p>
                  </button>
                );
              })
            : null}
        </div>
        {/* date cubes */}
      </div>

      {/* available timing */}
      <div className="available_timing_wrapp">
        <h3 className="h3">Available Timings</h3>
        <div className="available_timing_cubes_wrapp">
          {getselectId !== "" ? (
            <>
              {getavailableTime && getavailableTime.length > 0
                ? getavailableTime.map((itm, ind) => {
                    return (
                      <button
                        className="available_timing_single_cube"
                        style={{
                          border: "1px solid #39E681",
                          background:
                            getselectId2 === itm.id ? "#39E681" : "#fff",
                        }}
                        key={ind}
                        onClick={() => {
                          setSelectId2(itm.id);
                          GetAvailableTime(itm.from_time, itm.to_time);
                          setAvilableId("");
                        }}
                      >
                        <p
                          className="text"
                          style={{
                            color: getselectId2 === itm.id ? "#fff" : "#39E681",
                          }}
                        >
                          {/* {moment(itm.from_time).format("LT")}-
                          {moment(itm.to_time).format("LT")} */}
                          {itm.from_time}-{itm.to_time}
                        </p>
                      </button>
                    );
                  })
                : null}
            </>
          ) : null}
        </div>
      </div>
      {/* available timing */}

      {/* Seating Capacity */}

      <div className="available_timing_wrapp">
        <h3 className="h3">Available Timings</h3>
        <div className="available_timing_cubes_wrapp">
          {avilavble_data && avilavble_data.length > 0
            ? avilavble_data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="siting_single_cube"
                    style={{
                      border: "1px solid #39E681",
                      background:
                        getAvilableId === item.id ? "#39E681" : "#fff",
                    }}
                    onClick={() => {
                      setTableId(item.table_id);
                      setAvilableId(item.id);
                    }}
                  >
                    <p
                      className="text"
                      style={{
                        color: getAvilableId === item.id ? "#fff" : "#39E681",
                      }}
                    >
                      {item.table.name}
                    </p>
                  </button>
                );
              })
            : null}
        </div>
        <button className="btn mrg-1-v" onClick={GetTotalTable}>
          {totaltable_loading ? <div className="loader"></div> : "proceed"}
        </button>
      </div>

      {/* Seating Capacity */}
    </div>
  );
};

export default LiveBidding;
