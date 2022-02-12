import React, {useState} from 'react';
import Header from "../pageElements/Header";
import dpImg from '../images/dpImg.png';
import Chatter from "../pageElements/Chatter";
import chatterImg from '../images/chatterImg.png';
import forwardIcon from '../images/forwardIcon.png'
import Requests from "../pageElements/Requests";
import Footer from "../pageElements/Footer";
import requestsIcon from '../images/requestsIcon.png';
import { Link } from "react-router-dom";

export default function Chat() {

    const [check, setCheck] = useState(false);
    // Works as api response of person with whom you have chatted with
    let usersArr = [
        { imgUrl: chatterImg, chatterName: 'Wade Warren', chatterDesc: "Lorem ipsum text dollas.........." },
        { imgUrl: chatterImg, chatterName: 'Wade Warren', chatterDesc: "Lorem ipsum text dollas.........." },
        { imgUrl: chatterImg, chatterName: 'Wade Warren', chatterDesc: "Lorem ipsum text dollas.........." },
        { imgUrl: chatterImg, chatterName: 'Wade Warren', chatterDesc: "Lorem ipsum text dollas.........." },
        { imgUrl: chatterImg, chatterName: 'Wade Warren', chatterDesc: "Lorem ipsum text dollas.........." },
        { imgUrl: chatterImg, chatterName: 'Wade Warren', chatterDesc: "Lorem ipsum text dollas.........." },
        { imgUrl: chatterImg, chatterName: 'Wade Warren', chatterDesc: "Lorem ipsum text dollas.........." },
    ]

    // Works as api response of requests got
    let requestersArr = [
        { imgUrl: dpImg, requesterName: 'Devon Lane', requestersTotalSharedConf: '5' },
        { imgUrl: dpImg, requesterName: 'Ronald Richards', requestersTotalSharedConf: '15' },
        { imgUrl: dpImg, requesterName: 'Jenny Wilson', requestersTotalSharedConf: '7' },
        { imgUrl: dpImg, requesterName: 'Jerome Bell', requestersTotalSharedConf: '9' }
    ];


    function showActionOption(event) {
        let element = document.getElementById('takeAction');
        if (!element.classList.contains('showTheElem')) {
            console.log("if");
            element.classList.add('showTheElem');
        } else {
            console.log("else");
            element.classList.remove('showTheElem');
        }
    }

    function performAction(clickedOn) {
        console.log(clickedOn);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Adds Header Component */}
                <Header links={true} />
                {/* End of Adds Header Component */}

                <div className="preventHeader">preventHead</div>
                <div className="container py-md-4 p-3 preventFooter">
                    <div className="row m-0">

                        {/* Will be visible in Mobiles Only */}
                        <Link to="/requests" className="linkClass">
                            <div className="friendsRequestsMainCont w-100 d-md-none d-block">
                                <div className="friendRequestsHeader">
                                    <span className="requestsHeaderTitle">
                                        You’ve got 10 friend requests
                                    </span>
                                    <img src={requestsIcon} alt="" className="friendRequestsHeaderImg" />
                                </div>
                            </div>
                        </Link>
                        {/* End of Will be visible in Mobiles Only */}


                        <div className="col-lg-3 col-md-4">
                            <div className="row px-md-4 px-0">
                                <div className="col-12 allChatsHeader">
                                    Chat
                                </div>
                                <div className="col-12 allChatsCont scrollbar" id="style-2">

                                    {/* Shows all the users with whom you have chatted till yet */}
                                    {usersArr.map((user, index) => {
                                        return <Chatter key={`${index}${user.imgUrl}${user.chatterName}${user.chatterDesc}`} imgUrl={user.imgUrl} chatterName={user.chatterName} chatterDesc={user.chatterDesc} />
                                    })}

                                </div>
                            </div>
                        </div>

                        {/* Opened Chat Container */}
                        <div className="col-lg-6 col-md-5 chattingWithCont d-md-block d-none boxShadow">
                            <div className="middleContMainDivChat">
                                <div className="forBottomBorder">
                                    <div className="col-12 imgNopenUserNameWrap">
                                        <img src={chatterImg} alt="" className="userImageContChat" />
                                        <div className="chatterUserName">
                                            Savannah Nguyen
                                            <span className="status">Online</span>
                                        </div>
                                        <button onClick={(e)=>{
                                            setCheck(prevCheck => !prevCheck)
                                        }} onFocus={(e) => { showActionOption(e) }}>...</button>
                                    </div>

                                    <div className={`takeAction p-1 ${check ? "d-block" : "d-none" }`}  id="takeAction">
                                        <div type="button" className="takeActionOptions" onClick={() => { performAction("report") }}>Report user</div>
                                        <div type="button" className="takeActionOptions" onClick={() => { performAction("clear") }}>Clear chat</div>
                                    </div>

                                </div>
                            </div>

                            <div style={{ height: "50px" }}>preventHead</div>
                            <div className="messagesCont pt-2">
                                <div className="messageTo">
                                    <div className="actualMessage">
                                        illum nam, aperiam est, dignissimos numquam ea
                                        <span className="messagedAt">12:34 AM</span>
                                    </div>
                                </div>

                                <div className="messageFrom">
                                    <div className="actualMessage">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        <span className="messagedAt">12:38 AM</span>
                                    </div>
                                </div>



                                <div className="messageTo">
                                    <div className="actualMessage">
                                        illum nam, aperiam est, dignissimos numquam ea  Dolor
                                        <span className="messagedAt">12:40 AM</span>
                                    </div>
                                </div>

                                <div className="messageFrom">
                                    <div className="actualMessage">
                                        Lorem ipsum dolor sit amet consectetur
                                        <span className="messagedAt">12:46 AM</span>
                                    </div>
                                </div>

                                <div className="messageTo">
                                    <div className="actualMessage">
                                        illum nam, aperiam est, dignissimos numquam ea
                                        <span className="messagedAt">12:48 AM</span>
                                    </div>
                                </div>

                                <div className="messageFrom">
                                    <div className="actualMessage">
                                        Lorem ipsum dolor sit amet  elit. Quasi itaque
                                        <span className="messagedAt">12:50 AM</span>
                                    </div>
                                </div>



                            </div>
                            {/* MessageBox */}
                            <div className="container-fluid inputWithForwardCont"><div className="col-10 inputToAddComment">
                                <input type="text" className="form-control my-3" placeholder="Enter your message here........." />
                            </div>
                                <div className="col-2">
                                    <img src={forwardIcon} alt="" className="forwardIconContImgForChat" />
                                </div>
                            </div>
                            {/* MessageBox */}

                        </div>
                        {/* End of Opened Chat Container */}

                        <div className="col-3 pr-0 d-md-block d-none">
                            <div className="friendsRequestsMainCont">
                                <div className="friendRequestsHeader boxShadow">
                                    <span className="requestsHeaderTitle">
                                        You’ve got 10 friend requests
                                    </span>
                                    <img src={requestsIcon} alt="" className="friendRequestsHeaderImg" />
                                </div>

                                {/* Shows all the users who have Requested to you */}
                                {requestersArr.map((requester, index) => {
                                    return <Requests key={`${index}${requester.imgUrl}${requester.requesterName}${requester.requestersTotalSharedConf}`} imgUrl={requester.imgUrl} requesterName={requester.requesterName} requestersTotalSharedConf={requester.requestersTotalSharedConf} />
                                })}

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
