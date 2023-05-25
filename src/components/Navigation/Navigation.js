import React from "react";
import './Navigation.scss';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';


function Navigation(props){
    return (
        <nav className={`navbar ${props.page}-page-hero`} data-component="Navigation">
            <img className="logo" src={Logo} alt=""/>
            <ul className="nav-links">
                <li><Link to="/">Profile</Link></li>
                {/* <li><Link to="/process">Process</Link></li> */}
                {/* <li><Link to="/projects">Projects</Link></li> */}
            </ul>
        </nav>
    );
}

export default Navigation;