import React, { Component } from "react";
import ArticleList from "../ArticleList/ArticleList";
import {Row, Col, Container} from "reactstrap";
import ArticlesCount from "../ArticlesCount/ArticlesCount";
import CommentsCount from "../CommentsCount/CommentsCount";


class MainArticles extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
          <h2>Articles</h2>
            <ArticleList/>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col><ArticlesCount/></Col>
          <Col><CommentsCount/></Col>
        </Row>
      </Container>
    );
  }
}

export default MainArticles;