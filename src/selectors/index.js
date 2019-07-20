import { createSelector } from "reselect";
import { mapToArr } from "../helpers";

const articlesGetter = state => state.articles.entities;
// export const commentsCountGetter = state => state.articles.entities.reduce((acc, article) => acc.comments + article.comments.length);

export const ArticleSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles);
});

export const commentsCountGetterSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles).reduce((acc, article) => acc + article.comments.length, 0);
});

export const articlesCountGetterSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles).length;
});