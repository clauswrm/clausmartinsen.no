import React from "react";
import { TrainingPlan, Weekday, Weekdays } from "../../firebase";
import "./Calendar.scss";

interface CalendarProps {
  trainingData?: TrainingPlan;
  onEdit: (event: React.ChangeEvent<HTMLTextAreaElement>, weekday: Weekday) => void;
}

function Calendar(props: CalendarProps) {
  return (
    <table className="calendar">
      <thead>
        <tr>
          {Weekdays.map((weekday, i) => (
            <th key={i}>{weekday}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Weekdays.map((weekday, i) => (
            <td key={i}>
              <textarea
                value={props.trainingData ? props.trainingData[weekday] : ""}
                onChange={(event) => props.onEdit(event, weekday)}
                placeholder={"Add your plan..."}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Calendar;
