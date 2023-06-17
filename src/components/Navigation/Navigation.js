import React from "react";
import './Navigation.scss';
import {Link, NavLink } from "react-router-dom";
import Logo from '../../assets/Logo.png';


function Navigation(props){
    return (
        <nav className={`navbar ${props.page}-page-hero`} data-component="Navigation">
            <Link to="/"><img className="logo" src={Logo} alt=""/></Link>
            <ul className="nav-links">
                <li><NavLink exact activeClassName='is-active' to="/">Profile</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/process">Process</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/projects">Projects</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;