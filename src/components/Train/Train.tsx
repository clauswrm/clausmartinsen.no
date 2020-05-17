import React from "react";
import { useFirebaseAuth, useUserData } from "../../firebase";
import Page from "../Page/Page";
import "./Train.scss";

function Train() {
  const { authUser, signIn, signOut } = useFirebaseAuth();
  const { userData, loading, error } = useUserData();

  return (
    <Page>
      {`Hi, ${authUser ? authUser.displayName : "unknown"}!`}
      <button onClick={signIn}>Log in</button>
      <button onClick={signOut}>Log out</button>
      {userData && userData.trainingPlan ? (
        <div className="calendar">
          {Object.entries(userData.trainingPlan).map(([weekday, text]) => (
            <div key={weekday}>
              <div>{weekday}</div>
              <div>{text}</div>
            </div>
          ))}
        </div>
      ) : null}
      {loading ? "Loading..." : "Done"}
      {error ? error.message : undefined}
    </Page>
  );
}

export default Train;
