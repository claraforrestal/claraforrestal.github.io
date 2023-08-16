import React from "react";
import './Primary-Button.scss';

function PrimaryButton(props){
    return (
        <a className="primary-button" href={props.href} download>
            <span className="primary-button-label">{props.text}</span>
        </a>
    );
}

export default PrimaryButton;