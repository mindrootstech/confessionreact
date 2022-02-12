import React from 'react';
import Header from '../pageElements/Header'
import Requests from '../pageElements/Requests';
import Footer from '../pageElements/Footer';
import dpImg from '../images/dpImg.png';


export default function RequestsGot() {
    let requestersArr = [
        { imgUrl: dpImg, requesterName: 'Devon Lane', requestersTotalSharedConf: '5' },
        { imgUrl: dpImg, requesterName: 'Ronald Richards', requestersTotalSharedConf: '15' },
        { imgUrl: dpImg, requesterName: 'Jenny Wilson', requestersTotalSharedConf: '7' },
        { imgUrl: dpImg, requesterName: 'Jerome Bell', requestersTotalSharedConf: '9' }
    ]

    return (

        <div className="container-fluid">
            <div className="row">

                {/* Adds Header Component */}
                <Header links={true} />

                <div className="preventHeader">preventHead</div>
                <div className="container py-md-4 p-3 preventFooter">
                    <div className="thoughtsNrequestsContAddFr container-fluid">
                        <div className="row w-100">
                            <div className="col-12 px-0">

                                <div className="addFriendsCont">
                                    <div className="addFriendsTitle mt-2">
                                        Friend Requests
                                    </div>
                                    {/* Requesters Component */}
                                    {requestersArr.map((requester, index) => {
                                        return <Requests key={`${index}${requester.imgUrl}${requester.requesterName}${requester.requestersTotalSharedConf}`} imgUrl={requester.imgUrl} requesterName={requester.requesterName} requestersTotalSharedConf={requester.requestersTotalSharedConf} />
                                    })}
                                    {/* Requesters Component */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>




    )
}
