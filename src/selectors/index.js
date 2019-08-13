import { createSelector } from "reselect";
import { mapToArr } from "helpers.js";

const articlesGetter = state => state.articles.entities;

export const articlesSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles);
});

export const commentsCountGetterSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles).reduce((acc, article) => acc + article.comments.length, 0);
});

export const articlesCountGetterSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles).length;
});