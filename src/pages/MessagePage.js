import React from 'react';
import TemplateWithSidebar from "../components/TemplateWithSidebar";

const content = (
    <div className="messages">

    </div>
)
const MessagePage = () => {
    return (
        <TemplateWithSidebar content={content}/>
    );
};

export default MessagePage;