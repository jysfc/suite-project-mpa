import React from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";
import { connect } from "react-redux";
import without from "lodash/without";
import actions from "../../store/actions";

class SuiteAvail extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit Suite Component");
   }

   deleteSuite() {
      if (this.props.editableSuite.prevRoute === "/edit-property") {
         this.props.history.push("/edit-property");
      }
   }

   deleteSuiteFromStore() {
      const deletedSuite = this.props.editableSuite.Suite;
      const Suites = this.props.queue.Suites;
      const filteredSuites = without(Suites, deletedSuite);
      console.log(filteredSuites);
      this.props.dispatch({
         type: actions.STORE_QUEUED_SUITES,
         payload: filteredSuites,
      });
      if (filteredSuites[this.props.queue.index] === undefined) {
         this.props.history.push("/edit-property");
      } else {
         this.props.history.push("/edit-property");
      }
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
                        src={this.props.user.properties[0].image}
                        className="img-fluid"
                        alt={this.props.user.properties[0].title}
                     />{" "}
                  </div>
                  <div className="col-md-6 float-right">
                     <div className="text-muted">
                        <Link
                           to="/edit-suite"
                           className="text-dark lead text-decoration-none"
                           type="button"
                        >
                           {this.props.user.properties[0].title}
                        </Link>
                        <Link
                           to=""
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
      queue: state.queue,
   };
}

export default connect(mapStateToProps)(SuiteAvail);
