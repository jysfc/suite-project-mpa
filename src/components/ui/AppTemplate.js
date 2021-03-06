import React from "react";
import Header from "../ui/Header";

export default function AppTemplate(props) {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
               <Header />
               {props.children}
            </div>
         </div>
      </div>
   );
}
