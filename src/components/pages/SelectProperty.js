import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";
import AddIcon from "../../icons/add.svg";
import Property from "../ui/Property";
import suites from "../../data/suites";

export default function SelectProperty() {
   return (
      <AppTemplate>
         <div className="row ">
            {/* <!-- Property 1 --> */}
            {suites.map((suite) => {
               return (
                  <Property property={suite.property} key={suite.propertyId} />
               );
            })}

            {/* <!-- Property 2 --> */}
            <div className="col mb-4 mr-2 shadow p-3 mb-5 bg-white rounded">
               <Link
                  to="edit-property"
                  className="text-dark text-decoration-none"
                  type="button"
               >
                  <h5>Mandalay Bay Hotel & Casino</h5>
               </Link>

               <Link
                  to=""
                  className="text-danger text-decoration-none float-right"
               >
                  <img src={RemoveIcon} width="20px" id="hotel-add" alt="" />
                  Remove
               </Link>
            </div>
         </div>
         {/* <!-- Property new --> */}
         <div className="col mb-4">
            <Link
               to="edit-property"
               className="text-decoration-none"
               type="add-property"
            >
               <img src={AddIcon} width="24px" id="hotel-add" alt="" />
               <p className="d-inline ml-4">Add Property</p>
            </Link>
         </div>
      </AppTemplate>
   );
}
