import React from "react";
import { Link } from "react-router-dom";
import MIRHOS from "../../images/MIRHOS.jpg";
import SaveIcon from "../../icons/save.svg";
import classnames from "classnames";
import { MAX_CARD_CHARS } from "../../utils/helpers";

export default class SuiteInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         inputSuite: "",
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.inputSuite.length > MAX_CARD_CHARS ||
         this.state.inputSuite.length === 0
      ) {
         return true;
      } else return false;
   }

   setInputSuite(e) {
      this.setState({ inputSuite: e.target.value });
   }

   render() {
      return (
         // <!--COLUMN RIGHT EDIT SUITE-->
         <div className="col-12 col-md-6">
            <form className="md-form">
               <img src={MIRHOS} className="img-fluid mb-4" alt="Mir Hosp" />
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
                     htmlFor="customFile"
                  >
                     Image upload
                  </label>
               </div>
               {/* <!--NAME & BEDROOMS--> */}
               <div className="form-group">
                  <label htmlFor="inputSuite">Name of suite</label>
                  <input
                     type="text"
                     className="form-control"
                     id="inputSuite"
                     placeholder="Two Bedroom Hospitality Suite"
                     defaultValue={this.state.inputSuite}
                     onChange={(e) => this.setInputSuite(e)}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="inputBedrooms">Number of bedrooms</label>
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
                     <label htmlFor="inputKingBed">King beds</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputKingBed"
                        placeholder="1"
                     />
                  </div>
                  <div className="form-group col-4">
                     <label htmlFor="inputQueenBed">Queen beds</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputQueenBed"
                        placeholder="2"
                     />
                  </div>
                  <div className="form-group col-4">
                     <label htmlFor="inputFullBed">Full beds</label>
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
                     <label htmlFor="inputSqft">Square ft.</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputSqft"
                        placeholder="1714"
                     />
                  </div>
                  <div className="form-group col-6">
                     <label htmlFor="inputMaxGuest">Max Guests</label>
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
                     <label className="form-check-label" htmlFor="wifi">
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
                     <label className="form-check-label" htmlFor="tv">
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
                     <label className="form-check-label" htmlFor="inRoomSafe">
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
                     <label className="form-check-label" htmlFor="accessible">
                        Accessible
                     </label>
                  </div>
               </div>
            </form>
            <Link
               to="/select-property"
               className={classnames("btn btn-primary btn-block mb-4", {
                  disabled: this.checkHasInvalidCharCount(),
               })}
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
      );
   }
}
