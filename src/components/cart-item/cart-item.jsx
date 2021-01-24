import React from "react";
import { connect } from "react-redux";
import { clearItem } from "../../redux/cart/cart-action";
import "./cart-item.css";

const CartItem = ({ item, clearItem }) => {
  const { name, price, imgUrl, quantity } = item;

  return (
    <div className="cart-item">
      <i onClick={() => clearItem(item)} className="fas fa-trash"></i>
      <img src={imgUrl} alt="" />

      <div className="cart-content">
        <span className="i-name">{name}</span>
        <span className="i-price">${price}</span>
        <span className="i-quantity">Q: {quantity}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
