import React from "react";
import './Presentation-Card.scss';

function PresentationCard(props) {
    return (
        <a className="presentation-card-link" href={props.link} target="_blank">
            <div className='presentation-card'>
                <div className="presentation-card-text">
                    <h3 className="title">{props.title}</h3>
                    <div className='metadata'>
                        <span className='date'>{props.date}</span>
                        <span className='divider'></span>
                        <span className='topic'>{props.topic}</span>
                    </div>
                    {props.description && (<p>{props.description}</p>)}
                </div>
                { props.image && (<img className="presentation-card-image" alt={props.imageAlt} src={props.image}/>)}
            </div>
        </a>
    );
}

export default PresentationCard;