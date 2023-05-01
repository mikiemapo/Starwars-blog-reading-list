import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const People = () => {
  const { store, actions } = useContext(Context);
  console.log(store.People);

  return (
    <div className="text-center mt-5">
      {store.Peoples.length > 0 ? (
        store.Peoples.map((People, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/people/.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{People.name}</h5>
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
