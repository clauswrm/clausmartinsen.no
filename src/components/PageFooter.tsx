import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "auto", // to make footer go to bottom
    textAlign: "center"
  }
});

function PageFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography>2019</Typography>
    </footer>
  );
}

export default PageFooter;
