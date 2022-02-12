import React from 'react';
import uploadImages from '../images/uploadImages.png';
import Header from "../pageElements/Header";
import Footer from "../pageElements/Footer";
import downArrowIcon from '../images/downArrow.png';

export default function Report() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Header links={true} />

                <div className="preventHeader">preventHead</div>
                <form className="col-12 preventFooter">
                    <div className="container py-md-4 p-3">
                        <div className="row py-md-2 py-0 createPostBoxShadow boxShadow">
                            <div className="col-12 col-lg-8">
                                <div className="container-fluid px-0">
                                    <div className="col-12 mx-auto px-0">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="createPostLeftHead">
                                                    Report a problem or bug
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control createPostTextArea pt-3" defaultValue="Write the issue or bug you are facing ..." rows="15" name="comments">
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 rightCreatePostUpperCont">
                                <div className="container-fluid rightMainCreatePostFormCont px-0">
                                    <div className="col-12 px-0">
                                        <div className="form-group createPostInputs">
                                            <select className="form-control" id="relatedProblem" name="category">
                                                <option>Select related problem</option>
                                                <option>Abc</option>
                                                <option>Abc</option>
                                                <option>Abc</option>
                                            </select>
                                            <img src={downArrowIcon} alt="" />
                                        </div>
                                        <div className="form-group radioCont d-lg-block d-none" style={{visibility : "hidden"}}>
                                            <label htmlFor="TweightRadio2" className="labelForToggle createPostLabels">Post as anonymous</label>
                                            <input type="checkbox" className="switch12" id="TweightRadio2" />
                                        </div>
                                        <div className="form-group cstmUploadFileCont">
                                            <label htmlFor="uploadReportImages" className="uploadImgWrapper"><img src={uploadImages} alt="" /></label>
                                            <input type="file" className="form-control-file" id="uploadReportImages" name="images" />
                                            <label htmlFor="uploadReportImages" className="createPostLabels">Upload Screenshots if there are any</label>
                                        </div>
                                        <button type="submit" className="btn submitButton">Register Complain</button>
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
