export const handleMin = (min) => {
  return (dispatch) => {
    dispatch({ type: "MINUTES", payload: min });
  };
};

export const handleSec = (sec) => {
  console.log(sec, "sec");
  return (dispatch) => {
    dispatch({ type: "SECOND", payload: sec });
  };
};

export const handleResetTimer = () => {
  return (dispatch) => {
    dispatch({ type: "RESET" });
  };
};
export const handleHours = (hours) => {
  return (dispatch) => {
    dispatch({ type: "HOURS", payload: hours });
  };
};
