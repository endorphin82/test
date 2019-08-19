import { createSelector } from "reselect";
import { mapToArr } from "helpers.js";

const articlesGetter = state => state.articles.entities;
const idGetter = (state, props) => props.id;

export const articlesSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles);
});

export const nameGetterByArticleIdSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
  return articles.get(id).name
});

export const commentsCountGetterSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles).reduce((acc, article) => acc + article.comments.length, 0);
});

export const articlesCountGetterSelector = createSelector(articlesGetter, articles => {
  return mapToArr(articles).length;
});

export const commentsGetterByIdSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
  return articles.get(id).comments
});

