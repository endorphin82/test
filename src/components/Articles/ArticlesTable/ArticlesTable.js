import React, { useEffect } from "react";
import withHocs from "./ArticlesTableHocs";
import Loader from "components/Loader";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { TableBody } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

function ArticlesTable({ articles, loading, classes, loadAllArticles }) {
  useEffect(() => {
    if (!loading) loadAllArticles();
  });
  if (!loading) return <Loader/>;
  return (
    <>
      <CssBaseline/>
      <Container fixed>
        <Typography className={classes.header2} variant="h4" component="h3">
          Articles Table
        </Typography>
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.cellMinWidth}>Article title</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map(article => {
                return (
                  <TableRow key={article.postId}>
                    <TableCell component="th" scope="row">{article.name}</TableCell>
                    <TableCell>{article.text}</TableCell>
                    <TableCell align="center">{article.comments.length}</TableCell>
                    <TableCell align="right">
                      <div className={classes.flexible}>
                        {/*TODO: refactor button link and no down Accessibility */}
                        <Tooltip title="View">
                          <IconButton
                            aria-label="View">
                            <NavLink
                              aria-label="View comments"
                              to={`/articles/${article.postId}`}
                              style={{ color: "white" }}
                              activeStyle={{ color: "gold" }}>
                              <SvgIcon>
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path
                                  d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                              </SvgIcon>
                            </NavLink>
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton color="secondary" aria-label="Delete">
                            <SvgIcon style={{ color: "white" }}>
                              <path d="M0 0h24v24H0z" fill="none"/>
                              <path
                                d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            </SvgIcon>
                          </IconButton>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </>
  );
}

export default withHocs(ArticlesTable);