import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import About from "./pages/About";
import Login from "./pages/Login";

const App = () => {
   return (
      <div className="mx-4 sm:mx-[10%]">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:speciality" element={<Doctors />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/appointment/:docId" element={<appoin />} />
         </Routes>
      </div>
   );
};

export default App;
