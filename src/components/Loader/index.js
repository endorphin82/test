import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import withHocs from "./LoaderHocs"

const Loader = ({classes} ) => {
  return (
    <>
      <CircularProgress className={classes.progress} />
    </>
  );
};

export default withHocs(Loader);