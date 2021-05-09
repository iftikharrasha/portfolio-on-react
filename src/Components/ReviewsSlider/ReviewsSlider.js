import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Review from '../Review/Review';
import reviews from '../../data/reviews.json';
import './ReviewsSlider.css';

const ReviewsSlider = () => {
    const [review, setReviews] = useState([]);
    useEffect(() => {
    setReviews(reviews);
    console.log(reviews);
    }, [])

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 2100,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            },
          },
          {
              breakpoint: 1500,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
              breakpoint: 1028,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            },
          },
          {
            breakpoint: 770,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            },  
          },
          {
              breakpoint: 525,
              settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }, 
          },
        ],
      };

    return (
        <>
            <section className="testimonials">
                <Container>
                    <div className="reviews">
                        <Row>
                            <Col>
                            <div className="glider-contain multiple">
                                {/* <button className="glider-prev">
                                    <i className="fa fa-chevron-left sm-none"></i>
                                </button> */}
                                
                                <div className="glider">

                                    <Slider {...settings}>
                                        {
                                            review.map(review => <Review review={review} key={review.key}></Review>)
                                        }
                                    </Slider>
                                    
                                    
                                </div>

                                {/* <button className="glider-next">
                                    <i className="fa fa-chevron-right sm-none"></i>
                                </button> */}

                                <div className="glider-dots" id="dots"></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ReviewsSlider;