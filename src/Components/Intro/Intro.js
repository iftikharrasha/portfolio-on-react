import React from 'react';
import intro from '../../video/iftikharrashahq.mp4';
import './Intro.css';

const Intro = () => {
    return (
        <>
            {/* <section className="section video" data-vide-bg={intro}>
            </section> */}
        <section className="section video" data-vide-bg={intro}>
            <div className="vide">
                <video autoPlay loop muted>
                <source src={intro} type="video/mp4"/>
                </video>
            </div>
        </section>

            
        </>
    );
};

export default Intro;