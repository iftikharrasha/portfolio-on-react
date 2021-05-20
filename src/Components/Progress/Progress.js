import React from 'react';
import './Progress.css';

const Progress = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row responsive">
                        <div className="col-md-12">
                            <div className="skills_section text-center">
                                <div className="skill-head">
                                    <h2 className="wow fadeInDown" data-wow-delay="0.5s">
                                        My Progress
                                    </h2>
                                    <p>The main area of my skill is the front end development (client side of the web).
                                    </p>
                                </div>

                                <div className="skills-area">
                                    <div className="single-skill wow bounceIn" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div className="circlechart" data-percentage="92">
                                        <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" stroke-dasharray="92,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info"> <text className="circle-chart__percent" x="17.9" y="15.5">92%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            HTML5</text> </g>
                                        </svg>
                                        </div>
                                    </div>
                                    <div className="single-skill wow bounceIn" data-wow-duration="1s" data-wow-delay=".5s"> 
                                        <div className="circlechart" data-percentage="90">
                                            CSS3
                                        </div>
                                    </div>
                                    <div className="single-skill wow bounceIn" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div className="circlechart" data-percentage="85">
                                            Bootstrap
                                        </div>
                                    </div>
                                    <div className="single-skill wow bounceIn" data-wow-duration="1s" data-wow-delay=".5s">
                                        <div className="circlechart" data-percentage="82">
                                            Js/Jquery
                                        </div>
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

export default Progress;