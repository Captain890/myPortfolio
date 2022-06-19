import React from 'react';
import './Intro.css';
import Github from './../../img/github.png';
import LinkedIn from './../../img/linkedin.png';
import Instagram from './../../img/instagram.png';
import Vector1 from './../../img/Vector1.png';
import Vector2 from './../../img/Vector2.png';
import Myimage from './../../img/myimage.JPG';
import Crown from './../../img/crown.png';
import glassesemoji from './../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi, my name is</span>
                <span>Gaurav </span>
                <span>A software developer design, develop & deploy things for the web</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="#">
                    <img src={Github} alt="Github link" />
                </a>
                <a href="#">
                    <img src={LinkedIn} alt="LinkedIn link" />
                </a>
                <a href="#">
                    <img src={Instagram} alt="Instagram link" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="Vector1" />
            <img src={Vector2} alt="Vector2" />
            <img src={Myimage} alt="MyImage" />
            <img src={glassesemoji} alt="glasses emoji" />
            <div style={{top:'-4%',left:'68%'}}>
               <FloatingDiv 
                image={Crown}
                txt1='Web'
                txt2='Developer'
               />
            </div>
            {/* blur divs */}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{ 
              background:'#C1F5FF',
              top: '17rem',
              width: '21rem',
              height: '11rem',
              left: '-9rem'
            }} >
            </div>
        </div>
    </div>
  )
}

export default Intro