import React from "react";
import Nav from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Create from "./components/Create";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Account from "./components/Account";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <Nav />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/create" element={<Create />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
