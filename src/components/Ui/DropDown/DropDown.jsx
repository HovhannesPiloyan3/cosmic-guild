import React from 'react';
import "./DropDown.scss"

const DropDown = ({burger}) => {
    return (
        <ul className={!burger ? "drop-down" : "drop-down burger-down"}>
            <li className="drop-down-list">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="drop-down-list-link"
                    href="https://twitter.com/Cosmic_Guild"
                >
                    Twitter
                </a>
            </li>
            <li  className="drop-down-list">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="drop-down-list-link"
                    href="https://www.facebook.com/Axie-Infinity-Scholarship-Cosmic-Gaming-Guild-111363661352549"
                >
                    Facebook
                </a>
            </li>
            <li  className="drop-down-list">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="drop-down-list-link"
                    href="https://discord.gg/cggdao"
                >
                    Discord
                </a>
            </li>
            <li  className="drop-down-list">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="drop-down-list-link"
                    href="https://t.me/Cosmic_guild"
                >
                    Telegram
                </a>
            </li>
            <li  className="drop-down-list">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="drop-down-list-link"
                    href="https://medium.com/@cosmic_guild"
                >
                    Medium
                </a>
            </li>
        </ul>
    );
};


export default DropDown;