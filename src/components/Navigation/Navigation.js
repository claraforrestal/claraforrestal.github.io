import React from "react";
import './Navigation.scss';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';

function Navigation(){
    return (
        <nav className="navbar" data-component="Navigation">
            <img className="logo" src={Logo} alt=""/>
            <ul className="nav-links">
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/process">Process</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;