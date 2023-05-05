import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planet = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="scroll d-flex card-container text-center mt-5">
      {store.planets.length > 0 ? (
        store.planets.map((planet, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">
                  Population: {planet.population}
                </p>
                <Link to={"/aboutplanet/"+index}>
                <span href="#" className="float-start btn btn-primary">
                  Go somewhere
                </span>
                </Link>
                <button
                type="button" class="fa fa-heart text-danger btn btn-outline-danger" 
                  onClick={() => {
                    store.favorites.includes(planet.name)
                      ? (console.log("I've been clicked"),
                        alert("user already favorited this character"))
                      : actions.addFavorites(planet.name);
                  }}
                  
                ></button>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
