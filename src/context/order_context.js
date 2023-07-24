import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import order_reducer from "../reducer/order_reducer";

import {
  ACCEPT_HEADER,
  login_url,
  send_otp,
  signup_url,
  get_notification,
  forgate_otp,
  order_category,
  order_item,
  place_order,
  order_list,
} from "../utils/Constant";
import createNotification from "../utils/Notification";
import {
  ORDER_CATEGORY_BEGIN,
  ORDER_CATEGORY_ERROR,
  ORDER_CATEGORY_SUCCESS,
  ORDER_ITEM_BEGIN,
  ORDER_ITEM_ERROR,
  ORDER_ITEM_SUCCESS,
  PLACE_ORDER_BEGIN,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
  ORDER_LIST_BEGIN,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_ERROR,
} from "../Action";
import { useUserContext } from "./user_context";
import { useCartContext } from "./cart_context";

const initialState = {
  order_cat_responce: [],
  order_item_responce: [],
  order_list_responce: [],
  place_order_responce: [],
  order_cat_loading: false,
  order_item_loading: false,
  order_list_loading: false,
  place_order_loading: false,
};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(order_reducer, initialState);
  const { usertoken } = useUserContext();
  // const { clearCart } = useCartContext();

  const getordercatagory = async () => {
    dispatch({ type: ORDER_CATEGORY_BEGIN });
    try {
      const response = await axios.get(order_category, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({
          type: ORDER_CATEGORY_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({ type: ORDER_CATEGORY_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: ORDER_CATEGORY_ERROR });
    }
  };

  const getorderitem = async () => {
    dispatch({ type: ORDER_ITEM_BEGIN });
    try {
      const response = await axios.get(order_item, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({
          type: ORDER_ITEM_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({ type: ORDER_ITEM_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: ORDER_ITEM_ERROR });
    }
  };

  const getorderlist = async () => {
    dispatch({ type: ORDER_LIST_BEGIN });
    try {
      const response = await axios.get(order_list, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({
          type: ORDER_LIST_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({ type: ORDER_LIST_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: ORDER_LIST_ERROR });
    }
  };

  const setplaceorder = async (formData, url) => {
    dispatch({ type: PLACE_ORDER_BEGIN });
    try {
      const response = await axios.post(place_order, formData, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + usertoken,
        },
      });
      console.log("====", response.data);
      if (response.data.success == 1) {
        dispatch({
          type: PLACE_ORDER_SUCCESS,
          payload: response.data.data,
        });
        // clearCart();
      } else {
        dispatch({ type: PLACE_ORDER_ERROR });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: PLACE_ORDER_ERROR });
    }
  };

  useEffect(() => {
    getordercatagory();
    getorderitem();
    getorderlist();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        ...state,
        getordercatagory,
        getorderitem,
        setplaceorder,
        getorderlist,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
