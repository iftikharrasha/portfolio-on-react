import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import markerbold from '../../img/markerbold.png';
import markersemi from '../../img/markersemi.png';
import ruler from '../../img/ruler.png';
import './ProjectHero.css';

const ProjectHero = () => {
    return (
        <>
            <section className="project-hero">
                <div className="parallax-items">
                    <RellaxWrapper speed={10}>
                        <img className="ruler" src={ruler} alt="ruler"/>
                    </RellaxWrapper>
                    <RellaxWrapper speed={7}>
                        <img className="markbold" src={markerbold} alt="markerbold"/>
                    </RellaxWrapper>
                    <RellaxWrapper speed={-1}>
                        <img className="marksemi" src={markersemi} alt="markersemi"/>
                    </RellaxWrapper>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="phero-text text-center">
                                <RellaxWrapper speed={-2}>
                                    <h1>My Projects</h1>
                                </RellaxWrapper>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectHero;