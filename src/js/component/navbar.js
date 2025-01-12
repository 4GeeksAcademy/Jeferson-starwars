import React, { useContext } from "react";
import wars from "../../img/starwars.png"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="">
            <nav className="navbar fixed-top navbar-expand-lg border-bottom ">
                <div className="container-fluid mx-5">
                    <Link to={'/'} className="navbar-brand" href="#">
                        <img src={wars} alt="logo" className='wars' />
                    </Link>
                    <div className="dropdown">
                        <button className="btn btn-outline-dark rounded-1 dropdown-toggle text-white border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            F a v o r i t e s <i className="fa-brands fa-galactic-senate"></i>
                        </button>
                        <ul className="dropdown-menu">
                            {
                                store.favorites.length > 0 ? (
                                    store.favorites.map((favorite, index) => (
                                        <li key={index} className="d-flex align-items-center justify-content-between">
                                            <a className="dropdown-item">{favorite}</a>
                                            <button className="btn btn-sm ms-2" onClick={() => actions.removeFavorite(favorite)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </li>
                                    ))
                                ) : (
                                    <li>
                                        <a className="dropdown-item">No hay favoritos en la lista</a>
                                    </li>
                                )}
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    );
};
