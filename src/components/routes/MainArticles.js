import React from "react";
import ArticleList from "components/ArticleList/ArticleList";
import { Col, Container, Row } from "reactstrap";
import ArticlesCount from "components/Articles/ArticlesCommentsCounts/ArticlesCount/ArticlesCount";
import CommentsCount from "components/Articles/ArticlesCommentsCounts/CommentsCount/CommentsCount";

function MainArticles() {
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

export default MainArticles;