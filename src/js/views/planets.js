import React, { useContext } from "react";
import img from "../../img/planeta.jpg"
import { Context } from "../store/appContext";
import "../../styles/index.css"
import { Link } from "react-router-dom";

export const Planets = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="pt-5 text-white">
            <h2>Planets star wars</h2>
            <div className="carrusel">
                {
                    store.planets.map(planet => (
                        <div key={planet.uid} className="card text-white element" style={{ width: "18rem" }}>
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <Link to={`/details-planets/${planet.uid}`} className="btn btn-outline-info m-1">
                                    Details
                                </Link>
                                {
                                    store.favorites.includes(planet.uid) ?
                                        <Link className="btn btn-outline-danger m-1">
                                            <i onClick={() => actions.removeFavorite(planet.uid)} className="bi bi-heart-fill"></i>
                                        </Link>
                                        :
                                        <Link className="btn btn-outline-danger m-1">
                                            <i onClick={() => actions.addFavorite(planet.uid)} className="bi bi-heart"></i>
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


