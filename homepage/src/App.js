import React from "react";
import Sidebar from "./Sidebar.js";
import Header from "./Header.js";
import TimeTimeline from "./Timeline.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <TimeTimeline />
      </div>
    </div>
  );
}

export default App;

