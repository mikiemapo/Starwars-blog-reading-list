import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = (props) => {
  const { store, actions } = Context(Context);
  let characterProps =
    props.type == "character" ? (
      <div className="text-center mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              props.id + 1
            }.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <h6> Gender : {props.item.gender}</h6>
            <h6> Gender : {props.item.gender}</h6>
            <h6> Gender : {props.item.gender}</h6>
          </div>
        </div>
      </div>
    ) : (
      " "
    );
  return (
    <div className="card" style={{ witdh: "18rem" }}>
      {props.type == "character" ? characterProps : ""}
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <Link to={"/about/" + props.type + "/" + props.id}>
          <span className="btn btn-primary"></span>
        </Link>
        // this going to be the fav button
      </div>
    </div>
  );
};
