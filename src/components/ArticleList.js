import React, { Component } from "react";
import { loadAllArticles } from "../AC";
import { connect } from "react-redux";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";
import { ArticleSelector } from "../selectors";

class ArticleList extends Component {

  componentDidMount() {
    const { loading, loadAllArticles } = this.props;
    if(!loading) loadAllArticles();
  }

  render() {
    const { articles, loading } = this.props;
    if (!loading) return <Loader/>;
    console.log(articles);
    const articleElements = articles.map((article) => <li key={article.postId}>
      <NavLink
        to={`/articles/${article.postId}`}
        activeStyle={{ color: "tomato" }}>
        {article.name}
      </NavLink>
    </li>);

    return (
      <ul>
        {articleElements}
      </ul>
    );
  }
}

export default connect((state) => {
  return {
    articles: ArticleSelector(state),
    loading: state.articles.loading,
  };
}, { loadAllArticles })(ArticleList);