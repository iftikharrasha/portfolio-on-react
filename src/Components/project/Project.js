import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
    const {title, img, preview, key} = props.project;

    return (
        <>
            <Col md={12} className="text-center">
                <div className="products-tabs">
                    <div className="product-img">
                        <img src={img} alt="biggaponn"/>
                    </div>
                    <h3 className="product-name">{title}
                    </h3>
                    <a href={preview} target="_blank" className="styled_button">Live
                                Demo</a>
                    <Link to="/projects" className="styled_button ml-4">View More</Link>
                </div>
            </Col>
        </>
    );
};

export default Project;