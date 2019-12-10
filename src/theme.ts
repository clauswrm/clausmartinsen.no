import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0978A6"
    },
    secondary: {
      main: "#FB9447"
    },
    background: {
      default: "#EFEEEB"
    },
    text: {
      primary: "#1F1E1A",
      secondary: "#666561",
      disabled: "807F7B"
    }
  }
});

export default responsiveFontSizes(theme);
