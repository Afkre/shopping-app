import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light d-flex align-items-center justify-content-between">
        <a className="navbar-brand text-white">
          Shopping App
        </a>

        <div className="navbar-list d-flex">
          <li className="nav-item ">
            <a className="nav-link " href="/reactProject_shoppingApp/">
              Home
            </a>
          </li>
          <li
            onClick={() => {
              currentUser ? navigate("/favorites") : navigate("/login");
            }}
            className="nav-item"
          >
            <a className="nav-link" href="#">Favorites</a>
          </li>
          <li
            onClick={() => {
              currentUser ? navigate("/cart") : navigate("/login");
            }}
            className="nav-item"
          >
            <a className="nav-link" href="#">
              Cart
            </a>
          </li>

          {currentUser ? (
            <div className="d-flex align-items-center">
              <li className="nav-item1 text-capitalize text-light mr-2 ">
                {currentUser.displayName}
              </li>

              <svg
                onClick={handleLogOut}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="white"
                className="logout-btn bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </div>
          ) : (
            <>
              <li onClick={() => navigate("/login")} className="nav-item ">
                <a className="nav-link">Login</a>
              </li>
              <li onClick={() => navigate("/signup")} className="nav-item ">
                <a className="nav-link">Register</a>
              </li>
            </>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}