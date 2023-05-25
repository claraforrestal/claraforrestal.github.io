import React from "react";
import './Navigation.scss';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';

function Navigation(){
    return (
        <nav className="navbar" data-component="Navigation">
            <img className="logo" src={Logo} alt=""/>
            <ul>
                <li><Link to="/">Profile</Link></li>
                {/* <li><Link to="/mywork">My Work</Link></li> */}
                {/* <li><a href="experience.html">Experience</a></li> */}
            </ul>
        </nav>
    );
}

export default Navigation;