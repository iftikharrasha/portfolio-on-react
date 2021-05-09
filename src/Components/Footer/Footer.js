import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section className="Credit">
                <footer className="footer text-center">
                    <span className="copyright">
                        ©
                        <script>document.write(new Date().getFullYear());</script> iftikharrasha.com
                    </span>
                </footer>
            </section>
        </>
    );
};

export default Footer;