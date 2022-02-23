import HeaderImage from '../assets/Header-Background.png';
import Step1 from '../assets/Process-Diagram/Step1.png';
import Step2 from '../assets/Process-Diagram/Step2.png';
import Step3 from '../assets/Process-Diagram/Step3.png';
import Step4 from '../assets/Process-Diagram/Step4.png';
import Step5 from '../assets/Process-Diagram/Step5.png';
import Step6 from '../assets/Process-Diagram/Step6.png';
import BankDesignSystem from '../assets/Client-Work/BankDesignSystem.png';
import LogisticsDesignSystem from '../assets/Client-Work/LogisticsDesignSystem.png';
import Navigation from '../components/Navigation';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
                <div className="header-content">
                    <div id="site-title">Clara Forrestal</div>
                    <div id="site-subtitle">Product Designer &amp; Design System Expert</div>
                    <button className="primary-button"><a href="./Resume.pdf" download="ClaraForrestalResume.pdf">Download Resume</a></button>
                </div>
                <img className="header-image" src={HeaderImage} alt="Laptop on Desk" />
            </header>

            <div class='home-content'>
                <section id="about-me" class="" data-component="About-Me">
                    <img id="headshot-img" />
                    <div id="about-me-text">
                        <h1>About Me</h1>
                        <p>Hi, my name is Clara and I’m a product designer and a design system expert based in Charlotte, NC.
                            I currently work as a Product Design Consultant at a software consultancy that specializes in
                            end-to-end digital transformations for various clients. I bring a development background and a
                            creative problem-solving approach to the design of digital experiences. I’m passionate about
                            priotizing user needs and implementing robust design systems that bridge the gap between designers
                            and developers. My curiosity, efficiency, and obsessive organizational skills enable me to optimize
                    processes in order to create world-class products.</p>
                        <p>
                            In my consulting work, I have worked in many roles depending on the client’s needs. From developing and
                            styling functional front end components to facilitating UX strategy workshops and user interviews to
                            iteratively creating high-fidelity design mockups, I am constantly seeking the best solutions that satisfy
                    both business problems and user needs. </p>
                    </div>
                </section>



                <section id="design-process" data-component="Design-Process">
                    <div class="design-process-content">
                        <h1>My Design Process</h1>
                        <div class="process-steps-container">
                            <div class="process-step">
                                <div class="process-step-img-container">
                                    <img src={Step1} />
                                </div>
                                <h4>Understand the problem to be solved.</h4>
                            </div>
                            <div class="process-step">
                                <div class="process-step-img-container">
                                    <img src={Step2} /></div>
                                <h4>Get to know the users and their needs.</h4>
                            </div>
                            <div class="process-step">
                                <div class="process-step-img-container">
                                    <img src={Step3} /></div>
                                <h4>Define the Information Architecture.</h4>
                            </div>
                            <div class="process-step">
                                <div class="process-step-img-container">
                                    <img src={Step4} /></div>
                                <h4>Establish a Design System.</h4>
                            </div>
                            <div class="process-step">
                                <div class="process-step-img-container">
                                    <img src={Step5} /></div>
                                <h4>Create wireframes and high-fidelity mockups.</h4>
                            </div>
                            <div class="process-step">
                                <div class="process-step-img-container">
                                    <img src={Step6} /></div>
                                <h4>Continually iterate based on feedback and testing.
                        </h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="featured-work" data-component="Featured-Work">
                    <div class="section-header">
                        <h1>Featured Work</h1>
                        <a class="view-all" href="my-work.html"><button class="secondary-button">View All Work</button></a>
                    </div>
                    <div class="card-container">
                        <div class="card">
                            <img src={LogisticsDesignSystem} alt="Logistics Design System" />
                            <div class="card-text">
                                <h2>Design System Lead for International Warehousing and Logistics Company</h2>
                                <div class="tag-container">
                                    <span class="tag">Design Systems</span>
                                    <span class="tag">DesignOps</span>
                                    <span class="tag">Product Strategy</span>
                                    <span class="tag">User Interface Design</span>
                                    <span class="tag">Figma</span>
                                    <span class="tag">Responsive Design</span>
                                </div>
                                <h3>My Role</h3>
                                <ul>
                                    <li>Design System Lead since October 2021</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <img src={BankDesignSystem} alt="Bank Design System" />
                            <div class="card-text">
                                <h2>Design System Subject Matter Expert for National Bank</h2>
                                <div class="tag-container">
                                    <span class="tag">Design Systems</span>
                                    <span class="tag">DesignOps</span>
                                    <span class="tag">Product Strategy</span>
                                    <span class="tag">User Interface Design</span>
                                    <span class="tag">Figma</span>
                                    <span class="tag">Responsive Design</span>
                                </div>
                                <h3>My Role</h3>
                                <ul>
                                    <li>Design System SME for 7 months</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section data-component="Recent-Experience">
                    <div class="section-header">
                        <h1>Recent Experience</h1>
                        {/* <a href="experience.html"><button class="secondary-button">View All Experience</button></a> */}
                    </div>
                    <div class="timeline">
                        <div class="timeline-container timeline-right">
                            <div class="timeline-content">

                                <div class="timeline-content-text">
                                    <h2>Product Design Consultant at <a href="https://www.levvel.io/" target="_blank">Levvel</a>
                                    </h2>
                                    <h3>April 2019 - present</h3>
                                    <ul>
                                        <li>Product designer responsible for product strategy, user experience design, visual
                                            design, information architecture design, market research, prototyping, and user
                                    testing for clients.</li>
                                        <li>Facilitated product workshops and user interviews to gain insight about business
                                    problems and user needs.</li>
                                        <li>Utilized Figma or Sketch/Invision/Abstract to build high-fidelity, interactive
                                    prototypes to demonstrate solutions.</li>
                                        <li>Collaborated with frontend engineers in order to produce functional front end
                                    components that precisely align with the mockups.</li>
                                        <li>Developed and styled pixel-perfect UI components and pages, using React/LESS and
                                    Angular/SASS.</li>
                                        <li>Planned and lead regular design reviews with key client stakeholders.</li>
                                        <li>Trusted with full ownership of efforts to completely redesign key features.</li>
                                    </ul>
                                </div>
                                {/* <img src="assets/Levvel-Mark.png" alt="Levvel Mark Logo"> */}
                            </div>
                        </div>
                        <div class="timeline-container timeline-right">
                            <div class="timeline-content">
                                <div class="timeline-content-text">
                                    <h2>Associate Design Consultant at <a href="https://www.levvel.io/"
                                        target="_blank">Levvel</a></h2>
                                    <h3>July 2018 - March 2019</h3>
                                    <ul>
                                        <li>Organized and conducted user interviews and research synthesis in order to better
                                    understand user needs and pain points.</li>
                                        <li>Developed and styled functional frontend components and pages using React, Angular,
                                    and SASS/LESS.</li>
                                        <li>Part of both the Design practice and Engineering practice, designing and
                                            implementing solutions that enable clients to transform their digital strategies.
                                </li>
                                        <li>Learned and adapted quickly to different technology stacks in order to work with
                                    each new client.</li>
                                        <li>Provided client teams with deliverables and documentation, often prior to the
                                    deadline.</li>
                                    </ul>
                                </div>
                                {/* <img src="assets/Levvel-Mark.png" alt="Levvel Mark Logo"> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section data-component="Skills">
                    <h1>Skills</h1>
                    <h3>Methods</h3>
                    <div class="tag-container">
                        <span class="tag">User-Centered Design</span>
                        <span class="tag">Product Strategy</span>
                        <span class="tag">Product Workshops</span>
                        <span class="tag">User Research</span>
                        <span class="tag">Competitive Analysis</span>
                        <span class="tag">Personas</span>
                        <span class="tag">User Flows</span>
                        <span class="tag">User Journeys</span>
                        <span class="tag">Information Architecture</span>
                        <span class="tag">Design Systems</span>
                        <span class="tag">Interaction Design</span>
                        <span class="tag">Wireframing</span>
                        <span class="tag">Rapid Prototyping</span>
                        <span class="tag">User Interface Design</span>
                        <span class="tag">Usability Testing</span>
                        <span class="tag">Responsive Design</span>
                    </div>
                    <h3>Tools</h3>
                    <div class="tag-container">
                        <span class="tag">Figma</span>
                        <span class="tag">Sketch & Invision</span>
                        <span class="tag">Abstract Version Control</span>
                        <span class="tag">Adobe Creative Suite</span>
                    </div>
                    <h3>Programming</h3>
                    <div class="tag-container">
                        <span class="tag">HTML5</span>
                        <span class="tag">CSS3</span>
                        <span class="tag">SASS/LESS</span>
                        <span class="tag">React.js</span>
                        <span class="tag">Angular.js</span>
                        <span class="tag">Git Version Control</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
