import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { styles } from "components/Articles/ArticlesTable/styles";
import { connect } from "react-redux";
import { articlesCountGetterSelector } from "selectors";

export default compose(
  withStyles(styles),
  connect(state => ({
    countArticles: articlesCountGetterSelector(state)
  }), null)
);