import React from 'react';
const showAndHide = () => document.querySelector('.sidebar').classList.toggle('sidebar--active');
const CategorySidebar = (props) => {
    return (
        <div className="sidebar" onClick={showAndHide}>
            <h2 className="sidebar__title"><i className={`fa fa-`+props.icon} aria-hidden="true"></i>{props.title}
                <div className="sidebar__down"><i
                    className="fa fa-caret-down" aria-hidden="true"></i></div>
            </h2>
            <div className="sidebar__wrapper">
                {props.categories.map((category)=>
                    <button key={category} className="sidebar__item">{category}</button>
                )}
            </div>
        </div>
    );
};

export default CategorySidebar;