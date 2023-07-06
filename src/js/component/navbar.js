import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/StarWars.png";

import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log("store:", store); // Log the store object to check its content
  console.log("actions:", actions); // Log the actions object to check its content
  console.log("logo:", logo); // Log the imported logo to check if it is correctly imported

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
                console.log("favorite:", elem); // Log each favorite to check its value
                return (
                  <div className="d-flex">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => {
                        console.log("Deleting favorite at index", index); // Log the deletion of a favorite
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
