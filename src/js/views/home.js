import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Vehicles } from "./vehicle";
import { Peoples } from "./peoples";
import { Planets } from "./planets";

export const Home = () => {
	const { store } = useContext(Context)


	return (
		<div className="container pt-5 pb-5">
			<Vehicles />
			<Peoples />
			<Planets />
		</div>
	)

}



/*

<div className="container-fluid pt-5">
				<h1 className="text-center text-white">Vehicles</h1>
				<div className="carrusel">
					{
						store.vehicles.map(vehicle => (
							<div key={vehicle.uid} className="element">
								<h4>Nombre del vehiculo: </h4> <p>{vehicle.name}</p>

							</div>
						))
					}

				</div>
			</div>
*/