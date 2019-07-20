import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";

import { loadAllArticles } from "../../AC";
import { history } from "../../history";

import "./App.css";
import ArticleList from "../ArticleList/ArticleList";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <ArticleList/>
      </ConnectedRouter>
    );
  }

  handleClick = e => {
    e.preventDefault();
    console.log("click", e);
    this.props.loadAllArticles();
  };
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { loadAllArticles })(App);
