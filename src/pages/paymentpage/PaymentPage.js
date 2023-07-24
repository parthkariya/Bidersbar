import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { PageHero } from "../../common";
import { useUserContext } from "../../context/user_context";
import { ACCEPT_HEADER, payments } from "../../utils/Constant";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { usertoken, ispayment } = useUserContext();

  useEffect(() => {
    console.log("ispayment", ispayment);
  });

  const { navigate } = useNavigate();

  const [getbidd, setBidd] = useState(false);

  const SetPayment = async () => {
    const formdata = new FormData();
    formdata.append("amount", "10");

    await axios
      .post(payments, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      })
      .then((res) => {
        if (res.data.success === 1) {
          console.log(res.data.data);
          setBidd(true);
          window.location.reload(false);

          localStorage.setItem("ispayment", JSON.stringify(1));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <PageHero title={"Payment"} />
      <div className="payment_main_wrapp">
        {ispayment == 1 ? (
          <>
            <h3 className="h3">
              <span style={{ color: "#39e681" }}>congratulations</span> Your
              Payment Successful
            </h3>
            <Link to="/livebidding" className="payment_view_btn">
              <p style={{ margin: "0px" }}>Go To Bidding</p>

              <BiRightArrowAlt
                style={{ color: "#fff", width: "25px", height: "25px" }}
              />
            </Link>
          </>
        ) : (
          <>
            <h3 className="h3">
              Pay <span style={{ color: "#39e681" }}>10 Rs.</span> entry fee and
              go to bidding
            </h3>
            <button className="payment_view_btn" onClick={() => SetPayment()}>
              <p style={{ margin: "0px" }}>Pay Now</p>

              <BiRightArrowAlt
                style={{ color: "#fff", width: "25px", height: "25px" }}
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
