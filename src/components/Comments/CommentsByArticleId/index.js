import React from "react";
import ModalComments from "components/ModalComments";
import withHocs from "./CommentsByArticleIdHocs";

function CommentsByArticleId(props) {
  const { id, comments, name, deleteCommentByIndexByArticleId } = props;

  return (
    <>
      <ModalComments comments={comments} id={id} name={name}
                     onDeleteCommentByIndexByArticleId={deleteCommentByIndexByArticleId.bind(null, id)}/>
    </>
  );
}

CommentsByArticleId.defaultProps = {
  comments: [],
  name: "",
  id: null
};

export default withHocs(CommentsByArticleId);