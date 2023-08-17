import React from "react";
import './Project-Card.scss';

function ProjectCard(props) {
    return (
        <div className='project-card'>
            <h2 className="title">{props.title}</h2>
            <div className="role">{props.role}</div>
            <ul>
                { props.bulletOne && (<li>{props.bulletOne}</li>)}
                { props.bulletTwo && (<li>{props.bulletTwo}</li>)}
                { props.bulletThree && (<li>{props.bulletThree}</li>)}
                { props.bulletFour && (<li>{props.bulletFour}</li>)}
            </ul>
        </div>
    );
}

export default ProjectCard;