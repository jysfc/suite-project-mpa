import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link, withRouter } from "react-router-dom";
import BookNowIcon from "../../icons/book-now.svg";
import PropInfo from "../ui/PropInfo";
import TvIcon from "../../icons/tv.svg";
import SafeIcon from "../../icons/safe.svg";
import WifiIcon from "../../icons/wifi.svg";
import AccessibleIcon from "../../icons/accessible.svg";
import { connect } from "react-redux";

class Suite extends React.Component {
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
                           {this.props.editableSuite.totalKingBed > 0 && (
                              <span>
                                 {this.props.editableSuite.totalKingBed} king
                                 bed
                                 {this.props.editableSuite.totalKingBed > 1 && (
                                    <span>s</span>
                                 )}
                              </span>
                           )}
                           {this.props.editableSuite.totalQueenBed > 0 && (
                              <span>
                                 {" "}
                                 · {this.props.editableSuite.totalQueenBed}{" "}
                                 queen bed
                                 {this.props.editableSuite.totalQueenBed >
                                    1 && <span>s</span>}{" "}
                              </span>
                           )}
                           {this.props.editableSuite.totalFullBed > 0 && (
                              <span>
                                 {" "}
                                 · {this.props.editableSuite.totalFullBed} full
                                 bed
                                 {this.props.editableSuite.totalFullBed > 1 && (
                                    <span>s</span>
                                 )}{" "}
                              </span>
                           )}
                        </li>

                        {/* <!--SUITE AMENITIES--> */}

                        <li className="lead mt-4">Suite Amenities:</li>
                        <li>
                           <ul className="list-unstyled">
                              {this.props.editableSuite.hasWiFi && (
                                 <li>
                                    <img
                                       src={WifiIcon}
                                       width="16px"
                                       className="mr-1"
                                       alt=""
                                    />
                                    WiFi
                                 </li>
                              )}

                              {this.props.editableSuite.hasTv && (
                                 <li>
                                    <img
                                       src={TvIcon}
                                       width="16px"
                                       className="mr-1"
                                       alt=""
                                    />
                                    TV
                                 </li>
                              )}
                              {this.props.editableSuite.hasSafe && (
                                 <li>
                                    <img
                                       src={SafeIcon}
                                       width="16px"
                                       className="mr-1"
                                       alt=""
                                    />
                                    In-Room Safe
                                 </li>
                              )}

                              {this.props.editableSuite.isAccessible && (
                                 <li>
                                    <img
                                       src={AccessibleIcon}
                                       width="16px"
                                       className="mr-1"
                                       alt=""
                                    />
                                    Accessible
                                 </li>
                              )}
                           </ul>
                        </li>
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
      allSuites: state.allSuites,
      editableSuite: state.editableSuite,
   };
}
export default withRouter(connect(mapStateToProps)(Suite));
