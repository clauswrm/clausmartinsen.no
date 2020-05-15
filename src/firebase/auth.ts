import { useState, useEffect, useCallback } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { addNewUser } from "./firestore";

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(firebase.auth().currentUser);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => setAuthUser(user));
    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = useCallback(async () => {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const authProvider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then((result) => {
        if (result.user) {
          addNewUser(result.user).catch((error) => {
            console.log("Signin failed: ", error);
          });
        }
      })
      .catch((error) => {
        console.log("Signin failed: ", error);
      });
  }, []);

  const signOut = useCallback(
    () =>
      firebase
        .auth()
        .signOut()
        .catch((error) => console.log("Signout failed:", error)),
    []
  );

  return { authUser, signIn, signOut };
};
