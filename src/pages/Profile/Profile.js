import React from 'react';
import "./Profile.scss";
import Navigation from '../../components/Navigation/Navigation';
import PrimaryButton from '../../components/Button/Primary-Button';
import PresentationCard from '../../components/PresentationCard/Presentation-Card';
import ProjectCard from '../../components/ProjectCard/Project-Card';
import Shelf from '../../assets/presentations/shelf.png'
import Coffee from '../../assets/presentations/coffee.png'
import Avatar from "../../assets/CFAvatar.png";
import Airline from '../../assets/projects/airline.png';
import Logistics from '../../assets/projects/logistics.png';
import Insurance from '../../assets/projects/insurance.png';
import Bank from '../../assets/projects/bank.png';
import Zelle from '../../assets/projects/zelle.png';
import Ecommerce from '../../assets/projects/ecommerce.png';
import Website from '../../assets/projects/website.png';

function Profile() {
    return (
        <div className="App">
            <Navigation page="profile"/>
            <div className='content'>
                <div className='hero'>
                    <div className='hero-content'>

                        <h1>I’m Clara Forrestal</h1>
                        <h4>Senior UX Designer & Design Systems Expert</h4>
                        <p>I strive to create exceptional experiences not only for end-users, but also
                            for my colleagues and clients. By eliminating friction across teams, optimizing
                            processes, and establishing design systems, I facilitate the success of my team
                            and the creation of world-class digital products.</p>
                        <PrimaryButton
                            text="Download Resume"
                            href={process.env.PUBLIC_URL + "/ClaraForrestalResume.pdf"}/></div>
                    <img
                        className='avatar hero-left'
                        src={Avatar}
                        alt="Clara Forrestal Avatar image"/>
                </div>
                <div className='recent-presentations-wrapper'>
                    <div className='recent-presentations'>
                        <h5>Recent presentations</h5>
                        <div className='presentation-cards'>
                            <PresentationCard
                                link="https://www.figma.com/proto/DUtCK4076Xdl0mhaWtoJ6D/Presentation%3A-How-to-tidy-up-your-Design-System?page-id=15%3A2&type=design&node-id=15-3&viewport=15536%2C489%2C0.5&t=hgRMVd6RaaH5wm4s-8&scaling=contain&starting-point-node-id=15%3A3&hide-ui=1"
                                title="How to tidy up your design system like Marie Kondo"
                                date="July 2022"
                                topic="Design Systems"
                                image={Shelf}
                                />
                            <PresentationCard
                                link="https://www.figma.com/proto/4Issal4xPA5PKX4Y1xPI42/Presentation%3A-The-Four-Horsemen-of-Poor-Usability?page-id=15%3A2&type=design&node-id=301-3&viewport=-940%2C0%2C0.06&t=CbdYBoBdObF5u9ev-8&scaling=contain&starting-point-node-id=301%3A17&hide-ui=1"
                                title="Object-Oriented UX:
                            The four horsemen
                            of poor usability"
                                date="July 2023"
                                topic="OOUX"
                                image={Coffee}
                                />
                        </div>
                    </div>
                </div>
                <div className='recent-projects'>
                    <h5>Recent projects</h5>
                    <div className='project-cards'>
                    <ProjectCard
                            imageAlt="design system for website redesign"
                            image={Website}
                            title="Design System creation and maintenance for the redesign of  marketing website"
                            role="My Role: Design System Lead"
                            bulletOne="Managed a team of 3 designers as we established a design system for an ongoing initiative."
                            bulletTwo="Built Figma styles and components, using auto layout, variables, and advanced properties."
                            bulletThree="Worked closely with developers, project managers, and designers to make decisions and to create a new and improved website on a tight deadline."
                            bulletFour="Incorporated principles of OOUX to inform layout, structure, and information architecture of the site."/>
                        <ProjectCard
                            imageAlt="airline seatback experience"
                            image={Airline}
                            title="Reimagining the inflight experience for a major international airline"
                            role="My Role: Senior UX Designer"
                            bulletOne="Developed innovative ideas to improve the airline's inflight experience and increase revenue."
                            bulletTwo="Facilitated brainstorming sessions, design thinking exercises, and rapid prototyping to quickly bring ideas to life."
                            bulletThree="Evaluated each idea based on its feasibility, impact, and alignment with the airline's strategic objectives."
                            bulletFour="Delivered a prioritized product backlog that development teams could use immediately to plan future releases."/>
                        <ProjectCard
                            imageAlt="logistics design system documentation site"
                            image={Logistics}
                            title="Design System maintenance and documentation site for global logistics company"
                            role="My Role: Design System Lead"
                            bulletOne="Designed and maintained styles, patterns, and components of the design system in Figma."
                            bulletTwo="Managed a team of 5 developers as they implemented the functional components in React and React Native."
                            bulletThree="Initiated and lead effort to build a one-stop shop documentation site that enabled both designers and developers access important information about design system patterns and components."/>
                        <ProjectCard
                            imageAlt="insurance mobile app"
                            image={Insurance}
                            title="Mobile Application for national auto insurance company"
                            role="My Role: UX Designer"
                            bulletOne="Planned and facilitated a product discovery workshop that informed the product roadmap."
                            bulletTwo="Collaborated with the research team to ensure product designs delivered value to the end user and provided the client with a competitive advantage."
                            bulletThree="Iteratively designed and delivered high-fidelity clickable prototypes in InVision and Sketch covering the full MVP feature set."/>
                        <ProjectCard
                            imageAlt="bank design system"
                            image={Bank}
                            title="File Migration to Figma, Pattern Audit, and Design System creation for national bank"
                            role="My Role: Design System Subject Matter Expert"
                            bulletOne="Performed a full audit of all design patterns across several siloed design teams."
                            bulletTwo="Established a Figma design system from scratch, incorporating atomic design principles."
                            bulletThree="Facilitated weekly calls with stakeholders across the many teams to help reach unified decisions about the patterns, components, and overall design direction."
                            bulletFour="Implemented new processes for designers to request components or report bugs as needed."/>
                        <ProjectCard
                            imageAlt="zelle integration tool"
                            image={Zelle}
                            title="CSS Implementation for Zelle integration tool"
                            role="My Role: UI Developer"
                            bulletOne="Developed functional frontend components and pages using Angular and SASS."
                            bulletTwo="Ensured that every pixel of the application aligned with the lead designer’s vision."
                            bulletThree="Utilized my UX expertise to help the development team make decisions."/>
                        <ProjectCard
                            imageAlt="e-commerce checkout experience"
                            image={Ecommerce}
                            title="Responsive E-Commerce Platform for dental supplier"
                            role="My Role: React Developer & UX Designer"
                            bulletOne="Conducted user interviews and research synthesis in order to better understand user needs and pain points."
                            bulletTwo="Developed frontend components and pages using React, Redux, and LESS."
                            bulletThree="Designed and delivered high-fidelity, clickable prototypes of new features in InVision and Sketch."
                            bulletFour="Spearheaded a complete redesign of the cart and checkout process to simplify and improve the experience for customers."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;