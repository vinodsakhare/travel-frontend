import React from 'react';
import './LandingBody.css';


import { useNavigate } from 'react-router-dom';


function LandingBody() {

    const navigate = useNavigate();

    const handleStartChatting = () => {
        navigate("/chat");
    };

    return (
            <div className = "landingBody">
                <div className = "firstContent">
                    <div className = "top">
                        <div>Travel</div>
                        <div>differently</div>
                    </div>
                    <div className = "middle">
                        Yashtrip brings the world to you and empowers you to experience it your way.
                    </div>
                    <div className = "bottom">
                        <div className = "chatbtn">
                                <button onClick={handleStartChatting}>Start chatting</button>
                        </div>
                        <div className = "videobtn">
                                <button>Play video</button>
                            </div>
                    </div>
                    <img src="/London.png" alt="" className = "londonImg float"/>
                    <img src="/Rome.png" alt="" className = "romeImg"/>   
                    <img src="/Paris.png" alt="" className = "parisImg"/>
                </div>   
            </div>
    )
}

export default LandingBody
