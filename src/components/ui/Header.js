import React from "react";
import BedLogo from "../../icons/bed-logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div className="row my-4">
         <div className="col-sm-12 ml-n1">
            <Link to="/" className="text-decoration-none" type="button">
               <img src={BedLogo} width="38px" alt="Hotel Logo" />
               <h2 className="d-inline">Suite Project</h2>
            </Link>

            <Link
               to="loginAndSignUp"
               className="btn btn-link float-right text-decoration-none"
            >
               Log in
            </Link>
            <div className="clearfix"></div>
         </div>
      </div>
   );
}
