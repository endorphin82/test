import React, { Component } from "react";
import ArticlesTable from "components/Articles//ArticlesTable/ArticlesTable";
import ArticlesCommentsCounts from "components/Articles/ArticlesCommentsCounts/ArticlesCommentsCounts";
import { Route } from "react-router-dom";
import CommentsByArticleId from "components/Comments/CommentsByArticleId";

class Articles extends Component {
  getCommentsByArticleId = ({ match }) => {
    const { id } = match.params;
    return <CommentsByArticleId id={id} />;
  };

  render() {
    return (
      <>
        <ArticlesTable/>
        <Route path="/articles/:id" render={this.getCommentsByArticleId}/>
        <ArticlesCommentsCounts/>
      </>
    );
  }
}

export default Articles;