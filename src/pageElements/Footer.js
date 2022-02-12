import React from 'react';
import homeIcon from '../images/home.png'
import messageMobile from '../images/messageMobile.png'
import inboxIconMobile from '../images/inboxIconMobile.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="col-12 d-block d-md-none footer">
            <div className="linksCont container-fluid">
                <div className="linkBtns">
                    <Link to="/">
                        <span className="headIconCont">
                            <img src={homeIcon} alt="" />
                        </span>
                    </Link>
                    <span className="headLinkName activeLink">Home</span>
                </div>
                <div className="linkBtns">
                    <Link to="/login">
                        <span className="headIconCont">
                            <img src={messageMobile} alt="" />
                        </span>
                    </Link>
                    <span className="headLinkName text-muted">Confess/Share</span>
                </div>
                <div className="linkBtns">
                    <Link to="/login">
                        <span className="headIconCont">
                            <img src={inboxIconMobile} alt="" />
                        </span>
                    </Link>
                    <span className="headLinkName text-muted">Inbox</span>
                </div>
            </div>
        </footer>
    )
}
