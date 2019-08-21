import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { styles } from "./styles";
import { connect } from "react-redux";
import { commentsCountGetterSelector } from "selectors";

export default compose(
  withStyles(styles),
  connect(state => ({
    countComments: commentsCountGetterSelector(state),
    loaded: state.articles.loaded
  }), null)
);