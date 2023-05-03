import React from "react";
import {People} from "../component/people"
import {Planet} from "../component/planet"
import {Vehicle} from "../component/vehicle"
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid text-center mt-5">
		<h1>People</h1>
		<People />
		<h1>People</h1>
		<Planet />
		<h1>People</h1>
		<Vehicle />
	</div>
);
