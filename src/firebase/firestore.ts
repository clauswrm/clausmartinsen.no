import firebase from "firebase/app";
import "firebase/firestore";

export interface UserData {
  uid: string;
  trainingPlan: string[];
}

export const getUserData = async (user: firebase.User) => {
  const result = await firebase.firestore().collection("users").doc(user.uid).get();
  if (result && result.exists) {
    return result.data() as UserData;
  } else {
    return null;
  }
};

export const addNewUser = async (user: firebase.User) => {
  if ((await getUserData(user)) === null) {
    return firebase.firestore().collection("users").doc(user.uid).set({ uid: user.uid });
  }
};
