import React from 'react';
import Post from "../components/Post";
import TemplateWithSidebar from "../components/TemplateWithSidebar";


const FeedPage = (props) => {
    const content = (
        <div className="feed">
            {props.posts.map((p)=>
                <Post key={p.key} id={p.id} ava={p.ava} family={p.family} name={p.name} date={p.date} title={p.title} photo={p.photo} category={p.category} text={p.text} likes={p.likes} dislikes={p.dislikes} comments={p.comments} views={p.views} />
            )}
        </div>
    )
    return (
        <TemplateWithSidebar content={content} />
    );
};

export default FeedPage;