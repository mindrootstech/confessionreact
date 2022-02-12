import React from 'react'
import rightArrowIcon from '../images/rightArrow.png';
export default function Chatter(props) {
    return (
        <div className="singleChatCont">
            <div className="imgNopenUserNameWrap">
                <img src={props.imgUrl} alt="" className="userImageContChat" />
                <div className="singleChatterUserName">
                    <span>
                        {props.chatterName}
                        <span className="status">Online</span>
                    </span>
                    <div className="chatterUserDesc">
                        {props.chatterDesc}
                    </div>
                </div>
            </div>
            <img src={rightArrowIcon} alt="" className="showChatArrCont" />
        </div>
    )
}
