
import cartActionTypes from "./cart-action-types";

export const toggleCardHidden = () => ({

    type : cartActionTypes.TOGGLE_CARD_HIDDEN
});

export const addItem = (item) => ({

    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const clearItem = (item) => ({

    type : cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const decreaseItem = (item) => ({

    type : cartActionTypes.DECREASE_ITEM_FROM_CART,
    payload: item
})