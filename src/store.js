import { createStore,applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./Reducers/TodoReducers";

const reducer = combineReducers({
    //this containers all reducers//
    Todo : TodoReducer,
});

const inititialstate = {}

const middleware = [thunk];

const store = createStore(
    reducer,
    inititialstate,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;
