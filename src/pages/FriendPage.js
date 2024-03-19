import React from 'react';
import Sidebar from "../components/Sidebar";
import Friend from "../components/Friend";
import ava from "../img/ava.jpg";
import Search from "../components/Search";
const FriendPage = () => {
    return (
        <div className="row justify-content-center justify-content-lg-start">
            <div className="col-12 col-lg-3">
                <Sidebar/>
            </div>
            <div className="col-12 col-lg-9 col-xl-8">
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