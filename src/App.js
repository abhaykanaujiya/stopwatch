import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleMin, handleSec } from "./action/TimerAction";
import "./App.css";
const App = (props) => {
  const [isRun, setIsRun] = useState(false);
  const [isStop, setIsStop] = useState(false);

  const handleStart = () => {
    setIsRun(true)

  };
  const handleStop = () => {
    clearInterval();
  };

  const handleResume = () => {
    setIsRun(false)
  }

  useEffect(() => {
    const time = setInterval(() => {
      if (!isRun) {
        props.handleSec(props.seconds + 1)
            if (props.seconds === 59) {
              props.handleMin(props.minutes + 1);
              props.handleSec(0);
            }
    }
      //props.handleSec(props.seconds + 1);
  
    }, 1000)
    return () => clearInterval(time)
    
  }, [props.seconds,isRun]) 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer</h1>
      </header>
      <div className="timer">
        <p>
          {props.minutes}:{props.seconds}
        </p>
      </div>
      <div className="buttons">
        <button onClick={!isRun ? () => handleStart() : () => handleResume()}>
          {!isRun?"Start":"Resume"}</button>
        <button onClick={handleStop}>Stop</button>
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
export default connect(mapStateToProps, { handleMin, handleSec })(App);
