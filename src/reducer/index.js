import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../history";
import posts from "./loadAllPosts";

const router = connectRouter(history);

export default combineReducers({
  posts,
  router
});