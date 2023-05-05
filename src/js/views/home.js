import React, {useState} from "react";
import {People} from "../component/people"
import {Planet} from "../component/planet"
import {Vehicle} from "../component/vehicle"
import "../../styles/home.css";


export const Home = () => {
	const [dropdown,setDropdown]= useState()
	return (
	<div className="container-fluid text-center mt-5">
		<h1 className="card-text font-monospace fw-bold fs-1">People</h1>
		<People/>
		<h1 className="card-text font-monospace fw-bold  fs-1">Planet</h1>
		<Planet />
		<h1 className="card-text font-monospace fw-bold  fs-1">Vehicle</h1>
		<Vehicle />
	</div>
	)
	};
