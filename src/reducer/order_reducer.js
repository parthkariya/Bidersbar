import {
  ORDER_CATEGORY_BEGIN,
  ORDER_CATEGORY_ERROR,
  ORDER_CATEGORY_SUCCESS,
  ORDER_ITEM_BEGIN,
  ORDER_ITEM_ERROR,
  ORDER_ITEM_SUCCESS,
  ORDER_LIST_BEGIN,
  ORDER_LIST_ERROR,
  ORDER_LIST_SUCCESS,
  PLACE_ORDER_BEGIN,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_SUCCESS,
} from "../Action";

const order_reducer = (state, action) => {
  // CATEGORY

  if (action.type === ORDER_CATEGORY_BEGIN) {
    return { ...state, order_cat_loading: true };
  }

  if (action.type === ORDER_CATEGORY_SUCCESS) {
    return {
      ...state,
      order_cat_loading: false,
      order_cat_responce: action.payload,
    };
  }

  if (action.type === ORDER_CATEGORY_ERROR) {
    return { ...state, order_cat_loading: false };
  }

  // ORDER ITEM

  if (action.type === ORDER_ITEM_BEGIN) {
    return { ...state, order_item_loading: true };
  }

  if (action.type === ORDER_ITEM_SUCCESS) {
    return {
      ...state,
      order_item_loading: false,
      order_item_responce: action.payload,
    };
  }

  if (action.type === ORDER_ITEM_ERROR) {
    return { ...state, order_item_loading: false };
  }

  // ORDER LIST

  if (action.type === ORDER_LIST_BEGIN) {
    return { ...state, order_list_loading: true };
  }

  if (action.type === ORDER_LIST_SUCCESS) {
    return {
      ...state,
      order_list_loading: false,
      order_list_responce: action.payload,
    };
  }

  if (action.type === ORDER_LIST_ERROR) {
    return { ...state, order_list_loading: false };
  }

  // PLACE ORDER

  if (action.type === PLACE_ORDER_BEGIN) {
    return { ...state, place_order_loading: true };
  }

  if (action.type === PLACE_ORDER_SUCCESS) {
    return {
      ...state,
      place_order_loading: false,
      place_order_responce: action.payload,
    };
  }

  if (action.type === PLACE_ORDER_ERROR) {
    return { ...state, place_order_loading: false };
  }
};

export default order_reducer;
