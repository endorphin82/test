import React from "react";
import widthHocs from "./CommentsCountHocs";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Loader from "components/Loader";

function CommentsCount({ countComments, classes, loaded }) {
  return (
    <>
      <Typography style={{padding: "10px"}} variant="h4" component="h3">
        {!loaded ? <Loader/> : countComments}
      </Typography>
      <Typography  style={{padding: "10px"}} variant="h4" component="h3">
        Comments
      </Typography>
      <IconButton  style={{ paddingRight: "15px" }} className={classes.flexible_right} aria-label="View">
        <SvgIcon>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path
            d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
        </SvgIcon>
      </IconButton>
    </>
  );
}

export default widthHocs(CommentsCount);