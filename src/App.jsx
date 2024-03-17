import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MAIN_PAGE} from "./utils/routes/path";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
      <>
          <BrowserRouter>
              <Header />
              <section className="content">
                  <div className="container">
                      <div className="row">
                          <div className="col-12 col-md-3">
                              <Sidebar/>
                          </div>
                      </div>
                  </div>
              </section>
              <Routes>
                  <Route path={MAIN_PAGE} element={<Main/>} exact/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
