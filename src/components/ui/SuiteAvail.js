import React from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";

export default function SuiteAvail(props) {
   return (
      //<!--RESULT-->

      <div
         className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
         style={{ maxWidth: "900px", height: "auto" }}
      >
         <div className="row">
            <div className="col-md-5 pr-1">
               <img
                  src={props.user.properties[0].image}
                  className="img-fluid"
                  alt={props.user.properties[0].title}
               />
               <div className="col-md-7 mt-2">
                  <div className="text-muted">
                     <Link
                        to="/edit-suite"
                        className="text-dark lead text-decoration-none"
                        type="button"
                     >
                        {props.user.properties[0].title}
                     </Link>
                     <Link
                        to=""
                        className="text-danger text-decoration-none float-right"
                     >
                        <img
                           src={RemoveIcon}
                           width="20px"
                           id="property-remove"
                           alt=""
                        />
                        Remove
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
