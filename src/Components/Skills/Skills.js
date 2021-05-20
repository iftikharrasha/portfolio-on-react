import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <>
            <section className="skills">
                <div className="container">
                    <div className="row responsive">
                        <div className="col-md-12">
                            <div className="skills_section text-center">
                                <div className="skill-head">
                                    <h1 className="wow fadeInDown" data-wow-delay="0.5s">
                                        Skills & Experience
                                    </h1>
                                    <p>Building small and medium web applications with HTML CSS JS or PHP,
                                        custom plugins, features, animations, and coding interactive layouts. I have
                                        also full-stack developer experience with one of the most popular open
                                        source CMS on the web - WordPress.</p>
                                    <p>Visit my <a href="https://www.linkedin.com/in/iftikharrasha/" target="_blank"
                                            rel="noopener noreferrer">Linkedin</a> for more details.</p>
                                </div>

                                <div className="skills_brands">
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                        <i className="fab fa-html5"></i>
                                        <p>Html</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                        <i className="fa fa-css3"></i>
                                        <p>Css3</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                        <i className="fab fa-bootstrap"></i>
                                        <p>Bootstrap</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <i className="fab fa-js-square"></i>
                                        <p>JavaScript</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                        <i className="fa fa-wordpress"></i>
                                        <p>Wordpress</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                                        <i className="fab fa-php"></i>
                                        <p>PHP</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".9s">
                                        <i className="fab fa-git-alt"></i>
                                        <p>Git</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                                        <i className="fab fa-figma"></i>
                                        <p>Figma</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                        <i className="fab fa-react"></i>
                                        <p>React JS</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                                        <i className="fab fa-node-js"></i>
                                        <p>Node Js</p>
                                    </div>
                                    <div className="skill-icon wow fadeInUp" data-wow-duration="1s" data-wow-delay=".9s">
                                        <i className="fab fa-sass"></i>
                                        <p>SASS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;