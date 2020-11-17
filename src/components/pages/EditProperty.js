import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import SaveIcon from "../../icons/save.svg";
import SuiteAddIcon from "../../icons/suite-add.svg";
import RemoveIcon from "../../icons/remove.svg";
import MIRHOS from "../../images/MIRHOS.jpg";
import MIR2T from "../../images/MIR2T.jpg";

export default function EditProperty() {
   return (
      <AppTemplate>
         <div className="row mb-4">
            <div className="container">
               <div className="row">
                  {/* <!--CoLUMN LEFT EDIT PROP--> */}
                  <div className="col-sm-6">
                     {/* <!--HOTEL & URL--> */}
                     <div className="form-row">
                        <div className="form-group col-lg-6">
                           <label for="inputHotel">Hotel</label>
                           <input
                              type="text"
                              className="form-control"
                              id="inputHotel"
                              placeholder="The Mirage Hotel & Casino"
                           />
                        </div>
                        <div className="form-group col-lg-6">
                           <label for="inputUrl">Website URL</label>
                           <input
                              type="url"
                              className="form-control"
                              id="inputUrl"
                              placeholder="www.mirage.com"
                           />
                        </div>
                     </div>
                     {/* <!--ADDRESS--> */}
                     <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input
                           type="text"
                           className="form-control"
                           id="inputAddress"
                           placeholder="3400 S Las Vegas Blvd"
                        />
                     </div>
                     <div className="form-group">
                        <label for="inputAddress2">Address 2</label>
                        <input
                           type="text"
                           className="form-control"
                           id="inputAddress2"
                           placeholder=""
                        />
                     </div>
                     {/* <!--CITY STATE ZIP COUNTRY--> */}
                     <div className="form-row">
                        <div className="form-group col-md-12">
                           <label for="inputCity">City</label>
                           <input
                              type="text"
                              className="form-control"
                              id="inputCity"
                              placeholder="Las Vegas"
                           />
                        </div>
                     </div>
                     {/* <!--State Abbreviation--> */}
                     <div className="form-row">
                        <div className="form-group col-md-4">
                           <label for="inputState">State</label>
                           <select id="inputState" className="form-control">
                              <option value="NV">Nevada</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                           </select>
                        </div>
                        <div className="form-group col-md-4">
                           <label for="inputZip">Zip</label>
                           <input
                              type="text"
                              className="form-control"
                              id="inputZip"
                              placeholder="89109"
                           />
                        </div>
                        {/* <!-- Country Abbreviation --> */}
                        <div className="form-group col-md-4">
                           <label for="inputState">Country</label>
                           <select id="inputState" className="form-control">
                              <option value="US">United States</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AX">Åland Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">
                                 Bolivia, Plurinational State of
                              </option>
                              <option value="BQ">
                                 Bonaire, Sint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                 British Indian Ocean Territory
                              </option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                 Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                 Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo</option>
                              <option value="CD">
                                 Congo, the Democratic Republic of the
                              </option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="CI">Côte d'Ivoire</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curaçao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">
                                 Falkland Islands (Malvinas)
                              </option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                 French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                 Heard Island and McDonald Islands
                              </option>
                              <option value="VA">
                                 Holy See (Vatican City State)
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">
                                 Iran, Islamic Republic of
                              </option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KP">
                                 Korea, Democratic People's Republic of
                              </option>
                              <option value="KR">Korea, Republic of</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">
                                 Lao People's Democratic Republic
                              </option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao</option>
                              <option value="MK">
                                 Macedonia, the former Yugoslav Republic of
                              </option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">
                                 Micronesia, Federated States of
                              </option>
                              <option value="MD">Moldova, Republic of</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="MP">
                                 Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">
                                 Palestinian Territory, Occupied
                              </option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">Réunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russian Federation</option>
                              <option value="RW">Rwanda</option>
                              <option value="BL">Saint Barthélemy</option>
                              <option value="SH">
                                 Saint Helena, Ascension and Tristan da Cunha
                              </option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">
                                 Saint Martin (French part)
                              </option>
                              <option value="PM">
                                 Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                 Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">
                                 Sint Maarten (Dutch part)
                              </option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                 South Georgia and the South Sandwich Islands
                              </option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syrian Arab Republic</option>
                              <option value="TW">
                                 Taiwan, Province of China
                              </option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">
                                 Tanzania, United Republic of
                              </option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                 Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UM">
                                 United States Minor Outlying Islands
                              </option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">
                                 Venezuela, Bolivarian Republic of
                              </option>
                              <option value="VN">Viet Nam</option>
                              <option value="VG">
                                 Virgin Islands, British
                              </option>
                              <option value="VI">Virgin Islands, U.S.</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                           </select>
                        </div>
                     </div>
                     {/* <!--PHONE--> */}
                     {/* <!-- country code & phone number--> */}
                     <div className="form-row">
                        <div className="form-group col-md-4">
                           <label for="inputCountryCode">Country Code</label>
                           <select id="countryCode" className="form-control">
                              <option data-countryCode="US" value="1">
                                 &#x1F1FA&#x1F1F8 United States of America (+1)
                              </option>
                              <option data-countryCode="AF" value="93">
                                 &#x1F1E6&#x1F1EB Afghanistan (+93)
                              </option>
                              <option data-countryCode="AL" value="355">
                                 &#x1F1E6&#x1F1FD Albania (+355)
                              </option>
                              <option data-countryCode="DZ" value="213">
                                 &#x1F1E9&#x1F1FF Algeria (+213)
                              </option>
                              <option data-countryCode="AD" value="376">
                                 &#x1F1E6&#x1F1E9 Andorra (+376)
                              </option>
                              <option data-countryCode="AO" value="244">
                                 &#x1F1E6&#x1F1F4 Angola (+244)
                              </option>
                              <option data-countryCode="AI" value="1264">
                                 &#x1F1E6&#x1F1EE Anguilla (+1264)
                              </option>
                              <option data-countryCode="AG" value="1268">
                                 &#x1F1E6&#x1F1EC Antigua &amp; Barbuda (+1268)
                              </option>
                              <option data-countryCode="AR" value="54">
                                 &#x1F1E6&#x1F1F7 Argentina (+54)
                              </option>
                              <option data-countryCode="AM" value="374">
                                 &#x1F1E6&#x1F1F2 Armenia (+374)
                              </option>
                              <option data-countryCode="AW" value="297">
                                 &#x1F1E6&#x1F1FC Aruba (+297)
                              </option>
                              <option data-countryCode="AC" value="247">
                                 &#x1F1E6&#x1F1E8 Ascension Island (+297)
                              </option>
                              <option data-countryCode="AU" value="61">
                                 &#x1F1E6&#x1F1FA Australia (+61)
                              </option>
                              <option data-countryCode="AT" value="43">
                                 &#x1F1E6&#x1F1F9 Austria (+43)
                              </option>
                              <option data-countryCode="AZ" value="994">
                                 &#x1F1E6&#x1F1FF Azerbaijan (+994)
                              </option>
                              <option data-countryCode="BS" value="1242">
                                 &#x1F1E7&#x1F1F8 Bahamas (+1242)
                              </option>
                              <option data-countryCode="BH" value="973">
                                 &#x1F1E7&#x1F1ED Bahrain (+973)
                              </option>
                              <option data-countryCode="BD" value="880">
                                 &#x1F1E7&#x1F1E9 Bangladesh (+880)
                              </option>
                              <option data-countryCode="BB" value="1246">
                                 &#x1F1E7&#x1F1E7 Barbados (+1246)
                              </option>
                              <option data-countryCode="BY" value="375">
                                 &#x1F1E7&#x1F1FE Belarus (+375)
                              </option>
                              <option data-countryCode="BE" value="32">
                                 &#x1F1E7&#x1F1EA Belgium (+32)
                              </option>
                              <option data-countryCode="BZ" value="501">
                                 &#x1F1E7&#x1F1FF Belize (+501)
                              </option>
                              <option data-countryCode="BJ" value="229">
                                 &#x1F1E7&#x1F1EF Benin (+229)
                              </option>
                              <option data-countryCode="BM" value="1441">
                                 &#x1F1E7&#x1F1F2 Bermuda (+1441)
                              </option>
                              <option data-countryCode="BT" value="975">
                                 &#x1F1E7&#x1F1F9 Bhutan (+975)
                              </option>
                              <option data-countryCode="BO" value="591">
                                 &#x1F1E7&#x1F1F4 Bolivia (+591)
                              </option>
                              <option data-countryCode="BQ" value="599">
                                 &#x1F1E7&#x1F1F6 Bonaire, Saba and Sint
                                 Eustatius (+599)
                              </option>
                              <option data-countryCode="BA" value="387">
                                 &#x1F1E7&#x1F1E6 Bosnia Herzegovina (+387)
                              </option>
                              <option data-countryCode="BW" value="267">
                                 &#x1F1E7&#x1F1FC Botswana (+267)
                              </option>
                              <option data-countryCode="BR" value="55">
                                 &#x1F1E7&#x1F1F7 Brazil (+55)
                              </option>
                              <option data-countryCode="IO" value="246">
                                 &#x1F1EE&#x1F1F4 British Indian Ocean Territory
                                 (+246)
                              </option>
                              <option data-countryCode="BN" value="673">
                                 &#x1F1E7&#x1F1F3 Brunei (+673)
                              </option>
                              <option data-countryCode="BG" value="359">
                                 &#x1F1E7&#x1F1EC Bulgaria (+359)
                              </option>
                              <option data-countryCode="BF" value="226">
                                 &#x1F1E7&#x1F1EB Burkina Faso (+226)
                              </option>
                              <option data-countryCode="BI" value="257">
                                 &#x1F1E7&#x1F1EE Burundi (+257)
                              </option>
                              <option data-countryCode="KH" value="855">
                                 &#x1F1F0&#x1F1ED Cambodia (+855)
                              </option>
                              <option data-countryCode="CM" value="237">
                                 &#x1F1E8&#x1F1F2 Cameroon (+237)
                              </option>
                              <option data-countryCode="CA" value="1">
                                 &#x1F1E8&#x1F1E6 Canada (+1)
                              </option>
                              <option data-countryCode="CV" value="238">
                                 &#x1F1E8&#x1F1FB Cape Verde Islands (+238)
                              </option>
                              <option data-countryCode="KY" value="1345">
                                 &#x1F1F0&#x1F1FE Cayman Islands (+1345)
                              </option>
                              <option data-countryCode="CF" value="236">
                                 &#x1F1E8&#x1F1EB Central African Republic
                                 (+236)
                              </option>
                              <option data-countryCode="TD" value="235">
                                 &#x1F1F9&#x1F1E9 Chad (+235)
                              </option>
                              <option data-countryCode="CL" value="56">
                                 &#x1F1E8&#x1F1F1 Chile (+56)
                              </option>
                              <option data-countryCode="CN" value="86">
                                 &#x1F1E8&#x1F1F3 China (+86)
                              </option>
                              <option data-countryCode="CO" value="57">
                                 &#x1F1E8&#x1F1F4 Colombia (+57)
                              </option>
                              <option data-countryCode="KM" value="269">
                                 &#x1F1F0&#x1F1F2 Comoros (+269)
                              </option>
                              <option data-countryCode="CG" value="242">
                                 &#x1F1E8&#x1F1EC Congo (+242)
                              </option>
                              <option data-countryCode="CD" value="243">
                                 &#x1F1E8&#x1F1E9 Congo, Democratic Republic of
                                 the (+243)
                              </option>
                              <option data-countryCode="CK" value="682">
                                 &#x1F1E8&#x1F1F0 Cook Islands (+682)
                              </option>
                              <option data-countryCode="CR" value="506">
                                 &#x1F1E8&#x1F1F7 Costa Rica (+506)
                              </option>
                              <option data-countryCode="HR" value="385">
                                 &#x1F1ED&#x1F1F7 Croatia (+385)
                              </option>
                              <option data-countryCode="CU" value="53">
                                 &#x1F1E8&#x1F1FA Cuba (+53)
                              </option>
                              <option data-countryCode="CW" value="5999">
                                 &#x1F1E8&#x1F1FC Curaçao (+5999)
                              </option>
                              <option data-countryCode="CY" value="357">
                                 &#x1F1E8&#x1F1FE Cyprus (+357)
                              </option>
                              <option data-countryCode="CZ" value="420">
                                 &#x1F1E8&#x1F1FF Czech Republic (+420)
                              </option>
                              <option data-countryCode="DK" value="45">
                                 &#x1F1E9&#x1F1F0 Denmark (+45)
                              </option>
                              <option data-countryCode="DJ" value="253">
                                 &#x1F1E9&#x1F1EF Djibouti (+253)
                              </option>
                              <option data-countryCode="DM" value="1767">
                                 &#x1F1E9&#x1F1F2 Dominica (+1767)
                              </option>
                              <option data-countryCode="DO" value="1809">
                                 &#x1F1E9&#x1F1F4 Dominican Republic (+1809)
                              </option>
                              <option data-countryCode="TL" value="670">
                                 &#x1F1F9&#x1F1F1 East Timor (+670)
                              </option>
                              <option data-countryCode="EC" value="593">
                                 &#x1F1EA&#x1F1E8 Ecuador (+593)
                              </option>
                              <option data-countryCode="EG" value="20">
                                 &#x1F1EA&#x1F1EC Egypt (+20)
                              </option>
                              <option data-countryCode="SV" value="503">
                                 &#x1F1F8&#x1F1FB El Salvador (+503)
                              </option>
                              <option data-countryCode="GQ" value="240">
                                 &#x1F1EC&#x1F1F6 Equatorial Guinea (+240)
                              </option>
                              <option data-countryCode="ER" value="291">
                                 &#x1F1EA&#x1F1F7 Eritrea (+291)
                              </option>
                              <option data-countryCode="EE" value="372">
                                 &#x1F1EA&#x1F1EA Estonia (+372)
                              </option>
                              <option data-countryCode="SZ" value="268">
                                 &#x1F1F8&#x1F1FF Eswatini (+268)
                              </option>
                              <option data-countryCode="ET" value="251">
                                 &#x1F1EA&#x1F1F9 Ethiopia (+251)
                              </option>
                              <option data-countryCode="FK" value="500">
                                 &#x1F1EB&#x1F1F0 Falkland Islands (+500)
                              </option>
                              <option data-countryCode="FO" value="298">
                                 &#x1F1EB&#x1F1F4 Faroe Islands (+298)
                              </option>
                              <option data-countryCode="FJ" value="679">
                                 &#x1F1EB&#x1F1EF Fiji (+679)
                              </option>
                              <option data-countryCode="FI" value="358">
                                 &#x1F1EB&#x1F1EE Finland (+358)
                              </option>
                              <option data-countryCode="FR" value="33">
                                 &#x1F1EB&#x1F1F7 France (+33)
                              </option>
                              <option data-countryCode="GF" value="594">
                                 &#x1F1EC&#x1F1EB French Guiana (+594)
                              </option>
                              <option data-countryCode="PF" value="689">
                                 &#x1F1F5&#x1F1EB French Polynesia (+689)
                              </option>
                              <option data-countryCode="GA" value="241">
                                 &#x1F1EC&#x1F1E6 Gabon (+241)
                              </option>
                              <option data-countryCode="GM" value="220">
                                 &#x1F1EC&#x1F1F2 Gambia (+220)
                              </option>
                              <option data-countryCode="GE" value="995">
                                 &#x1F1EC&#x1F1EA Georgia (+995)
                              </option>
                              <option data-countryCode="DE" value="49">
                                 &#x1F1E9&#x1F1EA Germany (+49)
                              </option>
                              <option data-countryCode="GH" value="233">
                                 &#x1F1EC&#x1F1ED Ghana (+233)
                              </option>
                              <option data-countryCode="GI" value="350">
                                 &#x1F1EC&#x1F1EE Gibraltar (+350)
                              </option>
                              <option data-countryCode="GR" value="30">
                                 &#x1F1EC&#x1F1F7 Greece (+30)
                              </option>
                              <option data-countryCode="GL" value="299">
                                 &#x1F1EC&#x1F1F1 Greenland (+299)
                              </option>
                              <option data-countryCode="GD" value="1473">
                                 &#x1F1EC&#x1F1E9 Grenada (+1473)
                              </option>
                              <option data-countryCode="GP" value="590">
                                 &#x1F1EC&#x1F1F5 Guadeloupe (+590)
                              </option>
                              <option data-countryCode="GU" value="1671">
                                 &#x1F1EC&#x1F1FA Guam (+1671)
                              </option>
                              <option data-countryCode="GT" value="502">
                                 &#x1F1EC&#x1F1F9 Guatemala (+502)
                              </option>
                              <option data-countryCode="GN" value="224">
                                 &#x1F1EC&#x1F1F3 Guinea (+224)
                              </option>
                              <option data-countryCode="GW" value="245">
                                 &#x1F1EC&#x1F1FC Guinea - Bissau (+245)
                              </option>
                              <option data-countryCode="GY" value="592">
                                 &#x1F1EC&#x1F1FE Guyana (+592)
                              </option>
                              <option data-countryCode="HT" value="509">
                                 &#x1F1ED&#x1F1F9 Haiti (+509)
                              </option>
                              <option data-countryCode="HN" value="504">
                                 &#x1F1ED&#x1F1F3 Honduras (+504)
                              </option>
                              <option data-countryCode="HK" value="852">
                                 &#x1F1ED&#x1F1F0 Hong Kong (+852)
                              </option>
                              <option data-countryCode="HU" value="36">
                                 &#x1F1ED&#x1F1FA Hungary (+36)
                              </option>
                              <option data-countryCode="IS" value="354">
                                 &#x1F1EE&#x1F1F8 Iceland (+354)
                              </option>
                              <option data-countryCode="IN" value="91">
                                 &#x1F1EE&#x1F1F3 India (+91)
                              </option>
                              <option data-countryCode="ID" value="62">
                                 &#x1F1EE&#x1F1E9 Indonesia (+62)
                              </option>
                              <option data-countryCode="IR" value="98">
                                 &#x1F1EE&#x1F1F7 Iran (+98)
                              </option>
                              <option data-countryCode="IQ" value="964">
                                 &#x1F1EE&#x1F1F6 Iraq (+964)
                              </option>
                              <option data-countryCode="IE" value="353">
                                 &#x1F1EE&#x1F1EA Ireland (+353)
                              </option>
                              <option data-countryCode="IL" value="972">
                                 &#x1F1EE&#x1F1F1 Israel (+972)
                              </option>
                              <option data-countryCode="IT" value="39">
                                 &#x1F1EE&#x1F1F9 Italy (+39)
                              </option>
                              <option data-countryCode="CI" value="225">
                                 &#x1F1E8&#x1F1EE Ivory Coast (+225)
                              </option>
                              <option data-countryCode="JM" value="1876">
                                 &#x1F1EF&#x1F1F2 Jamaica (+1876)
                              </option>
                              <option data-countryCode="JP" value="81">
                                 &#x1F1EF&#x1F1F5 Japan (+81)
                              </option>
                              <option data-countryCode="JO" value="962">
                                 &#x1F1EF&#x1F1F4 Jordan (+962)
                              </option>
                              <option data-countryCode="KZ" value="7">
                                 &#x1F1F0&#x1F1FF Kazakhstan (+7)
                              </option>
                              <option data-countryCode="KE" value="254">
                                 &#x1F1F0&#x1F1EA Kenya (+254)
                              </option>
                              <option data-countryCode="KI" value="686">
                                 &#x1F1F0&#x1F1EE Kiribati (+686)
                              </option>
                              <option data-countryCode="KP" value="850">
                                 &#x1F1F0&#x1F1F5 Korea, North (+850)
                              </option>
                              <option data-countryCode="KR" value="82">
                                 &#x1F1F0&#x1F1F7 Korea, South (+82)
                              </option>
                              <option data-countryCode="XK" value="383">
                                 &#x1F1FD&#x1F1F0 Kosovo (+383)
                              </option>
                              <option data-countryCode="KW" value="965">
                                 &#x1F1F0&#x1F1FC Kuwait (+965)
                              </option>
                              <option data-countryCode="KG" value="996">
                                 &#x1F1F0&#x1F1EC Kyrgyzstan (+996)
                              </option>
                              <option data-countryCode="LA" value="856">
                                 &#x1F1F1&#x1F1E6 Laos (+856)
                              </option>
                              <option data-countryCode="LV" value="371">
                                 &#x1F1F1&#x1F1FB Latvia (+371)
                              </option>
                              <option data-countryCode="LB" value="961">
                                 &#x1F1F1&#x1F1E7 Lebanon (+961)
                              </option>
                              <option data-countryCode="LS" value="266">
                                 &#x1F1F1&#x1F1F8 Lesotho (+266)
                              </option>
                              <option data-countryCode="LR" value="231">
                                 &#x1F1F1&#x1F1F7 Liberia (+231)
                              </option>
                              <option data-countryCode="LY" value="218">
                                 &#x1F1F1&#x1F1FE Libya (+218)
                              </option>
                              <option data-countryCode="LI" value="423">
                                 &#x1F1F1&#x1F1EE Liechtenstein (+423)
                              </option>
                              <option data-countryCode="LT" value="370">
                                 &#x1F1F1&#x1F1F9 Lithuania (+370)
                              </option>
                              <option data-countryCode="LU" value="352">
                                 &#x1F1F1&#x1F1FA Luxembourg (+352)
                              </option>
                              <option data-countryCode="MO" value="853">
                                 &#x1F1F2&#x1F1F4 Macao (+853)
                              </option>
                              <option data-countryCode="MK" value="389">
                                 &#x1F1F2&#x1F1F0 Macedonia (+389)
                              </option>
                              <option data-countryCode="MG" value="261">
                                 &#x1F1F2&#x1F1EC Madagascar (+261)
                              </option>
                              <option data-countryCode="MW" value="265">
                                 &#x1F1F2&#x1F1FC Malawi (+265)
                              </option>
                              <option data-countryCode="MY" value="60">
                                 &#x1F1F2&#x1F1FE Malaysia (+60)
                              </option>
                              <option data-countryCode="MV" value="960">
                                 &#x1F1F2&#x1F1FB Maldives (+960)
                              </option>
                              <option data-countryCode="ML" value="223">
                                 &#x1F1F2&#x1F1F1 Mali (+223)
                              </option>
                              <option data-countryCode="MT" value="356">
                                 &#x1F1F2&#x1F1F9 Malta (+356)
                              </option>
                              <option data-countryCode="MH" value="692">
                                 &#x1F1F2&#x1F1ED Marshall Islands (+692)
                              </option>
                              <option data-countryCode="MQ" value="596">
                                 &#x1F1F2&#x1F1F6 Martinique (+596)
                              </option>
                              <option data-countryCode="MR" value="222">
                                 &#x1F1F2&#x1F1F7 Mauritania (+222)
                              </option>
                              <option data-countryCode="MU" value="230">
                                 &#x1F1F2&#x1F1FA Mauritius (+230)
                              </option>
                              <option data-countryCode="YT" value="262">
                                 &#x1F1FE&#x1F1F9 Mayotte (+262)
                              </option>
                              <option data-countryCode="MX" value="52">
                                 &#x1F1F2&#x1F1FD Mexico (+52)
                              </option>
                              <option data-countryCode="FM" value="691">
                                 &#x1F1EB&#x1F1F2 Micronesia (+691)
                              </option>
                              <option data-countryCode="MD" value="373">
                                 &#x1F1F2&#x1F1E9 Moldova (+373)
                              </option>
                              <option data-countryCode="MC" value="377">
                                 &#x1F1F2&#x1F1E8 Monaco (+377)
                              </option>
                              <option data-countryCode="MN" value="976">
                                 &#x1F1F2&#x1F1F3 Mongolia (+976)
                              </option>
                              <option data-countryCode="ME" value="382">
                                 &#x1F1F2&#x1F1EA Montenegro (+382)
                              </option>
                              <option data-countryCode="MS" value="1664">
                                 &#x1F1F2&#x1F1F8 Montserrat (+1664)
                              </option>
                              <option data-countryCode="MA" value="212">
                                 &#x1F1F2&#x1F1E6 Morocco (+212)
                              </option>
                              <option data-countryCode="MZ" value="258">
                                 &#x1F1F2&#x1F1FF Mozambique (+258)
                              </option>
                              <option data-countryCode="MN" value="95">
                                 &#x1F1F2&#x1F1F2 Myanmar (+95)
                              </option>
                              <option data-countryCode="NA" value="264">
                                 &#x1F1F3&#x1F1E6 Namibia (+264)
                              </option>
                              <option data-countryCode="NR" value="674">
                                 &#x1F1F3&#x1F1F7 Nauru (+674)
                              </option>
                              <option data-countryCode="NP" value="977">
                                 &#x1F1F3&#x1F1F5 Nepal (+977)
                              </option>
                              <option data-countryCode="NL" value="31">
                                 &#x1F1F3&#x1F1F1 Netherlands (+31)
                              </option>
                              <option data-countryCode="NC" value="687">
                                 &#x1F1F3&#x1F1E8 New Caledonia (+687)
                              </option>
                              <option data-countryCode="NZ" value="64">
                                 &#x1F1F3&#x1F1FF New Zealand (+64)
                              </option>
                              <option data-countryCode="NI" value="505">
                                 &#x1F1F3&#x1F1EE Nicaragua (+505)
                              </option>
                              <option data-countryCode="NE" value="227">
                                 &#x1F1F3&#x1F1EA Niger (+227)
                              </option>
                              <option data-countryCode="NG" value="234">
                                 &#x1F1F3&#x1F1EC Nigeria (+234)
                              </option>
                              <option data-countryCode="NU" value="683">
                                 &#x1F1F3&#x1F1FA Niue (+683)
                              </option>
                              <option data-countryCode="NF" value="672">
                                 &#x1F1F3&#x1F1EB Norfolk Islands (+67)
                                 <option data-countryCode="NP" value="1670">
                                    &#x1F1F2&#x1F1F5 Northern Mariana Islands
                                    (+1670)
                                 </option>
                                 <option data-countryCode="NO" value="47">
                                    &#x1F1F3&#x1F1F4 Norway (+47)
                                 </option>
                                 <option data-countryCode="OM" value="968">
                                    &#x1F1F4&#x1F1F2 Oman (+968)
                                 </option>
                                 <option data-countryCode="PK" value="92">
                                    &#x1F1F5&#x1F1F0 Pakistan (+92)
                                 </option>
                                 <option data-countryCode="PW" value="680">
                                    &#x1F1F5&#x1F1FC Palau (+680)
                                 </option>
                                 <option data-countryCode="PS" value="970">
                                    &#x1F1F5&#x1F1F8 Palestine (+970)
                                 </option>
                                 <option data-countryCode="PA" value="507">
                                    &#x1F1F5&#x1F1E6 Panama (+507)
                                 </option>
                                 <option data-countryCode="PG" value="675">
                                    &#x1F1F5&#x1F1EC Papua New Guinea (+675)
                                 </option>
                                 <option data-countryCode="PY" value="595">
                                    &#x1F1F5&#x1F1FE Paraguay (+595)
                                 </option>
                                 <option data-countryCode="PE" value="51">
                                    &#x1F1F5&#x1F1EA Peru (+51)
                                 </option>
                                 <option data-countryCode="PH" value="63">
                                    &#x1F1F5&#x1F1ED Philippines (+63)
                                 </option>
                                 <option data-countryCode="PL" value="48">
                                    &#x1F1F5&#x1F1F1 Poland (+48)
                                 </option>
                                 <option data-countryCode="PT" value="351">
                                    &#x1F1F5&#x1F1F9 Portugal (+351)
                                 </option>
                                 <option data-countryCode="PR" value="1787">
                                    &#x1F1F5&#x1F1F7 Puerto Rico (+1787)
                                 </option>
                                 <option data-countryCode="QA" value="974">
                                    &#x1F1F6&#x1F1E6 Qatar (+974)
                                 </option>
                                 <option data-countryCode="RE" value="262">
                                    &#x1F1F7&#x1F1EA Réunion (+262)
                                 </option>
                                 <option data-countryCode="RO" value="40">
                                    &#x1F1F7&#x1F1F4 Romania (+40)
                                 </option>
                                 <option data-countryCode="RU" value="7">
                                    &#x1F1F7&#x1F1FA Russia (+7)
                                 </option>
                                 <option data-countryCode="RW" value="250">
                                    &#x1F1F7&#x1F1FC Rwanda (+250)
                                 </option>
                                 <option data-countryCode="WS" value="685">
                                    &#x1F1FC&#x1F1F8 Samoa (+685)
                                 </option>
                                 <option data-countryCode="SM" value="378">
                                    &#x1F1F8&#x1F1F2 San Marino (+378)
                                 </option>
                                 <option data-countryCode="ST" value="239">
                                    &#x1F1F8&#x1F1F9 São Tomé &amp; Principe
                                    (+239)
                                 </option>
                                 <option data-countryCode="SA" value="966">
                                    &#x1F1F8&#x1F1E6 Saudi Arabia (+966)
                                 </option>
                                 <option data-countryCode="SN" value="221">
                                    &#x1F1F8&#x1F1F3 Senegal (+221)
                                 </option>
                                 <option data-countryCode="CS" value="381">
                                    &#x1F1F7&#x1F1F8 Serbia (+381)
                                 </option>
                                 <option data-countryCode="SC" value="248">
                                    &#x1F1F8&#x1F1E8 Seychelles (+248)
                                 </option>
                                 <option data-countryCode="SL" value="232">
                                    &#x1F1F8&#x1F1F1 Sierra Leone (+232)
                                 </option>
                                 <option data-countryCode="SG" value="65">
                                    &#x1F1F8&#x1F1EC Singapore (+65)
                                 </option>
                                 <option data-countryCode="SK" value="421">
                                    &#x1F1F8&#x1F1F0 Slovakia (+421)
                                 </option>
                                 <option data-countryCode="SI" value="386">
                                    &#x1F1F8&#x1F1EE Slovenia (+386)
                                 </option>
                                 <option data-countryCode="SB" value="677">
                                    &#x1F1F8&#x1F1E7 Solomon Islands (+677)
                                 </option>
                                 <option data-countryCode="SO" value="252">
                                    &#x1F1F8&#x1F1F4 Somalia (+252)
                                 </option>
                                 <option data-countryCode="ZA" value="27">
                                    &#x1F1FF&#x1F1E6 South Africa (+27)
                                 </option>
                                 <option data-countryCode="SS" value="211">
                                    &#x1F1F8&#x1F1F8 South Sudan (+211)
                                 </option>
                                 <option data-countryCode="ES" value="34">
                                    &#x1F1EA&#x1F1F8 Spain (+34)
                                 </option>
                                 <option data-countryCode="LK" value="94">
                                    &#x1F1F1&#x1F1F0 Sri Lanka (+94)
                                 </option>
                                 <option data-countryCode="SH" value="290">
                                    &#x1F1F8&#x1F1ED St. Helena (+290)
                                 </option>
                                 <option data-countryCode="KN" value="1869">
                                    &#x1F1F0&#x1F1F3 St. Kitts and Nevis (+1869)
                                 </option>
                                 <option data-countryCode="SC" value="1758">
                                    &#x1F1F1&#x1F1E8 St. Lucia (+1758)
                                 </option>
                                 <option data-countryCode="PM" value="508">
                                    &#x1F1F5&#x1F1F2 St. Pierre and Miquelon
                                    (+508)
                                 </option>
                                 <option data-countryCode="SD" value="249">
                                    &#x1F1F8&#x1F1E9 Sudan (+249)
                                 </option>
                                 <option data-countryCode="SR" value="597">
                                    &#x1F1F8&#x1F1F7 Suriname (+597)
                                 </option>
                                 <option data-countryCode="SE" value="46">
                                    &#x1F1F8&#x1F1EA Sweden (+46)
                                 </option>
                                 <option data-countryCode="CH" value="41">
                                    &#x1F1E8&#x1F1ED Switzerland (+41)
                                 </option>
                                 <option data-countryCode="SI" value="963">
                                    &#x1F1F8&#x1F1FE Syria (+963)
                                 </option>
                                 <option data-countryCode="TW" value="886">
                                    &#x1F1F9&#x1F1FC Taiwan (+886)
                                 </option>
                                 <option data-countryCode="TJ" value="992">
                                    &#x1F1F9&#x1F1EF Tajikstan (+992)
                                 </option>
                                 <option data-countryCode="TZ" value="255">
                                    &#x1F1F9&#x1F1FF Tanzania (+255)
                                 </option>
                                 <option data-countryCode="TH" value="66">
                                    &#x1F1F9&#x1F1ED Thailand (+66)
                                 </option>
                                 <option data-countryCode="TG" value="228">
                                    &#x1F1F9&#x1F1EC Togo (+228)
                                 </option>
                                 <option data-countryCode="TK" value="90">
                                    &#x1F1F9&#x1F1F0 Tokelau (+690)
                                 </option>
                                 <option data-countryCode="TO" value="676">
                                    &#x1F1F9&#x1F1F4 Tonga (+676)
                                 </option>
                                 <option data-countryCode="TT" value="1868">
                                    &#x1F1F9&#x1F1F9 Trinidad &amp; Tobago
                                    (+1868)
                                 </option>
                                 <option data-countryCode="TN" value="216">
                                    &#x1F1F9&#x1F1F3 Tunisia (+216)
                                 </option>
                                 <option data-countryCode="TR" value="90">
                                    &#x1F1F9&#x1F1F7 Turkey (+90)
                                 </option>
                                 <option data-countryCode="TM" value="993">
                                    &#x1F1F9&#x1F1F2 Turkmenistan (+993)
                                 </option>
                                 <option data-countryCode="TC" value="1649">
                                    &#x1F1F9&#x1F1E8 Turks &amp; Caicos Islands
                                    (+1649)
                                 </option>
                                 <option data-countryCode="TV" value="688">
                                    &#x1F1F9&#x1F1FB Tuvalu (+688)
                                 </option>
                                 <option data-countryCode="UG" value="256">
                                    &#x1F1FA&#x1F1EC Uganda (+256)
                                 </option>
                                 <option data-countryCode="UA" value="380">
                                    &#x1F1FA&#x1F1E6 Ukraine (+380)
                                 </option>
                                 <option data-countryCode="AE" value="971">
                                    &#x1F1E6&#x1F1EA United Arab Emirates (+971)
                                 </option>
                                 <option data-countryCode="GB" value="44">
                                    &#x1F1EC&#x1F1E7 United Kingdom (+44)
                                 </option>
                                 <option data-countryCode="US" value="1">
                                    &#x1F1FA&#x1F1F8 United States of America
                                    (+1)
                                 </option>
                                 <option data-countryCode="UY" value="598">
                                    &#x1F1FA&#x1F1FE Uruguay (+598)
                                 </option>
                                 <option data-countryCode="UZ" value="998">
                                    &#x1F1FA&#x1F1FF Uzbekistan (+998)
                                 </option>
                                 <option data-countryCode="VU" value="678">
                                    &#x1F1FB&#x1F1FA Vanuatu (+678)
                                 </option>
                                 <option data-countryCode="VA" value="39">
                                    &#x1F1FB&#x1F1E6 Vatican City (+39)
                                 </option>
                                 <option data-countryCode="VE" value="58">
                                    &#x1F1FB&#x1F1EA Venezuela (+58)
                                 </option>
                                 <option data-countryCode="VN" value="84">
                                    &#x1F1FB&#x1F1F3 Vietnam (+84)
                                 </option>
                                 <option data-countryCode="VG" value="1284">
                                    &#x1F1FB&#x1F1EC Virgin Islands - British
                                    (+1284)
                                 </option>
                                 <option data-countryCode="VI" value="1340">
                                    &#x1F1FB&#x1F1EE Virgin Islands - US (+1340)
                                 </option>
                                 <option data-countryCode="WF" value="681">
                                    &#x1F1FC&#x1F1EB Wallis &amp; Futuna (+681)
                                 </option>
                                 <option data-countryCode="EH" value="967">
                                    &#x1F1EA&#x1F1ED Western Sahara (+212)
                                 </option>
                                 <option data-countryCode="YE" value="967">
                                    &#x1F1FE&#x1F1EA Yemen (+967)
                                 </option>
                                 <option data-countryCode="ZM" value="260">
                                    &#x1F1FF&#x1F1F2 Zambia (+260)
                                 </option>
                                 <option data-countryCode="ZW" value="263">
                                    &#x1F1FF&#x1F1FC Zimbabwe (+263)
                                 </option>
                              </option>
                           </select>
                           <div className="form-group col-md-8">
                              <label for="inputPhone">Phone Number</label>
                              <input
                                 type="phone"
                                 className="form-control"
                                 id="inputPhone"
                                 placeholder="702-791-7111"
                              />
                           </div>
                        </div>
                     </div>
                     {/* <!--HOTEL AMENITIES CHECKBOX--> */}
                     <div className="form-row">
                        <div className="form-group col-md-12">
                           <p className="lead">Hotel Amenities</p>
                        </div>

                        <div className="form-group form-check-inline">
                           <input
                              className="form-check-input"
                              type="checkbox"
                              id="OutdoorPool"
                              value="option2"
                           />
                           <label
                              className="form-check-label"
                              for="OutdoorPool"
                           >
                              Outdoor Pool
                           </label>
                        </div>

                        <div className="form-group form-check-inline">
                           <input
                              className="form-check-input"
                              type="checkbox"
                              id="Spa"
                              value="option4"
                           />
                           <label className="form-check-label" for="Spa">
                              Spa
                           </label>
                        </div>

                        <div className="form-group form-check-inline">
                           <input
                              className="form-check-input"
                              type="checkbox"
                              id="DogFriendly"
                              value="option6"
                           />
                           <label
                              className="form-check-label"
                              for="DogFriendly"
                           >
                              Dog Friendly
                           </label>
                        </div>
                        <div className="form-group form-check-inline">
                           <input
                              className="form-check-input"
                              type="checkbox"
                              id="SmokeFree"
                              value="option7"
                           />
                           <label className="form-check-label" for="SmokeFree">
                              Smoke-free
                           </label>
                        </div>
                     </div>

                     <Link
                        to="/edit-property"
                        className="btn btn-primary btn-block mb-4"
                        c
                        id="save"
                     >
                        <img
                           src={SaveIcon}
                           width="24px"
                           className="mr-2"
                           id="property-add"
                           alt=""
                        />
                        Save
                     </Link>
                  </div>

                  {/* <!--COLUMN RIGHT PROP RESULT--> */}
                  <div className="col-sm-6">
                     {/* <!--RESULT 1--> */}
                     <div
                        className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
                        style={{ maxWidth: "900px", height: "auto" }}
                     >
                        <div className="row">
                           <div className="col-md-5 pr-1">
                              <img
                                 src={MIRHOS}
                                 className="img-fluid"
                                 alt="MIRHOS"
                              />
                           </div>
                           <div className="col-md-7 mt-2">
                              <div className="text-muted">
                                 <Link
                                    to="/edit-suite"
                                    className="text-dark lead text-decoration-none"
                                    type="button"
                                 >
                                    Two Bedroom Hospitality Suite
                                 </Link>
                                 <Link
                                    to=""
                                    className="text-danger text-decoration-none float-right"
                                 >
                                    <img
                                       src={RemoveIcon}
                                       width="20px"
                                       id="property-remove"
                                       alt=""
                                    />
                                    Remove
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <!--RESULT 2--> */}
                     <div
                        className="mb-3 mt-4 shadow p-3 mb-5 bg-white rounded"
                        style={{ maxWidth: "900px", height: "auto" }}
                     >
                        <div className="row">
                           <div className="col-md-5 pr-2">
                              <img
                                 src={MIR2T}
                                 className="img-fluid"
                                 alt="MIR2T"
                              />
                           </div>
                           <div className="col-md-7 mt-2">
                              <div className="text-muted">
                                 <Link
                                    to="/edit-suite"
                                    className="text-dark lead text-decoration-none"
                                    type="button"
                                 >
                                    Two Bedroom Tower Suite
                                 </Link>
                                 <Link
                                    to=""
                                    className="text-danger text-decoration-none float-right"
                                 >
                                    <img
                                       src={RemoveIcon}
                                       width="20px"
                                       id="property-remove"
                                       alt=""
                                    />
                                    Remove
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <!--NEW PROP--> */}
                     <div className="col mb-4">
                        <Link
                           to="/edit-suite"
                           className="text-decoration-none"
                           type="add-suite"
                        >
                           <img
                              src={SuiteAddIcon}
                              width="24px"
                              id="suite-add"
                              alt=""
                           />
                           <p className="d-inline ml-4">Add Suite</p>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AppTemplate>
   );
}
