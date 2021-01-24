import React from "react";
import { connect } from "react-redux";
import "./checkout-item.css";

import {addItem, decreaseItem, clearItem } from "../../redux/cart/cart-action";

const CheckoutItem = ({item, increase, decrease, clearFromcart}) => {

    const {name,price,quantity,imgUrl}= item;

    return(

        <div className="checkout-item">
            <div className="row">
                <div className="b-column">
                    <img src={imgUrl} alt="item" />
                </div>
                <div className="b-column">{name}</div>
                <div className="b-column">${price}</div>

                <div className="b-column">
                
                    <i onClick={() => decrease(item)} className="fas fa-chevron-left"></i>
                    {quantity}
                    <i onClick={() => increase(item)} className="fas fa-chevron-right"></i> 
                
                </div>

                <div className="b-column">
                
                  <i onClick={() => clearFromcart(item)} className="fas fa-trash"> </i>

                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({

    increase : (item) => dispatch(addItem(item)),
    decrease : (item) => dispatch(decreaseItem(item)),
    clearFromcart : item => dispatch(clearItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);