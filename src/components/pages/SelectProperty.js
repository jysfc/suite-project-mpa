import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/add.svg";
import PropPrev from "../ui/PropPrev";
import { connect } from "react-redux";
import axios from "axios";
import orderBy from "lodash/orderBy";
import actions from "../../store/actions";

class SelectProperty extends React.Component {
   constructor(props) {
      super(props);
      // const currentUser = this.props.currentUser[0];
      // console.log("user", this.props.currentUser[0].propertyName);
      this.state = {
         displayedProperties: [],
         currentUser: [],
      };
      this.deleteProperty = this.deleteProperty.bind(this);
   }
   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/jysfc/suite-project-mpa/main/src/data/users2.json"
         )
         .then((res) => {
            // handle success
            const currentUser = res.data;
            console.log(currentUser);
            this.setState({
               displayedProperties: currentUser.properties,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }
   deleteProperty(property) {
      const deletedProperty = property;
      const properties = this.state.displayedProperties;
      const filteredProperties = properties.filter((property) => {
         return property.id !== deletedProperty.id;
      });
      console.log(filteredProperties);
      this.props.dispatch({
         type: actions.UPDATE_EDITABLE_PROPERTY,
         payload: filteredProperties,
      });
      this.setState({ displayedProperties: filteredProperties });
   }

   render() {
      return (
         <AppTemplate>
            {/* <!-- Properties --> */}
            {this.state.displayedProperties.map((property) => {
               // if (property.id === "9bfbc757-fcc9-40c8-9f83-652fdefee41e") {
               return (
                  <PropPrev
                     property={property}
                     key={property.id}
                     deleteProperty={this.deleteProperty}
                  />
               );
               // }
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
