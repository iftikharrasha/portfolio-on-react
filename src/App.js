import { React, lazy, Suspense, useState, useEffect } from 'react';
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
import Loading from './Pages/Loading';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skillsets from './Pages/Skillsets';
import Footer from './Components/Footer/Footer';
import LazyLoad from './Components/LazyLoad/LazyLoad';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {

  const location = useLocation();

  const [loading, setLoading] = useState(true);
  useEffect(() => {

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setLoading(false)
    }, 4500)   

  }, [])

  return (
    <div className="App">
            <Loading loading={loading} />
            {!loading && <>
                <Header></Header>
                <ScrollToTop>
                        <AnimatePresence exitBeforeEnter>
                            <Switch location={location} key={location.key}>
                                <Route path="/home">
                                    <Home />
                                </Route>
                                <Route path="/projects">
                                    <Projects />
                                </Route>
                                <Route path="/skills">
                                    <Skillsets />
                                </Route>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="*">
                                    <NotFound></NotFound>
                                </Route>
                            </Switch>
                        </AnimatePresence>
                </ScrollToTop>
                <Footer></Footer>
            
                <a className="github" href="https://github.com/iftikharrasha" target="_blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </>}
    </div>
  );
}

export default App;
