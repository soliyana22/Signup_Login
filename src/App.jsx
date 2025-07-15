import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal_info from "./pages/Register/Personal_info.jsx";
import Dashboard  from "./pages/Dashboard/Dashboard.jsx";
import Add_address from "./pages/Register/Add_address.jsx";
import Manual from "./pages/Register/Manual.jsx";
import Final from "./pages/Register/Final.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx"
import Customers from "./Components/Customers/Customers.jsx";

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
        <Route path="/customers" element={<Customers/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
