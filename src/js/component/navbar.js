import React from "react";
import { Link } from "react-router-dom";
import logo from "/workspaces/react-hello-webapp/src/img/StarWars.png";

export const Navbar = () => {
  return (
    <nav className=" homenav navbar navbar-light bg-opacity-75 mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 p-5">
          <img src={logo} alt="Logo" height="50" />
        </span>
      </Link>
      <div className="ml-auto p-2">
		<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
      </div>
    </nav>
  );
};
