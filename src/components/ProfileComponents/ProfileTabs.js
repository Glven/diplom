import React from 'react';

const ProfileTabs = () => {
    return (
        <div className="profile-tabs">
            <span className="profile-tabs__item profile-tabs__item--active">Информация</span>
            <span className="profile-tabs__item">Избранное</span>
            <span className="profile-tabs__item">Статьи</span>
            <span className="profile-tabs__item">Заказы</span>
        </div>
    );
};

export default ProfileTabs;