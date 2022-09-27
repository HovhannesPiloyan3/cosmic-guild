import React from 'react';
import OurBackers from "../../../assets/image/our backers.webp"
import VerticalLine from "../../../assets/image/vertical line.webp"
import AllBackers from "../../../assets/image/all backers.webp"
import "./Backers.scss"

const Backers = () => {
    return (
        <>
            <div className="backers">
                <div className="backers-container">
                    <div className="backers-container-cols">
                        <img className="backers-container-cols-img" src={OurBackers} alt="backers img"/>
                    </div>
                    <div className="backers-container-cols">
                        <img className="backers-container-cols-img" src={VerticalLine} alt="backers img"/>
                    </div>
                    <div className="backers-container-cols">
                        <img className="backers-container-cols-img" src={AllBackers} alt="backers img"/>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Backers;