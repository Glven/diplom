import React from 'react';
import ava from "../img/ava.jpg"
import {FEED_PAGE, FRIEND_PAGE, MESSAGE_PAGE, PROFILE_PAGE} from "../utils/routes/path";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar-profile">
            <div className="sidebar-profile__photo"><img src={ava} alt=""/></div>
            <div className="sidebar-profile__wrapper">
                <NavLink to={PROFILE_PAGE} className="sidebar-profile__item">
                    <i className="fa fa-user" aria-hidden="true"></i><span>Профиль</span>
                </NavLink>
                <NavLink to={FEED_PAGE} className="sidebar-profile__item">
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i><span>Лента</span>
                </NavLink>
                <NavLink to={FRIEND_PAGE} className="sidebar-profile__item">
                    <i className='fa fa-users' aria-hidden="true"></i><span>Друзья</span>
                </NavLink>
                <NavLink to={MESSAGE_PAGE} className="sidebar-profile__item">
                    <i className="fa fa-envelope" aria-hidden="true"></i><span>Сообщения</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;