import React from 'react';
import Header from '../pageElements/Header';
import Comments from '../pageElements/Comments';
import Category from '../pageElements/Category';
import Footer from '../pageElements/Footer';
import userIcon from '../images/userAcc.png'
import forwardIcon from '../images/forwardIcon.png'

export default function CommentsGot() {

    let commenstsArr = [
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae "
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae "
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae "
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae "
        },
        {
            imgUrl: userIcon,
            userName: ' Anonymous .',
            postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae "
        },
        
    ]

    return (
        <div className="container-fluid">
            <div className="row">
                <Header links={true} />
                <div className="preventHeader">preventHead</div>
                <div className="container py-md-4 p-3 preventFooter">
                    <div className="row forPosSticky">

                        {/* CategoryCont */}
                        <aside className="col-12 col-md-4 col-lg-3 posSticky">
                            <Category />
                        </aside>
                        {/* CategoryCont */}

                        {/* MiddleContainer */}
                        <section className="col-lg-7 col-md-8 col-12 mt-3 mt-lg-0">


                            <div className="postCont">
                                <div className="postContHeader">
                                    <span className="userImage">
                                        <img src={userIcon} className="userAccIcon" alt="" />
                                    </span>
                                    <span className="userName">
                                        Anonymous .
                                    </span>
                                    <span className="catCommentBtnCont">
                                        <div className="categoryOfUser" type="button">Desire</div>
                                    </span>
                                </div>
                                <div className="postBody">
                                    <div className="postedPost">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pellentesque tortor condimentum quis. Quis est, mauris phasellus ullamcorper vel orci egestas posuere. Curabitur diam egestas velit ac morbi enim enim proin varius. Sollicitudin mollis ornare cras mauris, ipsum vel cras in hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pellentesque tortor condimentum quis. Quis est, mauris phasellus ullamcorper vel orci egestas posuere. Curabitur diam egestas velit ac morbi enim enim proin varius. Sollicitudin mollis ornare cras mauris, ipsum vel cras in hendrerit. View more
                                    </div>

                                    <div className="container-fluid inputWithForwardCont">
                                        <div className="col-10 inputToAddComment">
                                            <input type="text" className="form-control my-3" placeholder="Share your thoughts about this......" />
                                        </div>
                                        <div className="col-2">
                                            <img src={forwardIcon} alt="" className="forwardIconContImg" />
                                        </div>
                                    </div>
                                </div>

                                <div className="postFoot">
                                    <div className="totalComments">
                                        12 - People shared their thoughts about this post
                                    </div>
                                </div>
                            </div>


                            
                            <div className="postsMainCont">
                                {commenstsArr.map((post, index) => {
                                    return <Comments key={index} imgUrl={post.imgUrl} userName={post.userName}  postedComment={post.postedComment}/>
                                })}

                            </div>

                        </section>
                        {/* MiddleContainer */}

                        {/* Adds Cont */}
                        <aside className="col-2 posSticky d-none d-lg-block">
                            <div className="adSpace">
                                <span>Ad Space</span>
                            </div>
                        </aside>
                        {/* Adds Cont */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
