import React from "react";
import { Link } from "react-router-dom";
import logo from "/workspaces/react-hello-webapp/src/img/StarWars.png";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="homenav navbar navbar-light bg-opacity-75 mb-3">
      <Link to="/">
        <button type="button" class="btn btn-outline-light">
          <img src={logo} alt="Logo" height="50" />
        </button>
      </Link>
      <div className="ml-auto p-2">
        <div class="dropdown">
          <button
            class="mx-5 btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorite
          </button>
          <ul className="px-3 dropdown-menu">
            {store.favorites.length > 0 ? (
              store.favorites.map((elem, index) => {
                return (
                  <div className="d-flex">
                    {" "}
                    <button
                    type="button" class="btn btn-outline-danger" 
                      onClick={() => {
                        actions.deleteFavorites(index);
                      }}
                    >
                      X
                    </button>{" "}
                    <li key={index}>{elem}</li>{" "}
                  </div>
                );
              })
            ) : (
              <div>No favorites added yet.</div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
