import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import withHocs from "./ArticlesCommentsCountsHocs"
import ArticlesCount from "./ArticlesCount/ArticlesCount";
import CommentsCount from "./CommentsCount/CommentsCount";

const ArticlesCommentsCounts = ({ classes } ) => {
  return (
    <>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ArticlesCount/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <CommentsCount/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withHocs(ArticlesCommentsCounts);