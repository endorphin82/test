import {
  DELETE_ARTICLE_BY_ID,
  DELETE_COMMENT_BY_IND_BY_ARTICLE_ID,
  FAILURE,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS
} from "constants.js";
import { OrderedMap, Record } from "immutable";
import { arrToMap } from "helpers.js";
import comments from "./comments";

const ArticleRecord = Record({
  postId: undefined,
  name: "",
  text: undefined,
  loading: false,
  comments: []
});

const ReducerState = new Record({
  loading: false,
  loaded: false,
  error: undefined,
  entities: new OrderedMap({})
});
const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
  const { type, response, error, payload } = action;

  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return articleState.set("loading", true);

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .update("entities", entities => entities.merge(arrToMap(response, ArticleRecord)))
        .set("loading", true)
        .set("loaded", true);

    case LOAD_ALL_ARTICLES + FAILURE:
      return articleState
        .set("error", error)
        .set("loading", false)
        .set("loaded", false);

    case DELETE_ARTICLE_BY_ID:
      return articleState
        .update("entities", entities => entities.filter(post => post.postId !== payload.id));

    case DELETE_COMMENT_BY_IND_BY_ARTICLE_ID:
      const { articleId, ind } = payload;
      return articleState
        .removeIn(["entities", articleId, "comments", ind]);


    default:
      return articleState;
  }
}