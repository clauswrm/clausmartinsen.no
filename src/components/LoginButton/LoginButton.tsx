import React from "react";
import { useFirebaseAuth } from "../../firebase";
import Spinner from "../Spinner/Spinner";

function LoginButton() {
  const { authUser, signIn, signOut, loading } = useFirebaseAuth();

  const handleClick = () => {
    if (authUser) {
      signOut();
    } else {
      signIn();
    }
  };

  return <button onClick={handleClick}>{loading ? <Spinner /> : authUser ? "Log ut" : "Log in"}</button>;
}

export default LoginButton;
