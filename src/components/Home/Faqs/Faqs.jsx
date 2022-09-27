import React from 'react';
import DropList from "../../Ui/DropList/DropList";
import "./Faqs.scss"

const Faqs = () => {
    return (<>
            <div className="faqs">
                <div className="faqs-container">
                    <h2 className="faqs-container-title">FAQs</h2>
                    <div className="faqs-container-content">
                        <div className="faqs-container-content-drop-list">
                            <DropList title="HOW DO I BECOME A SCHOLAR AND PLAY FOR COSMIC GUILD?">
                                <p className="faqs-container-content-drop-list-text">
                                    You can apply for a scholarship in our Discord channel. To apply for a scholarship,
                                    &nbsp;
                                    <a
                                        href="https://discord.com/invite/cggdao"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        please join this server
                                    </a> &nbsp;
                                    please join this server and follow the instructions provided. Our managers will be
                                    in touch with you for a short interview to assess your suitability to become a
                                    scholar!
                                </p>
                            </DropList>
                            <DropList title="HOW DO I INVEST IN COSMIC GUILD?">
                                <p className="faqs-container-content-drop-list-text">
                                    We’ve recently closed our seed round with Binance as our
                                    &nbsp;
                                    <a
                                        href="https://twitter.com/Cosmic_Guild/status/1473857984207884288?s=20"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        lead investor
                                    </a> &nbsp;
                                    . The public round will be conducted in 4Q2022. More details on the public round will be announced closer to IDO date!
                                    <br/><br/>
                                    If you’re a strategic investor and you’re keen to invest in our private round, please reach out to us at wagmi@cosmicgamingguild.com!
                                </p>
                            </DropList>
                            <DropList title="WHERE CAN I FIND OUT MORE ABOUT CG?">
                                <p className="faqs-container-content-drop-list-text">
                                    Our &nbsp;
                                    <a
                                        href="https://cosmicguild.gitbook.io/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Gitbook
                                    </a> &nbsp;
                                    outlines our business strategy and plans for CG. If you would like to know more or
                                    have any additional questions, come swing by our
                                    &nbsp;
                                    <a
                                        href="https://discord.gg/cggdao"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Discord
                                    </a> &nbsp;
                                    channel and we’ll be more than excited to share more with you!
                                </p>
                            </DropList>
                            <DropList title="WHEN IS THE LAUNCH DATE FOR COSMIC GUILD ($CG) TOKEN?">
                                <p className="faqs-container-content-drop-list-text">
                                    $CG token IS NOT LIVE YET. Please be careful of fake $CG tokens and scam contract
                                    addresses. The token contract will be announced after our public round is completed
                                    in 1Q2022 and we’ll announce the token contract on our website and social media
                                    channels for our community to verify.
                                </p>
                            </DropList>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};


export default Faqs;