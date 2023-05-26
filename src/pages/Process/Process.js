import React from 'react';
import "./Process.scss";
import Navigation from '../../components/Navigation/Navigation';
import Tag from '../../components/Tag/Tag';

function Process() {
    return (
        <div className="Process">
            <Navigation page="process"/>
            <div className='process-wrapper'>
                <h1>My Design Process</h1>
                <p className='description'>My design process constantly evolves and adapts to meet the unique needs and
                    constraints of each project. While I understand that I may not always be able to
                    follow my ideal process to the letter, I always strive for excellence. Below, I
                    outline my current ideal process as a framework for successful project
                    execution.</p>
                <div className='process-cards'>
                    <div className='process-card'>
                        <h2>1. Discovery</h2>
                        <p>Standard methods for UX discovery have served me well on many client
                            projects. Discovery workshops, stakeholder interviews, and market research
                            provide a strong foundation for informed decision-making for the rest of the
                            project.</p>
                        <p>However, since learning about OOUX, I now consider object mapping an
                            essential step for successful discovery. I incorporate object mapping activities
                            wherever I can because I have seen the power of the OOUX framework firsthand.</p>
                        <h3>Goals</h3>
                        <ul>
                            <li>Define the problem to be solved</li>
                            <li>Identify project goals and success metrics</li>
                            <li>Resolve misalignments across stakeholders</li>
                            <li>Establish hypotheses to test during research</li>
                        </ul>
                        <h3>Outputs</h3>
                        <ul>
                            <li>Proto-personas</li>
                            <li>Hypothesized user needs</li>
                            <li>Hypothesized user flows</li>
                            <li>Hypothesized journey maps</li>
                            <li>Object Map</li>
                            <li>Nested Object Matrix</li>
                            <li>CTA Matrix</li>
                        </ul>
                        <h3>Skills</h3>
                        <div className='skill-tags'>
                            <Tag text="Workshop Facilitation" type="skill"/>
                            <Tag text="Market Analysis" type="skill"/>
                            <Tag text="Stakeholder Interviews" type="skill"/>
                            <Tag text="Design Audit" type="skill"/>
                            <Tag text="DesignOps" type="skill"/>
                            <Tag text="Product Strategy" type="skill"/>
                            <Tag text="Object Mapping" type="skill"/>
                        </div>
                        <h3>Tools</h3>
                        <div className='tool-tags'>
                            <Tag text="FigJam" type="tool"/>
                            <Tag text="Miro" type="tool"/>
                            <Tag text="Notion" type="tool"/>
                            <Tag text="Trello" type="tool"/>
                        </div>
                    </div>

                    <div className='process-card'>
                        <h2>2. Research & Planning</h2>
                        <p>I conduct qualitative and quantitative research methods, including user
                            interviews, usability testing, surveys, and competitive analysis. I also utilize
                            activities, such as card sorting and tree sorting to inform the information
                            architecture.</p>
                        <p>I diligently maintain the object map throughout the project, integrating
                            research findings, expanding object definitions, and prioritizing requirements.
                            The outputs of this step enable me to start sketching with clarity and
                            confidence.</p>
                        <h3>Goals</h3>
                        <ul>
                            <li>Validate hypotheses made during discovery</li>
                            <li>Develop empathy for users</li>
                            <li>Organize and prioritize requirements</li>
                            <li>Determine information architecture</li>
                        </ul>
                        <h3>Outputs</h3>
                        <ul>
                            <li>User personas</li>
                            <li>User flows</li>
                            <li>Journey maps</li>
                            <li>Prioritized requirements</li>
                            <li>Information architecture</li>
                            <li>Service blueprint</li>
                            <li>Prioritized Object Map</li>
                        </ul>
                        <h3>Skills</h3>
                        <div className='skill-tags'>
                            <Tag text="User Interviews" type="skill"/>
                            <Tag text="Surveys" type="skill"/>
                            <Tag text="Market Analysis" type="skill"/>
                            <Tag text="Requirements Gathering" type="skill"/>
                            <Tag text="Usability Testing" type="skill"/>
                            <Tag text="Information Architecture" type="skill"/>
                            <Tag text="Object Mapping" type="skill"/>
                        </div>
                        <h3>Tools</h3>
                        <div className='tool-tags'>
                            <Tag text="FigJam" type="tool"/>
                            <Tag text="Miro" type="tool"/>
                            <Tag text="Notion" type="tool"/>
                            <Tag text="Trello" type="tool"/>
                        </div>
                    </div>

                    <div className='process-card'>
                        <h2>3. Iterative Design</h2>
                        <p>Utilizing the prioritized object map, I create sketches and wireframes of the
                            experience. This allows me to work through the layout of screens and flows.
                        </p>
                        <p>From there, I define the visual elements, producing high fidelity mockups
                            and/or clickable prototypes. Alongside the UI and interaction design, I
                            establish and maintain the design system.</p>
                        <p>To ensure excellence, I maintain regular communication and collaboration with
                            stakeholders, users, and developers.</p>
                        <h3>Goals</h3>
                        <ul>
                            <li>Visualize the experience</li>
                            <li>Define screen layouts and visual elements</li>
                            <li>Establish a functional design system</li>
                            <li>Iteratively test and improve the experience</li>
                            <li>Provide clear requirements to developers</li>
                        </ul>
                        <h3>Outputs</h3>
                        <ul>
                            <li>Low fidelity wireframes</li>
                            <li>High fidelity mockups</li>
                            <li>Clickable prototypes</li>
                            <li>Robust design system</li>
                            <li>Prioritized development requirements</li>
                        </ul>
                        <h3>Skills</h3>
                        <div className='skill-tags'>
                            <Tag text="Wireframing" type="skill"/>
                            <Tag text="UI Design" type="skill"/>
                            <Tag text="Interaction Design" type="skill"/>
                            <Tag text="Design Systems" type="skill"/>
                            <Tag text="Prototyping" type="skill"/>
                            <Tag text="Usability Testing" type="skill"/>
                            <Tag text="Development Handoff" type="skill"/>
                        </div>
                        <h3>Tools</h3>
                        <div className='tool-tags'>
                            <Tag text="Figma" type="tool"/>
                            <Tag text="Sketch" type="tool"/>
                            <Tag text="InVision" type="tool"/>
                            <Tag text="Jira" type="tool"/>
                            <Tag text="CSS" type="tool"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Process;
