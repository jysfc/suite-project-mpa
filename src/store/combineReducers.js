import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queuedHotels from "./reducers/queuedHotels";
import indexOfCurrentHotel from "./reducers/indexOfCurrentHotel";

export default combineReducers({
   currentUser,
   queuedHotels,
   indexOfCurrentHotel,
});
