import React from "react";
import TvIcon from "../../icons/tv.svg";
import SafeIcon from "../../icons/safe.svg";
import WifiIcon from "../../icons/wifi.svg";
import AccessibleIcon from "../../icons/accessible.svg";
import suites from "../../data/suites";
const suite = suites[0];

export default function SuiteAmenities() {
   return (
      //<!--SUITE AMENITIES-->
      <>
         <li className="lead mt-4">Suite Amenities:</li>
         <li>
            <ul className="list-unstyled">
               {suite.hasWiFi && (
                  <li>
                     <img src={WifiIcon} width="16px" className="mr-1" alt="" />
                     WiFi
                  </li>
               )}

               {suite.hasTv && (
                  <li>
                     <img src={TvIcon} width="16px" className="mr-1" alt="" />
                     TV
                  </li>
               )}
               {suite.hasSafe && (
                  <li>
                     <img src={SafeIcon} width="16px" className="mr-1" alt="" />
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
      </>
   );
}
