import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
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
import Footer from "./components/Footer";
import PetWellness from "./components/PetWellness";
import Dentistry from "./components/Dentistry";
import Diet_Nutrition from "./components/Diet_Nutrition";
import Vaccinations from "./components/Vaccinations";
import Spay_Neuter from "./components/Spay_Neuter";
import Surgery from "./components/Surgery";
import Parasite_Control from "./components/Parasite_Control";
import Microchipping from "./components/Microchipping";
import Grooming from "./components/Grooming";

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
          <Route path="/pet-wellness" element={<PetWellness />} />
          <Route path="/dentistry" element={<Dentistry />} />
          <Route path="/diet-nutrition" element={<Diet_Nutrition />} />
          <Route path="/vaccinations" element={<Vaccinations />} />
          <Route path="/spay-neuter" element={<Spay_Neuter/>} />
          <Route path="/surgery" element={<Surgery/>} />
          <Route path="/parasite-control" element={<Parasite_Control/>} />
          <Route path="/microchipping" element={<Microchipping/>} />
          <Route path="/grooming" element={<Grooming/>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
