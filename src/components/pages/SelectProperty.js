import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/add.svg";
import PropPrev from "../ui/PropPrev";
import { connect } from "react-redux";
import axios from "axios";
import actions from "../../store/actions";
import orderBy from "lodash/orderBy";
import { property } from "lodash";

class SelectProperty extends React.Component {
   constructor(props) {
      super(props);
      // const currentUser = this.props.currentUser[0];
      // console.log("user", this.props.currentUser[0].propertyName);
      this.state = {
         displayedProperties: [],
         currentUser: [],
      };
   }
   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/jysfc/suite-project-mpa/main/src/data/users-flatten.json"
         )
         .then((res) => {
            // handle success
            const currentUser = res.data;
            this.setState({
               displayedProperties: orderBy(
                  currentUser,
                  ["createdAt"],
                  ["desc"]
               ),
               currentUser: orderBy(currentUser, ["createdAt"], ["desc"]),
            });
            this.props.dispatch({
               type: actions.UPDATE_CURRENT_USER,
               payload: res.data,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   render() {
      return (
         <AppTemplate>
            {/* <!-- Properties --> */}
            {this.state.displayedProperties.map((property) => {
               if (property.id === "9bfbc757-fcc9-40c8-9f83-652fdefee41e") {
                  return (
                     <PropPrev
                        property={property}
                        key={property.propertySuiteId}
                     />
                  );
               }
            })}

            {/* <!-- Property new --> */}
            <div className="col mb-4">
               <Link
                  to="edit-property"
                  className="text-decoration-none"
                  type="add-property"
               >
                  <img src={AddIcon} width="24px" id="hotel-add" alt="" />
                  <p className="d-inline ml-4">Add Property</p>
               </Link>
            </div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      currentUser: state.currentUser,
      editableProperty: state.editableProperty,
   };
}
export default connect(mapStateToProps)(SelectProperty);
