import React from "react";
import "./App.css";
import "./components/Styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import AboutUs from "./components/AboutUs";
import Emergency from "./components/Emergency";
import HealthRecords from "./components/HealthRecords";
import PetProfile from "./components/PetProfile";
import RequestAppointment from "./components/RequestAppointment";
import RequestConfirmation from "./components/RequestConfirmation";
import Services from "./components/Services";
import YourPets from "./components/YourPets";
import HomeMenu from "./components/HomeMenu";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/pet-profile/:index" element={<PetProfile />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/request-appointment" element={<RequestAppointment />} />
          <Route
            path="/request-confirmation"
            element={<RequestConfirmation />}
          />
          <Route path="/home-menu" element={<HomeMenu />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/your-pets" element={<YourPets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
