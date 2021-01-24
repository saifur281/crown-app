import {createSelector} from "reselect";

const selectCart = state => state.cart;


export const selectCartHidden = createSelector(

    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(

    [selectCart],
    cart => cart.cartItems,
);

export const selectItemsCount = createSelector(

    [selectCartItems],
    cartItems => cartItems.reduce((accumulateItem, cartItems) =>
    
        accumulateItem + cartItems.quantity
    
    , 0)
);

export const selectItemTotal = createSelector(

    [selectCartItems],
    cartItems => cartItems.reduce((accumulateTotal, cartItems) =>
    
    accumulateTotal + cartItems.quantity * cartItems.price
    
    , 0)
)