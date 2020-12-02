import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import BookNowIcon from "../../icons/book-now.svg";
import suites from "../../data/suites";
import PropInfo from "../ui/PropInfo";
import SuiteAmenities from "../ui/SuiteAmenities";
const suite = suites[0];

export default function Suite(props) {
   return (
      <AppTemplate>
         <div className="row">
            {/* <!--COLUMN LEFT PROP INFO--> */}
            <PropInfo suite={suite} key={suite.propertyId} />

            {/* <!--COLUMN RIGHT EDIT SUITE--> */}
            {/* <!--BOOK BTN--> */}
            <div className="col-12 col-md-6">
               <form className="md-form">
                  <Link
                     to={{ pathname: suite.propertyWebsite }}
                     target="_blank"
                     className="btn btn-primary btn-block mb-4"
                     type="book-now"
                  >
                     <img src={BookNowIcon} width="28px" alt="" />
                     <p className="d-inline">BOOK NOW</p>
                  </Link>
                  {/* <!--IMAGE--> */}
                  <img
                     src={suite.image}
                     className="img-fluid mb-4"
                     alt={suite.title}
                  />
                  {/* <!--SUITE INFO--> */}
                  <ul className="list-unstyled">
                     <p className="lead">{suite.title}</p>
                     <li>
                        {suite.squareFt} sq. ft · {suite.maxGuest} max guests
                     </li>
                     <li>
                        {suite.totalKingBed} king bed · {suite.totalQueenBed}{" "}
                        queen beds
                     </li>

                     {/* <!--SUITE AMENITIES--> */}
                     <SuiteAmenities />
                  </ul>
               </form>
            </div>
         </div>
      </AppTemplate>
   );
}
