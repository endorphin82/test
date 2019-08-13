import React, { Component } from "react";
import withHocs from "./CommentsByArticleIdHocs";

class CommentsByArticleId extends Component {
  render() {
    const { id, comments, classes } = this.props;
    console.log(comments);
    return (
      <>
        {`ID ${id}`}
        {comments.map(comment => comment.text)}
      </>
    );
  }
}

export default withHocs(CommentsByArticleId);