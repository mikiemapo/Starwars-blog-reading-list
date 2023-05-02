import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const People = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card-container d-flex text-center mt-5">
      {store.characters.length > 0 ? (
        store.characters.map((person, index) => {
          console.log(person)
          return (
            <div  key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
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
