import uavReducer from "./uavReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  uav: uavReducer,
  firestore: firestoreReducer
});

export default rootReducer;
