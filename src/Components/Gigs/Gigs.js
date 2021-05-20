import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../../img/profile.jpg';
import psdtohtml from '../../img/psdtohtml.jpg';
import landingpage from '../../img/landingpage.jpg';
import emailtemp from '../../img/emailtemp.jpg';
import wordpress from '../../img/wordpress.jpg';
import './Gigs.css';

const Gigs = () => {
    return (
        <>
           <section className="gigs">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>My Gigs</h2>
                            <div className="giglist">
                                    <a href="https://www.fiverr.com/iftikharrasha" target="_blank" className="giglist_item">
                                        <img src={profile} alt="profile" className="giglist_img"/>
                                    </a>
                                    <a href="https://www.fiverr.com/iftikharrasha/convert-psd-to-html-sketch-to-html-xd-to-html-responsive-website" target="_blank" className="giglist_item">
                                        <img src={psdtohtml} alt="psdtohtml" className="giglist_img"/>
                                    </a>
                                    <a href="https://www.fiverr.com/iftikharrasha/create-responsive-html-landing-page-sales-page-squeeze-page" target="_blank" className="giglist_item">
                                        <img src={landingpage} alt="landingpage" className="giglist_img"/>
                                    </a>
                                    <a href="https://www.fiverr.com/iftikharrasha/create-responsive-html-email-template-html-email-signature" target="_blank" className="giglist_item">
                                        <img src={emailtemp} alt="emailtemp" className="giglist_img"/>
                                    </a>
                                    <a href="https://www.fiverr.com/iftikharrasha/install-wordpress-wp-theme-customization-and-fix-wordpress-bug" target="_blank" className="giglist_item">
                                        <img src={wordpress} alt="wordpress" className="giglist_img"/>
                                    </a>
                            </div>
                            <a href="https://www.fiverr.com/iftikharrasha" className="styled_button ml-1">Hire Me</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Gigs;