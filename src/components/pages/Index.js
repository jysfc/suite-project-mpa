import React from "react";
import AppTemplate from "../ui/AppTemplate";
import orderBy from "lodash/orderBy";
import SuitePrev from "../ui/SuitePrev";
import suites from "../../data/suites";
import axios from "axios";

export default class Index extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '[["propertyCity"], ["desc"]]',
         displayedSuites: orderBy(suites, ["propertyCity"], ["desc"]),
         allSuites: orderBy(suites, ["propertyCity"], ["desc"]),
      };
   }
   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/jysfc/suite-project-mpa/main/src/data/suites.json"
         )
         .then((res) => {
            // handle success
            const suites = res.data;
            this.setState({
               displayedSuites: orderBy(suites, ["createdAt"], ["desc"]),
               allSuites: orderBy(suites, ["createdAt"], ["desc"]),
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   filterSuites() {
      const input = document.getElementById("search-input").value;
      const lowerCasedInput = input.toLowerCase();
      const selectInput = document.getElementById("inputBeds").value;
      console.log(selectInput);
      console.log(lowerCasedInput);
      const filteredSuites = this.state.allSuites.filter((suite) => {
         const lowerCasedPropertyCity = suite.propertyCity.toLowerCase();
         const totalBeds =
            suite.totalFullBed + suite.totalKingBed + suite.totalQueenBed;
         console.log(totalBeds);
         if (
            (lowerCasedPropertyCity.includes(lowerCasedInput) ||
               suite.propertyZip.includes(lowerCasedInput)) &&
            totalBeds === Number(selectInput)
         ) {
            return true;
         } else return false;
      });
      this.setState({ displayedSuites: filteredSuites });
   }

   setOrder(e) {
      const newOrder = e.target.value;
      console.log(newOrder);
      this.setState({ order: newOrder }, () => {
         this.setSuites();
      });
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
                     defaultValue="3"
                  >
                     <option value="1">1 bed</option>
                     <option value="2">2 beds</option>
                     <option value="3">3 beds</option>
                     <option value="4">4 beds</option>
                  </select>
               </div>
               <div className="col-sm-2 float-right">
                  <button
                     className="btn btn-primary"
                     onClick={() => this.filterSuites()}
                  >
                     Search
                  </button>
               </div>
            </div>
            {/* <!--results--> */}
            {this.state.displayedSuites.map((suite) => {
               return <SuitePrev PropInfo suite={suite} key={suite.id} />;
            })}
         </AppTemplate>
      );
   }
}
