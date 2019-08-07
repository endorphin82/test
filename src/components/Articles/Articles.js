import React from "react";
import ArticlesTable from "components/Articles//ArticlesTable/ArticlesTable";
import ArticlesCommentsCounts from "components/Articles/ArticlesCommentsCounts/ArticlesCommentsCounts";

function Articles() {
  return (
    <>
      <ArticlesTable/>
      <ArticlesCommentsCounts/>
    </>
  );
}

export default Articles;