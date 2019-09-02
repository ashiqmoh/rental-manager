import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {
    return (
        <ul id="slide-out" className="sidenav">
            <li><NavLink to="/dashboard"><i className="material-icons">dashboard</i>Dashboard</NavLink></li>
            <li><NavLink to="/owner"><i className="material-icons">person</i>Owner</NavLink></li>
            <li><NavLink to="/property"><i className="material-icons">account_balance</i>Property</NavLink></li>
            <li><NavLink to="/tenant"><i className="material-icons">people</i>Tenant</NavLink></li>
            <li><NavLink to="/rental"><i className="material-icons">layers</i>Rental</NavLink></li>
            <li><NavLink to="/logout"><i className="material-icons">power_settings_new</i>Logout</NavLink></li>
        </ul>
    );
};

export default Sidenav;