import React from "react";
import { Link } from "react-router-dom";
import MIRHOS from "../../images/MIRHOS.jpg";
// import MIR2T from "../../images/MIR2T.jpg";
// import MBPANO from "../../images/MBPANO.jpg";

// export default class Result extends React.Component {
//    constructor(props) {
//       super(props); // allow access to this.
//       this.state = {
//          //local state
//          isHoveredOver: false,
//       };
//    }

//    render() {
export default function Result(props) {
   return (
      //<!--results-->
      <div
         className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
         style={{ maxWidth: "900px", height: "auto" }}
      >
         <div className="row">
            <div className="col-md-5 mt-2 crop">
               <img
                  //  src={require("../../images" + this.props.project.image).default}
                  src={MIRHOS}
                  className="img-fluid"
                  alt=""
               />
            </div>
            <div className="col-md-7">
               <div className="text-muted">
                  <Link
                     to="/suite"
                     className="text-dark text-decoration-none"
                     type="button"
                  >
                     <h2>{props.title}</h2>
                  </Link>
                  <p className="text-dark lead">{props.property}</p>
                  <p>
                     {props.squareFt} sq. ft · {props.maxGuest} max guests
                  </p>
                  <p>
                     {props.totalKingBed} king bed · {props.totalQueenBed} queen
                     beds
                  </p>

                  <p className="card-text"></p>
               </div>
            </div>
         </div>
      </div>
   );
}
//    }
// }
