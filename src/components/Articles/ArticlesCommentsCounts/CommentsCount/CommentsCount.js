import React from "react";
import widthHocs from "./CommentsCountHocs"
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

function CommentsCount( { countComments, classes } ) {
  return (
    <Paper className={classes.flexible}>
      <h2 className="ml-3 mr-3">{countComments}</h2> <h3 className="mt-1"> Comments</h3>
      <IconButton className={classes.flexible_right} aria-label="View">
        <SvgIcon >
          <path d="M0 0h24v24H0z" fill="none"/>
          <path
            d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
        </SvgIcon>
      </IconButton>
    </Paper>
  );
}

export default widthHocs(CommentsCount);