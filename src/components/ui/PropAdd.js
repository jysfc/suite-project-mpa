import React from "react";
import { Link } from "react-router-dom";
import SaveIcon from "../../icons/save.svg";

export default class PropAdd extends React.Component {
   constructor(props) {
      super(props);
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
               />
            </div>
            <div className="form-group">
               <label htmlFor="inputUrl">Website URL</label>
               <input
                  type="url"
                  className="form-control"
                  id="inputUrl"
                  placeholder="www.mirage.com"
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
               />
            </div>
            <div className="form-group">
               <label htmlFor="inputAddress2">Address 2</label>
               <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder=""
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
                  />
               </div>
            </div>

            {/* <!--State Abbreviation--> */}
            <div className="form-row">
               <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select id="inputState" className="form-control">
                     <option value="NV">Nevada</option>
                     <option value="CA">California</option>
                     <option value="NV">Nevada</option>
                  </select>
               </div>
               <div className="form-group col-md-4">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                     type="text"
                     className="form-control"
                     id="inputZip"
                     placeholder="89109"
                  />
               </div>
               {/* <!-- Country Abbreviation --> */}
               <div className="form-group col-md-4">
                  <label htmlFor="inputState">Country</label>
                  <select id="inputState" className="form-control">
                     <option value="US">United States</option>
                     <option value="SG">Singapore</option>
                     <option value="GB">United Kingdom</option>
                     <option value="US">United States</option>
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
                     value="option2"
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
                     value="option4"
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
                     value="option7"
                  />
                  <label className="form-check-label" htmlFor="SmokeFree">
                     Smoke-free
                  </label>
               </div>
            </div>

            <Link
               to="/edit-property"
               className="btn btn-primary btn-block mb-4"
               c
               id="save"
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
