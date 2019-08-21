import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { styles } from "./styles";
import { connect } from "react-redux";
import { articlesCountGetterSelector } from "selectors";

export default compose(
  withStyles(styles),
  connect(state => ({
    countArticles: articlesCountGetterSelector(state),
    loaded: state.articles.loaded
  }), null)
);