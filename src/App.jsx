import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from './pages/Login'
import Personal_info from "./pages/Register/Personal_info";
import { Dashboard } from "./pages/Dashboard";
import Add_address from "./pages/Add_address";
import Manual from "./pages/manual";
import Final from "./pages/final";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personalinfo" element={<Personal_info/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/addaddress" element={<Add_address/>}></Route>
        <Route path="/manual" element={<Manual/>}></Route>
        <Route path="/final" element={<Final/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
