import React from 'react';
import Intro from '../Components/Intro/Intro';
import Skills from '../Components/Skills/Skills';
import Education from '../Components/Education/Education';
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

const Skillsets = () => {
    return (
        <motion.div
        variants={containerVarients}
        initial="hidden"
        animate="visible"
        exit="exit">
            <Intro></Intro>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
        </motion.div>
    );
};

export default Skillsets;