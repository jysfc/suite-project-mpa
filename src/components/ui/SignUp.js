import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { withRouter } from "react-router-dom";
import { EMAIL_REGEX } from "../../utils/helpers";

class SignUp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   async setEmailState(emailInput) {
      const lowerCaseEmailInput = emailInput.toLowerCase();
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (EMAIL_REGEX.test(lowerCaseEmailInput) === false) {
         console.log(emailInput);
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   checkHasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
   }

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];

      if (passwordInput === "") {
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length <= 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         this.setState({
            passwordError:
               "For your safety, your password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "For your safety, your password must contain at least 3 unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   async validateAndCreateUser() {
      const emailInput = document.getElementById("sign-up-email-input").value;
      const passwordInput = document.getElementById("sign-up-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log(user);
         // redirect the user
         this.props.history.push("/select-property");
      }
   }

   render() {
      return (
         // <!-- new member card -->
         <div className="col-12 col-md-6 mt-4">
            <div className="text-dark">
               <h2>Hotel sign up</h2>
               <p className="mt-3">Sign up for Suite Project</p>

               {/* <!-- new member card button --> */}
               {!this.state.isDisplayingInputs && (
                  <button
                     className="btn btn-primary btn-lg mt-5"
                     onClick={() => {
                        this.showInputs();
                     }}
                     id="sign-up-button"
                     style={{ width: "100%" }}
                  >
                     Sign up
                  </button>
               )}

               {/* <!-- create account card --> */}
               <div id="create-account-card ">
                  {this.state.isDisplayingInputs && (
                     <>
                        <p className="text-primary mt-2 mb-5">
                           Collaboration starts here.
                        </p>
                        <div className="form-group">
                           <label
                              htmlFor="sign-up-email-input"
                              className="text-muted lead"
                           >
                              Email address
                           </label>
                           <input
                              type="email"
                              className={classnames({
                                 "form-control": true,
                                 "mb-2": true,
                                 "is-invalid": this.state.hasEmailError,
                              })}
                              id="sign-up-email-input"
                           />
                           {this.state.hasEmailError && (
                              <p
                                 className="text-danger"
                                 id="sign-up-email-error"
                              >
                                 {this.state.emailError}
                              </p>
                           )}
                        </div>
                        <div className="form-group">
                           <label
                              htmlFor="sign-up-password-input"
                              className="text-muted lead"
                           >
                              Create a password
                           </label>
                           <p className="text-muted mt-n2">
                              Must be at least 9 characters.
                           </p>
                           <input
                              type="password"
                              className={classnames({
                                 "form-control": true,
                                 "mb-2": true,
                                 "is-invalid": this.state.hasPasswordError,
                              })}
                              id="sign-up-password-input"
                           />

                           {this.state.hasPasswordError && (
                              <p
                                 className="text-danger"
                                 id="sign-up-password-error"
                              >
                                 {this.state.passwordError}
                              </p>
                           )}
                        </div>

                        <button
                           className="float-right btn btn-primary btn-lg"
                           id="lets-go"
                           style={{ width: "100%" }}
                           onClick={() => {
                              this.validateAndCreateUser();
                           }}
                        >
                           Let's go!
                        </button>
                     </>
                  )}
               </div>
            </div>
         </div>
      );
   }
}
export default withRouter(SignUp);
