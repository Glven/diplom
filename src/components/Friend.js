import React from 'react';
import {NavLink} from "react-router-dom";
import {FRIEND_PAGE} from "../utils/routes/path";

const Friend = (props) => {
    return (
        <div className="col-12">
            <div className="friend">
                <div className="friend__photo">
                    <img src={props.ava} alt=""/>
                </div>
                <div className="friend__wrapper">
                    <NavLink to={FRIEND_PAGE} className="friend__name">
                        <span>{props.surname}</span> <span>{props.name}</span>
                    </NavLink>
                    <div className="friend__buttons">
                        <button className="btn btn--trans friend__btn">Сообщение</button>
                        <button className="btn btn--primary friend__btn">Удалить</button>
                    </div>
                    <div className="friend__icons">
                        <button className="friend__icon"><i className="fa fa-comments-o" aria-hidden="true"></i></button>
                        <button className="friend__icon"><i className="fa fa-minus" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friend;