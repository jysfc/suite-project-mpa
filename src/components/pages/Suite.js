import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import ParkSelfIcon from "../../icons/parkself.svg";
import ParkValetIcon from "../../icons/parkvalet.svg";
import PoolOutdoorIcon from "../../icons/pooloutdoor.svg";
import SpaIcon from "../../icons/spa.svg";
import DogAllowedIcon from "../../icons/dogallowed.svg";
import SmokingNoIcon from "../../icons/smokingno.svg";
import MIRHOS from "../../images/MIRHOS.jpg";
import BookNowIcon from "../../icons/book-now.svg";
import TvIcon from "../../icons/tv.svg";
import SafeIcon from "../../icons/safe.svg";
import WifiIcon from "../../icons/wifi.svg";
import AccessibleIcon from "../../icons/accessible.svg";

export default function Suite() {
   return (
      <AppTemplate>
         <div className="row">
            {/* <!--COLUMN LEFT PROP INFO--> */}
            <div className="col-12 col-md-6">
               <h2>The Mirage Hotel & Casino</h2>
               <ul className="list-unstyled">
                  <li className="mt-4">3400 S Las Vegas Blvd</li>
                  <li>Las Vegas, NV 89109 US</li>
                  <li>+1(702) 791-7111</li>

                  <li className="mt-4">
                     <img
                        src={ParkSelfIcon}
                        width="16px"
                        className="mr-1"
                        alt=""
                     />
                     <strong>Self parking:</strong> Free
                  </li>
                  <li>
                     <img
                        src={ParkValetIcon}
                        width="16px"
                        className="mr-1"
                        alt=""
                     />
                     <strong>Valet parking:</strong> N/A
                  </li>
                  <li className="lead mt-4">Hotel Amenities:</li>
                  <li>
                     <ul className="list-unstyled">
                        <li>
                           <img
                              src={PoolOutdoorIcon}
                              width="16px"
                              className="mr-1"
                              alt=""
                           />
                           Outdoor Pool
                        </li>
                        <li>
                           <img
                              src={SpaIcon}
                              width="16px"
                              className="mr-1"
                              alt=""
                           />
                           Spa
                        </li>
                        <li>
                           <img
                              src={DogAllowedIcon}
                              width="16px"
                              className="mr-1"
                              alt=""
                           />
                           Dog Friendly
                        </li>
                        <li>
                           <img
                              src={SmokingNoIcon}
                              width="16px"
                              className="mr-1"
                              alt=""
                           />
                           Smoke-free
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>

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
                  <img src={MIRHOS} className="img-fluid mb-4" alt="Mir Hosp" />
                  {/* <!--SUITE INFO--> */}
                  <ul className="list-unstyled">
                     <p className="lead">Two Bedroom Hospitality Suite</p>
                     <li>1714 sq. ft · 6 max guests</li>
                     <li>1 king bed · 2 queen beds</li>

                     {/* <!--SUITE AMENITIES--> */}
                     <li className="lead mt-4">Suite Amenities:</li>
                     <li>
                        <ul className="list-unstyled">
                           <li>
                              <img
                                 src={WifiIcon}
                                 width="16px"
                                 className="mr-1"
                                 alt=""
                              />
                              WiFi
                           </li>
                           <li>
                              <img
                                 src={TvIcon}
                                 width="16px"
                                 className="mr-1"
                                 alt=""
                              />
                              TV
                           </li>
                           <li>
                              <img
                                 src={SafeIcon}
                                 width="16px"
                                 className="mr-1"
                                 alt=""
                              />
                              In-Room Safe
                           </li>
                           <li>
                              <img
                                 src={AccessibleIcon}
                                 width="16px"
                                 className="mr-1"
                                 alt=""
                              />
                              Accessible
                           </li>
                        </ul>
                     </li>
                  </ul>
               </form>
            </div>
         </div>
      </AppTemplate>
   );
}
