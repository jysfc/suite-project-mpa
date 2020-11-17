import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import MIRHOS from "../../images/MIRHOS.jpg";
import SaveIcon from "../../icons/save.svg";
import PoolOutdoorIcon from "../../icons/pooloutdoor.svg";
import SpaIcon from "../../icons/spa.svg";
import DogAllowedIcon from "../../icons/dogallowed.svg";
import SmokingNoIcon from "../../icons/smokingno.svg";

export default function EditSuite() {
   return (
      <AppTemplate>
         <div className="row mb-4">
            <div className="container">
               <div className="row">
                  {/* <!--COLUMN LEFT PROP INFO--> */}
                  <div className="col-12 col-md-6">
                     <h2>The Mirage Hotel & Casino</h2>

                     <ul className="list-unstyled">
                        <li className="mt-4">3400 S Las Vegas Blvd</li>
                        <li>Las Vegas, NV 89109 US</li>
                        <li>+1(702) 791-7111</li>
                        <li>mirage.com</li>

                        <li className="mt-4">
                           <strong>Self parking:</strong> Free
                        </li>
                        <li>
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
                  {/* <!--TODO add cursor over image--> */}
                  <div className="col-12 col-md-6">
                     <form className="md-form">
                        <img
                           src={MIRHOS}
                           className="img-fluid mb-4"
                           alt="Mir Hosp"
                        />
                        {/* <!--URL image (link)--> */}
                        <div className="custom-file mb-4" disabled>
                           <input
                              type="file"
                              className="custom-file-input"
                              disabled
                              id="customFile"
                           />
                           <label
                              className="custom-file-label"
                              disabled
                              for="customFile"
                           >
                              Image upload
                           </label>
                        </div>
                        {/* <!--NAME & BEDROOMS--> */}
                        <div className="form-group">
                           <label for="inputSuite">Name of suite</label>
                           <input
                              type="text"
                              className="form-control"
                              id="inputSuite"
                              placeholder="Two Bedroom Hospitality Suite"
                           />
                        </div>
                        <div className="form-group">
                           <label for="inputBedrooms">Number of bedrooms</label>
                           <input
                              type="text"
                              className="form-control"
                              id="inputBedrooms"
                              placeholder="2"
                           />
                        </div>
                        {/* <!--ROW OF BEDS--> */}
                        <div className="form-row">
                           <div className="form-group col-4">
                              <label for="inputKingBed">King beds</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="inputKingBed"
                                 placeholder="1"
                              />
                           </div>
                           <div className="form-group col-4">
                              <label for="inputQueenBed">Queen beds</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="inputQueenBed"
                                 placeholder="2"
                              />
                           </div>
                           <div className="form-group col-4">
                              <label for="inputFullBed">Full beds</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="inputFullBed"
                                 placeholder="0"
                              />
                           </div>
                        </div>
                        {/* <!--SQFT and MAX GST--> */}
                        <div className="form-row">
                           <div className="form-group col-6">
                              <label for="inputSqft">Square ft.</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="inputSqft"
                                 placeholder="1714"
                              />
                           </div>
                           <div className="form-group col-6">
                              <label for="inputMaxGuest">Max Guests</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="inputMaxGuest"
                                 placeholder="6"
                              />
                           </div>
                        </div>
                        {/* <!--SUITE AMENITIES--> */}
                        <div className="form-row">
                           <div className="form-group col-md-12">
                              <p className="lead">Suite Amenities</p>
                           </div>

                           <div className="form-group form-check-inline">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 id="wifi"
                                 value="option1"
                              />
                              <label className="form-check-label" for="wifi">
                                 WiFi
                              </label>
                           </div>
                           <div className="form-group form-check-inline">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 id="tv"
                                 value="option2"
                              />
                              <label className="form-check-label" for="tv">
                                 TV
                              </label>
                           </div>
                           <div className="form-group form-check-inline">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 id="inRoomSafe"
                                 value="option5"
                              />
                              <label
                                 className="form-check-label"
                                 for="inRoomSafe"
                              >
                                 In-Room Safe
                              </label>
                           </div>
                           <div className="form-group form-check-inline">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 id="accessible"
                                 value="option20"
                              />
                              <label
                                 className="form-check-label"
                                 for="accessible"
                              >
                                 Accessible
                              </label>
                           </div>
                        </div>
                     </form>
                     <Link
                        to="/select-property"
                        className="btn btn-primary btn-block mb-4"
                        style={{ width: "100%" }}
                        id="save"
                     >
                        <img
                           src={SaveIcon}
                           width="24px"
                           className="mr-2"
                           id="property-save"
                           alt=""
                        />
                        Save
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
