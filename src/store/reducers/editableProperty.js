import actions from "../actions";

export default function editableProperty(editableProperty = {}, action) {
   let newEditableProperty = { ...editableProperty };
   switch (action.type) {
      case actions.UPDATE_EDITABLE_PROPERTY:
         newEditableProperty.property = action.payload.property;
         return action.payload;
      default:
         return editableProperty;
   }
}
