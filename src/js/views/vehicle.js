import React, { useContext } from "react";
import img from "../../img/vehiculo.png"
import { Context } from "../store/appContext";
import "../../styles/index.css"
import { Link } from "react-router-dom";

export const Vehicles = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="pt-5 text-white">
            <h2>Vehicles star wars</h2>
            <div className="carrusel">
                {
                    store.vehicles.map(vehicle => (
                        <div key={vehicle.uid} className="card text-white element" style={{ width: "18rem" }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <Link to={`/details-v/${vehicle.uid}`} className="btn btn-outline-info m-1">
                                    Details
                                </Link>
                                {
                                    store.favorites.includes(vehicle.uid) ?
                                        <Link className="btn btn-outline-danger m-1">
                                            <i onClick={() => actions.removeFavorite(vehicle.uid)} className="bi bi-heart-fill"></i>
                                        </Link>
                                        :
                                        <Link className="btn btn-outline-danger m-1">
                                            <i onClick={() => actions.addFavorite(vehicle.uid)} className="bi bi-heart"></i>
                                        </Link>
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}


/*----------------------------------------------------------------------------------------------------------------

<div className="container text-white text-center mt-5">
            <div className="container-fluid pt-5">
                <h1 className="text-center text-white">Vehicles</h1>
                <div className="carrusel2">
                    {
                        store.vehicles.map(vehicle => (
                            <div key={vehicle.uid} className="element2">
                                <h5>Name Vehicle: </h5> <p>{vehicle.name}</p>
                                <br></br>
                                <Link to={`/details-v/${vehicle.uid}`} className="btn btn-outline-info m-1">
                                    Details
                                </Link>
                                <Link className="btn btn-outline-danger m-1">
                                    <i className="bi bi-heart-fill"></i>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>




<div className="container-fluid">
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