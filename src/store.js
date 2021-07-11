import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartreducers";
import { detailsitemReducer, itemlistReducer } from "./reducers/productreducers";

const reducer=combineReducers({
    itemlist:itemlistReducer,
    itemdetail:detailsitemReducer,
    cart: cartReducer,
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store