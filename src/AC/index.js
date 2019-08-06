import { FAILURE, LOAD_ALL_ARTICLES, START, SUCCESS } from "../constants";
import axios from "axios";

export const loadAllArticles = () => dispatch => {
  dispatch({
    type: LOAD_ALL_ARTICLES + START
  });
  return axios
    .get("http://localhost:3004/api/article")
    .then(response => response.data)
    .then(response => dispatch({
      type: LOAD_ALL_ARTICLES + SUCCESS,
      response
    }))
    .catch(errors => dispatch({
      type: LOAD_ALL_ARTICLES + FAILURE,
      payload: { errors }
    }));
};