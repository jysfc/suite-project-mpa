import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queue from "./reducers/queue";
import allSuites from "./reducers/allSuites";
import editableSuite from "./reducers/editableSuite";
import editableProperty from "./reducers/editableProperty";

export default combineReducers({
   currentUser,
   queue,
   allSuites,
   editableSuite,
   editableProperty,
});
