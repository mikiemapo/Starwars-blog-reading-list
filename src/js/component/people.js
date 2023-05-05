import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const People = () => {
  const { store, actions } = useContext(Context);

  //  {store.characters.map((person,index)=>{

  //   return(
  //     <div key={index}>
  //       {person.name}
  //     </div>
  //   )
  //  })}

  return (
    <div className="scroll card-container d-flex text-center mt-5">
      {store.characters.length > 0 ? (
        store.characters.map((person, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  index + 1
                }.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">Gender : {person.gender}</p>
                <p className="card-text">Height : {person.height}</p>
                <p className="card-text">Eye color : {person.eye_color}</p>
                <Link to={"/aboutpeople/" + index}>
                  <span href="#" className="float-start btn btn-primary">
                    Go somewhere
                  </span>
                </Link>

                <i
                  onClick={() => {
                    store.favorites.includes(person.name)
                      ? (console.log("I've been clicked"),
                        alert("user already favorited this character"))
                      : actions.addFavorites(person.name);
                  }}
                  class="fa fa-heart text-danger"
                ></i>
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
