import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/add.svg";
import PropPrev from "../ui/PropPrev";
import { connect } from "react-redux";
import { users } from "../../data/users";
// import axios from "axios";
// import actions from "../../store/actions";

class SelectProperty extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the Edit Property Component");
   }
   // componentDidMount() {
   //    axios
   //       .get(
   //          "https://raw.githubusercontent.com/jysfc/suite-project-mpa/main/src/data/users.json"
   //       )
   //       .then((res) => {
   //          // handle success
   //          const currentUser = res.data;
   //          console.log(currentUser);
   //          this.props.dispatch({
   //             type: actions.UPDATE_CURRENT_USER,
   //             payload: res.data,
   //          });
   //       })
   //       .catch((error) => {
   //          // handle error
   //          console.log(error);
   //       });
   // }

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
      allSuites: state.allSuites,
   };
}
export default connect(mapStateToProps)(SelectProperty);
