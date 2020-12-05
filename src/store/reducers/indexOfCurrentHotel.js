import actions from "../actions";

export default function indexOfCurrentHotel(state = 0, action) {
   // action.payload, action.type
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_HOTEL:
         return state + 1;
      default:
         return state;
   }
}
