import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import shadow from '../../img/shadow.png';
import space from '../../img/space.png';
import './Coffee.css';

const Coffee = () => {
    return (
        <>
            <section className="what-can">
                <Container className="counter-sec">
                    <div className="counts">
                        <Row>
                            <Col sm={3}>
                                <div className="count-item count-white">
                                    <h3>PROJECTS<br />DONE</h3>
                                    <CountUp className="count" end={7} />
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="count-item count-white">
                                    <h3>COFFEE<br />INTAKEN </h3>
                                    <CountUp className="count" end={321} />
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="count-item">
                                    <h3>HOURS OF<br />SLEEP GONE </h3>
                                    <CountUp className="count" end={553} />
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="count-item">
                                    <h3>LIES<br />TOLD </h3>
                                    <p className="count">None</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="floating">
                                <img src={space} alt="spaceman"/>
                            </div>
                            <div className="shadows">
                                <img src={shadow} alt="shadow"/>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="what-items">
                                <h2>What I can do for you?</h2>
                                <Row>
                                    <Col md={6}>
                                        <div className="single-icon">
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="card_icon">
                                                        <i className="fas fa-desktop fa-2x"></i>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h3>Web design and dev</h3>
                                                    <p>Web-sites design and development, based on your
                                                        projects
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="single-icon">
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="card_icon">
                                                        <i className="fas fa-mobile-alt fa-2x"></i>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h3>UX\UI design</h3>
                                                    <p>User interface and experience design for your applications
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="single-icon">
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="card_icon">
                                                        <i className="fa fa-wordpress fa-2x"></i>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h3>Wordpress Sites</h3>
                                                    <p>E-commerce sites to individual CMS for for your
                                                        customers
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="single-icon">
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="card_icon">
                                                        <i className="fas fa-magic fa-2x"></i>
                                                    </div>
                                                </div>
                                                <div className="col-9">
                                                    <h3>Logo Design</h3>
                                                    <p>logos, covers, avatars for social pages, baners etc
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="hire-me">
                                    <a href="#contact" className="styled_button">Hire Me</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Coffee;