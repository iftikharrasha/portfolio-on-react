import React, { useEffect, useState } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    function activeToggle(){
        document.getElementById('toggle-btn').classList.toggle('active');
        document.getElementById('mobile-nav').classList.toggle('active');
    }

    return (
        <>
            <header className={scroll ? "header-sticky" : "header"}>
                <Container>
                        <nav className="navbarItems">
                            <Link to="/home" className="navbar-logo">
                                <img src={logo} width="100%" className="d-inline-block align-top" alt="iftikharrasha"/>
                            </Link>

                             <div className="menu-icon" id="toggle-btn" onClick={activeToggle}>
                                <svg width="50" height="50" viewBox="0 0 100 100">
                                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </div>
                            <div className="nav-menu" id="mobile-nav">
                                    <Link to="/home" className="pr-4 active nav-links nav-top-mt" onClick={activeToggle}>Home</Link>
                                    <Link to="/projects" className="pr-4 nav-links" onClick={activeToggle}>Projects</Link>
                                    <Link to="/about" className="pr-4 nav-links" onClick={activeToggle}>About Us</Link>
                                    <Link to="http://iftikharrasha.me" className="pr-4 nav-links" target="_blank">Download CV</Link>
                            </div>
                        </nav>
                </Container>
            </header> 
        </>
    );
};

export default Header;