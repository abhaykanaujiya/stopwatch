const INITIAL_STATE = {
  minutes: 0,
  seconds: 0,
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
    // case "START":
    //   return {
    //     ...state,
    //     minutes: "",
    //     seconds: action.payload,
    //   };
    case "UPDATE_SEC":
      return {
        ...state,
        seconds: action.payload,
      };
    default:
      return state;
  }
};
export default TimerReducer;
