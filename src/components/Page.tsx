import { makeStyles } from "@material-ui/core";
import React from "react";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    backgroundImage: `linear-gradient(135deg, transparent 70%, ${theme.palette.primary.main} 70%,
                      ${theme.palette.primary.main} 80%, ${theme.palette.secondary.main} 80%,
                      ${theme.palette.secondary.main} 85%, transparent 85%)`,
    display: "flex",
    flexDirection: "column"
  }
}));

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

function Page(props: PageProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader />
      <main className={props.className}>{props.children}</main>
      <PageFooter />
    </div>
  );
}

export default Page;
