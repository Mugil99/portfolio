import React from 'react';
import "../Styles/Home.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import logo from '../Images/logo.svg';
import Resume from '../Images/Mugilyalini_Resume.pdf';
function Home() {
    return (
        <div className='Home' id='Home'>
            <div className='Home__Intro'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='Home__Text'>
                    <p>Welcome to my world!</p>
                    <h1 className='Home__Name'>Hi, I'm Mugilyalini.</h1>
                    <h1 className='Home__Role'>Front-End Web Developer.</h1>
                </div>
                <div className='Home__Icons'>
                    <BsGithub className='Home__Icon' onClick={() => { window.location.assign("https://github.com/Mugil99") }} />
                    <ImLinkedin className='Home__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/mugilyalini/") }} />
                </div>
               <a href={Resume} target="_blank"> 
                    <button className='Resume'>
                        View Resume
                    </button>
               </a>
            </div>
        </div>
    );
}

export default Home;