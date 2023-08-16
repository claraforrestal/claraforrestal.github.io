import React from 'react';
import "./Profile.scss";
import Navigation from '../../components/Navigation/Navigation';
import PrimaryButton from '../../components/Button/Primary-Button';
import Tag from '../../components/Tag/Tag';
import Avatar from "../../assets/CFAvatar.png";

function Profile() {
    return (
        <div className="App">
            <Navigation page="profile"/>
            <div className='content'>
                <div className='hero'>
                    <h1>I’m Clara Forrestal</h1>
                    <h3>Senior UX Designer & Design Systems Expert</h3>
                    <p>I strive to create exceptional experiences not only for end-users, but also
                        for my colleagues and clients. By eliminating friction across teams, optimizing
                        processes, and establishing design systems, I facilitate the success of my team
                        and the creation of world-class digital products.</p>
                    <PrimaryButton
                        text="Download Resume"
                        href={process.env.PUBLIC_URL + "/ClaraForrestalResume.pdf"}/>
                </div>
                <div className='recent-presentations'>
                    <h4>Recent presentations</h4>
                    <div className='presentation-cards'>
                        <div className='presentation-card'></div>
                    </div>
                </div>
                <div className='recent-projects'>
                    <h4>Recent projects</h4>
                </div>
            </div>
        </div>
    );
}

export default Profile;
