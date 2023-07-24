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
  SEND_OTP_BEGIN,
  SEND_OTP_SUCCESS,
  SEND_OTP_ERROR,
  LOGOUT_USER,
} from "../Action";

const user_reducer = (state, action) => {
  if (action.type === SIGNUP_BEGIN) {
    return { ...state, login_loading: true };
  }

  if (action.type === SIGNUP_SUCCESS) {
    return {
      ...state,
      login_loading: false,
      contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === SIGNUP_FAIL) {
    return { ...state, login_loading: false, login_error: true };
  }

  if (action.type === LOGIN_BEGIN) {
    return { ...state, login_loading: true };
  }

  if (action.type === LOGIN_SUCCESS) {
    const logintoken = action.payload.token;
    return {
      ...state,
      login_loading: false,
      logindata: action.payload.data,
      user_id: action.payload.data.id,
      ispayment: action.payload.data.payment,
      isLogin: true,
      logintoken: logintoken,
    };
  }

  if (action.type === LOGIN_FAIL) {
    return { ...state, login_loading: false, login_error: true };
  }

  if (action.type === GET_NOTIFICATION_BEGIN) {
    return { ...state, is_loading_home: true };
  }

  if (action.type === GET_NOTIFICATION_SUCCESS) {
    return {
      ...state,
      is_loading_home: false,
      notification_list: action.payload,
    };
  }

  if (action.type === GET_NOTIFICATION_ERROR) {
    return { ...state, is_loading_home: false };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      isLogin: false,
      user_id: "",
      logindata: {},
      logintoken: "",
      ispayment: 0,
    };
  }
};
export default user_reducer;
