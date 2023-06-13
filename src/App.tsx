import React from "react";
//router
import { BrowserRouter, Route, Routes } from "react-router-dom";
//components 
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<Watch />} />

      </Routes>
    </BrowserRouter>
  );
}
