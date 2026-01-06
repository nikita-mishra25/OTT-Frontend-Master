import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from "../images/logo/logo.png";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/signup");
  };
  return (
    <>
      <header>
        <div className="navLeft">
          <div className="mainlogo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navMenu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">TV Shows</NavLink>
            <NavLink to="/">Movies</NavLink>
            <NavLink to="/">My List</NavLink>
            <NavLink to="/">Subscriptions</NavLink>
          </div>
        </div>
        <div className="navRight">
          <div className="navMenu">
            <div className="searchFleald">
              <input type="text" placeholder="Search Movies..." />
              <button>
                <span class="material-symbols-outlined">search</span>
              </button>
            </div>
            <select className="language">
              <option>EN</option>
              <option>HI</option>
            </select>
            {user ? (
              <>
                <span>Hello, {user.firstName}</span>
                <NavLink className="loginBtn" onClick={handleLogout}>
                  Logout
                </NavLink>
              </>
            ) : (
              <NavLink className="loginBtn" to="/signup">
                SignUp
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
