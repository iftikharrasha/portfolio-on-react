import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section className="contact">
                <Container>
                    <Row>
                        <Col lg={6} md={8} className=" offset-lg-6 offset-md-4">
                            <div className="modal-form">
                                <div className="form-information">
                                    <p>What would you do if you had an experienced web expert
                                        available at your fingertips?
                                        <br /><span>send me a, hey.</span>
                                    </p>
                                    <form action="" method="post">
                                        <div className="information-name">
                                            <input id="name" type="text" name="query" placeholder="Your Query"/>
                                        </div>

                                        <div className="information-email">
                                            <input id="name" type="email" name="query" placeholder="Your Email"/>
                                        </div>

                                        <div className="information-submit">
                                            <input type="submit" name="SUBMIT" value="Send"/>
                                        </div>
                                    </form>
                                    <p>
                                        <br />or <span>connect</span> me at
                                    </p>
                                </div>
                                <div className="form-options">
                                    <div className="social_icon">
                                        <a href="https://www.facebook.com/iftikhar.rasha" target="_blank">
                                            <i className="fa fa-facebook" aria-hidden="true" target="_blank"></i>
                                        </a>
                                        <a href="https://twitter.com/iftikharrasha" target="_blank">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="https://www.instagram.com/fivepercentchandler" target="_blank">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/iftikharrasha" target="_blank">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a href="https://codepen.io/iftikharrasha" target="_blank">
                                            <i className="fa fa-codepen" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;