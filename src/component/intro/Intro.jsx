import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv";
//All imagess path----
import github from "../img/github.png";
import insta from "../img/instagram.png";
import Linkedin from "../img/linkedin.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";
 
const Intro=()=>{
    return(
        <>
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I am </span>
                    <span>Sandeep Kumar</span>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum, quasi libero pariatur rem in provident iste ab? Reprehenderit, sed?</span>
                </div>
                <button className=" button i-button">
                    Hire Me
                </button>
                <div className="i-icon">
                    <img src={github} alt="image"/>
                    <img src={Linkedin} alt="image"/>
                    <img src={insta} alt="image"/>
                </div>
            </div>
            <div className="i-right">
               <img src={Vector1} alt=""/>
               <img src={Vector2} alt=""/>
               <img src={boy} alt=""/>
               <img src={glassesimoji} alt=""/>
               <div style={{top:'-4%',left:'68%'}}>
                <FloatingDiv image={crown} txt1='web' txt2='developer' />
                </div>
                <div style={{top:'18rem',left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='MERN Stack' txt2='developer' />
                </div>
                <div className="blur" style={{background:"rgb(238 210 255"}}></div>
                <div className="blur" style={{background:'#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
            </div>
        </div> 
        </>
    )
}
export default Intro;