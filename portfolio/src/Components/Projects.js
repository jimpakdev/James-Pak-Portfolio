import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'; 
import Profile from '../img/profile.jpg';
import styled from 'styled-components';

const HoverLink = styled.a`
    margin: 10px
    margin-bottom: 20px
    font-size: 25px
    text-decoration: none
    color: white
	:hover {
		color: grey;
		cursor: pointer;
	}
`

class Projects extends Component {

    render() {

        return (
            <>  <div style={{backgroundColor: "black", backgroundPosition: "center", backgroundSize: "cover", height: "480px", opacity: "0.9"}}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "auto", paddingTop: "60px"}}>

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

                </div>


            </>
        )
    }
}

export default withRouter(Projects)