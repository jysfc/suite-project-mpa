import React from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";
import { connect } from "react-redux";
import without from "lodash/without";
import actions from "../../store/actions";

class PropPrev extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit Property Component");
   }

   deleteProperty() {
      const deletedProperty = this.props.editableProperty;
      const Properties = this.props.allProperties;
      const filteredProperties = without(Properties, deletedProperty);
      console.log(filteredProperties);
      this.props.dispatch({
         type: actions.UPDATE_EDITABLE_PROPERTY,
         payload: filteredProperties,
      });
      this.setState({ displayedProperties: filteredProperties });
   }

   render() {
      return (
         //<!-- Property -->
         <div className="col my-6 mr-2 shadow p-3 bg-white rounded">
            <Link
               to="edit-property"
               className="text-dark text-decoration-none"
               type="button"
            >
               <h5>{this.props.user.propertyName}</h5>
            </Link>

            <Link
               className="text-danger text-decoration-none float-right"
               onClick={() => {
                  this.deleteProperty();
               }}
            >
               <img src={RemoveIcon} width="20px" id="hotel-add" alt="" />
               Remove
            </Link>
         </div>
      );
   }
}
function mapStateToProps(state) {
   return {
      currentUser: state.currentUser,
   };
}

export default connect(mapStateToProps)(PropPrev);
