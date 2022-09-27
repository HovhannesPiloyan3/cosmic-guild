import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import "./DropList.scss"

const DropList = ({children,title}) => {
    const [open,setOpen] = useState(false)
    return (
        <>
            <h3 className="drop-list-title" onClick={()=>setOpen(!open)}> {open ?
                <span className="drop-list-icon-container">
                    <FontAwesomeIcon className="drop-list-icon" icon={faCaretUp}/>
                </span>    :
                <span className="drop-list-icon-container">
                    <FontAwesomeIcon className="drop-list-icon" icon={faCaretDown}/>
                </span>
            }{title}</h3>
            {open ? <div>{children}</div> : null}
        </>
    );
};


export default DropList;