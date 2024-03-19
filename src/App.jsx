import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ARTICLE_PAGE, FEED_PAGE, FRIEND_PAGE, MAIN_PAGE, MESSAGE_PAGE} from "./utils/routes/path";
import React from "react";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import FeedPage from "./pages/FeedPage";
import ArticlePage from "./pages/ArticlePage";
import FriendPage from "./pages/FriendPage";
import MessagePage from "./pages/MessagePage";

const App = (props) => {
  return (
      <>
          <BrowserRouter>
              <Header />
              <section className="content">
                  <div className="container">
                      <Routes>
                          <Route path={MAIN_PAGE} element={<MainPage/>} exact/>
                          <Route path={FEED_PAGE} element={<FeedPage posts={props.posts} />} exact/>
                          <Route path={ARTICLE_PAGE} element={<ArticlePage posts={props.posts} categories={props.categories} />} exact />
                          <Route path={FRIEND_PAGE} element={<FriendPage/>} exact />
                          <Route path={MESSAGE_PAGE} element={<MessagePage/>} exact />
                      </Routes>
                  </div>
              </section>
          </BrowserRouter>
      </>
  );
}

export default App;
