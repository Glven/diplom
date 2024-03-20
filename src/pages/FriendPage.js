import React from 'react';
import Friend from "../components/Friend";
import ava from "../img/ava.jpg";
import Search from "../components/NavigationComponents/Search";
import Sidebar from "../components/NavigationComponents/Sidebar";

const FriendPage = () => {
    return (
        <div className="row justify-content-center justify-content-lg-start">
            <Sidebar/>
            <div className="col-12 col-md-9 col-lg-8">
                <div className="friends">
                    <Search searchId="friend-search"/>
                    <div className="row">
                        <Friend ava={ava} surname="Иди" name="Нахуй"/>
                        <Friend ava={ava} surname="Я" name="Яян"/>
                        <Friend ava={ava} surname="Галкина" name="Анечка"/>
                        <Friend ava={ava} surname="Того Все" name="Ебал"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendPage;