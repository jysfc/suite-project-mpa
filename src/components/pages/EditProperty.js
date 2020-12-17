import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import SuiteAddIcon from "../../icons/suite-add.svg";
import SuiteAvail from "../ui/SuiteAvail";
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
      this.deleteSuite = this.deleteSuite.bind(this);
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
         type: actions.UPDATE_EDITABLE_SUITE,
         payload: filteredSuites,
      });
      this.setState({ displayedSuites: filteredSuites });
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
                        {this.state.displayedSuites.map((suite) => {
                           return (
                              <SuiteAvail
                                 suite={suite}
                                 key={suite.id}
                                 deleteSuite={this.deleteSuite}
                              />
                           );
                        })}

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
      editableProperty: state.editableProperty,
      editableSuite: state.editableSuite,
   };
}

export default connect(mapStateToProps)(EditProperty);
