import React from "react";
import { Link } from "react-router-dom";
import logo from "/workspaces/react-hello-webapp/src/img/StarWars.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-opacity-75 mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 p-5">
          <img src={logo} alt="Logo" height="50" />
        </span>
      </Link>
      <div className="ml-auto p-2">
        <Link to="/demo">
          <button className="btn btn-primary">Favorite</button>
        </Link>
      </div>
    </nav>
  );
};
