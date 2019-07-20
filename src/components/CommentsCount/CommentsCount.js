import React, { Component } from "react";
import { connect } from "react-redux";
import { commentsCountGetterSelector } from "../../selectors";

class CommentsCount extends Component {
  render() {
  const {countComments} = this.props;
    return (
      <div className="d-flex justify-content-start mt-5">
        <h2 className="ml-3 mr-3">{countComments}</h2>  <h3> Comments</h3>
        <svg className="ml-auto mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>
      </div>
    );
  }
}

export default connect(state => ({
  countComments: commentsCountGetterSelector(state)
}),null)(CommentsCount);