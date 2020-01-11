import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'; 
import profile from '../img/profile.jpg';

class AboutMe extends Component {
    state = {

    }

    render() {

        return (
            <>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "180px", width: "auto" }}>

                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "100px", marginRight: "30px",  }}>
                            <Link to="/" style={{margin: "10px", marginBottom: "20px", fontSize: "20px", textDecoration: "none"}}>About Me</Link>

                            <Link to="/projects" style={{margin: "10px", marginTop: "20px", fontSize: "20px", textDecoration: "none"}}>Projects</Link>
                        </div>

                        <img src={profile} alt="Profile Pic" style={{marginLeft: "30px", marginRight: "30px", width: "100px", height: "100px", borderRadius: "50%" }}/>


                        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "20px", marginLeft: "60px", maxWidth: "700px", fontSize: "30px", fontFamily: "Times New Roman", lineHeight: "40px"}}>
                            Hi!  I'm Jim.  I'm a full stack developer with a passion for building.  
                            I come from a non traditional tech background as I was previously a project manager in the construction industry.
                            I began by teaching myself HTML, CSS, and Javascript at night.  Currently I am developing applications in React and Node JS.
                            <div style={{ marginTop: "20px" }}>
                                <a href="#" style={{ fontSize: "50px", marginRight: "10px"}}><i class="fab fa-twitter-square"></i></a>
                                <a href="#" style={{ fontSize: "50px", marginRight: "10px"}}><i class="fab fa-linkedin"></i></a>
                                <a href="#" style={{ fontSize: "50px", marginRight: "10px"}}><i class="fab fa-github-square"></i></a>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "140px", width: "auto" }}> 
                        Learn more
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "50px", width: "auto", height: "300px", backgroundColor: "lightgrey" }}>
                        Currently living in Redwood City, California.  
                    </div>
            </>
        )
    }
}

export default withRouter(AboutMe)