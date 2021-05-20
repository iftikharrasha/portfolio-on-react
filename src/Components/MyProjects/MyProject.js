import React from 'react';
import './MyProject.css';

const MyProject = (props) => {
    const {title, img, preview, key} = props.project;
    return (
        <>
                        <div class="row plist-item">
                            <div class="col-lg-6">
                                <div class="project-tabs wow slideInLeft" data-wow-duration="2s" data-wow-delay=".1s">
                                    <h2>Biggaponn - An Ad Agency
                                    </h2>

                                    <h4>Type: E-Commerce
                                    </h4>

                                    <p class="pt-color">Biggapon is an ad agency from Abhaynagar, Jashore which is an
                                        independent service-rendering organization that delivers various services like planning,
                                        preparing, placing and dealing of ads in social media and performs many functional
                                        activities for its clients, who are mainly advertisers. Made a full functional
                                        e-commerce site for their requirements including payment gateway, live chat, facebook ad
                                        marketing, social login, logo designs, their own blogs and many more.
                                    </p>

                                    <div class="projects-options">
                                        <div class="project_icon">
                                            <a href="#"><i class="fab fa-html5" aria-hidden="true"></i></a>
                                            <a href="#"><i class="fab fa-css3" aria-hidden="true"></i></a>
                                            <a href="#"><i class="fab fa-wordpress" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 text-center">
                                <div class="products-tabs p-width">
                                    <div class="project-img">
                                        <img src={img} alt="biggaponn"/>
                                    </div>
                                        <a href={preview} target="_blank" className="styled_button">Live
                                Demo</a>
                                        <a href="projects.html" className="styled_button ml-4">View More</a>
                                </div>
                            </div>
                        </div>
        </>
    );
};

export default MyProject;