import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart-action";

import {
  selectCartHidden,
  selectItemsCount,
} from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";

import { auth } from "../../firebase/firebase";

const Header = ({ hidden, toggleCartHidden, itemCount, currentUser }) => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="logo">
          <i className="fas fa-crown"></i>
          CROWN SHOP
        </Link>

        <div className="header-left">
          <Link className="option" to="/">
            Home
          </Link>
          <Link className="option" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span onClick={() => auth.signOut()} className="option">
              Logout
            </span>
          ) : (
            <Link className="option" to="/login">
              Login
            </Link>
          )}

          <i onClick={toggleCartHidden} className="fas fa-cart-plus">
            <span className="number">{itemCount}</span>
          </i>
        </div>
      </div>

      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: selectCartHidden(state),
  itemCount: selectItemsCount(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCardHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
