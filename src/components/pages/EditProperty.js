import React from "react";
import AppTemplate from "../ui/AppTemplate";
import SuiteAddIcon from "../../icons/suite-add.svg";
import SuiteAvail from "../ui/SuiteAvail";
import PropInput from "../ui/PropInput";
import { connect } from "react-redux";
import actions from "../../store/actions";

class EditProperty extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         displayedSuites: [],
         image: "",
         title: "",
      };
      this.deleteSuite = this.deleteSuite.bind(this);
      this.editSuite = this.editSuite.bind(this);
   }
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
   editSuite(id) {
      const suite = this.props.property.suites.find((suite) => {
         return suite.id === id;
      });
      this.props.dispatch({
         type: actions.UPDATE_EDITABLE_SUITE,
         payload: suite,
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
                        {/*<!--RESULT-->*/}
                        {this.props.property.suites.map((suite) => {
                           return (
                              <SuiteAvail
                                 suite={suite}
                                 key={suite.id}
                                 deleteSuite={this.deleteSuite}
                                 editSuite={this.editSuite}
                              />
                           );
                        })}

                        {/* <!--NEW PROP--> */}
                        <div className="col">
                           <button
                              className="text-decoration-none btn btn-link"
                              onClick={() => {
                                 this.editSuite();
                              }}
                           >
                              <img
                                 src={SuiteAddIcon}
                                 width="24px"
                                 id="suite-add"
                                 alt=""
                              />
                              <p className="d-inline ml-4">Add Suite</p>
                           </button>
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
