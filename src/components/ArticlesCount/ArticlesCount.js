import React, { Component } from "react";
import { connect } from "react-redux";
import { articlesCountGetterSelector } from "../../selectors";

class ArticlesCount extends Component {
  render() {
    const { countArticles } = this.props;
    return (
      <div className="d-flex justify-content-start mt-5">
        <h2 className="ml-3 mr-3">{countArticles}</h2> <h3> Articles</h3>
        <svg className="ml-auto mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </div>
    );
  }
}

export default connect(state => ({
  countArticles: articlesCountGetterSelector(state)

}), null)(ArticlesCount);