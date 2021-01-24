import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import "./collection-item.css";


const CollectionItem = ({item, addItem}) => {

    const {name, price, imgUrl} = item;

    return(
        <div className="item">

            <img src={imgUrl} alt="item" />

            <div className="item-footer" >
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            
            <button onClick={() => addItem(item)} className="add-to Cart">
                ADD TO CART
                 &nbsp;<i className="fas fa-cart-plus"> </i> 
            </button>

        </div>
    )
};


const mapDispatchToProps = (dispatch) => ({

    addItem : (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)