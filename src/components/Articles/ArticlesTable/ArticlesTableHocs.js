import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { styles } from "./styles";
import { connect } from "react-redux";
import { articlesSelector } from "selectors";
import { loadAllArticles } from "AC";

export default compose(
  withStyles(styles, { withTheme: true }),
  connect((state) => {
    return {
      articles: articlesSelector(state),
      loading: state.articles.loading
    };
  }, { loadAllArticles })
);