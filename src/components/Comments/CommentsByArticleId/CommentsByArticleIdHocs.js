import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { styles } from "./styles";
import { commentsGetterByIdSelectorFactory, nameGetterByArticleIdSelectorFactory } from "selectors";

export default compose(
  withStyles(styles),
  connect((state, ownProps) => {
      const commentSelector = commentsGetterByIdSelectorFactory();
      const nameSelector = nameGetterByArticleIdSelectorFactory();
      return {
        name: nameSelector(state, ownProps),
        comments: commentSelector(state, ownProps)
      };
    }
  )
);