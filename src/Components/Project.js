import React from 'react';
import "../Styles/Project.css";
import podcast from '../Images/Projects/podcast.png';
import amazon from "../Images/Projects/Amazon.png";
import crypto from '../Images/Projects/crypto-tracker.png';
import { AiFillGithub } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

function Project() {
    return (
        <div className='Project' id='Project'>
            <h1 className='Project__Title'>Projects</h1>
            <div className='Project__Content'>
                <div className='Project1'>
                    <img className='Project__Img' src={crypto} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>CRYPTO_TRACKER</h2>
                        <p className='Project__Caption'>A centralized platform to track cryptocoin prices, market volume, compare different cryptocurrencies.</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>REACTJS</div>
                            <div className='Techs'>MATERIAL-UI</div>
                            <div className='Techs'>COINGECKO-API</div>
                            <div className='Techs'>FRAMER-MOTION</div>
                            {/* <div className='Techs'>BOOTSTRAP</div> */}
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://crypto-vercel-delta.vercel.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Mugil99/main-project.git") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Project1'>
                    <img className='Project__Img' src={podcast} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>PODCAST</h2>
                        <p className='Project__Caption'>Simple Podcast platform to create and discover podacasts</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>REACTJS</div>
                            <div className='Techs'>MATERIAL-UI</div>
                            <div className='Techs'>FIREBASE</div>
                            <div className='Techs'>REDUX</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://podcast-iota-five.vercel.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Mugil99/podcast.git") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Project1'>
                    <img className='Project__Img' src={amazon} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>AMAZON (CLONE)</h2>
                        <p className='Project__Caption'>E-commerce website</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>REACTJS</div>
                            <div className='Techs'>REDUX</div>
                            <div className='Techs'>BOOTSTRAP</div>
                            <div className='Techs'>FIREBASE</div>
                            <div className='Techs'>MATERIAL-UI</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://amazon-clone-eta-opal.vercel.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Mugil99/amazon-clone.git") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;