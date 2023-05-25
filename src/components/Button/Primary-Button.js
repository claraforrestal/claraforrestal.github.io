import React from "react";
import './Primary-Button.scss';
import Download from "../../assets/icons/arrow-down-to-line.png";

function PrimaryButton(){
    return (
        <button className="primary-button">
            Download Resume
            <img alt="" src={Download} />
        </button>
    );
}

export default PrimaryButton;