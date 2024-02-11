import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "../../components/Drawer/Drawer";

const Routers = () => {
  return (
    <BrowserRouter>
    <PersistentDrawerLeft/>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
