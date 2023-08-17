import React from "react";
import './Presentation-Card.scss';

function PresentationCard(props) {
    return (
        <a className="presentation-card-link" href={props.link} target="_blank" >
            <div className='presentation-card'>
                <h3 className="title">{props.title}</h3>
                <div className='metadata'>
                    <span className='date'>{props.date}</span>
                    <span className='divider'></span>
                    <span className='topic'>{props.topic}</span>
                </div>
                {props.description && (<p>{props.description}</p>)}
            </div>
        </a>
    );
}

export default PresentationCard;