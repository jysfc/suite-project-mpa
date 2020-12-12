import React from "react";
import { Link } from "react-router-dom";
import SaveIcon from "../../icons/save.svg";
import suites from "../../data/suites";
import classnames from "classnames";
import {
   checkIsOver,
   MAX_CARD_CHARS,
   safelyParseJson,
} from "../../utils/helpers";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";
const suite = suites[0];

class SuiteInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         inputSuite: "",
         totalKingBed: "",
         totalQueenBed: "",
         totalFullBed: "",
         measurementOfSqFt: "",
         maxGuest: "",
         hasWifi: false,
         hasTv: false,
         hasInRoomSafe: false,
         isAccessible: false,
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

   // setInputSuite(e) {
   //    this.setState({ inputSuite: e.target.value });
   // }
   updateSuiteInput(e) {
      let value = e.target.value;
      if (value === "true" || value === "false") {
         value = safelyParseJson(value); // "true" will be into true str to boolean
      }
      this.setState({ [e.target.name]: value }); // set state based off target name
      // eslint-disable-next-line
      if (value == Number(value)) {
         value = safelyParseJson(value); // "4" will turn into 4 str to num
      }
      this.setState({ [e.target.name]: value }); // set state based off target name
   }

   saveUpdateSuiteInput() {
      // mimic API response:
      axios
         .get(
            "https://raw.githubusercontent.com/jysfc/suite-project-mpa/main/src/data/users.json"
         )
         .then((res) => {
            // handle success
            const currentUser = res.data;
            console.log(currentUser);
            this.props.dispatch({
               type: actions.UPDATE_CURRENT_USER,
               payload: res.data,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   render() {
      return (
         // <!--COLUMN RIGHT EDIT SUITE-->
         <div className="col-12 col-md-6">
            <form className="md-form">
               <img
                  src={suite.image}
                  className="img-fluid mb-4 crop"
                  alt={suite.title}
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
                     placeholder={suite.title}
                     defaultValue={this.state.inputSuite}
                     name="inputSuite"
                     onChange={(e) => this.updateSuiteInput(e)}
                  />
               </div>
               <p
                  className="float-right my-n4 text-muted d-flex ml-4"
                  id="suite-characters"
               >
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.inputSuite,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     {this.state.inputSuite.length}/{MAX_CARD_CHARS}
                  </span>
               </p>

               {/* <!--ROW OF BEDS--> */}
               <div className="form-row">
                  <div className="form-group col-4">
                     <label htmlFor="inputKingBed">King beds</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputKingBed"
                        placeholder="1"
                        name="totalKingBed"
                        defaultValue={this.state.totalKingBed}
                        onChange={(e) => this.updateSuiteInput(e)}
                     />
                  </div>
                  <div className="form-group col-4">
                     <label htmlFor="inputQueenBed">Queen beds</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputQueenBed"
                        placeholder="2"
                        name="totalQueenBed"
                        defaultValue={this.state.totalQueenBed}
                        onChange={(e) => this.updateSuiteInput(e)}
                     />
                  </div>
                  <div className="form-group col-4">
                     <label htmlFor="inputFullBed">Full beds</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputFullBed"
                        placeholder="0"
                        name="totalFullBed"
                        defaultValue={this.state.totalFullBed}
                        onChange={(e) => this.updateSuiteInput(e)}
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
                        name="measurementOfSqFt"
                        defaultValue={this.state.measurementOfSqFt}
                        onChange={(e) => this.updateSuiteInput(e)}
                     />
                  </div>
                  <div className="form-group col-6">
                     <label htmlFor="inputMaxGuest">Max Guests</label>
                     <input
                        type="text"
                        className="form-control"
                        id="inputMaxGuest"
                        placeholder="6"
                        name="maxGuest"
                        defaultValue={this.state.maxGuest}
                        onChange={(e) => this.updateSuiteInput(e)}
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
                        checked={this.state.hasWifi}
                        name="hasWifi"
                        defaultValue={!this.state.hasWifi}
                        onChange={(e) => this.updateSuiteInput(e)}
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
                        checked={this.state.hasTv}
                        name="hasTv"
                        defaultValue={!this.state.hasTv}
                        onChange={(e) => this.updateSuiteInput(e)}
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
                        checked={this.state.hasInRoomSafe}
                        name="hasInRoomSafe"
                        defaultValue={!this.state.hasInRoomSafe}
                        onChange={(e) => this.updateSuiteInput(e)}
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
                        checked={this.state.isAccessible}
                        name="isAccessible"
                        defaultValue={!this.state.isAccessible}
                        onChange={(e) => this.updateSuiteInput(e)}
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
               onClick={() => {
                  this.saveUpdateSuiteInput();
               }}
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
function mapStateToProps(state) {
   return {};
}
export default connect(mapStateToProps)(SuiteInput);
