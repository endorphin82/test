import React from "react";
import Modal from "@material-ui/core/Modal";
import witchHocs from "./ModalCommentsHocs";
import { history } from "history.js";

const ModalComments = ({ classes, comments, id }) => {
  const [modalStyle] = React.useState({
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  });
  const [open, setOpen] = React.useState(true, () => true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Post {id}</h2>
          <p id="simple-modal-description">

            {comments.map(comment => comment.text)}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default witchHocs(ModalComments);