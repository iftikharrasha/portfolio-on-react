import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import markerbold from '../../img/markerbold.png';
import markersemi from '../../img/markersemi.png';
import ruler from '../../img/ruler.png';
import './ProjectHero.css';

const ProjectHero = () => {
    return (
        <>
            <section class="project-hero">
                <div class="parallax-items">
                    <RellaxWrapper speed={10}>
                        <img class="ruler" src={ruler} alt="ruler"/>
                    </RellaxWrapper>
                    <RellaxWrapper speed={7}>
                        <img class="markbold" src={markerbold} alt="markerbold"/>
                    </RellaxWrapper>
                    <RellaxWrapper speed={-1}>
                        <img class="marksemi" src={markersemi} alt="markersemi"/>
                    </RellaxWrapper>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="phero-text text-center">
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