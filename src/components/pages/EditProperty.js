import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import SuiteAddIcon from "../../icons/suite-add.svg";
import SuiteAvail from "../ui/SuiteAvail";
import { users } from "../../data/users";
import PropInput from "../ui/PropInput";

export default function EditProperty() {
   return (
      <AppTemplate>
         <div className="row mb-4">
            <div className="container">
               <div className="row">
                  {/* <!--CoLUMN LEFT EDIT PROP--> */}
                  <div className="col-sm-6">
                     <PropInput />
                  </div>
                  {/* <!--COLUMN RIGHT PROP RESULT--> */}
                  <div className="col-sm-6">
                     {/* <!--RESULT 1--> */}
                     {users.map((user) => {
                        return <SuiteAvail user={user} key={user.id} />;
                     })}

                     {/* <!--NEW PROP--> */}
                     <div className="col mb-4">
                        <Link
                           to="/edit-suite"
                           className="text-decoration-none"
                           type="add-suite"
                        >
                           <img
                              src={SuiteAddIcon}
                              width="24px"
                              id="suite-add"
                              alt=""
                           />
                           <p className="d-inline ml-4">Add Suite</p>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
