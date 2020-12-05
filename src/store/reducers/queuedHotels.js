import actions from "../actions";

export default function queuedHotels(state = [], action) {
   switch (action.type) {
      case actions.STORE_QUEUED_HOTELS:
         return action.payload;
      default:
         return state;
   }
}
