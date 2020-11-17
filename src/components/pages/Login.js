import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <AppTemplate>
         <div className="row">
            {/* <!--COL LEFT--> */}
            {/* <!--new member--> */}
            <div className="col-12 col-md-6 mt-4">
               <div className="text-dark">
                  <h2>Hotel sign up</h2>
                  <p className="mt-3">Sign up for Suite Project</p>

                  {/* <!-- new member button --> */}
                  <button
                     className="btn btn-primary btn-lg mt-5"
                     style={{ width: "100%" }}
                     id="sign-up-button"
                  >
                     Sign up
                  </button>

                  {/* <!-- create account--> */}
                  <div id="create-account-card" className="d-none">
                     <p className="text-primary mt-2 mb-5">
                        Collaboration starts here.
                     </p>
                     <div className="form-group">
                        <label
                           for="sign-up-email-input"
                           className="text-muted lead"
                        >
                           Email address
                        </label>
                        <input
                           type="email"
                           className="form-control"
                           id="sign-up-email-input"
                        />
                        <p className="text-danger" id="sign-up-email-error"></p>
                     </div>
                     <div className="form-group">
                        <label
                           for="sign-up-password-input"
                           className="text-muted lead"
                        >
                           Create a password
                        </label>
                        <p className="text-muted mt-n2">
                           Must be at least 9 characters.
                        </p>
                        <input
                           type="password"
                           className="form-control"
                           id="sign-up-password-input"
                        />
                        <p
                           className="text-danger"
                           id="sign-up-password-error"
                        ></p>
                     </div>

                     <button
                        className="float-right btn btn-primary btn-lg"
                        style={{ width: "100%" }}
                        id="lets-go"
                     >
                        Let's go!
                     </button>
                  </div>
               </div>
            </div>
            {/* <!--COL RIGHT--> */}
            {/* <!-- return card --> */}
            <div className="col-12 col-md-6">
               <div className="text-dark mt-4">
                  <h2>Welcome back</h2>
                  <p className="mt-3 mb-5">
                     Log in with your email address and password.
                  </p>

                  <div className="form-group">
                     <label for="email-input" className="text-muted lead">
                        Email address
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="email-input"
                     />
                  </div>
                  <div className="form-group">
                     <label for="password-input" className="text-muted lead">
                        Password
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="password-input"
                     />
                  </div>
                  <Link
                     to="select-property"
                     id="login-button"
                     className="float-right btn btn-primary btn-lg"
                  >
                     Log in
                  </Link>
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
