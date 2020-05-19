import React from "react";
import { useFirebaseAuth } from "../../firebase";
import Spinner from "../Spinner/Spinner";
import "./LoginButton.scss";

function LoginButton() {
  const { authUser, signIn, signOut, loading } = useFirebaseAuth();

  const handleClick = () => {
    if (authUser) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <button className="login" onClick={handleClick}>
      {loading ? <Spinner /> : authUser ? "Log ut" : "Log in"}
    </button>
  );
}

export default LoginButton;
