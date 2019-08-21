import React from "react";
import withHocs from "./ArticlesCountHocs.js";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Loader from "components/Loader";

function ArticlesCount({ countArticles, classes, loaded }) {
  return (
    <>
      <Typography style={{ padding: "10px" }} variant="h4" component="h3">
        {!loaded ? <Loader/> : countArticles}
      </Typography>
      <Typography style={{ padding: "10px" }} variant="h4" component="h3">
        Articles
      </Typography>
      <IconButton style={{ paddingRight: "15px" }} className={classes.flexible_right} aria-label="View">
        <SvgIcon>
          <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
      </IconButton>
    </>
  );
}

export default withHocs(ArticlesCount);