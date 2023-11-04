import React from "react";
import Nav from "./components/Nav";
import { Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <Nav />
        <Routes location={location}></Routes>
      </div>
    </>
  );
}

export default App;
