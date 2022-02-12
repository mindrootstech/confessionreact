import React from 'react';
import Header from '../pageElements/Header';
import Footer from '../pageElements/Footer';
import AddNew from '../pageElements/AddNew';
import Post from '../pageElements/Post';
import Requests from '../pageElements/Requests';
import davidPic from '../images/davidPic.png';
import userIcon from '../images/userAcc.png';
import dpImg from '../images/dpImg.png';
import pen from '../images/pen.png';
import requestsIcon from '../images/requestsIcon.png';
import supportIcon from '../images/supportIcon.png';
import { Link } from "react-router-dom";

export default function Profile() {
    let postArr = [
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            category: 'Desire',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
            sharedBy: 12
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            category: 'Desire',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
            sharedBy: 12
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            category: 'Desire',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
            sharedBy: 12
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            category: 'Desire',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
            sharedBy: 12
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            category: 'Desire',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
            sharedBy: 12
        },
    ];

    let requestersArr = [
        { imgUrl: dpImg, requesterName: 'Devon Lane', requestersTotalSharedConf: '5' },
        { imgUrl: dpImg, requesterName: 'Ronald Richards', requestersTotalSharedConf: '15' },
    ];


    let addFriendsArr = [
        { imgUrl: dpImg, requesterName: 'Devon Lane', requestersTotalSharedConf: '5' },
        { imgUrl: dpImg, requesterName: 'Ronald Richards', requestersTotalSharedConf: '15' },
        { imgUrl: dpImg, requesterName: 'Jenny Wilson', requestersTotalSharedConf: '7' },
        { imgUrl: dpImg, requesterName: 'Jerome Bell', requestersTotalSharedConf: '9' }
    ];

    return (
        <div className="container-fluid">
            <div className="row">

                {/* Adds Header Component */}
                <Header links={true} />

                <div className="preventHeader">preventHead</div>
                <div className="container py-md-4 p-3 preventFooter">
                    <div className="thoughtsNrequestsCont container-fluid">
                        <div className="row">
                            <div className="col-12 profileDetailsCont">
                                <img src={davidPic} alt="" className="loggedInUserPic" />
                                <span className="loggedInUserName mt-2">David Warner</span>
                                <span className="editProfile mtProfile"><img src={pen} alt="" className="penImg" /> Edit Profile Name</span>
                                <div className="form-group mb-0 radioCont wProfile mx-auto mtProfile">
                                    <label htmlFor="postAnanonymsly" className="labelForToggle profilePageLabels">Post as anonymous</label>
                                    <input type="checkbox" className="switch12" id="postAnanonymsly" />
                                </div>
                                <Link to="/addfriends" className="w-100">
                                <div className="form-group wProfile contantSupportCont mtProfile d-flex d-md-none">
                                    <label className="profilePageLabels txtUnderLine">Add friends to share thoughts</label>
                                    <span className="callingImgSpan">
                                        <img src={requestsIcon} alt="" className="callingImg" />
                                    </span>
                                </div>
                                </Link>

                                 <Link to="/report" className="w-100">
                                <div className="form-group wProfile contantSupportCont mtProfile d-flex">
                                    <label className="profilePageLabels txtUnderLine">Contact Support Center</label>
                                    <span className="callingImgSpan">
                                        <img src={supportIcon} alt="" className="callingImg" />
                                    </span>
                                </div>
                                </Link>
                            </div>



                            <div className="col-12 col-md-8 p-0">

                                {/* Post Components */}
                                {postArr.map((post, index) => {
                                    return <Post key={index} imgUrl={post.imgUrl} userName={post.userName} category={post.category} postedComment={post.postedComment} sharedBy={post.sharedBy} />
                                })}
                                {/* End of Post Components */}

                            </div>
                            <div className="d-none d-md-block col-4">
                                <div className="friendsRequestsMainCont">
                                    <div className="friendRequestsHeader">
                                        <span className="requestsHeaderTitle">
                                            You’ve got 10 friend requests
                                        </span>
                                        <img src={requestsIcon} alt="" className="friendRequestsHeaderImg" />
                                    </div>
                                    {/* Requesters Components */}
                                    {requestersArr.map((requester, index) => {
                                        return <Requests key={`${index}${requester.imgUrl}${requester.requesterName}${requester.requestersTotalSharedConf}`} imgUrl={requester.imgUrl} requesterName={requester.requesterName} requestersTotalSharedConf={requester.requestersTotalSharedConf} />
                                    })}
                                    {/* Requesters Components */}
                                </div>

                                <div className="addFriendsCont">
                                    <div className="addFriendsTitle mt-3">
                                        Find New Friends
                                    </div>
                                    {/* Add New Friend Components */}
                                    <div className="requestersMainCont">
                                        {addFriendsArr.map((requester, index) => {
                                            return <AddNew key={`${index}${requester.imgUrl}${requester.requesterName}${requester.requestersTotalSharedConf}`} imgUrl={requester.imgUrl} requesterName={requester.requesterName} requestersTotalSharedConf={requester.requestersTotalSharedConf} />
                                        })}
                                    </div>
                                    {/* Add New Friend Components */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    )
}
