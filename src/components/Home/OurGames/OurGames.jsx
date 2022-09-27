import React from 'react';
import Games from "../../../assets/image/games.webp"
import VerticalLine from "../../../assets/image/vertical line.webp"
import OurGame from "../../../assets/image/our games.webp"
import "./OurGames.scss"

const OurGames = () => {
    return (
        <>
            <div className="our-games">
                <div className="our-games-container">
                    <div className="our-games-container-cols">
                        <img className="our-games-container-cols-img" src={Games} alt="our games"/>
                    </div>
                    <div className="our-games-container-cols">
                        <img className="our-games-container-cols-img" src={VerticalLine} alt="our games"/>
                    </div>
                    <div className="our-games-container-cols">
                        <img className="our-games-container-cols-img" src={OurGame} alt="our games"/>
                    </div>
                </div>
            </div>
        </>
    );
};


export default OurGames;