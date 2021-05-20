import React, { useEffect, useState } from 'react';
import './ProjectList.css';
import projects from '../../data/projects.json';
import MyProject from '../MyProjects/MyProject';

const ProjectList = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
    setProject(projects);
      console.log(projects);
    }, [])

    return (
        <>
            <section className="section projects-list">
                <div className="project-item1">
                    <div className="container">
                            {
                              project.map(project => <MyProject project={project} key={project.key}></MyProject>)
                            }

                            <div className="text-left mt-5">
                                <h6 className="more"> More projects coming ... </h6>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectList;