import {
  LOAD_ALL_ARTICLES,
  DELETE_COMMENT_BY_IND_BY_ARTICLE_ID,
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
  payload: { id }
});

export const deleteCommentByIndexByArticleId = (articleId, ind) => {
  return {
    type: DELETE_COMMENT_BY_IND_BY_ARTICLE_ID,
    payload: { articleId, ind }
  };
};