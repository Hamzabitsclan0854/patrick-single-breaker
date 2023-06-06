import { combineReducers } from "redux";
import HurrayReducer from "./HurrayReducer";
import ResultReducer from "./ResultReducer";
import UserReducer from "./UserReduser";
import BreakerReducer from "./BreakerReducer";

export const rootReducer = combineReducers({
  UserReducer: UserReducer,
  ResultReducer: ResultReducer,
  HurrayReducer: HurrayReducer,
  BreakerReducer: BreakerReducer,
});
