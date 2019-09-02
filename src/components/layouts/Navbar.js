import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <button data-target="slide-out" className="btn-flat sidenav-trigger white-text"><i className="material-icons">menu</i></button>
                <Link to="/" className="brand-logo center">Rental</Link>
            </div>
        </nav>
    )
}

export default Navbar;