import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./rootReducer";
import { persistStore } from "redux-persist";

const middleware = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middleware));
export const persistor = persistStore(store);
export default { store, persistor };
