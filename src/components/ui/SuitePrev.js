import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

class SuitePrev extends React.Component {
   constructor(props) {
      super(props);
      if (this.props.queue.suites.length === 0) {
         this.props.history.push("");
      }
   }

   goToNextCard() {
      if (this.props.queue.index === this.props.queue.suites.length - 1) {
         // on the last card
         this.props.dispatch({ type: actions.INCREMENT_QUEUE_INDEX });
         this.props.history.push("");
      } else {
         this.props.dispatch({ type: actions.INCREMENT_QUEUE_INDEX });
         this.props.history.push("/suite");
      }
   }

   render() {
      return (
         //<!--SuitePrev-->
         <div
            className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
            style={{ maxWidth: "900px", height: "auto" }}
         >
            <div className="row">
               <div className="col-md-5 mt-2 crop">
                  <img
                     src={this.props.suite.image}
                     className="img-fluid"
                     alt={this.props.suite.title}
                  />
               </div>
               <div className="col-md-7">
                  <div className="text-muted">
                     <Link
                        to="/suite"
                        type="button"
                        className="text-dark text-decoration-none"
                        onClick={() => {
                           this.goToNextCard();
                        }}
                     >
                        <h2>{this.props.suite.title}</h2>
                     </Link>
                     <p className="text-dark lead">
                        {this.props.suite.property}
                     </p>
                     <p>
                        {this.props.suite.squareFt} sq. ft ·{" "}
                        {this.props.suite.maxGuest} max guests
                     </p>
                     <p>
                        {this.props.suite.totalKingBed} king bed ·{" "}
                        {this.props.suite.totalQueenBed} queen beds
                     </p>

                     <p className="card-text"></p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
function mapStateToProps(state) {
   return {
      queue: state.queue,
   };
}

export default withRouter(connect(mapStateToProps)(SuitePrev));
