import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Aboutvehicles = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  let vehicle = store.vehicles[parseInt(params.id)];
  console.log(vehicle);
  return (
    <div className="d-flex card-text p-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${
            parseInt(params.id) + 1
          }.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div>
          <h2>{vehicle.name}</h2>
          <p>Model : {vehicle.model}</p>
          <p>Length : {vehicle.length}</p>
          <p>Passengers : {vehicle.passengers}</p>
          <p>Manufacturer : {vehicle.manufacturer}</p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <p className="card-text">
          The approach will not be easy. You are required to maneuver straight
          down this trench and skim the surface to this point. The target area
          is only two meters wide. It’s a small thermal exhaust port, right
          below the main port. The shaft leads directly to the reactor system. A
          precise hit will start a chain reaction which should destroy the
          station. Only a precise hit will set up a chain reaction. The shaft is
          ray-shielded, so you’ll have to use proton torpedoes. That’s
          impossible, even for a computer. It’s not impossible. I used to
          bull’s-eye womp rats in my T-sixteen back home. They’re not much
          bigger than two meters. Man your ships! And may the Force be with you!
        </p>
      </div>
    </div>
  );
};
export default Aboutvehicles;
