import React from 'react';
import {NavLink} from "react-router-dom";
import {FEED_PAGE, FRIEND_PAGE, MESSAGE_PAGE, PROFILE_PAGE} from "../utils/routes/path";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to={PROFILE_PAGE} className="sidebar__element">Профиль</NavLink>
            <NavLink to={FEED_PAGE} className="sidebar__element">Лента</NavLink>
            <NavLink to={FRIEND_PAGE} className="sidebar__element">Друзья</NavLink>
            <NavLink to={MESSAGE_PAGE} className="sidebar__element">Сообщения</NavLink>
        </div>
    );
};

export default Sidebar;