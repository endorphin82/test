import React from "react";
import { connect } from "react-redux";
import { articlesCountGetterSelector } from "selectors";
import { Card } from "reactstrap";

function ArticlesCount(props) {
  const { countArticles } = props;
  return (
    <Card className="d-flex p-3 justify-content-start mt-5 flex-row">
      <h2 className="ml-3 mr-3">{countArticles}</h2> <h3 className="mt-1"> Articles</h3>
      <svg className="ml-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </Card>
  );
}

export default connect(state => ({
  countArticles: articlesCountGetterSelector(state)
}), null)(ArticlesCount);