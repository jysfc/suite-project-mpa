import React from "react";
import { Link, withRouter } from "react-router-dom";
import RemoveIcon from "../../icons/remove.svg";
import { connect } from "react-redux";
import actions from "../../store/actions";

class SuiteAvail extends React.Component {
   editSuite() {
      this.props.dispatch({
         type: actions.UPDATE_EDITABLE_SUITE,
         payload: this.props.property.suite,
      });
      this.props.history.push("/edit-suite");
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
                        src={this.props.property.suite.image}
                        className="img-fluid"
                        alt={this.props.property.suite.title}
                     />{" "}
                  </div>
                  <div className="col-md-6 float-right">
                     <div className="text-muted">
                        <Link
                           to="/edit-suite"
                           className="text-dark lead text-decoration-none"
                           type="button"
                           onClick={() => {
                              this.editSuite();
                           }}
                        >
                           {this.props.property.suite.title}
                        </Link>

                        <button
                           className="text-danger text-decoration-none float-right btn btn-link"
                           onClick={() => {
                              this.props.deleteSuite(this.props.suite);
                           }}
                        >
                           <img
                              src={RemoveIcon}
                              width="20px"
                              id="property-remove"
                              alt=""
                           />
                           Remove
                        </button>
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
      property: state.editableProperty,
   };
}

export default withRouter(connect(mapStateToProps)(SuiteAvail));
