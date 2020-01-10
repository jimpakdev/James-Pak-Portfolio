import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'; 

class AboutMe extends Component {
    state = {

    }

    render() {

        return (
            <>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "200px" }}>

                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "80px", marginRight: "30px" }}>
                            <Link to="/" style={{margin: "10px"}}>About Me</Link>

                            <Link to="/projects" style={{margin: "10px"}}>Projects</Link>
                        </div>

                        {/* <img style={{marginLeft: "30px", marginRight: "30px", borderRadius: "50%" }}> */}


                        <div style={{marginLeft: "80px"}}>
                            Intro Blurb 
                        </div>

                    </div>
            </>
        )
    }
}

export default withRouter(AboutMe)