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
            <div className="hero-wrapper">
                <div className="hero">
                    <img className='avatar' src={Avatar} alt="Clara Forrestal Avatar image"/>
                    <div className="right">
                        <div className="hero-text">
                            <h1>I’m Clara Forrestal</h1>
                            <h2>Senior UX Designer & DesignOps Consultant</h2>
                            <div className="description">
                                <p>I strive to create exceptional experiences not only for end-users, but also
                                    for my colleagues and clients. By eliminating friction across teams, optimizing
                                    processes, and establishing practical systems, I actively contribute to the
                                    success of my team and the creation of world-class digital products.</p>
                                <p>I started my career as a front-end developer, building interfaces in React
                                    and CSS for my clients. After about a year, I discovered UX and quickly fell in
                                    love. Since then, I have been eagerly exploring every facet of the field. Over
                                    the past five years, I have evolved into a versatile senior designer, sharing my
                                    knowledge and guiding others along the way.</p>
                                <p>Today, my expertise spans a wide range of UX disciplines, with a focus on
                                    design systems,&nbsp;
                                    <a href="https://ooux.com/">Object-Oriented UX</a>,&nbsp;
                                    <a href="https://www.nngroup.com/articles/design-operations-101/">DesignOps</a>, and connecting design and development teams.</p>
                            </div>
                            <PrimaryButton
                                text="Download Resume"
                                href={process.env.PUBLIC_URL + "/ClaraForrestalResume.pdf"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bottom" className='bottom-wrapper'>
                <div className='white-cards'>
                    <div className='left'>
                        <div className='experience-education-wrapper'>
                            <div className='experience-wrapper'>
                                <h3>Experience</h3>
                                <div className='item'>
                                    <h4>Senior Design Consultant at Endava (formally Levvel)</h4>
                                    <h5>July 2018 - Present</h5>
                                    <p>Responsible for product strategy, user experience design, visual design,
                                        information architecture design, design system creation and management, market
                                        research, prototyping, and user testing for various clients.</p>
                                </div>
                                <div className='item'>
                                    <h4>Front End Web Developer Intern at Airtight Design</h4>
                                    <h5>Summer 2017</h5>
                                    <p>Responsible for building and styling functional front end components for
                                        clients’ customer facing websites.</p>
                                </div>
                            </div>
                            <div className='education-wrapper'>
                                <h3>Education</h3>
                                <div className='item'>
                                    <h4>Duke University</h4>
                                    <h5>August 2014 - May 2018</h5>
                                    <p>B.S. in Computer Science, Minor in Visual Media Studies</p>
                                </div>
                            </div>
                        </div>

                        <div className='contact-wrapper'>
                            <h3>Contact Me</h3>

                            <p>Email: clara.forrestal@gmail.com</p>
                            <p>LinkedIn: @claraforrestal</p>

                        </div>
                    </div>

                    <div className='right'>
                        <div className='skills-tools-wrapper'>
                            <h4>Skills</h4>
                            <div className='tags'>
                                <Tag text="Design Systems" type="skill"/>
                                <Tag text="DesignOps" type="skill"/>
                                <Tag text="Information Architecture" type="skill"/>
                                <Tag text="Product Strategy" type="skill"/>
                                <Tag text="System Design" type="skill"/>
                                <Tag text="Design Audit" type="skill"/>
                                <Tag text="OOUX" type="skill"/>
                                <Tag text="Object Mapping" type="skill"/>
                                <Tag text="Interaction Design" type="skill"/>
                                <Tag text="Wireframing" type="skill"/>
                                <Tag text="UI Design" type="skill"/>
                                <Tag text="Prototyping" type="skill"/>
                                <Tag text="Development Handoff" type="skill"/>
                                <Tag text="Usability Testing" type="skill"/>
                                <Tag text="Ideation Sessions" type="skill"/>
                                <Tag text="Workshop Facilitation" type="skill"/>
                                <Tag text="Journey Mapping" type="skill"/>
                                <Tag text="User Interviews" type="skill"/>
                                <Tag text="Market Analysis" type="skill"/>
                                <Tag text="Surveys" type="skill"/>
                                <Tag text="Requirements Gathering" type="skill"/>
                            </div>
                            <h4>Tools</h4>
                            <div className='tags'>
                                <Tag text="Figma" type="tool"/>
                                <Tag text="FigJam" type="tool"/>
                                <Tag text="Miro" type="tool"/>
                                <Tag text="Sketch" type="tool"/>
                                <Tag text="Invision" type="tool"/>
                                <Tag text="Notion" type="tool"/>
                                <Tag text="Trello" type="tool"/>
                                <Tag text="Jira" type="tool"/>
                                <Tag text="Confluence" type="tool"/>
                                <Tag text="CSS / LESS / SASS" type="tool"/>
                                <Tag text="React.js" type="tool"/>
                                <Tag text="Angular.js" type="tool"/>
                                <Tag text="Git" type="tool"/>
                                <Tag text="Microsoft Office" type="tool"/>
                                <Tag text="Google Suite" type="tool"/>
                                <Tag text="Dropbox" type="tool"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cta-banner'>
                    <div className='cta-banner-text'>
                        <h2>The Key to Success</h2>
                        <p>Unlock the full potential of my skills and experience! Download my resume now
                            for a comprehensive overview of my qualifications. Discover how my expertise can
                            add value to your projects and organizations. Let's take the next step together
                            and achieve greatness. Get your copy of my resume today!</p>
                    </div>
                    <div className='button-wrapper'>
                    <PrimaryButton
                        text="Download Resume"
                        href={process.env.PUBLIC_URL + "/ClaraForrestalResume.pdf"}/></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
