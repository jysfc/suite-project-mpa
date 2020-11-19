import React from "react";
import { Link } from "react-router-dom";

export default function SuitePrev(props) {
   return (
      //<!--SuitePrevs-->
      <div
         className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
         style={{ maxWidth: "900px", height: "auto" }}
      >
         <div className="row">
            <div className="col-md-5 mt-2 crop">
               <img src={props.image} className="img-fluid" alt={props.title} />
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
