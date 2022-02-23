import React from "react";
import Navigation from '../components/Navigation';
import './MyWork.css';
import Ecommerce from '../assets/Client-Work/Ecommerce-3-device.png';
import Insurance from '../assets/Client-Work/Insurance3.png';
import Zelle from '../assets/Client-Work/Zelle Integration Sandbox.png';
import Portal from '../assets/Client-Work/Portal-2-devices.png';
import Marketing from '../Dental Product Marketing Site.png';

function MyWork() {
    return (
        <div>
            <Navigation />
            <div class="content">
                <section id="featured-work">
                    <h1>Client Work</h1>
                    <div class="card-container">
                        <div class="card">
                            {/* <img src={Ecommerce} alt="Ecommerce Application on 3 Devices" /> */}
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
                                <h3>My Roles</h3>
                                <ul>
                                    <li>Design System Lead since October 2021</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            {/* <img src={Ecommerce} alt="Ecommerce Application on 3 Devices" /> */}
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
                                <h3>My Roles</h3>
                                <ul>
                                    <li>Design System SME for 7 months</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <img src={Ecommerce} alt="Ecommerce Application on 3 Devices" />
                            <div class="card-text">
                                <h2>Digital Transformation for Global E-Commerce Company</h2>
                                <div class="tag-container">
                                    <span class="tag">Product Strategy</span>
                                    <span class="tag">User Research</span>
                                    <span class="tag">React.js & LESS</span>
                                    <span class="tag">User Interface Design</span>
                                    <span class="tag">Sketch & Invision</span>
                                    <span class="tag">Responsive Design</span>
                                </div>
                                <h3>My Roles</h3>
                                <ul>
                                    <li>UX Researcher for 1 month</li>
                                    <li>Front End Developer for 8 months</li>
                                    <li>Product Designer for 10 months</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <img src={Insurance} alt="Mobile Insurance Application" />
                            <div class="card-text">
                                <h2>Mobile Application for National Auto Insurance Provider</h2>
                                <div class="tag-container">
                                    <span class="tag">Product Strategy</span>
                                    <span class="tag">Design Systems</span>
                                    <span class="tag">User Interface Design</span>
                                    <span class="tag">Sketch & Invision</span>
                                    <span class="tag">User Research</span>
                                </div>
                                <h3>My Roles</h3>
                                <ul>
                                    <li>UX Researcher for 1 week</li>
                                    <li>Product Designer for 2 months</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <img src={Zelle}
                                alt="Zelle Integration Sandbox Application on 3 Devices" />
                            <div class="card-text">
                                <h2>Zelle Integration Sandbox</h2>
                                <div class="tag-container">
                                    <span class="tag">Angular.js & SASS</span>
                                    <span class="tag">Responsive Design</span>
                                    <span class="tag">Interaction Design</span>
                                    <span class="tag">Figma</span>

                                </div>
                                <h3>My Role</h3>
                                <ul>
                                    <li>Angular/SASS Developer for 3 months</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <img src={Portal} alt="Portal Application on 2 Devices" />
                            <div class="card-text">
                                <h2>API Documentation Portal and Operations Portal for Global Financial Services Company</h2>
                                <div class="tag-container">
                                    <span class="tag">Product Strategy</span>
                                    <span class="tag">Design Systems</span>
                                    <span class="tag">User Interface Design</span>
                                    <span class="tag">Figma</span>
                                    <span class="tag">User Research</span>
                                </div>
                                <h3>My Roles</h3>
                                <ul>
                                    <li>UX Researcher for 2 weeks</li>
                                    <li>Product Designer for 3 months</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card">
                            <img src={Marketing}
                                alt="Marketing Site for Dental Product on 2 Devices" />
                            <div class="card-text">
                                <h2>Marketing Website Redesign for New Dental Product</h2>
                                <div class="tag-container">
                                    <span class="tag">Product Strategy</span>
                                    <span class="tag">Competitive Analysis</span>
                                    <span class="tag">Desktop Design</span>
                                </div>
                                <h3>My Roles</h3>
                                <ul>
                                    <li>UX Researcher for 2 weeks</li>
                                    <li>Product Designer for 3 months</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div id="other-work">
                    <h1>Other Work</h1>
                    
                    <div class="photo-grid">
                        <div class="row">
                            <div class="column">
                                <a href="#contractors"><img src="assets/Other-Work/Contractors.png"
                                    alt="Levvel Contractor Portal" /></a>
                                <a href="#other-work" class="lightbox" id="contractors">
                                    <span style="background-image: url('assets/Other-Work/Contractors.png')">

                                    </span>
                                </a>
                                <h5>Levvel Contractor Portal</h5>

                                <a href="#music"><img src="assets/Other-Work/Music-Profile.png" alt="Music App Profile" /></a>
                                <a href="#other-work" class="lightbox" id="music">
                                    <span style="background-image: url('assets/Other-Work/Music-Profile.png')">

                                    </span>
                                </a>
                                <h5>Music App Profile</h5>

                                <a href="#cli"><img src="assets/Other-Work/CLI-Logo.png"
                                    alt="Levvel Command Line Interface Logo" /></a>
                                <a href="#other-work" class="lightbox" id="cli">
                                    <span style="background-image: url('assets/Other-Work/CLI-Logo.png')">

                                    </span>
                                </a>
                                <h5>Levvel Command Line Interface Logo</h5>
                                <a href="#strategy-deck"><img src="assets/Other-Work/Strategy-Deck.png"
                                    alt="Strategy Timeline Deck" /></a>
                                <a href="#other-work" class="lightbox" id="strategy-deck">
                                    <span style="background-image: url('assets/Other-Work/Strategy-Deck.png')">

                                    </span>
                                </a>
                                <h5>Strategy Timeline Deck</h5>

                            </div>
                            <div class="column">
                                <a href="#sign-up"><img src="assets/Other-Work/Sign-Up.png" alt="Knowledge Center Sign Up" /></a>
                                <a href="#other-work" class="lightbox" id="sign-up">
                                    <span style="background-image: url('assets/Other-Work/Sign-Up.png')">

                                    </span>
                                </a>
                                <h5>Knowledge Center Sign Up</h5>

                                <a href="#thank-you"><img src="assets/Other-Work/Levvel-Thank-You-Front.png"
                                    alt="Levvel Thank You Card" /></a>
                                <a href="#other-work" class="lightbox" id="thank-you">
                                    <span style="background-image: url('assets/Other-Work/Levvel-Thank-You-Front.png')">

                                    </span>
                                </a>
                                <h5>Levvel Thank You Card</h5>

                                <a href="#tshirt"><img src="assets/Other-Work/Friends-Theme.png"
                                    alt="Friends Themed T-Shirt" /></a>
                                <a href="#other-work" class="lightbox" id="tshirt">
                                    <span style="background-image: url('assets/Other-Work/Friends-Theme.png')">

                                    </span>
                                </a>
                                <h5>Friends Themed T-Shirt</h5>

                                <a href="#duke"><img src="assets/Other-Work/Duke-Graphic.png"
                                    alt="Duke Chapel Illustration" /></a>
                                <a href="#other-work" class="lightbox" id="duke">
                                    <span style="background-image: url('assets/Other-Work/Duke-Graphic.png')">

                                    </span>
                                </a>
                                <h5>Duke Chapel Illustration</h5>
                            </div>
                            <div class="column">
                                <a href="#interview"><img src="assets/Other-Work/Interview-Infographic.png"
                                    alt="Interview Infographic" /></a>
                                <a href="#other-work" class="lightbox" id="interview">
                                    <span style="background-image: url('assets/Other-Work/Interview-Infographic.png')">

                                    </span>
                                </a>
                                <h5>Interview Infographic</h5>

                                <a href="#fanny-pack"><img src="assets/Other-Work/Levvel-Fanny-Pack.png"
                                    alt="Levvel Fanny Pack" /></a>
                                <a href="#other-work" class="lightbox" id="fanny-pack">
                                    <span style="background-image: url('assets/Other-Work/Levvel-Fanny-Pack.png')">

                                    </span>
                                </a>
                                <h5>Levvel Fanny Pack</h5>

                                <a href="#contest"><img src="assets/Other-Work/Levvel-Contest-Wireframe.png"
                                    alt="Levvel Contest Wireframe" /></a>
                                <a href="#other-work" class="lightbox" id="contest">
                                    <span style="background-image: url('assets/Other-Work/Levvel-Contest-Wireframe.png">

                                    </span>
                                </a>
                                <h5>Levvel Contest Wireframe</h5>

                                <a href="#banner-ad"><img src="assets/Other-Work/Banner-Ad.png" alt="Levvel Banner Ad" /></a>
                                <a href="#other-work" class="lightbox" id="banner-ad">
                                    <span style="background-image: url('assets/Other-Work/Banner-Ad.png')">

                                    </span>
                                </a>
                                <h5>Levvel Banner Ad</h5>
                            </div>
                            <div class="column">
                                <a href="#email"><img src="assets/Other-Work/Research-Email-Template.png"
                                    alt="Levvel Research Email Template" /></a>
                                <a href="#other-work" class="lightbox" id="email">
                                    <span style="background-image: url('assets/Other-Work/Research-Email-Template.png')">

                                    </span>
                                </a>
                                <h5>Levvel Research Email Template</h5>
                                <a href="#process"><img src="assets/Other-Work/design-process.png"
                                    alt="Design Process Diagram" /></a>
                                <a href="#other-work" class="lightbox" id="process">
                                    <span style="background-image: url('assets/Other-Work/design-process.png')">

                                    </span>
                                </a>
                                <h5>Design Process Diagram</h5>
                                <a href="#water"><img src="assets/Other-Work/Levvel-Water-Bottle.png"
                                    alt="Levvel Water Bottle Label" /></a>
                                <a href="#other-work" class="lightbox" id="water">
                                    <span style="background-image: url('assets/Other-Work/Levvel-Water-Bottle.png')">

                                    </span>
                                </a>
                                <h5>Levvel Water Bottle Label</h5>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default MyWork;