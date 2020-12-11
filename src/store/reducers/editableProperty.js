import actions from "../actions";

export default function editableProperty(editableProperty = {}, action) {
   let newEditableProperty = { ...editableProperty };
   switch (action.type) {
      case actions.STORE_EDITABLE_PROPERTY:
         newEditableProperty.property = action.payload.property;
         newEditableProperty.prevRoute = action.payload.prevRoute;
         return newEditableProperty;
      default:
         return editableProperty;
   }
}
