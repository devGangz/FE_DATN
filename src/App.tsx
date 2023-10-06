import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoutes";
import PublicRoute from "./routes/PublicRoutes";
import Login from "./pages/login";
import Layout from "./components/Layout";
import Admin from "./pages/admin";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navigate to="/login" replace />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/app/admin" element={<Admin />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
