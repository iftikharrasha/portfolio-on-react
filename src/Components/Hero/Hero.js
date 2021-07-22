import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rasha from '../../img/rasha.svg';
import white from '../../img/white.png';
import purple from '../../img/purple.png';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <Container>
                    <Row className="hero-row">
                        <Col lg={6} className="d-flex align-items-center">
                            <div className="hero-me">
                                <img className="wow bounceIn" data-wow-duration="1s" data-wow-delay=".1s" src={rasha}
                                    alt="rasha"/>
                                <h1 className="py-3 pl-0 pb-0 mb-0">I'm Iftikhar Rasha</h1>
                                <p className="py-3 pl-0">Expertise in Resolving design problems, building smart user interfaces and interactions,
                                    developing rich web applications and seamless web experience.<br></br>
                                </p>
                                <a href="#works" className="styled_button wow fadeInDown" data-wow-delay="0.5s">My Works</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="hero-page hero-details">
                                <p> 
                                    <span>“
                                    </span>C
                                    <span>o
                                    </span>DE
                                    <span>R
                                    </span>,
                                </p>
                                <p>T
                                    <span>H
                                    </span>INKE
                                    <span>R,
                                    </span>
                                </p>
                                <p>  
                                    <span>A
                                    </span>BST
                                    <span>RA
                                    </span>CT 
                                </p>
                                <p>  DESI
                                    <span>G
                                    </span>NER”
                                </p>
                            </div>
                        </Col>
                        <motion.img className="rubic rubic-purp" src={purple} alt="purpcube"
                            drag
                            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                            dragElastic={0.7}
                        />
                        <motion.img className="rubic rubic-white" src={white} alt="whitecube"
                            drag
                            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                            dragElastic={0.7}
                        />
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;