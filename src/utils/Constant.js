import React from "react";

const BaseUrl = "https://theapplified.com/biddersbar/api/v1/";

export const ACCEPT_HEADER = "application/x.biddersbar.v1+json";

export const signup_url = BaseUrl + "customerregistration";
export const send_otp = BaseUrl + "customerlogin";
export const get_restaurant = BaseUrl + "getrestaurant";
export const get_table = BaseUrl + "get-table";
export const login_url = BaseUrl + "verifyotp";
export const all_table = BaseUrl + "get-alltable";
export const get_notification = BaseUrl + "getnotification";
export const clear_notification = BaseUrl + "clearnotification";
export const edit_profile = BaseUrl + "updateprofile";
export const getprofile = BaseUrl + "profile";
export const create_order = BaseUrl + "order";
export const update_order = BaseUrl + "updateorder";
export const forgate_otp = BaseUrl + "send-otp";
export const check_otp = BaseUrl + "check-otp";
export const new_pass = BaseUrl + "passwordreset";
export const get_counter_list = BaseUrl + "get-order";
export const payments = BaseUrl + "payments";
export const order_category = BaseUrl + "category";
export const order_item = BaseUrl + "item";
export const place_order = BaseUrl + "item-order";
export const order_list = BaseUrl + "get-item-order";
