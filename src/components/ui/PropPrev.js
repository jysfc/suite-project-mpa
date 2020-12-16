import React from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";
import { connect } from "react-redux";

function PropPrev(props) {
   // constructor(props) {
   //    super(props);
   //    console.log("In the Edit Property Component");
   // }

   return (
      //<!-- Property -->
      <div className="col my-6 mr-2 shadow p-3 bg-white rounded">
         <Link
            to="edit-property"
            className="text-dark text-decoration-none"
            type="button"
         >
            <h5>{props.property.name}</h5>
         </Link>

         <button
            className="text-danger text-decoration-none float-right btn btn-link"
            onClick={() => {
               props.deleteProperty(props.property);
            }}
         >
            <img src={RemoveIcon} width="20px" id="hotel-add" alt="" />
            Remove
         </button>
      </div>
   );
}
function mapStateToProps(state) {
   return {
      editableProperty: state.editableProperty,
   };
}
export default connect(mapStateToProps)(PropPrev);
