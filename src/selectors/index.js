import { createSelector } from "reselect";
import { mapToArr } from "../helpers";

const articlesGetter = state => state.articles.entities;

export const ArticleSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles);
});