import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'; 
import Profile from '../img/profile.jpg';
import Code from '../img/code.jpg';
import Code2 from '../img/code2.jpg';

class AboutMe extends Component {
    state = {

    }

    render() {

        return (
            <>  <div style={{backgroundImage: `url(${Code2})`, backgroundPosition: "center", backgroundSize: "cover", height: "800px", opacity: "0.9"}}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "auto", paddingTop: "100px"}}>

                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "100px", marginRight: "30px" }}>
                            <Link to="/" style={{margin: "10px", marginBottom: "20px", fontSize: "30px", textDecoration: "none", color: "white"}}>About Me</Link>

                            <Link to="/projects" style={{margin: "10px", marginTop: "20px", fontSize: "30px", textDecoration: "none", color: "white"}}>Projects</Link>
                        </div>

                        <img src={Profile} alt="Profile Pic" style={{marginLeft: "30px", marginRight: "30px", width: "100px", height: "100px", borderRadius: "50%" }}/>


                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "20px", marginLeft: "60px", maxWidth: "700px", fontSize: "30px", color: "white", lineHeight: "40px"}}>
                            Hi!  I'm James.  I'm a full stack developer with a passion for building.  
                            I come from a non traditional tech background as I was previously a project manager in the construction industry.
                            I began by teaching myself HTML, CSS, and Javascript at night.  Currently I am developing applications in React and Node JS.
                            <div style={{ marginTop: "20px" }}>
                                <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "grey"}}><i class="fab fa-twitter-square"></i></a>
                                <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "grey"}}><i class="fab fa-linkedin"></i></a>
                                <a href="#" style={{ fontSize: "50px", color: "grey"}}><i class="fab fa-github-square"></i></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "220px", width: "auto", color: "white" }}> 
                        LEARN MORE
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px", width: "auto" }}>
                        <i class="fas fa-arrow-down" style={{ color: "white"}}></i>
                    </div>
                </div>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "auto", height: "300px", backgroundColor: "lightgrey", }}>
                        <div style={{ fontSize: "30px", marginTop: "40px"}}>
                            Currently living in Redwood City, California.  
                        </div>

                        <div style={{ fontSize: "30px", marginTop: "40px"}}>
                            Reach me at: jamesjiminpak@gmail.com
                        </div>

                        <div style={{ marginTop: "40px" }}>
                            <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "grey"}}><i class="fab fa-twitter-square"></i></a>
                            <a href="#" style={{ fontSize: "50px", marginRight: "20px", color: "grey"}}><i class="fab fa-linkedin"></i></a>
                            <a href="#" style={{ fontSize: "50px", color: "grey"}}><i class="fab fa-github-square"></i></a>
                        </div>
                    </div>


            </>
        )
    }
}

export default withRouter(AboutMe)