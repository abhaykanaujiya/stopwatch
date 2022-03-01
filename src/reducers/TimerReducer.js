const INITIAL_STATE = {
  minutes: 0,
  seconds: 0,
  hours: 0,
};
const TimerReducer = (state = INITIAL_STATE, action) => {
  console.log(action, "actions");
  switch (action.type) {
    case "SECOND":
      return {
        ...state,
        seconds: action.payload,
      };
    case "MINUTES":
      return {
        ...state,
        minutes: action.payload,
      };
    case "HOURS":
      return {
        ...state,
        hours: action.payload,
      };
    case "RESET":
      return {
        ...state,
        minutes: 0,
        seconds: 0,
        hours: 0,
      };

    default:
      return state;
  }
};
export default TimerReducer;
