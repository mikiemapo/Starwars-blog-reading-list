import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Aboutpeople = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  let person = store.characters[parseInt(params.id)];
  console.log(person);
  return (
    <div>
      <div>
        <img></img>
        <div>
          <h2>{person.name}</h2>
          <p>blah blah blah</p>
        </div>
      </div>
      <div>
        <p>
          height :{person.height}
          height :{person.height}
        </p>
      </div>
    </div>
  );
};
export default Aboutpeople;
