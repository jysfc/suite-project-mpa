import actions from "../actions";

export default function allSuites(allSuites = {}, action) {
   let newSelection = { ...allSuites };
   switch (action.type) {
      case actions.STORE_ALL_SUITES:
         newSelection = action.payload;
         return newSelection;

      default:
         return allSuites;
   }
}
