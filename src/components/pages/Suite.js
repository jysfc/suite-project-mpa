import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import BookNowIcon from "../../icons/book-now.svg";
import TvIcon from "../../icons/tv.svg";
import SafeIcon from "../../icons/safe.svg";
import WifiIcon from "../../icons/wifi.svg";
import AccessibleIcon from "../../icons/accessible.svg";
import PropInfo from "../ui/PropInfo";
import suites from "../../data/suites";
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
                     to={{ pathname: "https://mirage.com" }}
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
                     alt="Mir Hosp"
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
                     <li className="lead mt-4">Suite Amenities:</li>
                     <li>
                        <ul className="list-unstyled">
                           {suite.hasWiFi && (
                              <li>
                                 <img
                                    src={WifiIcon}
                                    width="16px"
                                    className="mr-1"
                                    alt=""
                                 />
                                 WiFi
                              </li>
                           )}

                           {suite.hasTv && (
                              <li>
                                 <img
                                    src={TvIcon}
                                    width="16px"
                                    className="mr-1"
                                    alt=""
                                 />
                                 TV
                              </li>
                           )}
                           {suite.hasSafe && (
                              <li>
                                 <img
                                    src={SafeIcon}
                                    width="16px"
                                    className="mr-1"
                                    alt=""
                                 />
                                 In-Room Safe
                              </li>
                           )}

                           {suite.isAccessible && (
                              <li>
                                 <img
                                    src={AccessibleIcon}
                                    width="16px"
                                    className="mr-1"
                                    alt=""
                                 />
                                 Accessible
                              </li>
                           )}
                        </ul>
                     </li>
                  </ul>
               </form>
            </div>
         </div>
      </AppTemplate>
   );
}
