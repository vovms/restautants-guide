import { combineReducers, createStore } from "redux";
import alarmReducer from "./alarmReducer";
import commentsReduser from "./commentsReducer";
import restaurantsReducer from "./restaurantsReducer";

let redusers = combineReducers({
  RestArr: restaurantsReducer,
  CommentObj: commentsReduser,
  AlarmObj: alarmReducer
});

let store = createStore(redusers);

export default store;
