import React from "react";
import './Tag.scss';

function Tag(props){
    return (
        <div className={`tag ${props.type}-tag`}>
            {props.text}
            <img alt="" src={props.iconPath} />
        </div>
    );
}

export default Tag;