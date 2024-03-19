import React from 'react';
import TemplateWithSidebar from "../components/TemplateWithSidebar";
import ava from "../img/ava.jpg";
import Message from "../components/Message";

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
        <TemplateWithSidebar content={<Message messages={messages}/>}/>
    );
};

export default MessagePage;