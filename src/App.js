import { React, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skillsets from './Pages/Skillsets';
import Footer from './Components/Footer/Footer';
import LazyLoad from './Components/LazyLoad/LazyLoad';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {

  const location = useLocation();

  return (
    <div className="App">
            <Header></Header>
            <ScrollToTop>
                     <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.key}>
                            <Route path="/home">
                                    <Suspense fallback={<LazyLoad></LazyLoad>}>
                                        <Home />
                                    </Suspense>
                            </Route>
                            <Route path="/projects">
                                    <Suspense fallback={<LazyLoad></LazyLoad>}>
                                        <Projects />
                                    </Suspense>
                            </Route>
                            <Route path="/skills">
                                    <Suspense fallback={<LazyLoad></LazyLoad>}>
                                        <Skillsets />
                                    </Suspense>
                            </Route>
                            <Route exact path="/">
                                    <Suspense fallback={<LazyLoad></LazyLoad>}>
                                        <Home />
                                    </Suspense>
                            </Route>
                            <Route path="*">
                                    <Suspense fallback={<LazyLoad></LazyLoad>}>
                                        <NotFound></NotFound>
                                    </Suspense>
                            </Route>
                        </Switch>
                     </AnimatePresence>
            </ScrollToTop>
            <Footer></Footer>
        
            <a className="github" href="https://github.com/iftikharrasha" target="_blank">
                <i className="fab fa-github fa-2x"></i>
            </a>
    </div>
  );
}

export default App;
