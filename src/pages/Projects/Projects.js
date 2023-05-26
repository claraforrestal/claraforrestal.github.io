import React from 'react';
import "./Projects.scss";
import Navigation from '../../components/Navigation/Navigation';
import Tag from '../../components/Tag/Tag';
import Airline from '../../assets/projects/airline.png';
import Logistics from '../../assets/projects/logistics.png';
import Insurance from '../../assets/projects/insurance.png';
import Bank from '../../assets/projects/bank.png';
import Zelle from '../../assets/projects/zelle.png';
import Dental from '../../assets/projects/dental.png';

function Projects() {
    return (
        <div className="Projects">
            <Navigation page="projects"/>
            <div className='projects-wrapper'>
                <h1>My Projects</h1>
                <p className='description'>As a senior design consultant, I help design teams
                    find their stride. Each client brings unique challenges and ways of working. I
                    have learned to be adaptive and practical as I guide my clients to success. I've
                    worked on all phases of product design, from discovery to user research to
                    wireframes to high-fidelity prototypes. I am well-equipped to tackle various
                    design challenges, leveraging my expertise in auditing design work, establishing
                    robust design systems, streamlining processes and file architecture, and
                    empowering clients to modernize their design teams.</p>
                <div className='projects-cards'>
                    <div className='projects-card'>
                        <h2>Reimagining the inflight experience for a major international airline</h2>

                        <div className='projects-card-details'>
                            <div className='left'>
                                <h3>My Role: Senior UX Designer</h3>
                                <ul>
                                    <li>Developed innovative ideas to improve the airline's inflight experience and
                                        increase revenue.</li>
                                    <li>Facilitated brainstorming sessions, design thinking exercises, and rapid
                                        prototyping to quickly bring ideas to life.</li>
                                    <li>Evaluated each idea based on its feasibility, impact, and alignment with the
                                        airline's strategic objectives.</li>
                                    <li>Delivered a prioritized product backlog that development teams could use
                                        immediately to plan future releases.</li>
                                </ul>
                                <h3>Skills</h3>
                                <div className='skill-tags'>
                                    <Tag text="Stakeholder Interviews" type="skill"/>
                                    <Tag text="Journey Mapping" type="skill"/>
                                    <Tag text="Ideation Sessions" type="skill"/>
                                    <Tag text="Wireframing" type="skill"/>
                                    <Tag text="Usability Testing" type="skill"/>
                                </div>
                                <h3>Tools</h3>
                                <div className='tool-tags'>
                                    <Tag text="Miro" type="tool"/>
                                    <Tag text="Figma" type="tool"/>
                                    <Tag text="Microsoft Office" type="tool"/>
                                </div>
                            </div>
                            <div className='right'>
                                <img alt='airline' src={Airline}/>
                            </div>
                        </div>
                    </div>

                    <div className='projects-card'>
                        <h2>Design System maintenance and documentation site for Global Logistics Company</h2>
                        <div className='projects-card-details'>
                            <div className='left'>
                                <h3>My Role: Design System Lead</h3>
                                <ul>
                                    <li>Designed and maintained styles, patterns, and components of the design
                                        system in Figma.</li>
                                    <li>Managed a team of 5 developers as they implemented the functional components
                                        in React and React Native.</li>
                                    <li>Initiated and lead effort to build a one-stop shop documentation site that
                                        enabled both designers and developers access important information about design
                                        system patterns and components.</li>
                                </ul>
                                <h3>Skills</h3>
                                <div className='skill-tags'>
                                    <Tag text="Design Systems" type="skill"/>
                                    <Tag text="DesignOps" type="skill"/>
                                    <Tag text="Information Architecture" type="skill"/>
                                    <Tag text="Interaction Design" type="skill"/>
                                    <Tag text="Development Handoff" type="skill"/>
                                </div>
                                <h3>Tools</h3>
                                <div className='tool-tags'>
                                    <Tag text="Figma" type="tool"/>
                                    <Tag text="Jira" type="tool"/>
                                    <Tag text="Confluence" type="tool"/>
                                    <Tag text="Git" type="tool"/>
                                </div>
                            </div>
                            <div className='right'>
                                <img alt='logistics' src={Logistics}/>
                            </div>
                        </div>
                    </div>

                    <div className='projects-card'>
                        <h2>Mobile Application for National Auto Insurance Company</h2>

                        <div className='projects-card-details'>
                            <div className='left'>
                                <h3>My Role: UX Designer</h3>
                                <ul>
                                    <li>Planned and facilitated a product discovery workshop that informed the
                                        product roadmap.</li>
                                    <li>Collaborated with the research team to ensure product designs delivered
                                        value to the end user and provided the client with a competitive advantage.</li>
                                    <li>Iteratively designed and delivered high-fidelity clickable prototypes in
                                        Invision and Sketch covering the full MVP feature set.</li>
                                </ul>
                                <h3>Skills</h3>
                                <div className='skill-tags'>
                                    <Tag text="Workshop Facilitation" type="skill"/>
                                    <Tag text="User Interviews" type="skill"/>
                                    <Tag text="Market Analysis" type="skill"/>
                                    <Tag text="Surveys" type="skill"/>
                                    <Tag text="Ideation Sessions" type="skill"/>
                                    <Tag text="Journey Mapping" type="skill"/>
                                    <Tag text="Ideation Sessions" type="skill"/>
                                    <Tag text="Requirements Gathering" type="skill"/>
                                    <Tag text="Wireframing" type="skill"/>
                                    <Tag text="UI Design" type="skill"/>
                                    <Tag text="Design Systems" type="skill"/>
                                    <Tag text="Interaction Design" type="skill"/>
                                    <Tag text="Prototyping" type="skill"/>
                                    <Tag text="Usability Testing" type="skill"/>
                                    <Tag text="Development Handoff" type="skill"/>
                                </div>
                                <h3>Tools</h3>
                                <div className='tool-tags'>
                                    <Tag text="Miro" type="tool"/>
                                    <Tag text="Sketch" type="tool"/>
                                    <Tag text="Invision" type="tool"/>
                                    <Tag text="Google Suite" type="tool"/>
                                </div>
                            </div>
                            <div className='right'>
                                <img alt='insurance' src={Insurance}/>
                            </div>
                        </div>
                    </div>

                    <div className='projects-card'>
                        <h2>File Migration to Figma, Pattern Audit, and Design System creation for
                            National Bank</h2>
                        <div className='projects-card-details'>
                            <div className='left'>
                                <h3>My Role: Design System Subject Matter Expert</h3>
                                <ul>
                                    <li>Performed a full audit of all design patterns across several siloed design
                                        teams.</li>
                                    <li>Established a Figma design system from scratch, incorporating atomic design
                                        principles.</li>
                                    <li>Facilitated weekly calls with stakeholders across the many teams to help
                                        reach unified decisions about the patterns, components, and overall design
                                        direction.</li>
                                    <li>Implemented new processes for designers to request components or report bugs
                                        as needed.</li>
                                </ul>
                                <h3>Skills</h3>
                                <div className='skill-tags'>
                                    <Tag text="Design Audit" type="skill"/>
                                    <Tag text="Design Systems" type="skill"/>
                                    <Tag text="DesignOps" type="skill"/>
                                    <Tag text="Information Architecture" type="skill"/>
                                    <Tag text="Development Handoff" type="skill"/>
                                </div>
                                <h3>Tools</h3>
                                <div className='tool-tags'>
                                    <Tag text="Figma" type="tool"/>
                                    <Tag text="Sketch" type="tool"/>
                                    <Tag text="Dropbox" type="tool"/>
                                </div>
                            </div>
                            <div className='right'>
                                <img alt='bank' src={Bank}/>
                            </div>
                        </div>
                    </div>

                    <div className='projects-card'>
                        <h2>CSS Implementation for Zelle Integration Tool</h2>

                        <div className='projects-card-details'>
                            <div className='left'>
                                <h3>My Role: UI Developer</h3>
                                <ul>
                                    <li>Conducted user interviews and research synthesis in order to better
                                        understand user needs and pain points.</li>
                                    <li>Developed frontend components and pages using React, Redux, and LESS.</li>
                                    <li>Designed and delivered high-fidelity, clickable prototypes of new features
                                        in InVision and Sketch.</li>
                                    <li>Spearheaded a complete redesign of the cart and checkout process to simplify
                                        and improve the experience for customers.</li>
                                </ul>
                                <h3>Skills</h3>
                                <div className='skill-tags'>
                                    <Tag text="Angular Development" type="skill"/>
                                    <Tag text="CSS Implementation" type="skill"/>
                                    <Tag text="Git Version Control" type="skill"/>
                                    <Tag text="Development Handoff" type="skill"/>
                                </div>
                                <h3>Tools</h3>
                                <div className='tool-tags'>
                                    <Tag text="Figma" type="tool"/>
                                    <Tag text="Google Suite" type="tool"/>
                                    <Tag text="Angular.js" type="tool"/>
                                    <Tag text="CSS" type="tool"/>
                                    <Tag text="Git" type="tool"/>
                                    <Tag text="Jira" type="tool"/>
                                </div>
                            </div>
                            <div className='right'>
                                <img alt='zelle' src={Zelle}/>
                            </div>
                        </div>
                    </div>

                    <div className='projects-card'>
                        <h2>Responsive E-Commerce Platform for Dental Supplier</h2>

                        <div className='projects-card-details'>
                            <div className='left'>
                                <h3>My Role: React Developer, UX Designer</h3>
                                <ul>
                                    <li>Conducted user interviews and research synthesis in order to better
                                        understand user needs and pain points.</li>
                                    <li>Developed frontend components and pages using React, Redux, and LESS.</li>
                                    <li>Designed and delivered high-fidelity, clickable prototypes of new features
                                        in InVision and Sketch.</li>
                                    <li>Spearheaded a complete redesign of the cart and checkout process to simplify
                                        and improve the experience for customers.</li>
                                </ul>
                                <h3>Skills</h3>
                                <div className='skill-tags'>
                                    <Tag text="Workshop Facilitation" type="skill"/>
                                    <Tag text="User Interviews" type="skill"/>
                                    <Tag text="Market Analysis" type="skill"/>
                                    <Tag text="Surveys" type="skill"/>
                                    <Tag text="Ideation Sessions" type="skill"/>
                                    <Tag text="Journey Mapping" type="skill"/>
                                    <Tag text="Ideation Sessions" type="skill"/>
                                    <Tag text="Requirements Gathering" type="skill"/>
                                    <Tag text="Wireframing" type="skill"/>
                                    <Tag text="UI Design" type="skill"/>
                                    <Tag text="Design Systems" type="skill"/>
                                    <Tag text="Interaction Design" type="skill"/>
                                    <Tag text="Prototyping" type="skill"/>
                                    <Tag text="Usability Testing" type="skill"/>
                                    <Tag text="Development Handoff" type="skill"/>
                                    <Tag text="React Development" type="skill"/>
                                    <Tag text="CSS Implementation" type="skill"/>
                                    <Tag text="Git Version Control" type="skill"/>
                                </div>
                                <h3>Tools</h3>
                                <div className='tool-tags'>
                                    <Tag text="Sketch" type="tool"/>
                                    <Tag text="Invision" type="tool"/>
                                    <Tag text="Google Suite" type="tool"/>
                                    <Tag text="React.js" type="tool"/>
                                    <Tag text="CSS" type="tool"/>
                                    <Tag text="Git" type="tool"/>
                                    <Tag text="Jira" type="tool"/>
                                </div>
                            </div>
                            <div className='right'>
                                <img alt='dental' src={Dental}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Projects;