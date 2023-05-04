import React from "react";

import {Paper,
    Tooltip, Zoom
} from "@mui/material/";
import {ReactComponent as SamsungLogo} from '../assets/images/Samsung_Logo.svg';

function Experience(props) {
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

            <div id="experience" className="row work">
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
    );
}

export default Experience;
