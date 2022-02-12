import React from 'react'

export default function Comments(props) {
  return (
      <div className="postCont overWritePostWithComment">
          <div className="postContHeader">
              <span className="userImage">
                  <img src={props.imgUrl} className="userAccIcon" alt="" />
              </span>
              <span className="userName">
                  {props.userName}
              </span>
              {/* <span className="reportUserCont">
                  Report
              </span> */}
          </div>
          <div className="postBody">
              <div className="postedPost">
                  {props.postedComment}
              </div>
          </div>
      </div>
  )
}
