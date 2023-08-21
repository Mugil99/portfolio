import React from 'react';
import "../Styles/Contact.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import Mail from './Mail';
import { IoMdMail, IoMdCall } from "react-icons/io";

function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <div className='Contact__Intro'>
                <div className='Contact__Text'>
                    <p>Reach out to me!</p>
                    <h1 className='Contact__Name'>Contact</h1>
                    <div className='Contact__Log'>
                        <Mail email="mugilya99@gmail.com" subject="Front-End Job - regarding">
                            <button className='Contact__Btn__Log'>
                                <IoMdMail className='Conact__Icon' /> mugilya99@gmail.com
                            </button>
                        </Mail>
                        <a href="tel:+918248184024">
                            <button className='Contact__Btn__Log'>
                                <IoMdCall className='Conact__Icon' /> +91 8248184024
                            </button>
                        </a>
                    </div>
                </div>
                <div className='Contact__Icons'>
                    <BsGithub className='Contact__Icon' onClick={() => { window.location.assign("https://github.com/Mugil99") }} />
                    <ImLinkedin className='Contact__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/mugilyalini/") }} />
                </div>
            </div>
        </div>
    );
}

export default Contact;