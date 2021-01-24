import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import "./checkout-page.css";
import {selectCartItems, selectItemTotal} from "../../redux/cart/cart-selectors"

const CheckoutPage = ({checkoutItems, total}) => {

    return(
        <div className="checkout-page">
            <h1 className="checkout-title">CHECKOUT PAGE</h1>

            <div className="row">
                <div className="h-column">IMAGE</div>
                <div className="h-column">NAME</div>
                <div className="h-column">PRICE</div>
                <div className="h-column">QUANTITY</div>
                <div className="h-column">ACTION</div>
            </div>

            {
                checkoutItems.length ?
                checkoutItems.map(item => <CheckoutItem key={item.id} item={item} />)
                :<span className="empty-text">NO ITEM FOUND</span>
            }

            <div className="total">
                <h1 className="total-count">TOTAL : ${total}.00</h1>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({

    checkoutItems : selectCartItems(state),
    total : selectItemTotal(state)

    
});

export default connect(mapStateToProps)(CheckoutPage);