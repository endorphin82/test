import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import { routerMiddleware } from "connected-react-router";
import { history } from "../history";
import thunk from "redux-thunk";

const routerHistoryMiddleware = routerMiddleware(history);

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerHistoryMiddleware)
);

const store = createStore(reducer, {}, enhancer);

export default store;