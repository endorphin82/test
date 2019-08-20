import {
  LOAD_ALL_ARTICLES, LOAD_ARTICLE_COMMENTS,
  START, SUCCESS, FAILURE, URL2, DELETE_ARTICLE_BY_ID
} from "../constants";
import axios from "axios";

export const loadAllArticles = () => dispatch => {
  dispatch({
    type: LOAD_ALL_ARTICLES + START
  });
  return axios
    .get(URL2)
    .then(response => response.data)
    .then(response => dispatch({
      type: LOAD_ALL_ARTICLES + SUCCESS,
      response: response.posts
    }))
    .catch(errors => dispatch({
      type: LOAD_ALL_ARTICLES + FAILURE,
      payload: { errors }
    }));
};

export const deleteArticleById = (id) => ({
  type: DELETE_ARTICLE_BY_ID,
  payload: { id}
})