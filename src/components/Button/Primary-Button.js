import React from "react";
import './Primary-Button.scss';
import Download from "../../assets/icons/arrow-down-to-line.png";

function PrimaryButton(props){
    return (
        <a className="primary-button" href={props.href} download>
            <span className="primary-button-label">{props.text}</span>
            <img alt="" src={Download} />
        </a>
    );
}

export default PrimaryButton;