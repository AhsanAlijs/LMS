import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddmissionForm from "../../screens/AddmissionPage/AddmissionForm";
import AdminDeshboard from "../../screens/AdminDeshbord/AdminDeshboard";
import StudentDeshBoard from "../../screens/StudentDeshBoard/StudentDeshBoard";
import Login from "../../screens/Login/Login";
import ProductedRoutes from "./ProtectedRoutes";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddmissionForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<ProductedRoutes component={< StudentDeshBoard />} />
        } />
        <Route path="admin/*" element={<ProductedRoutes component={<AdminDeshboard />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
