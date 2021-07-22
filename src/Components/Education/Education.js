import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <>
            <section className="education">
                <div className="container">
                    <div className="row responsive">
                        <div className="col-md-12">
                            <div className="skill-head text-center">
                                <h2 className="wow fadeInDown" data-wow-delay="0.5s">
                                    works & education
                                </h2>
                            </div>
                            <div className="timeline-items text-center">
                                <div className="timeline">
                                    <ul>
                                        <li className="point-one">
                                            <div className="time">
                                                <span>June 2020</span>
                                            </div>
                                            <div className="content">
                                                <h3>Works</h3>
                                                <p>
                                                    Freelance Web Developer<br/>
                                                    Level 1 Seller, Fiverr 
                                                </p>
                                            </div>
                                        </li>
                                        <li className="point-two">
                                            <div className="time">
                                                <span>2016- 2021</span>
                                            </div>
                                            <div className="content">
                                                <h3>University</h3>
                                                <p>
                                                    North South University<br/>
                                                    Bashundhara, Dhaka
                                                </p>
                                            </div>
                                        </li>
                                        <li className="point-three">
                                            <div className="time">
                                                <span>2012 - 2015</span>
                                            </div>
                                            <div className="content">
                                                <h3>College</h3>
                                                <p>
                                                    Noapara Degree College<br/>
                                                    Jeshore, Bangladesh
                                                </p>
                                            </div>
                                        </li>
                                        <li className="point-four">
                                            <div className="time">
                                                <span>2000 - 2012</span>
                                            </div>
                                            <div className="content">
                                                <h3>School</h3>
                                                <p>
                                                    Little Jewels School<br/>
                                                    Jeshore, Bangladesh
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;