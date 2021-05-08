import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rasha from '../../img/rasha.svg';
import page from '../../img/page.png';
import pen from '../../img/pen.png';
import white from '../../img/white.png';
import purple from '../../img/purple.png';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <Container>
                    <Row>
                        <Col md={6} className="d-flex align-items-center">
                            <div className="hero-me pt-5">
                                <img className="wow bounceIn" data-wow-duration="1s" data-wow-delay=".1s" src={rasha}
                                    alt="rasha"/>
                                <h2 className="p-3 pb-0 mb-0">Iftikhar Rasha <span className="element"></span></h2>
                                <h1 className="p-3 pb-0 mb-0">Full Stack Web Developer</h1>
                                <p className="p-3">Resolving design problems, building smart user interfaces and useful interactions,
                                    developing
                                    rich web applications and seamless web experience.<br></br>
                                </p>

                                <a href="#works" className="styled_button wow fadeInDown" data-wow-delay="0.5s">My Works</a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="hero-page">
                                <img className="page" src={page} alt="page"/>
                                <img className="pen" src={pen} alt="pen"/>
                            </div>
                        </Col>
                        <img className="rubic rubic-purp" src={purple} alt="purpcube"/>
                        <img className="rubic rubic-white" src={white} alt="whitecube"/>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;