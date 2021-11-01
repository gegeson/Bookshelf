import React from "react";
import { Routes, Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/timeline" />
        <Route path="/bookshelf" />
      </Routes>
    </div>
  );
}

export default App;
