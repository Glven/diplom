import React from 'react';
import {NavLink} from "react-router-dom";
import {FRIEND_PAGE} from "../utils/routes/path";

const Dialog = (props) => {
    return (
        <div>
            <div className="dialog-info">
                <div className="dialog-info__photo">
                    <img src={props.user.ava} alt=""/>
                </div>
                <div className="dialog-info__text">
                    <NavLink to={FRIEND_PAGE} className="dialog-info__name">{props.user.family} {props.user.name}</NavLink>
                    <span className="dialog-info__online">{props.user.date}</span>
                </div>
            </div>
            <div className="dialog-list">
                {props.user.dialog.map((d)=>
                    <p className={`dialog__message message message-`+d.direction}>
                        {d.text}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Dialog;