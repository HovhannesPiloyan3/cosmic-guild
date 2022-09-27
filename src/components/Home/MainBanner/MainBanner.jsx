import React from 'react';
import Alien from "../../../assets/image/alien.webp"
import CosmicGuild from "../../../assets/image/cosmic-guild.png"
import CommunityFirstGuild from "../../../assets/image/community-first guild.webp"
import Line from "../../../assets/image/line.png"
import EmbraceFuture from "../../../assets/image/embrace future.webp"
import "./MainBanner.scss"

const MainBanner = () => {
    return (
        <>
            <div className="main-banner">
                <div className="main-banner-left-side">
                    <img className="main-banner-left-side-img"  src={Alien} alt="alien"/>
                </div>
                <div className="main-banner-right-side">
                    <figure className="main-banner-right-side-container">
                        <img className="main-banner-right-side-container-img" src={CosmicGuild} alt="comic guild"/>
                    </figure>
                    <figure  className="main-banner-right-side-container">
                        <img className="main-banner-right-side-container-img" src={CommunityFirstGuild} alt="community first guild"/>
                    </figure>
                    <figure  className="main-banner-right-side-container">
                        <img className="main-banner-right-side-container-img" src={Line} alt="line"/>
                    </figure>
                    <figure  className="main-banner-right-side-container">
                        <img className="main-banner-right-side-container-img" src={EmbraceFuture} alt="embrace future"/>
                    </figure>
                    <p className="main-banner-right-side-text">
                        Cosmic Guild is a passionate group of gamers, empowering our members to maximize their potential
                        by connecting NFT capital with skilled crypto gamers.
                    </p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://discord.com/invite/cggdao"
                        className="main-banner-right-side-link adaptive"
                    >
                        BUY TOKEN CSM
                    </a>
                </div>
            </div>
        </>
    );
};


export default MainBanner;