export const createUav = uav => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: "CREATE_UAV", uav });
  };
};
