import React, { useEffect, useState } from "react";
import { TrainingPlan, updateTrainingPlan, useFirebaseAuth, useUserData, Weekday } from "../../firebase";
import Calendar from "../Calendar/Calendar";
import LoginButton from "../LoginButton/LoginButton";
import Page from "../Page/Page";
import Spinner from "../Spinner/Spinner";
import "./Train.scss";

function Train() {
  const { authUser } = useFirebaseAuth();
  const { userData, loading, error } = useUserData();
  const [trainingData, setTrainingData] = useState<TrainingPlan>({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });
  const [saveState, setSaveState] = useState<"saved" | "unsaved">("saved");
  const [timeOutId, setTimeoutId] = useState<number>();

  useEffect(() => {
    if (userData?.trainingPlan) {
      setTrainingData(userData.trainingPlan);
    }
  }, [userData]);

  const handleEdit = (event: React.ChangeEvent<HTMLTextAreaElement>, weekday: Weekday) => {
    window.clearTimeout(timeOutId);
    const newTrainingData = { ...trainingData };
    newTrainingData[weekday] = event.target.value;
    setTrainingData(newTrainingData);
    setSaveState("unsaved");
    const newTimeOutId = window.setTimeout(() => savePlan(newTrainingData), 10000);
    setTimeoutId(newTimeOutId);
  };

  const savePlan = (newTrainingData: TrainingPlan) => {
    if (authUser) {
      updateTrainingPlan(authUser, newTrainingData).then(() => setSaveState("saved"));
      console.log("lagrer!");
    }
  };

  return (
    <Page headerMenu={<LoginButton />}>
      <h2 className="trainingGreeting">{`Hei, ${authUser ? authUser.displayName : "Gjest"}!`}</h2>
      <Calendar trainingData={trainingData} onEdit={handleEdit} />
      {loading && <Spinner />}
      {error && error.message}
      <div>{saveState}</div>
    </Page>
  );
}

export default Train;
