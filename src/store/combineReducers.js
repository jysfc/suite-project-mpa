import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queue from "./reducers/queue";
import editableSuite from "./reducers/editableSuite";
import editableProperty from "./reducers/editableProperty";

export default combineReducers({
   currentUser,
   queue,
   editableSuite,
   editableProperty,
});
