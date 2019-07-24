import React from "react";
import { connect } from "react-redux";
import { commentsCountGetterSelector } from "selectors";
import { Card} from "reactstrap";

function CommentsCount(props) {
  const { countComments } = props;
  return (
    <Card className="d-flex p-3 justify-content-start mt-5 flex-row">
      <h2 className="ml-3 mr-3">{countComments}</h2>  <h3 className="mt-1"> Comments</h3>
      <svg className="ml-auto mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
          d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
      </svg>
    </Card>
  );
}

export default connect(state => ({
  countComments: commentsCountGetterSelector(state)
}), null)(CommentsCount);