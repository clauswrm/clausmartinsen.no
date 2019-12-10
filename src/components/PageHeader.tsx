import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../img/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(4)
  },
  name: {
    placeSelf: "flex-end",
    marginBottom: "6px"
  }
}));

function PageHeader() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Grid container direction="row">
        <img src={logo} style={{ width: "100px" }} />
        <Typography variant="h1" component="div" className={classes.name}>
          cm
        </Typography>
      </Grid>
    </header>
  );
}

export default PageHeader;
