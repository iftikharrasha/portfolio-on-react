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
            <section class="section projects-list">
                <div class="project-item1">
                    <div class="container">
                            {
                              project.map(project => <MyProject project={project} key={project.key}></MyProject>)
                            }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectList;