import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ActiveUserReducer from "./ActiveUserReducer"

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;
