import React from 'react';
import './Review.css';

const Review = (props) => {
    const {buyer, comment, avatar, from, project, flag,  key} = props.review;

    return (
        <>
            <figure className="figure">
                <blockquote>{comment}
                </blockquote>
                <div className="author">
                    <img src={avatar} alt="sony"/>
                    <p className="author-info pl-2">{buyer}<br />{project}, {from}</p>
                </div>
            </figure>
        </>
    );
};

export default Review;