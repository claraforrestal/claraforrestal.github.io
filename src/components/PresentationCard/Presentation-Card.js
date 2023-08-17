import React from "react";
import './Presentation-Card.scss';

function PresentationCard(props) {
    return (
        <div className='presentation-card'>
            <h3 className="title">{props.title}</h3>
            <div className='metadata'>
                <span className='date'>{props.date}</span>
                <span className='divider'></span>
                <span className='topic'>{props.topic}</span>
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default PresentationCard;