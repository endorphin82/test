import React, { Component } from "react";
import { loadAllArticles } from "../AC";
import { connect } from "react-redux";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

class ArticleList extends Component {

  componentDidMount() {
    const { loading, loadAllArticles } = this.props;
    if(!loading) loadAllArticles();
  }

  render() {
    const { articles, loading } = this.props;
    if (!loading) return <Loader/>;
    console.log(articles);
    // const articleElements = articles.map((article) => <li key={article.id}>
    //   <NavLink
    //     to={`/articles/${article.id}`}
    //     activeStyle={{ color: "tomato" }}>
    //     {article.name}
    //   </NavLink>
    // </li>);

    return (
      <ul>
        {/*{articleElements}*/}
      </ul>
    );
  }
}

export default connect((state) => {
  return {
    articles: state.posts,
    loading: state.articles.loading,
  };
}, { loadAllArticles })(ArticleList);