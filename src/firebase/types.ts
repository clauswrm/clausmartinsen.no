export const Weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
export type Weekday = typeof Weekdays[number];

export type TrainingPlan = Record<Weekday, string>;

export interface UserData {
  uid: string;
  firstLogin: firebase.firestore.Timestamp;
  trainingPlan?: TrainingPlan;
}
