import React from 'react';
import {NavLink} from "react-router-dom";
import {ABOUT_PAGE, ARTICLE_PAGE, Main, MAIN_PAGE, TASK_PAGE} from "../../utils/routes/path";
import Logo from "../../img/logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
               <div className="header__wrapper">
                   <div className="row align-items-center">
                       <div className="col-11 col-md-3 col-lg-2 order-0">
                           <NavLink to={MAIN_PAGE} className="header__logo">
                               <img src={Logo} alt="logo"/>
                               <span>KiJi</span>
                           </NavLink>
                       </div>
                       <div className="col-12 col-md-8 col-md-4 offset-lg-2 order-2 order-md-1">
                           <div className="header-nav">
                               <NavLink to={MAIN_PAGE} className="header-nav__item">Главная</NavLink>
                               <NavLink to={ARTICLE_PAGE} className="header-nav__item">Статьи</NavLink>
                               <NavLink to={TASK_PAGE} className="header-nav__item">Заказы</NavLink>
                               <NavLink to={ABOUT_PAGE} className="header-nav__item">О нас</NavLink>
                           </div>
                       </div>
                       <div className="col-1 order-1 order-md-2">
                           <div className="menu" id="menu"><i className="fa fa-minus-square" aria-hidden="true"></i></div>
                       </div>
                   </div>
               </div>
            </div>
        </header>
    );
};

export default Header;