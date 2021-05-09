import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Contact.css';

const Contact = () => {
    const [contactModalShow, setContactModalShow] = React.useState(false);

    function MyVerticallyCenteredModal2(props) {
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
                <div className="text-center">
                    <h5>Thanks for your submission.</h5>
                    <div className="pt-2">
                        <Button onClick={props.onHide}>Close</Button>
                    </div>
                </div>
            </Modal.Body>
          </Modal>
        );
      }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_q3keunh', 'template_gd3iv7y', e.target, 'user_XdzmVkjI8eROeWQNbDQJa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

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
                                    <form onSubmit={sendEmail}>
                                        <div className="information-name">
                                            <input id="name" type="text" name="message" placeholder="Your Query"/>
                                        </div>

                                        <div className="information-email">
                                            <input id="name" type="email" name="reply_to" placeholder="Your Email"/>
                                        </div>

                                        <div className="information-submit">
                                            <input type="submit" name="SUBMIT" value="Send" onClick={() => setContactModalShow(true)}/>
                                            <MyVerticallyCenteredModal2 show={contactModalShow} onHide={() => setContactModalShow(false)}/>
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