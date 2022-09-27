import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faChevronDown, faChevronUp, faSquareXmark} from "@fortawesome/free-solid-svg-icons";
import DropDown from "../DropDown/DropDown";
import "./BurgerMenu.scss"

const BurgerMenu = ({open, setOpen}) => {
    const [burgerOpen, setBurgerOpen] = useState(false)
    return (
        <>
            <button
                onClick={() => setBurgerOpen(!burgerOpen)}
                className="burger-menu"
            >
                {!burgerOpen? <FontAwesomeIcon className="burger-menu-icon" icon={faBars}/>:
                <FontAwesomeIcon  className="burger-menu-icon closed" icon={faSquareXmark}/>}
            </button>
            {burgerOpen ?
                <div className="burger">
                    <nav className="burger-nav-bar">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="burger-nav-bar-links"
                            href="https://cosmicguild.gitbook.io/cosmic-guild/"
                        >
                            DOCUMENTATION
                        </a>
                        <button className="burger-nav-bar-links" onClick={() => setOpen(!open)}>
                            SOCIALS
                            {open ?
                                <FontAwesomeIcon className="nav-bar-links-icon" icon={faChevronUp}/> :
                                <FontAwesomeIcon className="nav-bar-links-icon" icon={faChevronDown}/>
                            }</button>
                        {open ? <DropDown burger/> : null}
                    </nav>
                </div> : null}

        </>
    );
};


export default BurgerMenu;