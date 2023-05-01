import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Planet = () => {
  const { store, actions } = useContext(Context);
  console.log(store.getPlanets);

  return (
    <div className="text-center mt-5">
      {store.planet.length > 0 ? (
        store.planet.map((getPlanets, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{planets.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
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
