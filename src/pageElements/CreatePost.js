import React from 'react';
import uploadImages from '../images/uploadImages.png';
import Header from "../pageElements/Header";
import Footer from "../pageElements/Footer";
import downArrowIcon from '../images/downArrow.png';

export default function CreatePost() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Header links={true} />

                <div className="preventHeader">preventHead</div>
                <form className="col-12 p-0 m-0">
                    <div className="container py-md-4 p-3 preventFooter">
                        <div className="row py-0 py-md-2 reverseFlex createPostBoxShadow boxShadow">
                            <div className="col-12 col-lg-8">
                                <div className="container-fluid px-0">
                                    <div className="col-12 mx-auto px-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="createPostLeftHead">
                                                    Write your confession or thoughts
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control createPostTextArea pt-3" defaultValue="Write your confession or thoughts here........" rows="15" name="comments">
                                                </textarea>

                                                <button type="submit" className="mt-3 btn submitButton d-block d-lg-none mb-3 mb-md-0">Register </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 rightCreatePostUpperCont">
                                <div className="container-fluid rightMainCreatePostFormCont px-0">
                                    <div className="col-12 px-0">
                                        <div className="form-group createPostInputs">
                                            <select className="form-control" id="selectedCategory" name="category">
                                                <option>Select Category</option>
                                                <option>Desire</option>
                                                <option>Crazy</option>
                                                <option>Sad</option>
                                            </select>
                                            <img src={downArrowIcon} alt="" />
                                        </div>
                                        <div className="form-group radioCont">
                                            <label htmlFor="TweightRadio" className="labelForToggle createPostLabels">Post as anonymous</label>
                                            <input type="checkbox" className="switch12" id="TweightRadio" />
                                        </div>
                                        <div className="form-group cstmUploadFileCont">
                                            <label htmlFor="uploadImages" className="uploadImgWrapper"><img src={uploadImages} alt="" /></label>
                                            <input type="file" className="form-control-file" id="uploadImages" name="images" />
                                            <label htmlFor="uploadImages" className="createPostLabels">Upload Images if there are any</label>
                                        </div>
                                        <button type="submit" className="btn submitButton d-none d-lg-block">Register </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <Footer/>
            </div>
        </div>
    );
}
