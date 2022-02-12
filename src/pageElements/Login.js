import React from 'react';
import twoPersonIcon from '../images/twoPersonIcon.png';
import userIcon from '../images/userBlack.png';
import lockIcon from '../images/lock.png';
import googleIcon from '../images/googlePlusIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import facebookIcon from '../images/facebookIcon.png';
import Header from "../pageElements/Header";
import Footer from "../pageElements/Footer";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div className="container-fluid">
            <div className="row">

                {/* Adds Header Component */}
                <Header />

                <div className="preventHeader">preventHead</div>
                <div className="container py-md-4 p-3 preventFooter">
                    <div className="row py-md-2 py-0 loginPageBoxShadow boxShadow">
                        <div className="col-6 loginPageLeftOuterCont">
                            <div className="container-fluid">
                                <div className="col-9 mx-auto">
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
                                            <div className="confessImgCont">
                                                <img src={twoPersonIcon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-0">
                            <div className="container-fluid rightMainFormCont">

                                {/* Login form */}
                                <form className="col-md-8 col-12 px-0">
                                    <div className="secCheckText">Login to proceed</div>
                                    <div className="form-group">
                                        <label htmlFor="userName" className="loginPageFields">Username</label>
                                        <div className="refreshBtnDiv">
                                            <input type="text" className="form-control" id="userName" placeholder="e,g. JohDoe123" />
                                            <span className="fieldIcon">
                                                <img src={userIcon} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="loginPageFields">Password</label>
                                        <div className="refreshBtnDiv">
                                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                            <span className="fieldIcon">
                                                <img src={lockIcon} alt="" className="lockIcon" />
                                            </span>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn submitButton">Submit</button>


                                    <div className="logInUsingBnts">
                                        <div className="orLoginUsingCont py-3">
                                            <span>Or login using</span>
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
                                </form>
                                {/* End of Login form */}

                            </div>
                        </div>

                        {/* Link to register component */}
                        <Link to="/register" className="d-none d-md-flex justify-content-end loginFooterLink">
                            <div className="RegisterNowLinkCont col-6">
                                Don’t have an account? Register Now
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
