import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoutes";
import PublicRoute from "./routes/PublicRoutes";
import Login from "./pages/login";
import Layout from "./components/Layout";
import Admin from "./pages/admin";
import Home from "./pages/home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import News from "./pages/News";
import BuildPC from "./pages/BuildPC";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/app/admin" element={<Admin />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/buildpc" element={<BuildPC />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
