import React from 'react';
import './About.css';
import HeartEmoji from './../../img/heartemoji.png';
import GlassesEmoji from './../../img/glasses.png';
import Humble from './../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Gaurav_React-Developer.pdf';

const About = () => {
  return (
    <div className="about">
        {/* left side */}
        <div className="awesome">
           <span>About Me</span>
           <spane>
               I am a B.Tech graduate
               <br /> 
               from Faridabad (NCR) 
            </spane>
            <a href={Resume} download><button className="button a-button">Download CV</button></a>
            <div className="blur a-blur" style={{ background:'#ABF1FF94' }} ></div> 
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left:'14rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Education'}
                detail = {"Bachelor of Technology in electronics & communication"}
                />
            </div>
        
        {/* second card */}
        <div style={{top:'12rem', left:'-4rem'}}>
          <Card 
            emoji={GlassesEmoji}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, React, NodeJs ,Python '}
          />

        </div>
        {/* 3rd card */}
        <div style={{top:'19rem', left:'12rem'}}>
          <Card 
            emoji={Humble}
            heading={'Certifications'}
            detail={'Web Development, Full Stack Development'}
          />

        </div>
        <div className="blur a-blur2" style={{background: "var(--purple)"}}></div>


        </div>
    </div>
  )
}

export default About