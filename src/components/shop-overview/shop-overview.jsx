import React from "react";
import "./shop-overview.css";
import { selectorForShopCollections } from "../../redux/shop/shop-selector";
import PreviewCollection from "../preview-collection/preview-collection";
import { connect } from "react-redux";

const ShopOverview = ({ collections }) => {
  return (
    <div className="shop-overview">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectorForShopCollections(state),
});

export default connect(mapStateToProps)(ShopOverview);
