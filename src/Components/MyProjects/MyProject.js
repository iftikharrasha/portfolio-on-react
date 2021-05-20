import React from 'react';
import './MyProject.css';

const MyProject = (props) => {
    const {title, img, preview, key} = props.project;
    return (
        <>
                        <div className="row plist-item">
                            <div className="col-lg-6">
                                <div className="project-tabs wow slideInLeft" data-wow-duration="2s" data-wow-delay=".1s">
                                    <h2>Biggaponn - An Ad Agency
                                    </h2>

                                    <h4>Type: E-Commerce
                                    </h4>

                                    <p className="pt-color">Biggapon is an ad agency from Abhaynagar, Jashore which is an
                                        independent service-rendering organization that delivers various services like planning,
                                        preparing, placing and dealing of ads in social media and performs many functional
                                        activities for its clients, who are mainly advertisers. Made a full functional
                                        e-commerce site for their requirements including payment gateway, live chat, facebook ad
                                        marketing, social login, logo designs, their own blogs and many more.
                                    </p>

                                    <div className="projects-options">
                                        <div className="project_icon">
                                            <span><i className="fab fa-html5" aria-hidden="true"></i></span>
                                            <span><i className="fab fa-css3" aria-hidden="true"></i></span>
                                            <span><i className="fab fa-wordpress" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 text-center">
                                <div className="products-tabs p-width">
                                    <div className="project-img">
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