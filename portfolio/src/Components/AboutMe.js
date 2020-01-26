import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import Profile from '../img/profile.jpg';
import Snowboard from '../img/snowboard.jpg';
import Glasses from '../img/glasses.jpg';
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
            <>  <div style={{backgroundImage: `url(${Glasses})`, backgroundPosition: "center", backgroundSize: "cover", height: "100vh", width: "100%", }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "auto", paddingTop: "60px"}}>

                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "100px", marginRight: "30px" }}>
                            <HoverLink href="/">About me</HoverLink>

                            <HoverLink href="/projects">Projects</HoverLink>
                        </div>

                        <img src={Profile} alt="Profile Pic" style={{marginLeft: "20px", marginRight: "20px", width: "140px", height: "140px", borderRadius: "50%" }}/>


                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "20px", marginLeft: "60px", maxWidth: "700px", fontFamily: "Rubik", fontSize: "30px", color: "white", lineHeight: "40px"}}>
                            <div style={{ padding: "10px", marginRight: "10px", boxSizing: "border-box", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", width: "100%", borderRadius: "5px", backgroundColor: "grey", }}>
                                Hi!  I'm James.  I'm a full stack developer with a passion for building.  
                                I come from a non traditional tech background as I was previously a project manager in the construction industry.
                                I began coding by teaching myself HTML, CSS, and Javascript at night.  
                                Currently I am developing applications in React and Node.
                            </div>
                            <div style={{ marginTop: "20px", }}>
                                <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "white", opacity: "0.9"}}><i class="fab fa-twitter-square"></i></a>
                                <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "white", opacity: "0.9"}}><i class="fab fa-linkedin"></i></a>
                                <a href="#" style={{ fontSize: "50px", color: "white", opacity: "0.9"}}><i class="fab fa-github-square"></i></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "flex-end", height: "600px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "auto", color: "white", fontFamily: "Monaco" }}> 
                            LEARN MORE
                        </div>
                        

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", width: "auto" }}>
                            <i class="fas fa-arrow-down" style={{ color: "white"}}></i>
                        </div>
                    </div>
                    
                </div>

                

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "auto", maxHeight: "800px", }}>
                        
                        <div style={{margin: "0 auto", width: "100%", marginTop: "40px", marginBottom: "40px" }}>

                            <div style={{  display: "flex", justifyContent: "space-around", margin: "0 auto", width: "100%", maxWidth: "1000px" }}>
                                
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "left", padding: "10px", marginRight: "10px", boxSizing: "border-box", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", width: "45%", borderRadius: "5px", backgroundColor: "grey", opacity: "0.5" }}>
                                    <div style={{ fontSize: "30px", color: "black", fontWeight: "bold", textAlign: "left", marginLeft: "10px"}}>
                                        James Jimin Pak

                                    </div>
                                    
                                    <div style={{ fontSize: "30px", marginTop: "40px", color: "black", fontWeight: "bold", textAlign: "left", marginLeft: "10px", borderBottom: "2px solid black", width: "60%", lineHeight: "40px"}}>
                                        Currently living in 
                                    </div>

                                    <div style={{ fontSize: "30px", color: "black", fontWeight: "bold", textAlign: "left", marginLeft: "10px", }}>
                                        Redwood City, California
                                    </div>

                                    <div style={{ fontSize: "30px", marginTop: "40px", color: "black", fontWeight: "bold", textAlign: "left", marginLeft: "10px", borderBottom: "2px solid black", width: "40%", lineHeight: "40px" }}>
                                        Contact me
                                    </div>

                                    <div style={{ fontSize: "30px", color: "black", fontWeight: "bold", textAlign: "left", marginLeft: "10px" }}>
                                        jamesjiminpak@gmail.com
                                    </div>
                                </div>

                                <img src={Snowboard} style={{ width: "55%", height: "10%", marginLeft: "10px", borderRadius: "5px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", cursor: "pointer" }} />
				            </div>

                        </div>
                        
                    </div>


            </>
        )
    }
}

export default withRouter(AboutMe)