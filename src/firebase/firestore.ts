import firebase, { FirebaseError } from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirebaseAuth } from "./auth";
import { TrainingPlan, UserData } from "./types";

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData>();
  const { authUser, loading: authLoading, error: authError } = useFirebaseAuth();
  const [loading, setLoading] = useState(authLoading);
  const [error, setError] = useState(authError);

  useEffect(() => {
    setLoading(true);
    if (authUser) {
      const unsubscribe = firebase
        .firestore()
        .collection("users")
        .doc(authUser?.uid)
        .onSnapshot(
          (snapshot) => {
            setLoading(false);
            if (snapshot && snapshot.exists) {
              setUserData(snapshot.data() as UserData);
            } else {
              setUserData(undefined);
            }
          },
          (error) => setError(error as FirebaseError)
        );

      return () => unsubscribe();
    } else {
      setUserData(undefined);
      setLoading(false);
      return;
    }
  }, [authUser]);

  return { userData, loading: loading || authLoading, error };
};

export const addNewUserIfNotExists = async (user: firebase.User) => {
  const userData = await firebase.firestore().collection("users").doc(user.uid).get();
  if (!userData.exists) {
    return firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({ uid: user.uid, firstLogin: firebase.firestore.FieldValue.serverTimestamp() });
  }
};

export const updateTrainingPlan = async (user: firebase.User, trainingPlan: TrainingPlan) => {
  return firebase.firestore().collection("users").doc(user.uid).update({ trainingPlan: trainingPlan });
};
