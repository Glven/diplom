import React from 'react';
import Post from "../components/ArticleComponents/Post";
import Sidebar from "../components/NavigationComponents/Sidebar";


const FeedPage = (props) => {
    return (
        <div className="row justify-content-center justify-content-lg-start">
            <Sidebar/>
            <div className="col-12 col-md-9 col-lg-8">
                <div className="feed">
                    {props.posts.map((p)=>
                        <Post key={p.key} id={p.id} ava={p.ava} family={p.family} name={p.name} date={p.date} title={p.title} photo={p.photo} category={p.category} text={p.text} likes={p.likes} dislikes={p.dislikes} comments={p.comments} views={p.views} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeedPage;