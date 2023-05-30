import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";
import { Detail } from "../pages/Detail";
import { DetailPerPage } from "../pages/DetailPerPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Detail />} />
      <Route path="/pageProducts" element={<DetailPerPage />} />
    </Routes>
  );
};