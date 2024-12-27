import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Chat from "./pages/Chat";



function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
