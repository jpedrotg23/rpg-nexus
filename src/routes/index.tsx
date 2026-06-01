import { Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Campaigns from "../screens/Campaigns";
import CampaignDetails from "../screens/CampaignDetails";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/campaigns"
        element={
          <ProtectedRoute>
            <Campaigns />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
  path="/campaigns/:id"
  element={
    <ProtectedRoute>
      <CampaignDetails />
    </ProtectedRoute>
  }
/>
      
    </Routes>
  );
}