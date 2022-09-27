import React from 'react';
import FooterLogo from "../../../assets/image/footer logo.webp"
import "./Footer.scss"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faBook, faM, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-container-left-side">
                    <div className="footer-logo-container">
                        <Link to="/"><img src={FooterLogo} alt="footer logo" className="footer-logo"/></Link>
                    </div>
                    <div className="footer-container-left-side-content">
                        <Link className="footer-container-left-side-content-link" to="/terms">Terms & Conditions</Link>
                        <Link className="footer-container-left-side-content-link" to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
                <div className="footer-container-right-side">
                    <div className="footer-container-right-side-socials">
                        <div className="footer-container-right-side-socials-container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/Cosmic_Guild"
                                className="footer-container-right-side-socials-container-links"
                            >
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        </div>
                        <div className="footer-container-right-side-socials-container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/Axie-Infinity-Scholarship-Cosmic-Gaming-Guild-111363661352549"
                                className="footer-container-right-side-socials-container-links"
                            >
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        </div>
                        <div className="footer-container-right-side-socials-container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.gg/cggdao"
                                className="footer-container-right-side-socials-container-links">
                                <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                        <div className="footer-container-right-side-socials-container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://cosmicguild.gitbook.io/"
                                className="footer-container-right-side-socials-container-links">
                                <FontAwesomeIcon icon={faBook}/>
                            </a>
                        </div>
                        <div className="footer-container-right-side-socials-container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/Cosmic_guild"
                                className="footer-container-right-side-socials-container-links">
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            </a>
                        </div>
                        <div className="footer-container-right-side-socials-container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/@cosmic_guild"
                                className="footer-container-right-side-socials-container-links last">
                                <div className="square-icon">
                                    <FontAwesomeIcon icon={faM}/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};


export default Footer;