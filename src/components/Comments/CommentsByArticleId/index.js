import React, { Component } from "react";
import ModalComments from "components/ModalComments";
import withHocs from "./CommentsByArticleIdHocs";
import { history } from "history.js";


class CommentsByArticleId extends Component {
  render() {
    const { id, comments } = this.props;
    return (
      <>
        <ModalComments comments={comments} id={id}/>
      </>
    );
  }
}

export default withHocs(CommentsByArticleId);