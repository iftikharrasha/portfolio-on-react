import { React, lazy, Suspense } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import ScrollToTop from './ScrollToTop.js';
import Coffee from './Components/Coffee/Coffee';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Gigs from './Components/Gigs/Gigs';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProjectsSlider from './Components/ProjectsSlider/ProjectsSlider';
import ReviewsSlider from './Components/ReviewsSlider/ReviewsSlider';
import LazyLoad from './Components/LazyLoad/LazyLoad';
import ProjectHero from './Components/ProjectHero/ProjectHero';
import ProjectList from './Components/ProjectList/ProjectList';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Progress from './Components/Progress/Progress';
import Education from './Components/Education/Education';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {
  return (
    <div className="App">

<Router>
            <Header></Header>
            <ScrollToTop>
                 <Route render={({location}) => (
                     <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                        >
                            <Switch location={location}>
                                <Route path="/home">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Hero></Hero>
                                            <Coffee></Coffee>
                                            <ProjectsSlider></ProjectsSlider>
                                            <Gigs></Gigs>
                                            <ReviewsSlider></ReviewsSlider>
                                            <Contact></Contact>
                                        </Suspense>
                                </Route>
                                <Route path="/projects">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <ProjectHero></ProjectHero>
                                            <ProjectList></ProjectList>
                                            <Contact></Contact>
                                        </Suspense>
                                </Route>
                                <Route path="/skills">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Intro></Intro>
                                            <Skills></Skills>
                                            {/* <Progress></Progress> */}
                                            <Education></Education>
                                            <Contact></Contact>
                                        </Suspense>
                                </Route>
                                <Route exact path="/">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Hero></Hero>
                                            <Coffee></Coffee>
                                            <ProjectsSlider></ProjectsSlider>
                                            <Gigs></Gigs>
                                            <ReviewsSlider></ReviewsSlider>
                                            <Contact></Contact>
                                        </Suspense>
                                </Route>
                                <Route path="*">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <NotFound></NotFound>
                                        </Suspense>
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                 )} />
            </ScrollToTop>
            <Footer></Footer>
</Router>
        

         <a className="github" href="https://github.com/iftikharrasha" target="_blank">
            <i className="fab fa-github fa-2x"></i>
         </a>
    </div>
  );
}

export default App;
