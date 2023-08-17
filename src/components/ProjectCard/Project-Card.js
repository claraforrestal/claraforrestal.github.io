import React from "react";
import './Project-Card.scss';
import Airline from '../../assets/projects/airline.png';

function ProjectCard(props) {
    return (
        <div className='project-card'>
            <h2 className="title">{props.title}</h2>
            <div className="project-card-contents">
                <img alt={props.imageAlt} src={props.image}/>
                <div className="project-card-text">
                    <div className="role">{props.role}</div>
                    <ul>
                        {props.bulletOne && (<li>{props.bulletOne}</li>)}
                        {props.bulletTwo && (<li>{props.bulletTwo}</li>)}
                        {props.bulletThree && (<li>{props.bulletThree}</li>)}
                        {props.bulletFour && (<li>{props.bulletFour}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;