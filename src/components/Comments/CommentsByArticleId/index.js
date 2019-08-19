import React from "react";
import ModalComments from "components/ModalComments";
import withHocs from "./CommentsByArticleIdHocs";

function CommentsByArticleId(props) {
  const { id, comments, name } = props;
  return (
    <>
      <ModalComments comments={comments} id={id} name={name}/>
    </>
  );
}

CommentsByArticleId.defaultProps = {
  comments: [],
  name: '',
  id: null
};

export default withHocs(CommentsByArticleId);