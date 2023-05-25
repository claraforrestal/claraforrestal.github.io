import React from 'react';
import "./Profile.scss";
import Navigation from '../components/Navigation/Navigation';
import PrimaryButton from '../components/Button/Primary-Button';
import Avatar from"../assets/CFAvatar.png";

function Profile() {
    return (
        <div className="App">
            <Navigation/>
            <div className="hero-wrapper">
                <div className="hero">
                    <img src={Avatar} alt=""/>
                    <div className="hero-text">
                        <h1>I’m Clara Forrestal</h1>
                        <h2>Senior UX Designer & DesignOps Consultant</h2>
                        <div className="description">
                            <p>I strive to create exceptional experiences not only for end-users, but also for my colleagues and clients. By eliminating friction across teams, optimizing processes, and establishing practical systems, I actively contribute to the success of my team and the creation of world-class digital products.</p>
                            <p>I started my career as a front-end developer, building interfaces in React and CSS for my clients. After about a year, I discovered UX and quickly fell in love. Since then, I have been eagerly exploring every facet of the field. Over the past five years, I have evolved into a versatile senior designer, sharing my knowledge and guiding others along the way.</p>
                            <p>Today, my expertise spans a wide range of UX disciplines, with a focus on design systems, <a href="https://ooux.com/">Object-Oriented UX</a>, DesignOps, and connecting design and development teams.</p>
                        </div>
                        <PrimaryButton/>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Profile;
