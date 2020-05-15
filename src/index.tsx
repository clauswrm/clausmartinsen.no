import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "production") {
  // Check that service workers are supported
  if ("serviceWorker" in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener("load", () => {
      const sw = "sw.js";
      navigator.serviceWorker.register(sw);
    });
  }
}
