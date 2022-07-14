import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createReducer from "./reducers";

const reducers = createReducer();

const middlewares = [thunk];

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
