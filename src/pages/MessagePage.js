import React from 'react';
import ava from "../img/ava.jpg";
import Message from "../components/MessageComponents/Message";
import Sidebar from "../components/NavigationComponents/Sidebar";

const messages = [
    {
        id: 1,
        ava: ava,
        family: "Гусь",
        name: "Водный",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error eveniet in ipsa nesciunt" + " placeat quisquam quod repudiandae tempora temporibus. At corporis magnam maiores praesentium sequi?" +
            " Ipsam natus numquam optio!",
        date: "19.03.2024"
    },
    {
        id: 2,
        ava: ava,
        family: "Оганесян",
        name: "Тигран",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error eveniet in ipsa nesciunt",
        date: "19.03.2024"
    },
]

const MessagePage = () => {
    return (
        <div className="row justify-content-center justify-content-lg-start">
            <Sidebar/>
            <Message messages={messages}/>
        </div>
    );
};

export default MessagePage;