import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { Await, useNavigate } from "react-router-dom";
import {
  LOGIN_BEGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_BEGIN,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  GET_NOTIFICATION_BEGIN,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
  LOGOUT_USER,
} from "../Action";
import user_reducer from "../reducer/user_reducer";
import {
  ACCEPT_HEADER,
  login_url,
  send_otp,
  signup_url,
  get_notification,
  forgate_otp,
} from "../utils/Constant";
import createNotification from "../utils/Notification";
import { useCartContext } from "./cart_context";

const getLocalStorage = () => {
  let user_no = localStorage.getItem("user_no");

  if (user_no) {
    return JSON.parse(localStorage.getItem("user_no"));
  } else {
    return {};
  }
};

const getUserId = () => {
  let user_no = localStorage.getItem("user_id");

  if (user_no) {
    return JSON.parse(localStorage.getItem("user_id"));
  } else {
    return {};
  }
};

const getToken = () => {
  let usertoken = localStorage.getItem("token");
  if (usertoken) {
    return JSON.parse(localStorage.getItem("token"));
  } else {
    return 0;
  }
};

const getLoginData = () => {
  let logindata = localStorage.getItem("logindata");

  if (logindata) {
    return JSON.parse(localStorage.getItem("logindata"));
  } else {
    return {};
  }
};

const getLoginState = () => {
  let islogin = localStorage.getItem("islogin");
  if (islogin) {
    return JSON.parse(localStorage.getItem("islogin"));
  } else {
    return false;
  }
};

const getOrderPayment = () => {
  let ispayment = localStorage.getItem("ispayment");
  if (ispayment) {
    return JSON.parse(localStorage.getItem("ispayment"));
  } else {
    return 0;
  }
};

const initialState = {
  contact_number: getLocalStorage(),
  usertoken: getToken(),
  isLogin: getLoginState(),
  ispayment: getOrderPayment(),
  logindata: getLoginData(),
  user_id: getUserId(),
  notification_list: [],
  is_loading_home: false,
  login_error: false,
};

const UserContext = React.createContext();
let token = localStorage.getItem("token");

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);
  // let navigate = useNavigate();

  const setRegister = async (params, url) => {
    dispatch({ type: SIGNUP_BEGIN });
    try {
      const response = await axios.post(signup_url, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: SIGNUP_SUCCESS, payload: logindata });
        localStorage.setItem(
          "user_no",
          JSON.stringify(logindata.data.contact_number)
        );
        // Navigate("/verification");
        // navigate("verification");
      } else {
        alert(logindata.message + "");
        dispatch({ type: SIGNUP_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: SIGNUP_FAIL });
    }
  };

  const setOtp = async (params, url) => {
    console.log(JSON.stringify(params));
    dispatch({ type: LOGIN_BEGIN });
    try {
      const response = await axios.post(send_otp, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: LOGIN_SUCCESS, payload: logindata });
        localStorage.setItem("token", JSON.stringify(logindata.token));
        localStorage.setItem("islogin", JSON.stringify(true));
        localStorage.setItem("logindata", JSON.stringify(logindata.data));
        localStorage.setItem("user_id", JSON.stringify(logindata.data.id));
        localStorage.setItem(
          "ispayment",
          JSON.stringify(logindata.data.payment)
        );
        createNotification("success", "Success", "Successfully Verified");
      } else {
        // createNotification(
        //   "error",
        //   "Error!",
        //   "Verification Failed! The OTP you entered is incorrect"
        // );
        dispatch({ type: LOGIN_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  const setLogin = async (params, url) => {
    console.log(JSON.stringify(params));
    dispatch({ type: LOGIN_BEGIN });
    try {
      const response = await axios.post(login_url, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("====", response.data);
      if (logindata.success == 1) {
        console.log("success");
        dispatch({ type: LOGIN_SUCCESS, payload: logindata });
        localStorage.setItem("token", JSON.stringify(logindata.token));
        localStorage.setItem("islogin", JSON.stringify(true));
        localStorage.setItem("logindata", JSON.stringify(logindata.data));
        localStorage.setItem("user_id", JSON.stringify(logindata.data.id));
        localStorage.setItem(
          "ispayment",
          JSON.stringify(logindata.data.payment)
        );
      } else {
        alert(logindata.message + "");
        dispatch({ type: LOGIN_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  const logoutUser = (history) => {
    dispatch({ type: LOGOUT_USER });
    localStorage.setItem("logindata", "");
    localStorage.setItem("islogin", "");
    localStorage.setItem("user_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("ispayment", 0);
    localStorage.clear();
    history("/");
    return "logout";
  };

  // const getnotification = async (usertoken) => {
  //   dispatch({ type: GET_NOTIFICATION_BEGIN });
  //   await axios
  //     .get(get_notification, {
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //         Authorization: "Bearer" + usertoken,
  //       },
  //     })
  //     .then((res) => {
  //       console.log("get_notification", res.data.data);
  //       if (res.data.success === 1) {
  //         dispatch({ GET_NOTIFICATION_SUCCESS, payload: res.data.data });
  //       }
  //     })
  //     .catch((err) => {
  //       dispatch({ GET_NOTIFICATION_ERROR });
  //     });
  // };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setRegister,
        setOtp,
        setLogin,
        logoutUser,

        // getnotification,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
