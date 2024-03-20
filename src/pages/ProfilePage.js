import React from 'react';
import Navigation from "../components/NavigationComponents/Navigation";
import ProfileTabs from "../components/ProfileComponents/ProfileTabs";
import ava from "../img/ava.jpg";
import ProfileSidebar from "../components/ProfileComponents/ProfileSidebar";
import ProfileInformation from "../components/ProfileComponents/ProfileInformation";

const ProfilePage = (props) => {
    return (
        <div className="profile">
            <div className="row">
                <div className="col-12 col-xl-3">
                    <ProfileSidebar ava={ava}/>
                </div>
                <div className="col-12 col-xl-9">
                    <ProfileTabs/>
                    <div className="profile__content">
                        <ProfileInformation/>
                    </div>
                </div>
            </div>
            <Navigation/>
        </div>
    );
};

export default ProfilePage;