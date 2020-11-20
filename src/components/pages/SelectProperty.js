import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/add.svg";
import suites from "../../data/suites";
import SuiteAvail from "../ui/SuiteAvail";

export default function SelectProperty() {
   return (
      <AppTemplate>
         {/* <!-- Properties --> */}
         {suites.map((suite) => {
            return <SuiteAvail suite={suite} key={suite.userId} />;
         })}

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
