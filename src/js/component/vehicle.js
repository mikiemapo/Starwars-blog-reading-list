import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Vehicle = () => {
  const { store, actions } = useContext(Context);
  console.log(store)
  console.log(store.vehicles);

  return (
    <div className="d-flex  card-container text-center mt-5">
      {store.vehicles.length > 0 ? (
        store.vehicles.map((vehicles, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${index+1}.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{vehicles.name}</h5>
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
