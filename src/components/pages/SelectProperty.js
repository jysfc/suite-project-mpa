import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/add.svg";
import PropPrev from "../ui/PropPrev";
import { connect } from "react-redux";
import { users } from "../../data/users";

class SelectProperty extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit Property Component");
   }
   render() {
      return (
         <AppTemplate>
            {/* <!-- Properties --> */}
            {users.map((user) => {
               return <PropPrev user={user} key={user.userId} />;
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
      editableProperty: state.editableProperty,
      currentUser: state.currentUser,
   };
}
export default connect(mapStateToProps)(SelectProperty);
