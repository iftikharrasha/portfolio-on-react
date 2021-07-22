import React from 'react';
import Hero from '../Components/Hero/Hero';
import Coffee from '../Components/Coffee/Coffee';
import ProjectsSlider from '../Components/ProjectsSlider/ProjectsSlider';
import Gigs from '../Components/Gigs/Gigs';
import ReviewsSlider from '../Components/ReviewsSlider/ReviewsSlider';
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

const Home = () => {
    return (
        <motion.div
            variants={containerVarients}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Hero></Hero>
            <Coffee></Coffee>
            <ProjectsSlider></ProjectsSlider>
            <Gigs></Gigs>
            <ReviewsSlider></ReviewsSlider>
            <Contact></Contact>
        </motion.div>
    );
};

export default Home;