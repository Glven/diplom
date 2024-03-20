import React from 'react';
import {NavLink} from "react-router-dom";
import {FEED_PAGE, FRIEND_PAGE, MESSAGE_PAGE, PROFILE_PAGE} from "../../utils/routes/path";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="navigation__element">
                            <NavLink to={PROFILE_PAGE} className="navigation__link">
                                <i className="fa fa-user" aria-hidden="true"></i><span>Профиль</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="navigation__element">
                            <NavLink to={FEED_PAGE} className="navigation__link">
                                <i className="fa fa-newspaper-o" aria-hidden="true"></i><span>Лента</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="navigation__element">
                            <NavLink to={FRIEND_PAGE} className="navigation__link">
                                <i className='fa fa-users' aria-hidden="true"></i><span>Друзья</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="navigation__element">
                            <NavLink to={MESSAGE_PAGE} className="navigation__link">
                                <i className="fa fa-envelope" aria-hidden="true"></i><span>Сообщения</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;