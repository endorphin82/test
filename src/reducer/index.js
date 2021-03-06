import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "history.js";
import articles from "./articles";

const router = connectRouter(history);

export default combineReducers({
  articles,
  router
});