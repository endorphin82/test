import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { styles } from "./styles";

export default compose(
  withStyles(styles),
  connect((state, { id }) => {
    return {
        comments: state.articles.entities.get(id).comments,
      };
    }
  )
);