import React from 'react'
import rejectRequest from '../images/rejectRequest.png'
import acceptRequest from '../images/acceptRequest.png'

export default function Requests(props) {
    return (
        <div className="requesterDesc boxShadow">
            <div className="imgNRequesterDesc d-flex align-items-center">
                <img src={props.imgUrl} alt="" />
                <div className="infoOfRequesterCont">
                    <div className="requesterName">{props.requesterName}</div>
                    <div className="requesterCountOfSharedConfessions">Shared {props.requestersTotalSharedConf} confessions</div>
                </div>
            </div>
            <div className="acceptOrReject d-flex">
                <img src={rejectRequest} alt="" className="friendRequestsHeaderImg" />
                <img src={acceptRequest} alt="" className="friendRequestsHeaderImg" />
            </div>
        </div>
    )
}
