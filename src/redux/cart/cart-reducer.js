import cartActionTypes from "./cart-action-types";
import { addItemToCart,decreaseItemFromCart } from "./cart-utils";

const INTIAL_STATE = {

   hidden : true,
   cartItems : []
}





const cartReducers = (state = INTIAL_STATE, action) => {

    switch(action.type){

        case cartActionTypes.TOGGLE_CARD_HIDDEN :
            return{

                ...state,
                hidden : !state.hidden

            }

        case cartActionTypes.ADD_ITEM_TO_CART :
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }

        case cartActionTypes.CLEAR_ITEM_FROM_CART :

            return{
                ...state,
                cartItems : state.cartItems.filter(cartItem =>
                    cartItem.id !== action.payload.id
                )
            }

        case cartActionTypes.DECREASE_ITEM_FROM_CART :

            return{

                ...state,
                cartItems : decreaseItemFromCart(state.cartItems, action.payload)
            }
        
            default : return state
    }


}

export default cartReducers;