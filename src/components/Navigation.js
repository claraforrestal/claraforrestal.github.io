import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <nav class="navbar" data-component="Navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mywork">My Work</Link></li>
                {/* <li><a href="experience.html">Experience</a></li> */}
            </ul>
            <button class="primary-button" data-component="Primary-Button"><a href="assets/Resume.pdf" download="ClaraForrestalResume.pdf">Download Resume</a></button>
        </nav>
    );
}

export default Navigation;