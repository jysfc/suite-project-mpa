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
      if (this.props.editableProperty.prevRoute === "/select-property") {
         this.props.history.push("/select-property");
      }
   }

   deletePropertyFromStore() {
      const deletedProperty = this.props.editableProperty.Property;
      const Properties = this.props.allSuites.Properties;
      const filteredProperties = without(Properties, deletedProperty);
      console.log(filteredProperties);
      this.props.dispatch({
         type: actions.STORE_EDITABLE_PROPERTY,
         payload: filteredProperties,
      });
      if (filteredProperties[this.props.allSuites.index] === undefined) {
         this.props.history.push("/select-property");
      } else {
         this.props.history.push("/select-property");
      }
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
               <h5>{this.props.user.properties[0].name}</h5>
            </Link>

            <Link
               to=""
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
      editableProperty: state.editableProperty,
      allSuites: state.allSuites,
   };
}

export default connect(mapStateToProps)(PropPrev);
