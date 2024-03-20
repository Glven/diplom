import React from 'react';
import Post from "../components/ArticleComponents/Post";
import CategorySidebar from "../components/NavigationComponents/CategorySidebar";
import Navigation from "../components/NavigationComponents/Navigation";
import Search from "../components/NavigationComponents/Search";

const ArticlesPage = (props) => {
    return (
        <section className="articles">
            <div className="row">
                <form className="col-12 col-md-8 col-lg-9">
                    <Search searchId="article-search"/>
                </form>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 col-lg-9 col-lg-8 order-1 order-md-0">
                    {props.posts.map((p)=>
                        <Post key={p.key} id={p.id} ava={p.ava} family={p.family} name={p.name} date={p.date} title={p.title} photo={p.photo} category={p.category} text={p.text} likes={p.likes} dislikes={p.dislikes} comments={p.comments} views={p.views} />
                    )}
                </div>
                <div className="col-12 col-md-4 col-lg-3 order-0 order-md-1">
                    <CategorySidebar categories={props.categories}/>
                </div>
                <div className="pagination order-2">
                    <span className="pagination__item">1</span><span className="pagination__item">2</span><span
                    className="pagination__item">3</span><span className="pagination__item">4</span><span
                    className="pagination__item">5</span>
                </div>
            </div>
            <Navigation/>
        </section>
    );
};


export default ArticlesPage;