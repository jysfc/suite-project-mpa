import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link, withRouter } from "react-router-dom";
import BookNowIcon from "../../icons/book-now.svg";

import PropInfo from "../ui/PropInfo";
import SuiteAmenities from "../ui/SuiteAmenities";
import { connect } from "react-redux";

// const suite = suites[0];

class Suite extends React.Component {
   constructor(props) {
      super(props);
      if (this.props.queue.suites.length === 0) {
         this.props.history.push("/suite");
      }
   }

   render() {
      return (
         <AppTemplate>
            <div className="row">
               {/* <!--COLUMN LEFT PROP INFO--> */}
               <PropInfo
                  suite={this.props.editableSuite}
                  key={this.props.editableSuite.propertyId}
               />
               {/* <!--COLUMN RIGHT EDIT Suite--> */}
               {/* <!--BOOK BTN--> */}
               <div className="col-12 col-md-6">
                  <form className="md-form">
                     <Link
                        to={{
                           pathname: this.props.editableSuite.propertyWebsite,
                        }}
                        target="_blank"
                        className="btn btn-primary btn-block mb-4"
                        type="book-now"
                     >
                        <img src={BookNowIcon} width="28px" alt="" />
                        <p className="d-inline">BOOK NOW</p>
                     </Link>
                     {/* <!--IMAGE--> */}
                     <img
                        src={this.props.editableSuite.image}
                        className="img-fluid mb-4"
                        alt={this.props.editableSuite.title}
                     />
                     {/* <!--Suite INFO--> */}
                     <ul className="list-unstyled">
                        <p className="lead">{this.props.editableSuite.title}</p>
                        <li>
                           {this.props.editableSuite.squareFt} sq. ft ·{" "}
                           {this.props.editableSuite.maxGuest} max guests
                        </li>
                        <li>
                           {this.props.editableSuite.totalKingBed} king bed ·{" "}
                           {this.props.editableSuite.totalQueenBed} queen beds
                        </li>

                        {/* <!--SUITE AMENITIES--> */}
                        <SuiteAmenities />
                     </ul>
                  </form>
               </div>
            </div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      queue: state.queue,
      editableSuite: state.editableSuite,
   };
}
export default withRouter(connect(mapStateToProps)(Suite));
