const initState = {
  uavs: [
    { id: "1", Model: "uav 1", type: "quadcopter" },
    { id: "2", Model: "uav 2", type: "dualcopter" },
    { id: "3", Model: "uav 3", type: "hydrocopter" }
  ]
};

const uavReducer = (state = initState, action) => {
  return state;
};

export default uavReducer;
