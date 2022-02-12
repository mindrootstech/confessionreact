import React from 'react';
import Header from '../pageElements/Header';
import Post from '../pageElements/Post';
import Category from '../pageElements/Category';
import Footer from '../pageElements/Footer';
import userIcon from '../images/userAcc.png'
import manWithBook from '../images/cropManImg.png';

export default function Feed() {

    let postArr = [
        {
        imgUrl :userIcon,
        userName: ' Anonymous .', 
        category: 'Desire', 
        postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
        sharedBy : 12},
        {
        imgUrl :userIcon,
        userName: ' Anonymous .', 
        category: 'Desire', 
        postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
        sharedBy : 12},
        {
        imgUrl :userIcon,
        userName: ' Anonymous .', 
        category: 'Desire', 
        postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
        sharedBy : 12},
        {
        imgUrl :userIcon,
        userName: ' Anonymous .', 
        category: 'Desire', 
        postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
        sharedBy : 12},
        {
        imgUrl :userIcon,
        userName: ' Anonymous .', 
        category: 'Desire', 
        postedComment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error numquam, beatae reiciendis doloribus quam debitis recusandae eius reprehenderit vitae fuga dolores quod iure quasi tempora id cupiditate! Tempora, consectetur.",
        sharedBy : 12},
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

                            <div className="postsMainCont">

                                {/* Post Start */}
                                <div className="postCont">
                                    <div className="doCommentContHeader container-fluid">
                                        <span className="confessImgContInCaptha col-12 col-md-3">
                                            <img src={manWithBook} alt="" />
                                        </span>
                                        <div className="doCommentTitle col-12 col-md-9">Confess or share your thoughts anonymously</div>
                                    </div>
                                    <div className="postBody">
                                        <div className="container-fluid inputWithForwardCont">
                                            <div className="col-12 inputToAddComment toDoinputToAddComment">
                                                <textarea className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="postFoot">
                                        <div className="doPostBtn text-right">
                                            <div className="categoryOfUser forWidth float-right mt-2" type="button">Post Comment</div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Post */}


                                {postArr.map((post,index)=>{
                                    return <Post key={index} imgUrl={post.imgUrl} userName={post.userName} category={post.category} postedComment={post.postedComment} sharedBy={post.sharedBy}/>
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
                <Footer/>
            </div>
        </div>
    );
}
