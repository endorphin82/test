import React from "react";
import Modal from "@material-ui/core/Modal";
import witchHocs from "./ModalCommentsHocs";
import { history } from "history.js";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

const ModalComments = ({ classes, comments, id, name, onDeleteCommentByIndexByArticleId }) => {
  const [modalStyle] = React.useState({
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  });
  const [open, setOpen] = React.useState(true, () => true);

  const handleClose = () => {
    setOpen(false);
    history.goBack();
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
          <h2 id="simple-modal-title">Comments for Article "{name}"</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.cellMinWidth}>Comment</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map((comment, ind) => {
                return (
                  <TableRow key={ind}>
                    <TableCell component="th" scope="row">{comment.text}</TableCell>
                    <TableCell>
                      <Tooltip title="Delete">
                        <IconButton onClick={onDeleteCommentByIndexByArticleId.bind(null, ind)} color="secondary"
                                    aria-label="Delete">
                          <SvgIcon style={{ color: "white" }}>
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                              d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                          </SvgIcon>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Modal>
    </>
  );
};

export default witchHocs(ModalComments);