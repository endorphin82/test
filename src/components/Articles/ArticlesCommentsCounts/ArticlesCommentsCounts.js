import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import withHocs from "./ArticlesCommentsCountsHocs";
import ArticlesCount from "./ArticlesCount/ArticlesCount";
import CommentsCount from "./CommentsCount/CommentsCount";
import Paper from "@material-ui/core/Paper";

const ArticlesCommentsCounts = ({ classes }) => {
  return (
    <>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.flexible}>
              <ArticlesCount/>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.flexible}>
              <CommentsCount/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withHocs(ArticlesCommentsCounts);