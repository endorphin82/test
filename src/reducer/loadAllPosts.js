import { FAILURE, LOAD_ALL_POSTS, START, SUCCESS } from "../constants";

const initialState = {
  posts: [],
  errors: {},
  loading: false
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_POSTS + START:
      return {
        ...state,
        loading: false,
        errors: false
      };
    case LOAD_ALL_POSTS + SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        errors: {},
        loading: true
      };
    case LOAD_ALL_POSTS + FAILURE:
      return {
        ...state,
        errors: action.payload.errors
      };
    default:
      return state;
  }
}