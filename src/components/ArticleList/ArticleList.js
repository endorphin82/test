import React, { Component } from "react";
import { loadAllArticles } from "../../AC";
import { connect } from "react-redux";
import Loader from "../Loader";
import { NavLink } from "react-router-dom";
import { ArticleSelector } from "../../selectors";
import { Button, Table } from "reactstrap";

class ArticleList extends Component {

  componentDidMount() {
    const { loading, loadAllArticles } = this.props;
    if (!loading) loadAllArticles();
  }

  render() {
    const { articles, loading } = this.props;
    if (!loading) return <Loader/>;
    console.log(articles);
    const articleElements = articles.map((article) => <tr key={article.postId}>
        <td>
          <NavLink
            to={`/articles/${article.postId}`}
            activeStyle={{ color: "tomato" }}>
            {article.name}
          </NavLink>
        </td>
        <td>{article.text}</td>
        <td>{article.comments.length}</td>
        <td>
          <div className="d-flex">
            <Button color="light">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                  d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
              </svg>
            </Button>
            <Button color="danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path
                  d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </Button>
          </div>
        </td>
      </tr>
    );

    return (
      <>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Article Title</th>
            <th>Content</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {articleElements}
          </tbody>
        </Table>
      </>

    );
  }
}

export default connect((state) => {
  return {
    articles: ArticleSelector(state),
    loading: state.articles.loading
  };
}, { loadAllArticles })(ArticleList);