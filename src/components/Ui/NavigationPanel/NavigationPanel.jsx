import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import DropDown from "../DropDown/DropDown";


const NavigationPanel = ({open,setOpen}) => {
    return (
        <>
            <nav className="nav-bar">
                <a
                    rel="noreferrer"
                     target="_blank"
                     className="nav-bar-links"
                     href="https://cosmicguild.gitbook.io/cosmic-guild/"
                >
                    DOCUMENTATION</a>
                <button className="nav-bar-links" onClick={()=>setOpen(!open)}>
                    SOCIALS
                    {open ?
                        <FontAwesomeIcon className="nav-bar-links-icon" icon={faChevronUp} /> :
                        <FontAwesomeIcon className="nav-bar-links-icon" icon={faChevronDown} />
                    }</button>
                {open ? <DropDown/> : null}
            </nav>
        </>
    );
};


export default NavigationPanel;