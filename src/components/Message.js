import React from 'react';
import {NavLink} from "react-router-dom";
import {FRIEND_PAGE, MESSAGE_PAGE} from "../utils/routes/path";

const Message = (props) => {
    return (
        <div className="messages">
            {props.messages.map((message)=>
                <div className="messages__wrapper">
                    <NavLink key={message.id} to={MESSAGE_PAGE} className="messages__item">
                        <div className="messages__photo"><img src={message.ava} alt=""/></div>
                        <div className="messages-info">
                            <NavLink to={FRIEND_PAGE} className="messages-info__author">{message.family} {message.name}</NavLink>
                            <p className="messages-info__last">{message.lastMessage}</p>
                        </div>
                    </NavLink>
                    <div className="messages-part">
                        <button className="messages-part__delete"><i className="fa fa-times" aria-hidden="true"></i></button>
                        <div className="messages-part__date">{message.date}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Message;