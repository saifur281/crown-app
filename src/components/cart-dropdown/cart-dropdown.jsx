import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleCardHidden } from "../../redux/cart/cart-action";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.css";
import {selectCartItems} from "../../redux/cart/cart-selectors"



const CartDropDown = ({cartItems, history, push, dispatch}) =>{

   

    return(

        <div className="card-dropdown">

            <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} item={item} /> )
            }
        </div>

            <button  onClick={ () => {

                    history.push("/checkout");
                    dispatch(toggleCardHidden());
            } 
            
            } className="checkout-btn">GO TO CHECKOUT</button>
        </div>
    )
};


const mapStateToProps = (state) => ({

    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));