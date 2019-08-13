import {LOAD_ARTICLE_COMMENTS, SUCCESS } from "constants.js";
import { OrderedMap, Record } from "immutable";
import { arrToMap } from "helpers.js";

const CommentRecord = Record({
  date: null,
  text: null
});

const ReducerState = Record({
  entities: new OrderedMap({}),
  // pagination: new Map({}),
  total: null
});

const defaultState = new ReducerState();

export default (commentState = defaultState, action) => {
  const { response, type, payload } = action;

  switch (type) {

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentState.update("entities", entities => entities.merge(arrToMap(response, CommentRecord)));

      return commentState;
  }
}