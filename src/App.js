import React from "react";
// FOR ROUTERS 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// FOR SCROLLING TOP 
import ScrollToTop from "./Components/ScrollTop/ScrollTop";
// FOR PAGES 
import HomePage from "./Components/HomePage/HomePage";
import Appointment from "./Components/Appointment/Appointment";
import Header from "./Components/Header/Header";
import AllDoctors from "./Components/AllDoctors/AllDoctors";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Saved/Login";
import DocEmily from "./Components/Appointment/DocEmily/DocEmily";
import DocSarah from "./Components/Appointment/DocSarah/DocSarah";
import DocChristopher from "./Components/Appointment/DocChristopher/DocChristopher";
import DocJennifer from "./Components/Appointment/DocJennifer/DocJennifer";
import DocAndrew from "./Components/Appointment/DocAndrew/DocAndrew";
import DocDavis from "./Components/Appointment/DocDavis/DocDavis";
import DocTimothy from "./Components/Appointment/DocTimothy/DocTimothy";
import DocAva from "./Components/Appointment/DocAva/DocAva";
import DocJeffrey from "./Components/Appointment/DocJeffrey/DocJeffrey";
import DocZoe from "./Components/Appointment/DocZoe/DocZoe";
import DocPatrick from "./Components/Appointment/DocPatrick/DocPatrick";
import DocChloe from "./Components/Appointment/DocChloe/DocChloe";
import DocRyan from "./Components/Appointment/DocRyan/DocRyan";
import DocAmelia from "./Components/Appointment/DocAmelia/DocAmelia";
import GeneralPhysician from "./Components/AllDoctors/GeneralPhysician/GeneralPhysician";
import Gynecologist from "./Components/AllDoctors/Gynecologist/Gynecologist";
import Dermatologist from "./Components/AllDoctors/Dermatologist/Dermatologist";
import Pediatricians from "./Components/AllDoctors/Pediatricians/Pediatricians";
import Neurologist from "./Components/AllDoctors/Neurologist/Neurologist";
import Gastroenterologist from "./Components/AllDoctors/Gastroenterologist/Gastroenterologist";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <ScrollToTop />
        <Routes>
          {/* HEADER ROUTES  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/AllDoctors" element={<AllDoctors />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
          {/* APPOINTMENT ROUTES  */}
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/DocEmily" element={<DocEmily />} />
          <Route path="/DocSarah" element={<DocSarah />} />
          <Route path="/DocChristopher" element={<DocChristopher />} />
          <Route path="/DocJennifer" element={<DocJennifer />} />
          <Route path="/DocAndrew" element={<DocAndrew />} />
          <Route path="/DocDavis" element={<DocDavis />} />
          <Route path="/DocTimothy" element={<DocTimothy />} />
          <Route path="/DocAva" element={<DocAva />} />
          <Route path="/DocJeffrey" element={<DocJeffrey />} />
          <Route path="/DocZoe" element={<DocZoe />} />
          <Route path="/DocPatrick" element={<DocPatrick />} />
          <Route path="/DocChloe" element={<DocChloe />} />
          <Route path="/DocRyan" element={<DocRyan />} />
          <Route path="/DocAmelia" element={<DocAmelia />} />
          {/* ALL DOCTORS ROUTES  */}
          <Route path="/GeneralPhysician" element={<GeneralPhysician />} />
          <Route path="/Gynecologist" element={<Gynecologist />} />
          <Route path="/Dermatologist" element={<Dermatologist />} />
          <Route path="/Pediatricians" element={<Pediatricians />} />
          <Route path="/Neurologist" element={<Neurologist />} />
          <Route path="/Gastroenterologist" element={<Gastroenterologist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



