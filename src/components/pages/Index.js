import React from "react";
import AppTemplate from "../ui/AppTemplate";
import orderBy from "lodash/orderBy";
import SuitePrev from "../ui/SuitePrev";
import suites from "../../data/suites";

export default class Index extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '[["propertyCity"], ["desc"]]',
         displayedSuites: orderBy(suites, ["propertyCity"], ["desc"]),
         allSuites: orderBy(suites, ["propertyCity"], ["desc"]),
      };
   }

   filterByInput() {
      const input = document.getElementById("search-input").value;
      const lowerCasedInput = input.toLowerCase();
      console.log(lowerCasedInput);
      const copyOfAllSuites = [...this.state.allSuites];
      const filteredSuites = copyOfAllSuites.filter((suite) => {
         const lowerCasedPropertyCity = suite.propertyCity.toLowerCase();
         const lowerCasedPropertyZip = suite.propertyZip.toLowerCase();
         if (
            lowerCasedPropertyCity.includes(lowerCasedInput) ||
            lowerCasedPropertyZip.includes(lowerCasedInput)
         ) {
            return true;
         } else return false;
      });
      this.setState({ displayedSuites: filteredSuites }, () => {
         this.setSuites();
      });
   }

   setOrder(e) {
      const newOrder = e.target.value;
      console.log(newOrder);
      this.setState({ order: newOrder }, () => {
         this.setSuites();
      });
   }

   setSuites() {
      console.log("setting suites");
      const copyOfDisplayedSuites = [...this.state.displayedSuites];
      const toJson = JSON.parse(this.state.order);
      console.log(...toJson);
      const orderedSuites = orderBy(copyOfDisplayedSuites, ...toJson);
      console.log(orderedSuites);
      this.setState({ displayedSuites: orderedSuites });
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
                     id="search-input"
                     placeholder="Las Vegas, NV"
                  />
               </div>
               <div className="col-sm-3">
                  <select
                     id="inputBeds"
                     className="form-control"
                     onChange={this.change}
                     value={this.state.value}
                  >
                     <option value='[("kingBed")+("queenBed")]'>3 beds</option>
                     <option value='[("kingBed")+("queenBed")]'>1 bed</option>
                     <option value='[("kingBed")+("queenBed")]'>2 beds</option>
                     <option value='[("kingBed")+("queenBed")]'>3 beds</option>
                     <option value='[("kingBed")+("queenBed")]'>4 beds</option>
                  </select>
                  <p>{this.state.value}</p>
               </div>
               <div className="col-sm-2 float-right">
                  <button
                     className="btn btn-primary"
                     type="submit"
                     onClick={() => this.filterByInput()}
                  >
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
