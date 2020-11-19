import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { safelyParseJson } from "../../utils/helpers";
import orderBy from "lodash/orderBy";
import SuitePrev from "../ui/SuitePrev";
import suites from "../../data/suites";

export default class Index extends React.Component {
   constructor(props) {
      super(props);
      const activeSuites = suites.filter((suite) => {
         return suite.isActive;
      }); // imagine we are returning the filtered results from a API
      const defaultOrder = '["postedAt", "desc"]';
      const params = safelyParseJson(defaultOrder);
      const orderedSuites = orderBy(activeSuites, ...params);
      this.state = {
         activeSuites: orderedSuites,
         displayedSuites: orderedSuites,
         searchInput: "",
         suiteOrder: defaultOrder,
      };
   }

   render() {
      return (
         <AppTemplate>
            {/* <!-- search bar--> */}
            <div className="row">
               <div className="col-sm-7">
                  <input
                     type="text"
                     className="form-control"
                     id="City"
                     placeholder="Las Vegas, NV"
                  />
               </div>
               <div className="col-sm-3">
                  <select id="inputBeds" className="form-control">
                     <option value="3">3 beds</option>
                     <option value="1">1 bed</option>
                     <option value="2">2 beds</option>
                     <option value="3">3 beds</option>
                     <option value="4">4 beds</option>
                  </select>
               </div>
               <div className="col-sm-2 float-right">
                  <button className="btn btn-primary" type="submit">
                     Search
                  </button>
               </div>
            </div>
            {/* <!--results--> */}
            {this.state.displayedSuites.map((suite) => {
               return (
                  <SuitePrev
                     title={suite.title}
                     image={suite.image}
                     property={suite.property}
                     squareFt={suite.squareFt}
                     maxGuest={suite.maxGuest}
                     totalKingBed={suite.totalKingBed}
                     totalQueenBed={suite.totalQueenBed}
                     key={suite.id}
                  />
               );
            })}
         </AppTemplate>
      );
   }
}
