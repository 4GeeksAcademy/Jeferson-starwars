import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const DetailsPeoples = () => {
    const [data, setData] = useState()
    const params = useParams();

    const { store, actions } = useContext(Context);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.id}`)
            .then((resp) => resp.json())
            .then(respJson => setData(respJson.result.properties))
    }, [])

    if (!data) return null;


    return (
        <div className="container-fluid pt-5 text-white" style={{ height: '100vh' }}>
            <div className="row pt-5 m-5">
                <div className="col-5">
                    <h2>Detalle: {data.name}</h2>
                </div>
                <div className="col-7 text-end">
                    {
                        store.favorites.includes(params.id) ?
                            <Link className="btn btn-outline-danger m-1">
                                <i onClick={() => actions.removeFavorite(params.id)} className="bi bi-heart-fill"></i>
                            </Link>
                            :
                            <Link className="btn btn-outline-danger m-1">
                                <i onClick={() => actions.addFavorite(params.id)} className="bi bi-heart"></i>
                            </Link>
                    }
                    <Link to={'/'} className="btn btn-outline-info m-1">
                        Return
                    </Link>
                </div>

            </div>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner text-center">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <div className="card-group container">
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">H E I G H T:</h5>
                                    <p className="card-text">{data.height}</p>
                                </div>

                            </div>
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">M A S S:</h5>
                                    <p className="card-text">{data.mass}</p>
                                </div>

                            </div>
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">HAIR COLOR:</h5>
                                    <p className="card-text">{data.hair_color}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <div className="card-group container">
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">SKIN COLOR:</h5>
                                    <p className="card-text">{data.skin_color}</p>
                                </div>

                            </div>
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">EYE COLOR:</h5>
                                    <p className="card-text">{data.eye_color}</p>
                                </div>

                            </div>
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">BIRTH YEAR:</h5>
                                    <p className="card-text">{data.birth_year}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <div className="card-group container">
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">G E N D E R:</h5>
                                    <p className="card-text">{data.gender}</p>
                                </div>

                            </div>
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">C R E A T E D: </h5>
                                    <p className="card-text">{data.created}</p>
                                </div>

                            </div>
                            <div className="card card-details text-white pt-2">

                                <div className="card-body">
                                    <h5 className="card-title">E D I T E D:</h5>
                                    <p className="card-text">{data.edited}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}