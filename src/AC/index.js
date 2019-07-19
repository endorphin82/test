// import { replace } from "connected-react-router";
import { LOAD_ALL_ARTICLES, START, SUCCESS, FAILURE } from "../constants";

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: `http://localhost:3004/posts`
  };
};
