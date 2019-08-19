export const styles = theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 4)
  },
  cellMinWidth: {
    minWidth: 120
  }
});