import React from "react";
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className={"btn btn-light"}>
                                    <Link className="nav-link active" aria-current="page" to={"home"}>
                                        <img className="img-thumbnail rounded float-start" src={"bitcoin.png"} alt={"bitcoin icon"} width={"39px"} height={"29px"}/></Link>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={"btn btn-light"}>
                                    <Link className="nav-link active" aria-current="page" to={"swap"}>Swap</Link>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={"btn btn-light"}>
                                    <Link className="nav-link active" to={"tokens"}>Tokens</Link>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={"btn btn-light"}>
                                    <Link className="nav-link active" to={"pools"}>Pools</Link>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={"btn btn-light"}>
                                    <Link className="nav-link active" to={"connect"}>Connect</Link>
                                </button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* All the other elements */}
            <div id={"detail"}>
                <Outlet />
            </div>
        </div>
    );
}

export default Navbar;