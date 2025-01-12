import React, { useContext } from "react";
import img from "../../img/personajes.jpg"
import { Context } from "../store/appContext";
import "../../styles/index.css"
import { Link } from "react-router-dom";

export const Peoples = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="pt-5 text-white">
            <h2>Peoples star wars</h2>
            <div className="carrusel">
                {
                    store.people.map(people => (
                        <div key={people.uid} className="card text-white element" style={{ width: "18rem" }}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{people.name}</h5>
                                <Link to={`/details-p/${people.uid}`} className="btn btn-outline-info m-1">
                                    Details
                                </Link>
                                {
                                    store.favorites.includes(people.uid) ?
                                        <Link className="btn btn-outline-danger m-1">
                                            <i onClick={() => actions.removeFavorite(people.uid)} className="bi bi-heart-fill"></i>
                                        </Link>
                                        :
                                        <Link className="btn btn-outline-danger m-1">
                                            <i onClick={() => actions.addFavorite(people.uid)} className="bi bi-heart"></i>
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
