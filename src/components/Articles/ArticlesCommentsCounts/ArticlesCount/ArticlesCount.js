import React from "react";
import withHocs from "./ArticlesCountHocs.js"
import Paper from "@material-ui/core/Paper";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";

function ArticlesCount( { countArticles, classes } ) {
  return (
    <>
      <Paper className={classes.flexible}>
        <h2 className="ml-3 mr-3">{countArticles}</h2> <h3 className="mt-1"> Articles</h3>
        <IconButton className={classes.flexible_right} aria-label="View">
        <SvgIcon >
          <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
        </IconButton>
      </Paper>
      </>
  );
}

export default withHocs(ArticlesCount);