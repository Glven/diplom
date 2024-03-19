import React from 'react';
import Friend from "../components/Friend";
import ava from "../img/ava.jpg";
import Search from "../components/Search";
import TemplateWithSidebar from "../components/TemplateWithSidebar";

const FriendPage = () => {
    const content = (
        <div className="friends">
            <Search searchId="friend-search"/>
            <div className="row">
                <Friend ava={ava} surname="Иди" name="Нахуй"/>
                <Friend ava={ava} surname="Я" name="Яян"/>
                <Friend ava={ava} surname="Галкина" name="Анечка"/>
                <Friend ava={ava} surname="Того Все" name="Ебал"/>
            </div>
        </div>
    )
    return (
        <TemplateWithSidebar content={content}/>
    );
};

export default FriendPage;