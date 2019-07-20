import { FAILURE, LOAD_ALL_ARTICLES, START, SUCCESS } from "../constants";
import { OrderedMap, Record } from "immutable";
import { arrToMap } from "../helpers";

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
  const { type, response, error } = action;

  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return articleState.set("loading", true);

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articleState
        .update('entities', entities => entities.merge(arrToMap(response, ArticleRecord)))
        .set("loading", true)
        .set("loaded", true);

    case LOAD_ALL_ARTICLES + FAILURE:
      return articleState
        .set("error", error)
        .set("loading", false)
        .set("loaded", false);
  }
  return articleState;
}