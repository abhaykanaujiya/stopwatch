export const start = (seconds, minutes) => {
  return (dispatch) => {
    dispatch({ type: "START", payload: "" });
  };
};
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
export const handleUpdateSec = (update) => {
  console.log(update, "updatesec");
  return (dispatch) => {
    dispatch({ type: "UPDATE_SEC", payload: update });
  };
};
