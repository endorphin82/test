import React from "react";
import ArticlesTable from "components/Articles//ArticlesTable";
import ArticlesCommentsCounts from "components/Articles/ArticlesCommentsCounts/ArticlesCommentsCounts";
import { Route } from "react-router-dom";
import CommentsByArticleId from "components/Comments/CommentsByArticleId";

const getCommentsByArticleId = ({ match }) => {
  const { id } = match.params;
  return <CommentsByArticleId id={id} />;
};

function Articles() {
  return (
    <>
      <ArticlesTable/>
      <Route path="/articles/:id" render={getCommentsByArticleId}/>
      <ArticlesCommentsCounts/>
    </>
  );
}

export default Articles;