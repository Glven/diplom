import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ARTICLE_PAGE, FEED_PAGE, FRIEND_PAGE, MAIN_PAGE} from "./utils/routes/path";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Feed from "./pages/Feed";
import ArticlePage from "./pages/ArticlePage";
import FriendPage from "./pages/FriendPage";

const App = () => {
  return (
      <>
          <BrowserRouter>
              <Header />
              <section className="content">
                  <div className="container">
                      <Routes>
                          <Route path={MAIN_PAGE} element={<Main/>} exact/>
                          <Route path={FEED_PAGE} element={<Feed/>} exact/>
                          <Route path={ARTICLE_PAGE} element={<ArticlePage/>} exact />
                          <Route path={FRIEND_PAGE} element={<FriendPage/>} exact />
                      </Routes>
                  </div>
              </section>
          </BrowserRouter>
      </>
  );
}

export default App;
