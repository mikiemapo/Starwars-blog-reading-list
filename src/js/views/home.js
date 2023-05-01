import React from "react";
import {People} from "../component/people"
import {Planet} from "../component/planet"
import {Vehicle} from "../component/vehicle"
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<People />
		<Planet />
		<Vehicle />
	</div>
);
