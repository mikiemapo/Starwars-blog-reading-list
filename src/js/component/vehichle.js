import React, {useContext} from "react";
import { Context } from "../store/appContext"

import { validateSchema } from "webpack";


export const Vehichle = () => {
    const {store,actions} = useContext(Context);
    console.log(store.characters)
    //1 create axios func to get swapi info in flux.js and save in store.character put func in app context.js 2.the list of characters will be available at store.characters 3.mapthroughstore.characters arr to repeat card comp 
    return(
    <div className="text-center mt-5">
        {/* // {arr.lenght>0 ? arr.map((Vitem, Vindex)=>{
            
            return(
        <div key={Vindex} className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{Vindex.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        )
        }) : " "}*/}
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
);}
