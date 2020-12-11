import actions from "../actions";

export default function editableSuite(editableSuite = {}, action) {
   let newEditableSuite = { ...editableSuite };
   switch (action.type) {
      case actions.STORE_EDITABLE_SUITE:
         newEditableSuite.suite = action.payload.suite;
         newEditableSuite.prevRoute = action.payload.prevRoute;
         return newEditableSuite;
      default:
         return editableSuite;
   }
}
