import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Create from "./pages/Create";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Nav from "./components/Nav";

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
