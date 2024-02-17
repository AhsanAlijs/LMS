import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "../../components/Drawer/Drawer";
import AddmissionForm from "../../screens/AddmissionPage/AddmissionForm";
import AdminDeshboard from "../../screens/AdminDeshbord/AdminDeshboard";
import StudentDeshBoard from "../../screens/StudentDeshBoard/StudentDeshBoard";
import Login from "../../screens/Login/Login";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddmissionForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={< StudentDeshBoard />} />
        <Route path="admin/*" element={<AdminDeshboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
