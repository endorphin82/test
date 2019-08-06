import React from "react";
import { ConnectedRouter } from "connected-react-router";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "components/theme.js";
import { history } from "history.js";
import Articles from "../Articles/Articles";

function App() {
  return (
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Articles/>
      </MuiThemeProvider>
    </ConnectedRouter>
  );
}


export default App;
