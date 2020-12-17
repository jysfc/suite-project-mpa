import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import SuiteAddIcon from "../../icons/suite-add.svg";
// import SuiteAvail from "../ui/SuiteAvail";
import RemoveIcon from "../../icons/remove.svg";
import PropInput from "../ui/PropInput";
import { connect } from "react-redux";
import actions from "../../store/actions";
// import axios from "axios";

class EditProperty extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         displayedSuites: [],
      };
      // this.deleteSuite = this.deleteSuite.bind(this);
   }

   // componentDidMount() {
   //    axios
   //       .get(
   //          "https://raw.githubusercontent.com/jysfc/suite-project-mpa/main/src/data/current-user.json"
   //       )
   //       .then((res) => {
   //          // handle success
   //          const displayedProperties = res.data;
   //          console.log(displayedProperties);
   //          this.setState({
   //             displayedSuites: displayedProperties.properties.suite,
   //          });
   //       })
   //       .catch((error) => {
   //          // handle error
   //          console.log(error);
   //       });
   // }
   deleteSuite(suite) {
      const deletedSuite = suite;
      const suites = this.state.displayedSuites;
      const filteredSuites = suites.filter((suite) => {
         return suite.id !== deletedSuite.id;
      });
      console.log(filteredSuites);
      this.props.dispatch({
         type: actions.UPDATE_EDITABLE_PROPERTY,
         payload: filteredSuites,
      });
      this.setState({ displayedSuites: filteredSuites });
   }
   editSuite() {
      this.props.dispatch({
         type: actions.UPDATE_EDITABLE_SUITE,
         payload: this.props.property.suite,
      });
      this.props.history.push("/edit-suite");
   }
   render() {
      return (
         <AppTemplate>
            <div className="row mb-4">
               <div className="container">
                  <div className="row">
                     {/* <!--CoLUMN LEFT EDIT PROP--> */}
                     <div className="col-sm-6">
                        <PropInput />
                     </div>
                     {/* <!--COLUMN RIGHT PROP RESULT--> */}
                     <div className="col-sm-6">
                        {/* <!--RESULTS--> */}
                        {/* {this.state.displayedSuites.map((suite) => {
                           return (
                              <SuiteAvail
                                 suite={suite}
                                 key={suite.id}
                                 deleteSuite={this.deleteSuite}
                              />
                           );
                        })} */}
                        {/*<!--RESULT-->*/}
                        <div
                           className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
                           style={{ maxWidth: "auto", height: "auto" }}
                        >
                           <div className="row">
                              <div className="col-md-6 pr-1">
                                 <img
                                    src={this.props.property.image}
                                    className="img-fluid"
                                    alt={this.props.property.title}
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
                                       {this.props.property.title}
                                    </Link>

                                    <button
                                       className="text-danger text-decoration-none float-right btn btn-link"
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
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* <!--NEW PROP--> */}
                        <div className="col">
                           <Link
                              to="/edit-suite"
                              className="text-decoration-none"
                              type="add-suite"
                           >
                              <img
                                 src={SuiteAddIcon}
                                 width="24px"
                                 id="suite-add"
                                 alt=""
                              />
                              <p className="d-inline ml-4">Add Suite</p>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      property: state.editableProperty,
      editableSuite: state.editableSuite,
   };
}

export default connect(mapStateToProps)(EditProperty);
