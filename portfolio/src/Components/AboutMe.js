import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'; 
import Profile from '../img/profile.jpg';
import Anime from '../img/anime.jpg';
import styled from 'styled-components';

const HoverLink = styled.a`
    margin: 10px;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
    color: white;
	:hover {
		color: grey;
		cursor: pointer;
	}
`

class AboutMe extends Component {

    render() {

        return (
            <>  <div style={{backgroundColor: "black", backgroundPosition: "center", backgroundSize: "cover", height: "100vh", width: "100%", opacity: "0.9"}}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "auto", paddingTop: "60px"}}>

                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "100px", marginRight: "30px" }}>
                            <HoverLink href="/">About me</HoverLink>

                            <HoverLink href="/projects">Projects</HoverLink>
                        </div>

                        <img src={Profile} alt="Profile Pic" style={{marginLeft: "20px", marginRight: "20px", width: "140px", height: "140px", borderRadius: "50%" }}/>


                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "20px", marginLeft: "60px", maxWidth: "700px", fontFamily: "Rubik", fontSize: "30px", color: "white", lineHeight: "40px"}}>
                            Hi!  I'm James.  I'm a full stack developer with a passion for building.  
                            I come from a non traditional tech background as I was previously a project manager in the construction industry.
                            I began coding by teaching myself HTML, CSS, and Javascript at night.  
                            Currently I am developing applications in React and Node.
                            <div style={{ marginTop: "20px" }}>
                                <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "grey"}}><i class="fab fa-twitter-square"></i></a>
                                <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "grey"}}><i class="fab fa-linkedin"></i></a>
                                <a href="#" style={{ fontSize: "50px", color: "grey"}}><i class="fab fa-github-square"></i></a>
                            </div>
                        </div>
                    </div>

                    
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "240px", width: "auto", color: "white", fontFamily: "Monaco" }}> 
                        LEARN MORE
                    </div>
                    

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", width: "auto" }}>
                        <i class="fas fa-arrow-down" style={{ color: "white"}}></i>
                    </div>
                    
                </div>

                

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "auto", height: "100vh", backgroundColor: "lightgrey", }}>
                        
                        <div style={{margin: "0 auto", width: "100%", maxWidth: "1000px" }}>

                            <div style={{  display: "flex", justifyContent: "space-around" }}>
                                
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "left", padding: "10px", margin: "20px", boxSizing: "border-box", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", width: "60%", borderRadius: "5px", backgroundColor: "grey", opacity: "0.5" }}>
                                    <div style={{ fontSize: "30px", color: "black", fontWeight: "bold", textAlign: "left"}}>
                                        James Jimin Pak

                                    </div>
                                    
                                    <div style={{ fontSize: "30px", marginTop: "40px", color: "black", fontWeight: "bold", textAlign: "left"}}>
                                        Currently living in <br></br>
                                        Redwood City, California

                                    </div>

                                    <div style={{ fontSize: "30px", marginTop: "40px", color: "black", fontWeight: "bold", textAlign: "left" }}>
                                        Contact me <br></br> 
                                        jamesjiminpak@gmail.com
                                    </div>
                                </div>

                                <img src={Anime} style={{ width: "40%", height: "10%", margin: "20px", borderRadius: "5px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", cursor: "pointer" }} />
				            </div>

                        </div>
                        

                        <div style={{ marginTop: "40px" }}>
                            <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "black", opacity: "0.5"}}><i class="fab fa-twitter-square"></i></a>
                            <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "black", opacity: "0.5"}}><i class="fab fa-linkedin"></i></a>
                            <a href="#" style={{ fontSize: "50px", color: "black", opacity: "0.5"}}><i class="fab fa-github-square"></i></a>
                        </div>
                    </div>


            </>
        )
    }
}

export default withRouter(AboutMe)