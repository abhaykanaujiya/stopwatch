import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  handleMin,
  handleSec,
  handleResetTimer,
  handleHours,
} from "./action/TimerAction";
import "./App.css";
const App = (props) => {
  const [isRun, setIsRun] = useState(false);

  const handleStart = () => {
    setIsRun(true);
  };
  const handleReset = () => {
    props.handleResetTimer();
    setIsRun(false);
  };

  const handleStop = () => {
    setIsRun(false);
  };

  useEffect(() => {
    let time;
    if (isRun) {
      time = setInterval(() => {
        props.handleSec(props.seconds + 1);
        if (props.seconds === 59) {
          props.handleMin(props.minutes + 1);
          props.handleSec(0);
          if (props.minutes === 59) {
            props.handleHours(props.hours + 1);
            props.handleMin(0);
          }
        }
      }, 1000);
    }
    return () => clearInterval(time);
  }, [props.seconds, isRun]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer</h1>
      </header>
      <div className="timer">
        <div className="time-units">
          <div>Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
        </div>
        <div className=" timer-values">
          <div>{props.hours}</div>
          <div> : </div>
          <div>{props.minutes}</div>
          <div>: </div>
          <div>{props.seconds}</div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={!isRun ? () => handleStart() : () => handleStop()}>
          {!isRun ? "Start" : "Pause"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ TimerReducer }) => {
  const { minutes, seconds, hours } = TimerReducer;
  return {
    minutes,
    seconds,
    hours,
  };
};
export default connect(mapStateToProps, {
  handleMin,
  handleSec,
  handleResetTimer,
  handleHours,
})(App);
