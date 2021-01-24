import shopActionTypes from "./shop-action-types";

export const updateCollection = (collectionMap) => ({
  type: shopActionTypes.UPDATE_COLLECTION,
  payload: collectionMap,
});
