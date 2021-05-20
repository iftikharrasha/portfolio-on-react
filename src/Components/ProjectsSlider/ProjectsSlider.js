import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './ProjectsSlider.css';
import projects from '../../data/projects.json';
import Project from '../project/Project';

const ProjectsSlider = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
    setProject(projects);
      // console.log(projects);
    }, [])

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 2100,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
          {
              breakpoint: 1500,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
              breakpoint: 1028,
              settings: {
                slidesToShow: 1,
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
           <section className="projects" id="works">
                <Container>
                    <Row className="responsive">
                        <Slider {...settings}>
                            {
                              project.map(project => <Project project={project} key={project.key}></Project>)
                            }
                        </Slider>
                    </Row>
                </Container>
           </section>
        </>
    );
};

export default ProjectsSlider;