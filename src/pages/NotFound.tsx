import { Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import Page from "../components/Page";

function NotFound() {
  const location = useLocation();

  return (
    <Page>
      <Typography>
        No match for <code>{location.pathname}</code> (404).
      </Typography>
    </Page>
  );
}

export default NotFound;
