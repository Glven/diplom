import React from 'react';
import Navigation from "../components/NavigationComponents/Navigation";
import CategorySidebar from "../components/NavigationComponents/CategorySidebar";
import {useParams} from "react-router-dom";
import Post from "../components/ArticleComponents/Post";

const ArticlePage = (props) => {
    const {id} = useParams();
    const post = props.posts.find(p=>p.id===parseInt(id));
    return (
        <div className="article">
            <div className="row">
                <div className="col-12 col-md-9">
                    <Post id={post.id} date={post.date} ava={post.ava} family={post.family} name={post.name} photo={post.photo} category={post.category} title={post.title} text={post.text} likes={post.likes} dislikes={post.dislikes} comments={post.comments} views={post.views} format="full" />
                </div>
                <div className="col-12 col-md-3">
                    <CategorySidebar categories={props.categories}/>
                </div>
            </div>
            <Navigation/>
        </div>
    );
};

export default ArticlePage;