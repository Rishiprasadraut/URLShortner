import React from "react";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./component/ProtectedRoute";

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
