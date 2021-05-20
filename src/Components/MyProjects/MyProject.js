import React from 'react';
import './MyProject.css';

const MyProject = (props) => {
    const {title, img, preview, key, description, category, icons } = props.project;
    return (
        <>
                        <div className="row plist-item">
                            <div className="col-lg-6">
                                <div className="project-tabs wow slideInLeft" data-wow-duration="2s" data-wow-delay=".1s">
                                    <h2>{title}
                                    </h2>

                                    <h4>Type: {category}
                                    </h4>

                                    <p className="pt-color">{description}</p>

                                    <div className="projects-options">
                                        <div className="project_icon">
                                                {
                                                    icons.map(icon => 
                                                        <span><i className={icon.icon} aria-hidden="true"></i></span>
                                                    )
                                                }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 text-center">
                                <div className="products-tabs p-width">
                                    <div className="project-img">
                                        <img src={img} alt="biggaponn"/>
                                    </div>
                                        <a href={preview} target="_blank" className="styled_button">Live Demo</a>
                                </div>
                            </div>
                        </div>
        </>
    );
};

export default MyProject;