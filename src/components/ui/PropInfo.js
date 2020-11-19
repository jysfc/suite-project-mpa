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
         <h2>{props.property}</h2>
         <ul className="list-unstyled">
            <li className="mt-4">{props.propertyAddress1}</li>
            <li>
               {props.propertyCity}, {props.propertyState} {props.propertyZip}{" "}
               {props.propertyCountry}
            </li>
            <li>
               {props.propertyPhoneCountryCode}({props.propertyPhoneAreaCode}){" "}
               {props.propertyPhoneNumber}
            </li>
            <li>{props.propertyWebsite}</li>

            <li className="mt-4">
               <img src={ParkSelfIcon} width="16px" className="mr-1" alt="" />
               <strong>Self parking:</strong> {props.propertySelfParking}
            </li>
            <li>
               <img src={ParkValetIcon} width="16px" className="mr-1" alt="" />
               <strong>Valet parking:</strong> {props.propertyValetParking}
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
                     <img src={SpaIcon} width="16px" className="mr-1" alt="" />
                     Spa
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
   );
}
