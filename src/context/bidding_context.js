import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  AVILABLE_TABLE_BEGIN,
  AVILABLE_TABLE_FAIL,
  AVILABLE_TABLE_SUCCESS,
  TOTLE_TABLE_BEGIN,
  TOTLE_TABLE_FAIL,
  TOTLE_TABLE_SUCCESS,
  GET_NOTIFICATION_BEGIN,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
  EDIT_PROFILE_BEGIN,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
  CREATE_ORDER_BEGIN,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  SEND_OTP_BEGIN,
  SEND_OTP_SUCCESS,
  SEND_OTP_ERROR,
  CHECK_OTP_BEGIN,
  CHECK_OTP_SUCCESS,
  CHECK_OTP_ERROR,
  NEW_PASSWORD_BEGIN,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_ERROR,
  COUNTER_LIST_BEGIN,
  COUNTER_LIST_SUCCESS,
  COUNTER_LIST_ERROR,
  UPDATE_ORDER_BEGIN,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_ERROR,
} from "../Action";
import bidding_reducer from "../reducer/bidding_reducer";
import {
  ACCEPT_HEADER,
  all_table,
  get_notification,
  get_table,
  edit_profile,
  create_order,
  forgate_otp,
  check_otp,
  new_pass,
  get_counter_list,
  update_order,
  getprofile,
  clear_notification,
} from "../utils/Constant";
import createNotification from "../utils/Notification";
import { useUserContext } from "./user_context";

const initialState = {
  avilavble_data: [],
  total_table_data: [],
  total_notification: [],
  totaltable_loading: false,
  counter_loading: false,
  counter_list: [],
  profile_data: {},
};

const BiddingContext = React.createContext();

export const BiddingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bidding_reducer, initialState);
  const { usertoken } = useUserContext();

  // Post Available Table

  const availableTable = async (params, url) => {
    dispatch({ type: AVILABLE_TABLE_BEGIN });
    try {
      const response = await axios.post(get_table, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      // const availableData = response.data.data;
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({ type: AVILABLE_TABLE_SUCCESS, payload: response.data.data });
      } else {
        dispatch({ type: AVILABLE_TABLE_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: AVILABLE_TABLE_FAIL });
    }
  };

  // Post Total Table

  const totalTable = async (params, url) => {
    dispatch({ type: TOTLE_TABLE_BEGIN });
    try {
      const response = await axios.post(all_table, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({ type: TOTLE_TABLE_SUCCESS, payload: response.data.data });
      } else {
        dispatch({ type: TOTLE_TABLE_FAIL });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: TOTLE_TABLE_FAIL });
    }
  };

  // Get Notification

  const getnotification = async () => {
    dispatch({ type: GET_NOTIFICATION_BEGIN });
    try {
      const response = await axios.get(get_notification, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({
          type: GET_NOTIFICATION_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({ type: GET_NOTIFICATION_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: GET_NOTIFICATION_ERROR });
    }
  };

  // Get Counter List

  const getCounterList = async () => {
    dispatch({ type: COUNTER_LIST_BEGIN });
    try {
      const response = await axios.get(get_counter_list, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      console.log("Counter-List-Responce ==>", response.data);
      if (response.data.success == 1) {
        dispatch({
          type: COUNTER_LIST_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({ type: COUNTER_LIST_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: COUNTER_LIST_ERROR });
    }
  };

  // Post create order

  const setCreateOrder = async (params) => {
    console.log(JSON.stringify(params));
    dispatch({ type: CREATE_ORDER_BEGIN });
    try {
      const response = await axios.post(create_order, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });

      console.log("====", response.data);
      if (response.data.success == 1) {
        console.log("success");
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
        createNotification("success", "Success!", response.data.message);
      } else {
        // alert(response.data.message + "");
        dispatch({ type: CREATE_ORDER_ERROR });
        createNotification("error", "Error!", response.data.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CREATE_ORDER_ERROR });
      // createNotification("error", "Error!", response.data.message);
    }
  };

  // Post Update order

  const setUpdateOrder = async (params) => {
    console.log(JSON.stringify(params));
    dispatch({ type: UPDATE_ORDER_BEGIN });
    try {
      const response = await axios.post(update_order, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });

      console.log("====", response.data);
      if (response.data.success == 1) {
        console.log("success");
        dispatch({ type: UPDATE_ORDER_SUCCESS, payload: response.data });
        createNotification("success", "Success!", response.data.message);
      } else {
        dispatch({ type: UPDATE_ORDER_ERROR });
        createNotification("error", "Error!", response.data.message);
      }
      return response.data;
    } catch (error) {
      dispatch({ type: UPDATE_ORDER_ERROR });
      // createNotification("error", "Error!", response.data.message);
    }
  };

  // Post Edit Profile

  const setEditProfile = async (params) => {
    dispatch({ type: EDIT_PROFILE_BEGIN });
    try {
      const response = await axios.post(edit_profile, params, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      // const editdata = response.data;
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({ type: EDIT_PROFILE_SUCCESS, payload: response.data });
        createNotification("success", "Success!", response.data.message);
      } else {
        dispatch({ type: EDIT_PROFILE_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: EDIT_PROFILE_ERROR });
      createNotification("error", "Error!", error);
    }
  };

  // Get Profile

  const getProfile = async () => {
    dispatch({ type: EDIT_PROFILE_BEGIN });
    try {
      const response = await axios.get(getprofile, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      // const editdata = response.data;
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({ type: EDIT_PROFILE_SUCCESS, payload: response.data });
      } else {
        // alert(editdata.message + "");
        dispatch({ type: EDIT_PROFILE_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: EDIT_PROFILE_ERROR });
    }
  };

  // Get Profile

  const clearNofication = async () => {
    try {
      const response = await axios.get(clear_notification, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      // const editdata = response.data;
      console.log("====", response.data);
      if (response.data.success == 1) {
        createNotification("success", "Success!", "Clear Notification");
      }
      return response.data;
    } catch (error) {
      createNotification("success", "Success!", error);
    }
  };

  // Forgate Password Send OTP

  const setOtp2 = async (params) => {
    console.log(JSON.stringify(params));
    dispatch({ type: SEND_OTP_BEGIN });
    try {
      const response = await axios.post(forgate_otp, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: SEND_OTP_SUCCESS, payload: logindata });
      } else {
        dispatch({ type: SEND_OTP_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: SEND_OTP_ERROR });
    }
  };

  // Post Forgate Password Check OTP

  const checkOtp = async (params) => {
    console.log(JSON.stringify(params));
    dispatch({ type: CHECK_OTP_BEGIN });
    try {
      const response = await axios.post(check_otp, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: CHECK_OTP_SUCCESS, payload: logindata });
      } else {
        dispatch({ type: CHECK_OTP_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: CHECK_OTP_ERROR });
    }
  };

  // Post new password

  const newPassword = async (params) => {
    console.log(JSON.stringify(params));
    dispatch({ type: NEW_PASSWORD_BEGIN });
    try {
      const response = await axios.post(new_pass, params, {
        headers: {
          Accept: ACCEPT_HEADER,
        },
      });
      const logindata = response.data;
      console.log("====", response.data);
      if (logindata.success == 1) {
        dispatch({ type: NEW_PASSWORD_SUCCESS, payload: logindata });
      } else {
        alert(logindata.message + "");
        dispatch({ type: NEW_PASSWORD_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: NEW_PASSWORD_ERROR });
    }
  };

  useEffect(() => {
    getCounterList();
  }, []);

  useEffect(() => {
    getProfile();
  }, [usertoken]);

  return (
    <BiddingContext.Provider
      value={{
        ...state,
        availableTable,
        totalTable,
        getnotification,
        setEditProfile,
        setCreateOrder,
        setUpdateOrder,
        setOtp2,
        checkOtp,
        newPassword,
        getCounterList,
        getProfile,
        clearNofication,
      }}
    >
      {children}
    </BiddingContext.Provider>
  );
};

export const useBiddingContext = () => {
  return useContext(BiddingContext);
};
