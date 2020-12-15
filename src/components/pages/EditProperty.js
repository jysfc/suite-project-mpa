import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import SuiteAddIcon from "../../icons/suite-add.svg";
import SuiteAvail from "../ui/SuiteAvail";
import { users } from "../../data/users";
import PropInput from "../ui/PropInput";
import { connect } from "react-redux";

class EditProperty extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit Suite Component");
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
                        {users.map((user) => {
                           return (
                              <SuiteAvail
                                 user={this.props.editableProperty}
                                 key={this.props.editableProperty.id}
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
      allSuites: state.allSuites,
   };
}

export default connect(mapStateToProps)(EditProperty);
