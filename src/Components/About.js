import React from "react";

function About(props) {
    console.log(props.data);
    const name = props.resumeData.name;
    const bio = props.resumeData.bio;
    const street = props.resumeData.address.street;
    const city = props.resumeData.address.city;
    const state = props.resumeData.address.state;
    const zip = props.resumeData.address.zip;
    const phone = props.resumeData.phone;
    const email = props.resumeData.email;
    const resumeDownload = props.resumeData.resumeDownload;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img
                        className="profile-pic"
                        src={require("../assets/images/gurnish.jpg")}
                        alt="Nordic Giant Profile Pic"
                    />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p style={{whiteSpace: 'pre-line'}}>{bio}</p>
                    <div className="row">
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button">
                                    <i className="fa-solid fa-download" color={'#525252'}></i>Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;