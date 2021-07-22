import React from 'react';
import ProjectHero from '../Components/ProjectHero/ProjectHero';
import ProjectList from '../Components/ProjectList/ProjectList';
import Contact from '../Components/Contact/Contact';
import { motion } from 'framer-motion';

const containerVarients = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: .5
        }
    },
    exit: {
        x: '-100vw',
        transition: {
          delay: 0.2,
          duration: .5,
          ease: 'easeInOut'
        }
    }
  }

const Projects = () => {
    return (
        <motion.div
            variants={containerVarients}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ProjectHero></ProjectHero>
            <ProjectList></ProjectList>
            <Contact></Contact>
        </motion.div>
    );
};

export default Projects;