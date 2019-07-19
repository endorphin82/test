import React, { Component } from "react";
import { Button } from "reactstrap";
import "./App.css";
import { connect } from "react-redux";
import { loadAllPosts } from "./AC";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button onClick={this.handleClick} color="primary">Click</Button>
        </header>
      </div>
    );
  }

  handleClick = e => {
    e.preventDefault();
    console.log("click", e);
    this.props.loadAllPosts();
  };
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { loadAllPosts })(App);
