import React from "react";
import { getUserData, useFirebaseAuth } from "../../firebase";
import Page from "../Page/Page";
import "./Train.scss";

function Train() {
  const { authUser, signIn } = useFirebaseAuth();

  const handleClick = () => {
    signIn();
  };

  const handleTest = () => {
    if (authUser) {
      getUserData(authUser).then((data) => console.log(data));
    }
  };
  return (
    <Page>
      {`Hi, ${authUser ? authUser.displayName : "unknown"}!`}
      <button onClick={handleClick}>Auth</button>
      <button onClick={handleTest}>Test</button>
    </Page>
  );
}

export default Train;
