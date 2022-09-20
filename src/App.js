import React, { Component } from 'react';
import './App.css';
import Orders from './Orders.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Orders/>} />
      </Routes>
  </Router>
  );
}

export default App;
