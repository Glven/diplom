import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ARTICLE_PAGE, FEED_PAGE, MAIN_PAGE} from "./utils/routes/path";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import Feed from "./pages/Feed";
import ArticlePage from "./pages/ArticlePage";

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
                      </Routes>
                  </div>
              </section>
          </BrowserRouter>
      </>
  );
}

export default App;
