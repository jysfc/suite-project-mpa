import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { safelyParseJson } from "../../utils/helpers";
import orderBy from "lodash/orderBy";
import MIR2T from "../../images/MIR2T.jpg";
import Result from "../ui/Result";
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
            {/* <!--results 1--> */}
            {this.state.displayedSuites.map((suite) => {
               return (
                  <Result
                     title={suite.title}
                     property={suite.property}
                     squareFt={suite.squareFt}
                     maxGuest={suite.maxGuest}
                     totalKingBed={suite.totalKingBed}
                     totalQueenBed={suite.totalQueenBed}
                     key={suite.id}
                  />
               );
            })}
            {/* <!--result 2--> */}
            <div
               className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
               style={{ maxWidth: "900px", height: "auto" }}
            >
               <div className="row">
                  <div className="col-md-5 mt-2 crop">
                     <img src={MIR2T} className="img-fluid" alt="MIR2T" />
                  </div>
                  <div className="col-md-7">
                     <div className="text-muted">
                        <Link
                           to="/suite"
                           className="text-dark lead text-decoration-none"
                           type="button"
                        >
                           <h2>Two Bedroom Tower Suite</h2>
                        </Link>
                        <p className="text-dark lead">
                           The Mirage Hotel & Casino
                        </p>
                        <p>1628 sq. ft · 6 max guests</p>
                        <p>1 king bed · 2 queen beds</p>
                        <p className="card-text"></p>
                     </div>
                  </div>
               </div>
            </div>
         </AppTemplate>
      );
   }
}
