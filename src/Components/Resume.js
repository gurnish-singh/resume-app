import React from "react";

import {Paper,
    Tooltip, Zoom
} from "@mui/material/";
import {ReactComponent as SamsungLogo} from '../assets/images/Samsung_Logo.svg';

function Resume(props) {
    if (!props.resumeData) return null;
    const education = props.resumeData.education.map(function (education) {
        return (
            <div key={education.school}>
                <h3>{education.school}</h3>
                <p className="info">
                    {education.degree} <span>&bull;</span>
                    <em className="date">{education.graduated}</em>
                </p>
                <p>{education.description}</p>
            </div>
        );
    });

    const work = props.resumeData.work.map(function (work) {
        return (
            <div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">
                    {work.title}
                    <span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                <p>{work.description}</p>
            </div>
        );
    });
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">{education}</div>
                    </div>
                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row">
                        <div>
                            <p>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="HTML5"
                                >
                                    <i className=" fab fa-html5 fa-3x"/>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="CSS3"
                                >
                                    <i className="fab fa-css3-alt fa-3x" />
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="JAVASCRIPT"
                                >
                                    <i className="fab fa-js fa-3x" aria-hidden="true"/>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="REACTJS"
                                >
                                    <i className="fa fa-react fa-3x" aria-hidden="true"/>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="NODEJS"
                                >
                                    <i className="fab fa-node fa-3x" aria-hidden="true"/>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="VueJS"
                                >
                                    <i className="fab fa-vuejs fa-3x" aria-hidden="true"/>
                                </Tooltip>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="SpringBoot"
                                >
                                    <i className="fa fa-power-off fa-3x"  style={{color: "#24cc2f",}} aria-hidden="true"/>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="JAVA"
                                >
                                    <i className="fa fa-java fa-3x" aria-hidden="true"></i>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="Amazon Web Services"
                                >
                                    <i className="fab fa-aws fa-3x"style={{color: "#fab42d",}} aria-hidden="true"/>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="SQL"
                                >
                                    <i className="fa fa-mysql fa-3x" aria-hidden="true"></i>
                                </Tooltip>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="GIT"
                                >
                                    <i className="fab fa-github-square fa-3x"style={{color: "#0c0c0c",}} aria-hidden="true"/>
                                </Tooltip>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1>
                        <span>Experience</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row">
                        <div>
                            <p>
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title="Senior Executive (Samsung SDS)"
                                    data-aos="zoom-out-left"
                                    data-aos-duration="3000"
                                >
                                   <SamsungLogo styele={{width: "200px",height:"200px"}}/>
                                </Tooltip>

                            </p>
                            <div className="twelve columns">{work}</div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Resume;
