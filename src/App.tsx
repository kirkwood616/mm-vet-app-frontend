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
import Vaccinations from "./components/Vaccinations";
import Surgery from "./components/Surgery";
import Microchipping from "./components/Microchipping";
import Grooming from "./components/Grooming";
import PetImageUpload from "./components/PetImageUpload";
import ParasiteControl from "./components/ParasiteControl";
import DietNutrition from "./components/DietNutrition";
import SpayNeuter from "./components/SpayNeuter";
import MessageBoardHome from "./components/message-board/MessageBoardHome";
import GeneralBoard from "./components/message-board/GeneralBoard";
import EditMessage from "./components/message-board/EditMessage";
import ScrollToTop from "./ScrollToTop";
import UnderConstruction from "./components/message-board/UnderConstruction";
import SingleService from "./components/SingleService";
// import ReplyToPost from "./components/message-board/ReplyToPost";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/health-records/:id" element={<HealthRecords />} />
            <Route path="/pet-profile/:id" element={<PetProfile />} />
            <Route
              path="/pet-profile/image-upload/:id"
              element={<PetImageUpload />}
            />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route
              path="/request-appointment"
              element={<RequestAppointment />}
            />
            <Route
              path="/request-confirmation"
              element={<RequestConfirmation />}
            />
            <Route path="/home-menu" element={<HomeMenu />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/service" element={<SingleService />} />
            <Route path="/your-pets" element={<YourPets />} />
            <Route path="/pet-wellness" element={<PetWellness />} />
            <Route path="/dentistry" element={<Dentistry />} />
            <Route path="/diet-nutrition" element={<DietNutrition />} />
            <Route path="/vaccinations" element={<Vaccinations />} />
            <Route path="/spay-neuter" element={<SpayNeuter />} />
            <Route path="/surgery" element={<Surgery />} />
            <Route path="/parasite-control" element={<ParasiteControl />} />
            <Route path="/microchipping" element={<Microchipping />} />
            <Route path="/grooming" element={<Grooming />} />
            <Route path="/message-board" element={<MessageBoardHome />} />
            <Route path="/message-board/general" element={<GeneralBoard />} />
            <Route path="/message-board/edit/:id" element={<EditMessage />} />
            {/* <Route path="/message-board/reply/:id" element={<ReplyToPost />} /> */}
            <Route
              path="/message-board/under-construction"
              element={<UnderConstruction />}
            />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
