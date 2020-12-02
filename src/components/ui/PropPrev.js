import React from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";

export default function PropPrev(props) {
   return (
      //<!-- Property -->
      <div className="col my-6 mr-2 shadow p-3 bg-white rounded">
         <Link
            to="edit-property"
            className="text-dark text-decoration-none"
            type="button"
         >
            <h5>{props.user.properties[0].name}</h5>
         </Link>

         <Link to="" className="text-danger text-decoration-none float-right">
            <img src={RemoveIcon} width="20px" id="hotel-add" alt="" />
            Remove
         </Link>
      </div>
   );
}
