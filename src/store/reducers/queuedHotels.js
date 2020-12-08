import actions from "../actions";

export default function queuedHotels(queue = {}, action) {
   let newQueue = { ...queue };
   switch (action.type) {
      case actions.STORE_QUEUED_HOTELS:
         newQueue.cards = action.payload;
         return newQueue;
      case actions.UPDATE_INDEX_OF_CURRENT_HOTEL:
         newQueue.index += 1;
         return newQueue;
      default:
         return state;
   }
}
