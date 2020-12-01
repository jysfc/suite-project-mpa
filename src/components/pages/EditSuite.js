import React from "react";
import AppTemplate from "../ui/AppTemplate";
import PropInfo from "../ui/PropInfo";
import suites from "../../data/suites";
import SuiteInput from "../ui/SuiteInput";
const suite = suites[0];

export default function EditSuite() {
   return (
      <AppTemplate>
         <div className="row mb-4">
            <div className="container">
               <div className="row">
                  {/* <!--COLUMN LEFT PROP INFO--> */}
                  <PropInfo suite={suite} key={suite.propertyId} />
                  {/* <!--COLUMN RIGHT EDIT SUITE--> */}
                  <SuiteInput />
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
