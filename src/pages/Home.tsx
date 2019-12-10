import React from "react";
import Page from "../components/Page";
import { Typography, Grid, Box } from "@material-ui/core";

function Home() {
  return (
    <Page>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box py={5}>
            <Typography variant="h1" component="h1">
              Claus Martinsen
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box py={5}>
            <Typography variant="h2" component="h2">
              Work in progress...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;
