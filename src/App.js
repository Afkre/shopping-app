import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import { AuthContextProvider } from "./context/AuthContext";
import Search from "./components/Input";
import Cart from "./pages/Cart";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />{" "}
            <Route path="/reactProject_shoppingApp/" element={<HomePage />} />{" "}
            <Route path="/favorites" element={<Favorites />} />{" "}
            <Route path="/cart" element={<Cart />} />{" "}
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/signup" element={<Register />} />{" "}
          </Routes>{" "}
        </AuthContextProvider>{" "}
      </Router>{" "}
    </React.Fragment>
  );
}

export default App;