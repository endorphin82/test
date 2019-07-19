// import { replace } from "connected-react-router";
import { FAILURE, LOAD_ALL_POSTS, START, SUCCESS } from "../constants";
import axios  from "axios";

export const loadAllPosts = () => dispatch => {
  dispatch({
    type: LOAD_ALL_POSTS + START
  });
  return axios
    .get("http://localhost:3004/posts")
    .then(response => response.data)
    .then(posts => dispatch({
      type: LOAD_ALL_POSTS + SUCCESS,
      payload: { posts }
    }))
    .catch(errors => dispatch({
      type: LOAD_ALL_POSTS + FAILURE,
      payload: { errors }
    }));
};
