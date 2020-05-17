import firebase from "firebase/app";
import "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { addNewUserIfNotExists } from "./firestore";

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(firebase.auth().currentUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<firebase.FirebaseError>();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setAuthUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = useCallback(async () => {
    setLoading(true);
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const authProvider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then((result) => {
        if (result.user) {
          addNewUserIfNotExists(result.user).catch((error) => {
            setError(error);
          });
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const signOut = useCallback(() => {
    setLoading(true);
    firebase
      .auth()
      .signOut()
      .catch((error) => console.log("Signout failed:", error));
  }, []);

  return { authUser, loading, error, signIn, signOut };
};
