import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from 'components/theme.js'

import { loadAllArticles } from "AC";
import { history } from "history.js";

import "./App.css";
// import MainArticles from "components/routes/MainArticles";
import Articles from "../Articles/Articles";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <Articles/>
        </MuiThemeProvider>
        {/*<MainArticles/>*/}
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
