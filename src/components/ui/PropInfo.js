import React from "react";
import ParkSelfIcon from "../../icons/parkself.svg";
import ParkValetIcon from "../../icons/parkvalet.svg";
import PoolOutdoorIcon from "../../icons/pooloutdoor.svg";
import SpaIcon from "../../icons/spa.svg";
import SmokingNoIcon from "../../icons/smokingno.svg";

export default function PropInfo(props) {
   return (
      //<!--COLUMN LEFT PROP INFO-->
      <div className="col-12 col-md-6">
         <h2>{props.suite.property}</h2>
         <ul className="list-unstyled">
            <li className="mt-4">{props.suite.propertyAddress1}</li>
            <li>
               {props.suite.propertyCity}, {props.suite.propertyState}{" "}
               {props.suite.propertyZip} {props.suite.propertyCountry}
            </li>
            <li>
               {props.suite.propertyPhoneCountryCode}(
               {props.suite.propertyPhoneAreaCode}){" "}
               {props.suite.propertyPhoneNumber}
            </li>
            <li>{props.suite.propertyWebsite}</li>

            <li className="mt-4">
               <img src={ParkSelfIcon} width="16px" className="mr-1" alt="" />
               <strong>Self parking:</strong> {props.suite.propertySelfParking}
            </li>
            <li>
               <img src={ParkValetIcon} width="16px" className="mr-1" alt="" />
               <strong>Valet parking:</strong>{" "}
               {props.suite.propertyValetParking}
            </li>
            <li className="lead mt-4">Hotel Amenities:</li>
            <li>
               <ul className="list-unstyled">
                  {props.suite.propertyHasOutdoorPool && (
                     <li>
                        <img
                           src={PoolOutdoorIcon}
                           width="16px"
                           className="mr-1"
                           alt=""
                        />
                        Outdoor Pool
                     </li>
                  )}

                  {props.suite.propertyHasSpa && (
                     <li>
                        <img
                           src={SpaIcon}
                           width="16px"
                           className="mr-1"
                           alt=""
                        />
                        Spa
                     </li>
                  )}

                  {props.suite.propertyIsSmokeFree && (
                     <li>
                        <img
                           src={SmokingNoIcon}
                           width="16px"
                           className="mr-1"
                           alt=""
                        />
                        Smoke-free
                     </li>
                  )}
               </ul>
            </li>
         </ul>
      </div>
   );
}
