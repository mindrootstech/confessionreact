import React from 'react';
import logo from '../images/appLogo.png'
import userIcon from '../images/userAcc.png'
import homeIcon from '../images/home.png'
import confessIcon from '../images/confessShare.png'
import inboxIcon from '../images/inbox.png'


export default function Header(props) {

    // let currentUrl = window.location.href;
    // currentUrl = currentUrl.split("/");
    // currentUrl = currentUrl[(currentUrl.length) - 1];
    // console.log(currentUrl);

    return (
        <>
            <header className="mainHead col-12 posFixedForHeader">
                <div className="insideHeader container">
                    <div className="col-md-6 col-lg-7 headerLeftCol pl-0">
                        <img src={logo} alt="" className="appLogo" />
                        <span className="logoTitle">Logo</span>
                    </div>
                    <div className="col-md-6 col-lg-5 text-right container-fluid px-0">
                        <div className="row align-items-center justify-content-end">
                            {props.links ?
                            
                                <div className="col-10 d-none d-md-block">
                                    <div className="linksCont container-fluid">
                                        <div className="linkBtns">
                                            <span className="headIconCont">
                                                <img src={homeIcon} alt="" />
                                            </span>
                                            <span className="headLinkName activeLink">Home</span>
                                        </div>
                                        <div className="linkBtns">
                                            <span className="headIconCont">
                                                <img src={confessIcon} alt="" />
                                            </span>
                                            <span className="headLinkName">Confess/Share</span>
                                        </div>
                                        <div className="linkBtns">
                                            <span className="headIconCont">
                                                <img src={inboxIcon} alt="" />
                                            </span>
                                            <span className="headLinkName">Inbox</span>
                                        </div>
                                    </div>
                                </div>

                                : ''}
                            <div className="col-md-2 col-12">
                                <img src={userIcon} alt="" className="userAccIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
