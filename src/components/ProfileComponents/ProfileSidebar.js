import React from 'react';

const ProfileSidebar = (props) => {
    return (
        <div className="profile-sidebar">
            <div className="profile-sidebar__photo">
                <img src={props.ava} alt=""/>
            </div>
            <div className="profile-sidebar__buttons">
                <button className="btn btn--primary profile-sidebar__btn profile-sidebar__upload">Загрузить фото</button>
                <button className="btn btn--trans profile-sidebar__btn">Выйти</button>
                <button className="btn btn--trans profile-sidebar__btn">Удалиьт аккаунт</button>
            </div>
        </div>
    );
};

export default ProfileSidebar;