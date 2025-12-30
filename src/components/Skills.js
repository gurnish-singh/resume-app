import React from "react";

import {Paper,
    Tooltip, Zoom
} from "@mui/material/";

function Skills(props) {
    return (
            <div id="skills" className="row work">
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
                                    <i className="fa-brands fa-react fa-3x" aria-hidden="true"/>
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
                                    <i className="fa-brands fa-java fa-3x" aria-hidden="true"></i>
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
                                    <i className="fa-solid fa-database fa-3x" aria-hidden="true"></i>
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
    );
}

export default Skills;
