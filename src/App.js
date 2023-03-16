import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Video from "./Video";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/seacrh"
            element={
              <React.Fragment>
                <Header />
                <SearchPage />
              </React.Fragment>
            }
          />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <div className="app_page">
                  <Sidebar />
                  <Video />
                </div>
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
