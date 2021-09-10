import React from "react";
import './Navigation.css';

function Navigation(){
    return (
        <nav class="navbar" data-component="Navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                {/* <li><a href="my-work.html">My Work</a></li>
                <li><a href="experience.html">Experience</a></li> */}
            </ul>
            <button class="primary-button" data-component="Primary-Button"><a href="assets/Resume.pdf" download="ClaraForrestalResume.pdf">Download Resume</a></button>
        </nav>
    );
}

export default Navigation;