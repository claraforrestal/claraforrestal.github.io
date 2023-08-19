import React from "react";
import './Footer.scss';

function Footer(props){
    return (
        <div className="footer">
            <div className="footer-title">Let's connect</div>
            <a href="https://www.linkedin.com/in/clara-forrestal/" target="_blank"><img className="icon" alt="LinkedIn icon" src={props.iconPath} /></a>
        </div>
    );
}

export default Footer;