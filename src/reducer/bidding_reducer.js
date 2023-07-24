import { IoAtCircleOutline } from "react-icons/io5";
import {
  AVILABLE_TABLE_BEGIN,
  AVILABLE_TABLE_FAIL,
  AVILABLE_TABLE_SUCCESS,
  TOTLE_TABLE_BEGIN,
  TOTLE_TABLE_SUCCESS,
  GET_NOTIFICATION_BEGIN,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
  CREATE_ORDER_BEGIN,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  SEND_OTP_BEGIN,
  SEND_OTP_SUCCESS,
  SEND_OTP_ERROR,
  NEW_PASSWORD_BEGIN,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_ERROR,
  COUNTER_LIST_BEGIN,
  COUNTER_LIST_SUCCESS,
  COUNTER_LIST_ERROR,
  TOTLE_TABLE_FAIL,
  UPDATE_ORDER_BEGIN,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_ERROR,
  EDIT_PROFILE_BEGIN,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
} from "../Action";

const bidding_reducer = (state, action) => {
  // Post Avilable table

  if (action.type === AVILABLE_TABLE_BEGIN) {
    return { ...state, avilable_loading: true };
  }

  if (action.type === AVILABLE_TABLE_SUCCESS) {
    return {
      ...state,
      avilable_loading: false,
      avilavble_data: action.payload,
    };
  }

  if (action.type === AVILABLE_TABLE_FAIL) {
    return { ...state, avilable_loading: false };
  }

  // Post Total table

  if (action.type === TOTLE_TABLE_BEGIN) {
    return { ...state, totaltable_loading: true };
  }

  if (action.type === TOTLE_TABLE_SUCCESS) {
    return {
      ...state,
      totaltable_loading: false,
      total_table_data: action.payload,
    };
  }

  if (action.type === TOTLE_TABLE_FAIL) {
    return { ...state, totaltable_loading: false };
  }

  // Get Notification

  if (action.type === GET_NOTIFICATION_BEGIN) {
    return { ...state, totaltable_loading: true };
  }

  if (action.type === GET_NOTIFICATION_SUCCESS) {
    return {
      ...state,
      torrent_loading: false,
      total_notification: action.payload,
    };
  }

  if (action.type === GET_NOTIFICATION_ERROR) {
    return { ...state, torrent_loading: false };
  }

  // Get Profile

  if (action.type === EDIT_PROFILE_BEGIN) {
    return { ...state, profile_loading: true };
  }

  if (action.type === EDIT_PROFILE_SUCCESS) {
    return {
      ...state,
      profile_loading: false,
      profile_data: action.payload.data,
    };
  }

  if (action.type === EDIT_PROFILE_ERROR) {
    return { ...state, profile_loading: false };
  }

  // Get Counter List

  if (action.type === COUNTER_LIST_BEGIN) {
    return { ...state, counter_loading: true };
  }

  if (action.type === COUNTER_LIST_SUCCESS) {
    return {
      ...state,
      counter_loading: false,
      counter_list: action.payload,
    };
  }

  if (action.type === COUNTER_LIST_ERROR) {
    return { ...state, counter_loading: false };
  }

  // Post Create Order

  if (action.type === CREATE_ORDER_BEGIN) {
    return { ...state, create_order_loading: true };
  }

  if (action.type === CREATE_ORDER_SUCCESS) {
    return {
      ...state,
      create_order_loading: false,
    };
  }

  if (action.type === CREATE_ORDER_ERROR) {
    return { ...state, create_order_loading: false };
  }

  // Post Update Order

  if (action.type === UPDATE_ORDER_BEGIN) {
    return { ...state, update_order_loading: true };
  }

  if (action.type === UPDATE_ORDER_SUCCESS) {
    return {
      ...state,
      update_order_loading: false,
    };
  }

  if (action.type === UPDATE_ORDER_ERROR) {
    return { ...state, update_order_loading: false };
  }

  // Post send Otp

  if (action.type === SEND_OTP_BEGIN) {
    return { ...state, is_sendotp_loading: true };
  }

  if (action.type === SEND_OTP_SUCCESS) {
    return {
      ...state,
      is_sendotp_loading: false,
      sendotp_responce: action.payload,
    };
  }

  if (action.type === SEND_OTP_ERROR) {
    return { ...state, is_sendotp_loading: false };
  }

  // Post new password

  if (action.type === NEW_PASSWORD_BEGIN) {
    return { ...state, new_password_loading: true };
  }

  if (action.type === NEW_PASSWORD_SUCCESS) {
    return {
      ...state,
      new_password_loading: false,
      new_password_responce: action.payload,
    };
  }

  if (action.type === NEW_PASSWORD_ERROR) {
    return { ...state, new_password_loading: false };
  }
};
export default bidding_reducer;
