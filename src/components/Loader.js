import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import withHocs from "./LoaderHocs"

const Loader = ({classes} ) => {
  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
};

export default withHocs(Loader);