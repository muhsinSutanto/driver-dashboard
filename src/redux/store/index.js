import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

const middleware = [thunk];

const store = createStore(
   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   rootReducers,
   compose(applyMiddleware(...middleware))
);

export default store;
