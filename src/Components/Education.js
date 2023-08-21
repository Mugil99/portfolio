import React from 'react';
import "../Styles/Education.css";
import AU from "../Images/Education/AU.png";
// import Infy from "../Images/Work/Infy.png";

function Education() {
    return (
        <div className='Work' id='Work'>
            <div className='Work__Col1'>
                <h1 className='Edu__Title'>Education</h1>
                <h2 className='Edu__Clg'>
                    <img className='Edu__Logo' src={AU} alt='' /> College of Engineering, Guindy, Anna University
                </h2>
                <p>B.E. Agricultural & Irrigation Engineering</p>
                <p className='Year'>AUG 2017 - JUNE 2021</p>
                <p>Completed with First Class - 75%</p>
            </div>
        </div>
    );
}

export default Education;