import { createSelector } from "reselect";

const COLLECTION_MAP_ID = {
  hats: 1,
  children: 2,
  womens: 3,
  tshirt: 4,
  cap: 5,
};

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectorForShopCollections = createSelector(
  [selectShopData],

  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopData], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
