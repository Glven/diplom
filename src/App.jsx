import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FEED_PAGE, MAIN_PAGE} from "./utils/routes/path";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import Feed from "./pages/Feed";

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
                      </Routes>
                  </div>
              </section>
              <Navigation/>
          </BrowserRouter>
      </>
  );
}

export default App;
