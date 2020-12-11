import React from "react";
import { Link } from "react-router-dom";
import SaveIcon from "../../icons/save.svg";
import classnames from "classnames";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";
import {
   checkIsOver,
   MAX_CARD_CHARS,
   safelyParseJson,
} from "../../utils/helpers";

class PropInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         inputHotel: "",
         inputUrl: "",
         inputAddress: "",
         inputAddress2: "",
         inputCity: "",
         inputState: "",
         inputZip: "",
         inputCountry: "",
         inputPhone: "",
         hasOutdoorPool: false,
         hasSpa: false,
         isSmokeFree: false,
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.inputHotel.length > MAX_CARD_CHARS ||
         this.state.inputHotel.length === 0
      ) {
         return true;
      } else return false;
   }
   // setInputHotel(e) {
   //    this.setState({ inputHotel: e.target.value });
   // }
   updatePropInput(e) {
      let value = e.target.value;
      if (value === "true" || value === "false") {
         value = safelyParseJson(value); // "true" will be into true str to boolean
      }
      this.setState({ [e.target.name]: value }); // set state based off target name
   }

   saveUpdatePropInput() {
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
         <>
            {/* <!--CoLUMN LEFT EDIT PROP--> */}
            {/* <!--HOTEL & URL--> */}
            <div className="form-group">
               <label htmlFor="inputHotel">Hotel</label>
               <input
                  type="text"
                  className="form-control"
                  id="inputHotel"
                  placeholder="The Mirage Hotel & Casino"
                  defaultValue={this.state.inputHotel}
                  name="inputHotel"
                  onChange={(e) => this.updatePropInput(e)}
               />
            </div>
            <p
               className="float-right my-n4 text-muted d-flex ml-4"
               id="Hotel-characters"
            >
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.inputHotel,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  {this.state.inputHotel.length}/{MAX_CARD_CHARS}
               </span>
            </p>
            <div className="form-group">
               <label htmlFor="inputUrl">Website URL</label>
               <input
                  type="text"
                  className="form-control"
                  id="inputUrl"
                  placeholder="www.mirage.com"
                  defaultValue={this.state.inputUrl}
                  name="inputUrl"
                  onChange={(e) => this.updatePropInput(e)}
               />
            </div>

            {/* <!--ADDRESS--> */}
            <div className="form-group">
               <label htmlFor="inputAddress">Address</label>
               <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="3400 S Las Vegas Blvd"
                  defaultValue={this.state.inputAddress}
                  name="inputAddress"
                  onChange={(e) => this.updatePropInput(e)}
               />
            </div>
            <div className="form-group">
               <label htmlFor="inputAddress2">Address 2</label>
               <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder=""
                  defaultValue={this.state.inputAddress2}
                  name="inputAddress2"
                  onChange={(e) => this.updatePropInput(e)}
               />
            </div>
            {/* <!--CITY STATE ZIP COUNTRY--> */}
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label htmlFor="inputCity">City</label>
                  <input
                     type="text"
                     className="form-control"
                     id="inputCity"
                     placeholder="Las Vegas"
                     defaultValue={this.state.inputCity}
                     name="inputCity"
                     onChange={(e) => this.updatePropInput(e)}
                  />
               </div>
            </div>

            {/* <!--State Abbreviation--> */}
            <div className="form-row">
               <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select
                     id="inputState"
                     className="form-control"
                     defaultValue={this.state.inputState}
                     name="inputState"
                     onChange={(e) => this.updatePropInput(e)}
                  >
                     <option value="CA">California</option>
                     <option value="NV" selected>
                        Nevada
                     </option>
                  </select>
               </div>
               <div className="form-group col-md-4">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                     type="text"
                     className="form-control"
                     id="inputZip"
                     placeholder="89109"
                     defaultValue={this.state.inputZip}
                     name="inputZip"
                     onChange={(e) => this.updatePropInput(e)}
                  />
               </div>
               {/* <!-- Country Abbreviation --> */}
               <div className="form-group col-md-4">
                  <label htmlFor="inputState">Country</label>
                  <select
                     id="inputCountry"
                     className="form-control"
                     defaultValue={this.state.inputCountry}
                     name="inputCountry"
                     onChange={(e) => this.updatePropInput(e)}
                  >
                     <option value="SG">Singapore</option>
                     <option value="US" selected>
                        United States
                     </option>
                  </select>
               </div>
            </div>
            {/* <!--PHONE--> */}
            {/* <!-- country code & phone number--> */}
            <div className="form-row">
               <div className="form-group col-md-12">
                  <label htmlFor="inputPhone">Phone Number</label>
                  <input
                     type="phone"
                     className="form-control"
                     id="inputPhone"
                     placeholder="702-791-7111"
                     defaultValue={this.state.inputPhone}
                     name="inputPhone"
                     onChange={(e) => this.updatePropInput(e)}
                  />
               </div>
            </div>
            {/* <!--HOTEL AMENITIES CHECKBOX--> */}
            <div className="form-row">
               <div className="form-group col-md-12">
                  <p className="lead">Hotel Amenities</p>
               </div>

               <div className="form-group form-check-inline">
                  <input
                     className="form-check-input"
                     type="checkbox"
                     id="OutdoorPool"
                     checked={this.state.hasOutdoorPool}
                     name="hasOutdoorPool"
                     value={!this.state.hasOutdoorPool}
                     onChange={(e) => this.updatePropInput(e)}
                  />
                  <label className="form-check-label" htmlFor="OutdoorPool">
                     Outdoor Pool
                  </label>
               </div>

               <div className="form-group form-check-inline">
                  <input
                     className="form-check-input"
                     type="checkbox"
                     id="Spa"
                     checked={this.state.hasSpa}
                     name="hasSpa"
                     value={!this.state.hasSpa}
                     onChange={(e) => this.updatePropInput(e)}
                  />
                  <label className="form-check-label" htmlFor="Spa">
                     Spa
                  </label>
               </div>

               <div className="form-group form-check-inline">
                  <input
                     className="form-check-input"
                     type="checkbox"
                     id="SmokeFree"
                     checked={this.state.isSmokeFree}
                     name="isSmokeFree"
                     value={!this.state.isSmokeFree}
                     onChange={(e) => this.updatePropInput(e)}
                  />
                  <label className="form-check-label" htmlFor="SmokeFree">
                     Smoke-free
                  </label>
               </div>
            </div>

            <Link
               to="/edit-property"
               className={classnames("btn btn-primary btn-block mb-4", {
                  disabled: this.checkHasInvalidCharCount(),
               })}
               id="save"
               onClick={() => {
                  this.saveUpdatePropInput();
               }}
            >
               <img
                  src={SaveIcon}
                  width="24px"
                  className="mr-2"
                  id="property-add"
                  alt=""
               />
               Save
            </Link>
         </>
      );
   }
}
function mapStateToProps(state) {
   return {};
}
export default connect(mapStateToProps)(PropInput);
