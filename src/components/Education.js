import React from "react";
function Education(props) {
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
    return (
            <div id="education" className="row education">
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
    );
}

export default Education;
