
import {combineReducers} from "redux";
import cartReducers from "./cart/cart-reducer";
import shopReducers from "./shop/shop-reducers";
import userReducers from "./user/user-reducer";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"


const persistConfig = {

    key: "root",
    storage,
    whitelist : ["cart"]
}


const rootReducers = combineReducers({

    cart : cartReducers,
    shop : shopReducers,
    user : userReducers

});

export default persistReducer( persistConfig, rootReducers )