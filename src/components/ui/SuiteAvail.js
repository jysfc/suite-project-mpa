import React from "react";
import { Link, withRouter } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";
import { connect } from "react-redux";
import without from "lodash/without";
import actions from "../../store/actions";
import axios from "axios";

class SuiteAvail extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit Suite Component");
   }

   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/jysfc/suite-project-mpa/main/src/data/suites.json"
         )
         .then((res) => {
            // handle success
            this.props.dispatch({
               type: actions.UPDATE_EDITABLE_SUITE,
               payload: res.data,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }
   deleteSuite() {
      const deletedSuite = this.props.editableSuite;
      const Suites = this.props.allSuites.suites;
      const filteredSuites = without(Suites, deletedSuite);
      console.log(filteredSuites);
      this.props.dispatch({
         type: actions.UPDATE_EDITABLE_SUITE,
         payload: filteredSuites,
      });
      this.setState({ displayedSuites: filteredSuites });
   }

   render() {
      return (
         <>
            {/*<!--RESULT-->*/}
            <div
               className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
               style={{ maxWidth: "auto", height: "auto" }}
            >
               <div className="row">
                  <div className="col-md-6 pr-1">
                     <img
                        src={this.props.editableSuite.image}
                        className="img-fluid"
                        alt={this.props.editableSuite.title}
                     />{" "}
                  </div>
                  <div className="col-md-6 float-right">
                     <div className="text-muted">
                        <Link
                           to="/edit-suite"
                           className="text-dark lead text-decoration-none"
                           type="button"
                        >
                           {this.props.editableSuite.title}
                        </Link>

                        <Link
                           className="text-danger text-decoration-none float-right"
                           onClick={() => {
                              this.deleteSuite();
                           }}
                        >
                           <img
                              src={RemoveIcon}
                              width="20px"
                              id="property-remove"
                              alt=""
                           />
                           Remove
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
function mapStateToProps(state) {
   return {
      editableSuite: state.editableSuite,
      allSuites: state.allSuites,
   };
}

export default withRouter(connect(mapStateToProps)(SuiteAvail));
