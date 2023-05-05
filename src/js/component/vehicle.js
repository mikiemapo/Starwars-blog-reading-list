import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicle = () => {
  const { store, actions } = useContext(Context);
  console.log(store)
  console.log(store.vehicles);

  return (
    <div className="scroll d-flex  card-container text-center mt-5">
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
                 Model : {vehicles.model}
                </p>
                <p className="card-text">
                 Length : {vehicles.length}
                </p>
                <p className="card-text">
                 Crew : {vehicles.crew}
                </p>
                <Link to={"/aboutvehicle/"+index}>
                <span href="#" className="float-start btn btn-primary">
                  Go somewhere
                </span>
                </Link>

                <button
                type="button" class="fa fa-heart text-danger btn btn-outline-danger" 
                  onClick={() => {
                    store.favorites.includes(vehicles.name)
                      ? (console.log("I've been clicked"),
                        alert("user already favorited this character"))
                      : actions.addFavorites(vehicles.name);
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
