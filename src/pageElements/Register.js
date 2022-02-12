import React from 'react';
import userIcon from '../images/userBlack.png';
import lockIcon from '../images/lock.png';
import googleIcon from '../images/googlePlusIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import emailIcon from '../images/emailIcon.png';
import facebookIcon from '../images/facebookIcon.png';
import Header from "../pageElements/Header";
import Footer from "../pageElements/Footer";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="container-fluid">
            <div className="row">

                {/* Adds Header Component */}
                <Header />

                <div className="preventHeader">preventHead</div>
                <div className="container py-md-4 p-3 preventFooter">
                    <div className="row py-2 loginPageBoxShadow boxShadow">
                        <div className="col-md-6 col-12 px-0">
                            <div className="container-fluid rightMainFormCont">

                                {/* Register Form */}
                                <form className="col-12 col-md-8 px-0">
                                    <div className="secCheckText">Register Now</div>
                                    <div className="form-group">
                                        <label htmlFor="regUserName" className="loginPageFields">Fullname</label>
                                        <div className="refreshBtnDiv">
                                            <input type="text" className="form-control" id="regUserName" placeholder="e,g. JohDoe123" />
                                            <span className="fieldIcon">
                                                <img src={userIcon} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userEmail" className="loginPageFields">Email</label>
                                        <div className="refreshBtnDiv">
                                            <input type="text" className="form-control" id="userEmail" placeholder="e,g. JohDoe123" />
                                            <span className="fieldIcon" autoCapitalize="true">
                                                <img src={emailIcon} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="regPassword" className="loginPageFields">Password</label>
                                        <div className="refreshBtnDiv">
                                            <input type="password" className="form-control" id="regPassword" placeholder="Enter your password" />
                                            <span className="fieldIcon">
                                                <img src={lockIcon} alt="" className="lockIcon" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="resetPassword" className="loginPageFields">Repeat password</label>
                                        <div className="refreshBtnDiv">
                                            <input type="password" className="form-control" id="resetPassword" placeholder="Enter your password" />
                                            <span className="fieldIcon">
                                                <img src={lockIcon} alt="" className="lockIcon" />
                                            </span>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn submitButton">Register </button>


                                    {/* Gets Visible in Mobiles Only */}
                                    <div className="logInUsingBnts d-md-none">
                                        <div className="orLoginUsingCont py-3">
                                            <span>Or Register using</span>
                                        </div>
                                        {/* Buttons Container */}
                                        <div className="logInUsingInsideCont">
                                            <button className="gmailBtn">
                                                <span className="socialBtnIcon">
                                                    <img src={googleIcon} alt="" />
                                                </span>
                                                <span className="socialBtnText">Gmail</span>

                                            </button>

                                            <button className="fbBtn">
                                                <span className="socialBtnIcon">
                                                    <img src={facebookIcon} alt="" />
                                                </span>
                                                <span className="socialBtnText">Facebook</span>
                                            </button>
                                            
                                            <button className="twitterBtn">
                                                <span className="socialBtnIcon">
                                                    <img src={twitterIcon} alt="" />
                                                </span>
                                                <span className="socialBtnText">Twitter</span></button>
                                        </div>
                                        {/* End of Buttons Container */}

                                    </div>
                                    {/* Gets Visible in Mobiles Only */}

                                </form>
                                {/* End of Register Form */}

                            </div>
                        </div>

                        <div className="col-md-6 col-12 registerPageRightCont">
                            <div className="container-fluid">
                                <div className="col-md-9 col-12 mx-auto">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="confesstText text-center">
                                                Login & Start Chatting
                                            </div>
                                        </div>
                                        <div className="col-12 loginInfoCont">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat posuere consectetur adipiscing elit. Nunc volutpat posuere
                                        </div>
                                        <div className="col-12">
                                            <div className="logInUsingBnts mt-4">
                                                <div className="py-3 registerOrLoginUsing">
                                                    <span>Or login using</span>
                                                </div>

                                                {/* Buttons Containers */}
                                                <div className="logInUsingInsideCont">
                                                    <button className="gmailBtn">
                                                        <span className="socialBtnIcon">
                                                            <img src={googleIcon} alt="" />
                                                        </span>
                                                        <span className="socialBtnText">Gmail</span>

                                                    </button>
                                                    <button className="fbBtn">
                                                        <span className="socialBtnIcon">
                                                            <img src={facebookIcon} alt="" />
                                                        </span>
                                                        <span className="socialBtnText">Facebook</span>
                                                    </button>
                                                
                                                    <button className="twitterBtn">
                                                        <span className="socialBtnIcon">
                                                            <img src={twitterIcon} alt="" />
                                                        </span>
                                                        <span className="socialBtnText">Twitter</span></button>
                                                </div>
                                                {/* End of Buttons Containers */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Link to register component */}
                        <Link to="/login" className="d-none d-md-flex justify-content-start loginFooterLink">
                            <div className="RegisterNowLinkCont col-6">
                                    Already have an account?Login Now                             
                            </div>
                        </Link>
                        {/* End of Link to register component */}
                    </div>

                    
                </div>

                <Footer/>
            </div>
        </div>
    );
}
