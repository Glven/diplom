import React from 'react';
import {NavLink} from "react-router-dom";
import {FEED_PAGE, FRIEND_PAGE, MESSAGE_PAGE, PROFILE_PAGE} from "../utils/routes/path";

const Sidebar = () => {
    return (
        <div className="col-12 col-md-3">
            <div className="sidebar">
                <div className="sidebar__element">
                    <NavLink to={PROFILE_PAGE} className="sidebar__link">
                        <i className="fa fa-user" aria-hidden="true"></i><span>Профиль</span>
                    </NavLink>
                </div>
                <div className="sidebar__element">
                    <NavLink to={FEED_PAGE} className="sidebar__link">
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i><span>Лента</span>
                    </NavLink>
                </div>
                <div className="sidebar__element">
                    <NavLink to={FRIEND_PAGE} className="sidebar__link">
                        <i className='fa fa-users' aria-hidden="true"></i><span>Друзья</span>
                    </NavLink>
                </div>
                <div className="sidebar__element">
                    <NavLink to={MESSAGE_PAGE} className="sidebar__link">
                        <i className="fa fa-envelope" aria-hidden="true"></i><span>Сообщения</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;