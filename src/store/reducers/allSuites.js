import actions from "../actions";

export default function allSuites(allSuites = {}, action) {
   let newSuite = { ...allSuites };
   switch (action.type) {
      case actions.PRESENT_ALL_SUITES:
         newSuite = action.payload;
         return newSuite;
      case actions.DECREMENT_SUITE_INDEX:
         newSuite.index -= 1;
         return newSuite;
      case actions.RESET_SUITE:
         newSuite.suites = [];
         newSuite.index = 0;
         return newSuite;
      default:
         return allSuites;
   }
}
