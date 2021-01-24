// import SHOP_DATA from "./shop-data";
import shopActionTypes from "./shop-action-types";

const INTIALSTATE = {
  collections: null,
};

const shopReducers = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducers;
