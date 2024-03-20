import {BrowserRouter, Route, Routes} from "react-router-dom";
import {
    ARTICLE_PAGE,
    DIALOG_PAGE,
    FEED_PAGE,
    FRIEND_PAGE,
    MAIN_PAGE,
    MESSAGE_PAGE, PROFILE_PAGE,
} from "./utils/routes/path";
import React, {useState} from "react";
import Header from "./components/NavigationComponents/Header";
import MainPage from "./pages/MainPage";
import FeedPage from "./pages/FeedPage";
import ArticlePage from "./pages/ArticlePage";
import FriendPage from "./pages/FriendPage";
import MessagePage from "./pages/MessagePage";
import DialogPage from "./pages/DialogPage";
import ProfilePage from "./pages/ProfilePage";
const App = (props) => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <section className="content">
                    <div className="container">
                        <Routes>
                            <Route path={MAIN_PAGE} element={<MainPage/>} exact/>
                            <Route path={ARTICLE_PAGE} element={<ArticlePage posts={props.posts} categories={props.categories} />} exact />
                            <Route path={FEED_PAGE} element={<FeedPage posts={props.posts}/>} exact />
                            <Route path={FRIEND_PAGE} element={<FriendPage/>} exact />
                            <Route path={MESSAGE_PAGE} element={<MessagePage/>} exact />
                            <Route path={DIALOG_PAGE} element={<DialogPage/>} exact/>
                            <Route path={PROFILE_PAGE} element={<ProfilePage/>} exact />
                        </Routes>
                    </div>
                </section>
            </BrowserRouter>
        </>
    );
}

export default App;
