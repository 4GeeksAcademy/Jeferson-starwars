import React from "react";
import wars from "../../img/starwars.png"
import { Link } from "react-router-dom";


export const Navbar = () => {
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
                      
                    </div>

                </div>
            </nav>
        </div>
    );
};
