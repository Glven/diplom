import React from 'react';
import Sidebar from "./Sidebar";

const TemplateWithSidebar = (props) => {
    return (
        <div className="row justify-content-center justify-content-lg-start">
            <div className="col-12 col-lg-3">
                <Sidebar/>
            </div>
            <div className="col-12 col-md-9 col-lg-8">
                <div className="feed">
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default TemplateWithSidebar;