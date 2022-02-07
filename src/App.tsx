import React from "react";
import "./App.css";
import "./components/Styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OwnerProfile from "./components/OwnerProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/customer-profile" element={<OwnerProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
